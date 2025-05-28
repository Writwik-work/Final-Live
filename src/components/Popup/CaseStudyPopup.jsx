import React, { useState, useEffect } from 'react';

/**
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - caseData: { logo, title, description, imageSrc, keyResults }
 * - onNextCase: () => void
 */
export default function CaseStudyPopup({
  isOpen,
  onClose,
  caseData = {},
  onNextCase,
}) {
  const {
    logo = null,
    title = '',
    description = '',
    imageSrc = '',
    // keyResults = [],
  } = caseData;

  // 'enter' or 'exit' for the popup itself
  const [animState, setAnimState] = useState(isOpen ? 'enter' : 'exit');
  // whether the full-screen lightbox is open
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  // When isOpen flips, trigger the right animation
  useEffect(() => {
    setAnimState(isOpen ? 'enter' : 'exit');
    // also close lightbox whenever popup closes
    if (!isOpen) setLightboxOpen(false);
  }, [isOpen]);

  // After exit anim finishes, actually unmount via onClose
  const handleAnimEnd = () => {
    if (animState === 'exit') onClose();
  };

  // Keep in DOM during exit animation
  if (!isOpen && animState === 'exit') return null;

  // Open Calendly in a new tab
  const handleScheduleCall = () => {
    window.open(
      'https://calendly.com/ingversionsdigital/30min?month=2025-02'
    );
  };

  return (
    <>
      {/* Popup backdrop & container */}
      <div className="popup-overlay">
        <div
          className={`popup-container ${animState}`}
          onAnimationEnd={handleAnimEnd}
        >
          <div className="popup-header">
            <div className="popup-logo">{logo}</div>
            <button
              className="close-btn"
              onClick={() => setAnimState('exit')}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="popup-body">
            <div className="my-popup-content">
              {title && <h3 className="popup-title">{title}</h3>}
              <p className="popup-description">{description}</p>
              <div className="popup-buttons">
                <button className="btn-schedule" onClick={handleScheduleCall}>
                  Schedule introduction call →
                </button>
                {/* <button className="btn-next" onClick={onNextCase}>
                  Next case
                </button> */}
              </div>
            </div>

            <div className="popup-image-wrapper">
              <img
                src={imageSrc}
                alt="Case Screenshot"
                className="popup-image"
                onClick={() => setLightboxOpen(true)}
                style={{ cursor: 'zoom-in' }}
              />
            </div>
          </div>

          {/* keyResults block, if you re-enable it later */}
          {/* {keyResults.length > 0 && ( ... )} */}
        </div>
      </div>

      {/* Full-screen lightbox */}
      {isLightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={imageSrc}
            alt="Enlarged Screenshot"
            className="lightbox-img"
          />
        </div>
      )}
    </>
  );
}
