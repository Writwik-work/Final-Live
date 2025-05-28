import React, { useState } from "react";
import config from "../componentsConfig.json"; // Import JSON file

const AboutArea = () => {
  const { aboutArea } = config; // Extract aboutArea data from JSON
  const { sectionTitle, description, listItems } = aboutArea;
  
  // Set up state for the active tab (default to the first tab)
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={aboutArea.backgroundClass}>
      <div className={aboutArea.containerClass}>
        <div className="about-inner">
          <div className="row align-items-center justify-content-center">
            {/* Left Column: Image Section */}
            {/* <div className="col-46 order-0 order-lg-2">
              <div className="about-img text-end">
                <img src={aboutArea.image.src} alt={aboutArea.image.alt} />
              </div>
            </div> */}

            {/* Right Column: Content & Tabs */}
            <div className="col-54">
              <div className="about-content">
                {/* Section Title */}
                <div className="section-title mb-25">
                  <span className="sub-title">{sectionTitle.subTitle}</span>
                  <h2 className="title">{sectionTitle.title}</h2>
                   {/* Description */}
                <p>{description}</p>
                </div>

               

                {/* Tab Navigation (replaces the original list-wrap) */}
                <div className="col-46 order-0 order-lg-2">
                <div className="tab-navs">
                  {listItems.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-nav-item ${
                        activeTab === index ? "active-nav-item" : ""
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>

                {/* Tab Content Collection */}
                <div className="tab-collection">
                  {listItems.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-item ${
                        activeTab === index ? "active-tab-item" : ""
                      }`}
                    >
                      <div className="innerLeft">
                        <div className="icon">
                          <img src={item.icon} alt={`${item.title} Icon`} />
                        </div>
                        <div className="content">
                          <h4 className="title">{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
                
                {/* If you still need the original Content Bottom, you can uncomment it below */}
                {/*
                <div className="about-content-bottom">
                  <span>{aboutArea.contentBottom.text}</span>
                  <div className="read-more-btn">
                    <Link
                      to={aboutArea.contentBottom.button.link}
                      className={aboutArea.contentBottom.button.classes}
                    >
                      {aboutArea.contentBottom.button.text} <span></span>
                    </Link>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
