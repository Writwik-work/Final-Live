import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";

const BrandArea = (props) => {
  // Extract the brands array from props.
  // If no brands are passed, default to an empty array.
  const { brands = [] } = props;

  // Slick slider settings
  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    arrows: false,
    slidesToShow: 4, // Change according to the number of images
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="brand-area">
      <div className="container">
        <div className="row brand-active">
          <SlickSlider settings={slick_settings}>
            {brands.map((brand, index) => (
              <div className="col-12" key={index}>
                <div className="brand-item">
                  <img src={brand.src} alt={brand.alt || ""} />
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
