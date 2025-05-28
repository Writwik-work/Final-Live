import React, { useState } from "react";

const ConsultationMarketingSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  // Always use a relative path so both dev (via proxy) and prod hit the same origin:
  const API_ENDPOINT = "/api/save-to-excel";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // On success, redirect to Calendly
        window.location.href =
          "https://calendly.com/ingversionsdigital/30min?month=2025-04";
      } else {
        console.error("Server error:", await response.text());
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  };

  return (
    <section id="marketing-section" className="marketing-section">
      <div className="marketing-container">
        <div className="marketing-left">
          <h2>Transform Your Business With Strategic Marketing</h2>
          <p>
            Unlock your business potential with our expert marketing solutions.
            We create tailored strategies that drive growth and deliver measurable
            results.
          </p>
          <ul>
            <li>
              <strong>Data-Driven Approach</strong>
              <p>Make informed decisions with comprehensive analytics and insights.</p>
            </li>
            <li>
              <strong>Targeted Campaigns</strong>
              <p>Reach your ideal audience with precision-targeted marketing campaigns.</p>
            </li>
          </ul>
        </div>
        <div className="marketing-right">
          <div className="consultation-box">
            <h3>Free Consultation</h3>
            <div className="custom-divider"></div>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName" className="block text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="custom-input"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="custom-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="custom-input"
                rows="4"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Schedule Free Call</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationMarketingSection;
