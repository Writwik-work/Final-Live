import React, { useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";
import "swiper/swiper-bundle.css";
import CaseStudyPopup from "../Popup/CaseStudyPopup";
import config from "../componentsConfig.json";

// Configure Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProjectArea = () => {
  const projectArea = config.projectArea;
  const { sliderRef, toNext, toPrev } = useSwiperArrows();
  const [popupData, setPopupData] = useState(null);

  const openPopup = (item) => setPopupData(item);
  const closePopup = () => setPopupData(null);

  const handleScheduleCall = () => {
    console.log("Scheduling call for:", popupData);
    // Your scheduling logic
  };

  const handleNextCase = () => {
    console.log("Loading next case after:", popupData);
    const items = projectArea.rightColumn.projectItems;
    const currentIndex = items.indexOf(popupData);
    const nextIndex = (currentIndex + 1) % items.length;
    setPopupData(items[nextIndex]);
  };

  return (
    <>
      <section className={projectArea.sectionClass}>
        <div className={projectArea.containerClass}>
          <div className={projectArea.rowClass}>
            {/* Left Column */}
            <div className={projectArea.leftColumn.colClass}>
              <div className={projectArea.leftColumn.contentClass}>
                <div className="section-title white-title mb-30">
                  <span className="sub-title">
                    {projectArea.leftColumn.sectionTitle.subTitle}
                  </span>
                  <h2 className="title">
                    {projectArea.leftColumn.sectionTitle.title}
                  </h2>
                </div>
                <p>{projectArea.leftColumn.description}</p>
                <div className="project-nav">
                  <button
                    className={projectArea.leftColumn.navButtons.prevClass}
                    onClick={toPrev}
                  />
                  <button
                    className={projectArea.leftColumn.navButtons.nextClass}
                    onClick={toNext}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={projectArea.rightColumn.colClass}>
              <div className={projectArea.rightColumn.swiperContainerClass}>
                <Swiper
                  {...projectArea.rightColumn.swiperSettings}
                  onBeforeInit={(swiper) => (sliderRef.current = swiper)}
                >
                  {projectArea.rightColumn.projectItems.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="project-item"
                        onClick={() => openPopup(item)}
                      >
                        <img src={item.imageSrc} alt={`Project ${idx + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className={projectArea.shapeWrapClass}>
          {projectArea.shapes.map((shape, i) => (
            <img
              key={i}
              src={shape.src}
              alt={shape.alt}
              className={shape.className}
            />
          ))}
        </div>
      </section>

      {/* Popup component */}
      {popupData && (
        <CaseStudyPopup
          isOpen={true}
          onClose={closePopup}
          caseData={{
            logo: popupData.logo,
            title: popupData.popupContent?.title,
            description:
              popupData.popupContent?.hypothesis || popupData.description,
            imageSrc: popupData.popupImageSrc,
            keyResults: popupData.popupContent?.bulletPoints || [],
          }}
          onScheduleCall={handleScheduleCall}
          onNextCase={handleNextCase}
        />
      )}
    </>
  );
};

export default ProjectArea;
