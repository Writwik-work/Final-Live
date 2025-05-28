import React from "react";
import config from "../componentsConfig.json";
import SlickSlider from "../SlickSlider/SlickSlider";

const BrandAreaFour = () => {
  // pull only the brandAreaFour block out of your JSON
  const {
    sectionClass,
    containerClass,
    rowClass,
    slickSettings,
    brands = []
  } = config.brandAreaFour;

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <div className={rowClass}>
          <SlickSlider settings={slickSettings}>
            {brands.map((brand, idx) => (
              <div className="col-12" key={idx}>
                <div className="brand-item">
                  <img src={brand.src} alt={brand.alt || ""} />
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default BrandAreaFour;
