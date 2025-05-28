import React from 'react';

// Example array of image sources (you can use up to 80+)
const logos = [
  "/Ingversions-staging/img/brand/client_logos/bluebagles/animus.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/bavaria.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/danhenry.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/discountsafetygear.jpg",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/englishtea.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/Lightup.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/no nasties.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/nordicpiece.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/northline.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/plasticplace.png",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/Teamskeet.jpg",
  "/Ingversions-staging/img/brand/client_logos/bluebagles/us flags.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/Arctic Pod.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/ashandeire.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/basicsonme.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/dieharddice.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/diveright.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/fabfitfun.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/forloh.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/goldilocks.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/joyorganics.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/lopve and crafted.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/matte.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/myneonstore.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/patriot.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/Ruffgreens.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/scholistico.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/thecloudies.png",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/trimmerbuddy.jpg",
  "/Ingversions-staging/img/brand/client_logos/Conversoinstime/vitalsleep.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/graco.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/lytx.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/marmot.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/trustwill.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/tweezedrman.png",
  "/Ingversions-staging/img/brand/client_logos/CXperts/yankeecandle.png"
];

function LogoCarousel() {
    return (
      <section className="company-logos-section">
        <div className="container">
          {/* <p className="logo-carousel-text">
            Succesfully Completed Projects
          </p> */}
  
          {/* Marquee container */}
          <div className="marquee">

            {/* 
              We place the same list of images twice inside .marquee__group.
              This allows for a seamless, continuous loop when scrolling.
            */}
            <div className="marquee__group">
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
}

export default LogoCarousel;
