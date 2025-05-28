import React from "react";
import { useParallax } from "react-scroll-parallax";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";   // <-- import the CSS for Autoplay
// Import the required modules directly from "swiper"
import { Pagination, Mousewheel, Autoplay } from "swiper";

const WorkArea = ({ workImage, sectionTitle, workList, shapeImages }) => {
  const { subTitle = "", title = "" } = sectionTitle;
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="work-area pt-110 pb-120">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Work Image */}
          <div className="col-lg-6">
            <div className="work-img text-center">
              <img src={workImage} alt="Work Process" />
            </div>
          </div>

          {/* Right Side Work Content */}
          <div className="col-lg-6">
            <div className="work-content">
              <div className="section-title title-style-two white-title mb-30">
                <span className="sub-title">{subTitle}</span>
                <h2 className="title">{title}</h2>
              </div>

              <div className="work-list">
                {/* Swiper Slider for Work List */}
                <Swiper
                  modules={[Pagination, Mousewheel, Autoplay]} // Register modules here
                  direction="vertical"
                  slidesPerView={1.5}
                  spaceBetween={10}
                  mousewheel={true}
                  grabCursor={true}
                  loop={true}
                  autoplay={true}
                  // autoplay={{
                  //   delay: 2000,
                  //   disableOnInteraction: false,
                  // }}
                  pagination={{
                    clickable: true,
                  }}
                  className="work-swiper"
                >
                  {workList.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="work-slide">
                        <div className="icon">
                          <img src={item.src} alt={item.title} />
                        </div>
                        <div className="content">
                          <h4 className="title">{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Shape Images with Parallax on the second image */}
      <div className="work-shape-wrap">
        {shapeImages.map((shape, index) => (
          <img
            key={index}
            src={shape}
            alt={`Shape ${index + 1}`}
            ref={index === 1 ? parallax.ref : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkArea;
