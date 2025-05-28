import React from "react";

const logos = [
  "/img/Technologies/AB Test/AB-tasty.webp",
  "/img/Technologies/AB Test/Adobe-target.webp",
  "/img/Technologies/AB Test/convert.webp",
  "/img/Technologies/AB Test/figma.webp",
  "/img/Technologies/AB Test/kameleoon.webp",
  "/img/Technologies/AB Test/optimizely.webp",
  "/img/Technologies/AB Test/photoshop.webp",
  "/img/Technologies/AB Test/SiteSpect-1.webp",
  "/img/Technologies/AB Test/sketch.webp",
  "/img/Technologies/AB Test/Varify.webp",
  "/img/Technologies/AB Test/VWO.webp",
  "/img/Technologies/AB Test/xd.webp",
  "/img/Technologies/CRO/adobe-analytics.webp",
  "/img/Technologies/CRO/clarity.webp",
  "/img/Technologies/CRO/google-analytics.webp",
  "/img/Technologies/CRO/hotjar.webp",
  "/img/Technologies/Quality Assurance/goal-verification.webp",
  "/img/Technologies/Quality Assurance/goals-building.webp",
  "/img/Technologies/Quality Assurance/preview-link-1.webp",
  "/img/Technologies/Quality Assurance/QA-checklist-1.webp",
  "/img/Technologies/Shopify/big-commerce-1.webp",
  "/img/Technologies/Shopify/klaviyo-1.webp",
  "/img/Technologies/Shopify/rebuy.webp",
  "/img/Technologies/Shopify/recharge.webp",
  "/img/Technologies/Shopify/shogun.webp",
  "/img/Technologies/Shopify/shopify-plus-1.webp",
  "/img/Technologies/Shopify/shopify.webp",
  "/img/Technologies/Wordpress/convertkit.webp",
  "/img/Technologies/Wordpress/elementor.webp",
  "/img/Technologies/Wordpress/hubspot.webp",
  "/img/Technologies/Wordpress/local.webp",
  "/img/Technologies/Wordpress/php.webp",
  "/img/Technologies/Wordpress/salesforce.webp",
  "/img/Technologies/Wordpress/squarespace.webp",
  "/img/Technologies/Wordpress/unbounce.webp",
  "/img/Technologies/Wordpress/webflow.webp",
  "/img/Technologies/Wordpress/wix.webp",
  "/img/Technologies/Wordpress/wordpress-1.webp",
  "/img/Technologies/Wordpress/wpengine.webp",
  "/img/Technologies/Wordpress/xdebug.webp"
];

const CompanyLogosSectionThree = () => {
  return (
    <section className="company-logos-section-three">
      <div className="container">
        {/* <p className="company-logos-text">
          We help designers and product teams from top companies:
        </p> */}

        {/* Marquee container */}
        <div className="marquee-three">
          {/* 
            We place the same list of images twice inside .marquee__group.
            This allows for a seamless, continuous loop when scrolling.
          */}
          <div className="marquee__group-three">
            {logos.map((src, idx) => (
              <img key={`logo1-${idx}`} src={src} alt={`brand-logo-${idx}`} />
            ))}
            {logos.map((src, idx) => (
              <img key={`logo2-${idx}`} src={src} alt={`brand-logo-duplicate-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSectionThree;
