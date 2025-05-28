import React from "react";
import { Link } from "react-router-dom";
import bannerData from "../componentsConfig.json"; // Import JSON config
import CompanyLogosSection from "../Technology/CompanyLogosSection";

const BannerOne = () => {
  const { banner } = bannerData; // Extract banner data from JSON
// Scroll handler
const scrollToConsultationArea = (e) => {
  // Prevent default behavior (if using an anchor tag)
  e.preventDefault();
  
  const target = document.getElementById("marketing-section");
  if (target) {
    // Scroll smoothly to the consultation area
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Consultation area element not found");
  }
};

  return (
    <section className={banner.backgroundClass}>
      <div className={banner.containerClass}>
        <div className={banner.rowClass}>
          {/* Left Image Section */}
          {/* <div className="col-lg-6">
            <div
              className={banner.leftImage.animationClass}
              data-wow-delay={banner.leftImage.animationDelay}
            >
              <img src={banner.leftImage.src} alt={banner.leftImage.alt} />
            </div>
          </div> */}

          {/* Content Section */}
          <div className="col-lg-6">
            <div className="banner-content">
              <span
                className={banner.content.subTitle.animationClass}
                data-wow-delay={banner.content.subTitle.animationDelay}
              >
                {banner.content.subTitle.text.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {word === banner.content.subTitle.highlight ? (
                      <strong>{word}</strong>
                    ) : (
                      word
                    )}{" "}
                  </React.Fragment>
                ))}
              </span>
              <h2
                className={banner.content.title.animationClass}
                data-wow-delay={banner.content.title.animationDelay}
              >
                {banner.content.title.text}
              </h2>
              <Link
                href="#marketing-section" // fallback if JS is disabled
                onClick={scrollToConsultationArea}
                className={banner.content.ctaButton.buttonClass}
                data-wow-delay={banner.content.ctaButton.animationDelay}
              >
                {banner.content.ctaButton.text} <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      {/* <div className="banner-shape-wrap">
        {banner.shapes.map((shape, index) => (
          <img
            key={index}
            src={shape.src}
            alt={shape.alt}
            className={shape.class || ""}
          />
        ))}
      </div> */}
      <CompanyLogosSection />
    </section>
   
  );
};

export default BannerOne;
