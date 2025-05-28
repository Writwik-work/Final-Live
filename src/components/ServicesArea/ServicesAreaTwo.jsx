// ServicesAreaTwo.jsx
import React from "react";
import ServicesAreaTwoItem from "./ServicesAreaTwoItem";

const ServicesAreaTwo = ({ sectionTitle = {}, items = [] }) => {
  const { subTitle = "", title = "" } = sectionTitle;

  return (
    <section className="services-area-two">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title mb-65 text-center">
              <span className="sub-title">{subTitle}</span>
              <h2 className="title">{title}</h2>
            </div>
          </div>
        </div>

        {/* Service Items */}
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <ServicesAreaTwoItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaTwo;
