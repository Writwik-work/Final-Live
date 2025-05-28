// src/components/ExcelViewer.jsx
import React, { useEffect, useState } from 'react';
import { read, utils } from 'xlsx';

export default function ExcelViewer({ fileUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(fileUrl)
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const workbook = read(buffer);                     // parse the ArrayBuffer
        const sheetName = workbook.SheetNames[0];          // grab the first sheet
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet, {
          header: 1,     // gives you an array of arrays (rows)
          defval: ''     // fill empty cells with blank string
        });
        setData(json);
      })
      .catch(console.error);
  }, [fileUrl]);

  if (!data.length) return <p>Loading…</p>;

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    border: '1px solid #ccc',
                    padding: '4px 8px',
                    background: i === 0 ? '#f7f7f7' : 'white'
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
