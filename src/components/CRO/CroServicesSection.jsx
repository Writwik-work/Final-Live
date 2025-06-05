import React, { useState, useEffect } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// Install modules into Swiper
SwiperCore.use([Navigation]);

const CroServicesSection = () => {
  // Track if we are on a mobile screen (<= 565px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 565);
    };

    // Check immediately, then add listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Service items
  const services = [
    {
      title: "CRO audits",
      text: `Experience a CRO audit that identifies obstacles preventing
             visitors from taking desired actions. We analyze user behavior,
             pinpoint usability issues, and evaluate funnel stages...`,
    },
    {
      title: "A/B testing",
      text: `We create multiple variations of your website’s core elements,
             test them across distinct traffic segments, and identify which
             design best resonates with your audience...`,
    },
    {
      title: "CRO copywriting",
      text: `Website content must be persuasive. Our conversion experts
             combine data analysis with creative writing to produce
             high‐impact copy that resonates with your audience...`,
    },
    {
      title: "Heatmap and session recording",
      text: `Unlock comprehensive insights into user behavior with our heatmap
             and session recording analysis. We track clicks, scrolls, and
             hesitation points to optimize user engagement...`,
    },
    {
      title: "User journey mapping",
      text: `We study user behavior to map the journey from landing to
             conversion or drop‐off. This reveals critical touchpoints
             and helps us detect obstacles to refine the overall experience...`,
    },
    {
      title: "Personalisation",
      text: `We create personalized landing pages that connect with your
             audience by analyzing visitor behavior. Instead of generic
             designs, we develop conversion‐focused pages that match
             user expectations...`,
    },
  ];

  return (
    <section className="cro-section">
      <div className="container">
        {/* Header area */}
        <div className="cro-header-content">
          <div className="cro-header">
            <h2>OUR CRO SERVICES</h2>
          </div>

          {isMobile ? (
            // ===> MOBILE VIEW: Render a CSS grid of .cro-box items <===
            <div className="cro-grid">
              {services.map((service, idx) => (
                <div className="cro-box" key={idx}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          ) : (
            // ===> DESKTOP/TABLET VIEW: Original 2‐column layout <===
            <div className="cro-content">
              <div className="cro-row">
                <div className="cro-box">
                  <h3>{services[0].title}</h3>
                  <p>{services[0].text}</p>
                </div>
                <div className="cro-box">
                  <h3>{services[1].title}</h3>
                  <p>{services[1].text}</p>
                </div>
              </div>
              <div className="cro-row">
                <div className="cro-box">
                  <h3>{services[2].title}</h3>
                  <p>{services[2].text}</p>
                </div>
                <div className="cro-box">
                  <h3>{services[3].title}</h3>
                  <p>{services[3].text}</p>
                </div>
              </div>
              <div className="cro-row">
                <div className="cro-box">
                  <h3>{services[4].title}</h3>
                  <p>{services[4].text}</p>
                </div>
                <div className="cro-box">
                  <h3>{services[5].title}</h3>
                  <p>{services[5].text}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CroServicesSection;
