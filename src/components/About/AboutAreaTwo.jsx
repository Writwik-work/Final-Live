import React from "react";
// import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const AboutAreaTwo = ({ columns, shapes }) => {
  // Parallax reference for the first shape (shape-one)
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="about-area-two">
      <div className="container">
        <div className="row align-items-center">
          {columns &&
            columns.map((column, index) => (
              <div
                key={index}
                className={
                  index === 0 ? "col-lg-6 order-0 order-lg-2" : "col-lg-6"
                }
              >
                {column.content.type === "image" && (
                  <div className="about-img-two text-center">
                    <img src={column.content.src} alt={column.content.alt} />
                  </div>
                )}
                {column.content.type === "text" && (
                  <div className="about-content-two">
                    <div className="section-title white-title title-style-two mb-30">
                      <span className="sub-title">
                        {column.content.sectionTitle.subTitle}
                      </span>
                      <h2 className="title">
                        {column.content.sectionTitle.title.split("<br />").map(
                          (line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              <br />
                            </React.Fragment>
                          )
                        )}
                      </h2>
                    </div>
                    <p>{column.content.description}</p>
                    {/* <Link to={column.content.button.link}>
                      <span className="arrow">
                        <img
                          src={column.content.button.arrowIcon}
                          alt="Arrow Icon"
                        />
                      </span>
                      <span className="text">{column.content.button.text}</span>
                    </Link> */}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="about-shape-wrap">
        {shapes &&
          shapes.map((shape, index) => {
            // Determine the shape class based on its index
            let shapeClass = "";
            if (index === 0) shapeClass = "shape-one";
            else if (index === 1) shapeClass = "shape-two";
            else if (index === 2) shapeClass = "shape-three";

            return (
              <img
                key={index}
                src={shape.src}
                alt=""
                className={shapeClass}
                ref={shapeClass === "shape-one" ? parallax.ref : undefined}
              />
            );
          })}
      </div>
    </section>
  );
};

export default AboutAreaTwo;
