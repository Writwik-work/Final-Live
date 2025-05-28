import React from "react";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">
          What Our CRO Services Can Help You With
        </h2>

        <div className="services-row">
          {/* Column 1 */}
          <div className="service-box">
            <h3>1/ Increasing conversions and revenue</h3>
            <p>
            We analyze your website to pinpoint areas where you might be losing traffic and then test various improvements to turn more visitors into paying customers. This targeted approach directly boosts your sales and revenue.
            </p>
          </div>

          {/* Column 2 */}
          <div className="service-box">
            <h3>2/ Improving the user experience</h3>
            <p>
            Conversion Rate Optimization goes beyond just boosting sales. It also focuses on creating a smoother and more enjoyable experience for users. By identifying and eliminating obstacles that hinder conversions, CRO enhances your website’s overall usability and appeal.
            </p>
          </div>

          {/* Column 3 */}
          <div className="service-box">
            <h3>3/ Gaining valuable user behaviour insights</h3>
            <p>
            By closely examining user behavior alongside your website’s performance metrics, you gain a wealth of insights that reveal how visitors interact with your online presence. This analysis provides a detailed view of user preferences, navigation patterns, and engagement levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
