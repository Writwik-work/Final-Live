// server.js

const express    = require("express");
const bodyParser = require("body-parser");
const fs         = require("fs");
const path       = require("path");
const XLSX       = require("xlsx");
const cors       = require("cors");

const app  = express();
// Hostinger provides PORT via env; default to 8000 locally.
const port = process.env.PORT || 8000;

// Enable CORS for any origin (you can lock this down to your Hostinger domain if desired)
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(bodyParser.json());

// Path to Excel file (inside the same directory as server.js)
const excelFilePath = path.join(__dirname, "data.xlsx");

// 1️⃣ API: Save a submission to Excel
app.post("/api/save-to-excel", (req, res) => {
  const { fullName, email, message } = req.body;
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Load or create workbook
    let wb;
    if (fs.existsSync(excelFilePath)) {
      wb = XLSX.readFile(excelFilePath);
    } else {
      wb = XLSX.utils.book_new();
      // Create header row
      const header = [["Full Name", "Email", "Message"]];
      const ws     = XLSX.utils.aoa_to_sheet(header);
      XLSX.utils.book_append_sheet(wb, ws, "Submissions");
    }

    // Append the new row
    const ws   = wb.Sheets["Submissions"];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
    rows.push([fullName, email, message]);
    wb.Sheets["Submissions"] = XLSX.utils.aoa_to_sheet(rows);

    // Write back to disk
    XLSX.writeFile(wb, excelFilePath);

    res.json({ message: "Data saved successfully." });
  } catch (err) {
    console.error("Error writing Excel:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// 2️⃣ (Optional) API: Get all submissions
app.get("/api/save-to-excel", (_req, res) => {
  try {
    const wb = fs.existsSync(excelFilePath)
      ? XLSX.readFile(excelFilePath)
      : (() => {
          const nw = XLSX.utils.book_new();
          const ws = XLSX.utils.aoa_to_sheet([["Full Name","Email","Message"]]);
          XLSX.utils.book_append_sheet(nw, ws, "Submissions");
          return nw;
        })();

    const data = XLSX.utils.sheet_to_json(wb.Sheets["Submissions"], { header: 1 });
    res.json({ submissions: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// 3️⃣ Serve React build files
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

// 4️⃣ Fallback to index.html for client‐side routing
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// 5️⃣ Listen on all interfaces so Hostinger (or any host) can route to it
app.listen(port, "0.0.0.0", () => {
  console.log(`→ Server listening on port ${port}`);
});
