import React from "react";

const logos = [
  "/img/brand/client_logos/bluebagles/animus.png",
  "/img/brand/client_logos/bluebagles/bavaria.png",
  "/img/brand/client_logos/bluebagles/danhenry.png",
  "/img/brand/client_logos/bluebagles/discountsafetygear.jpg",
  "/img/brand/client_logos/bluebagles/englishtea.png",
  "/img/brand/client_logos/bluebagles/Lightup.png",
  "/img/brand/client_logos/bluebagles/no nasties.png",
  "/img/brand/client_logos/bluebagles/nordicpiece.png",
  "/img/brand/client_logos/bluebagles/northline.png",
  "/img/brand/client_logos/bluebagles/plasticplace.png",
  "/img/brand/client_logos/bluebagles/Teamskeet.jpg",
  "/img/brand/client_logos/bluebagles/us flags.png",
  "/img/brand/client_logos/Conversoinstime/Arctic Pod.png",
  "/img/brand/client_logos/Conversoinstime/ashandeire.png",
  "/img/brand/client_logos/Conversoinstime/basicsonme.png",
  "/img/brand/client_logos/Conversoinstime/dieharddice.png",
  "/img/brand/client_logos/Conversoinstime/diveright.jpg",
  "/img/brand/client_logos/Conversoinstime/fabfitfun.png",
  "/img/brand/client_logos/Conversoinstime/goldilocks.png",
  "/img/brand/client_logos/Conversoinstime/joyorganics.png",
  "/img/brand/client_logos/Conversoinstime/lopve and crafted.png",
  "/img/brand/client_logos/Conversoinstime/matte.jpg",
  "/img/brand/client_logos/Conversoinstime/myneonstore.jpg",
  "/img/brand/client_logos/Conversoinstime/patriot.png",
  "/img/brand/client_logos/Conversoinstime/Ruffgreens.png",
  "/img/brand/client_logos/Conversoinstime/scholistico.png",
  "/img/brand/client_logos/Conversoinstime/Forloh.png",
  "/img/brand/client_logos/Conversoinstime/thecloudies.png",
  "/img/brand/client_logos/Conversoinstime/trimmerbuddy.jpg",
  "/img/brand/client_logos/Conversoinstime/vitalsleep.png",
  "/img/brand/client_logos/CXperts/graco.png",
  "/img/brand/client_logos/CXperts/lytx.png",
  "/img/brand/client_logos/CXperts/marmot.png",
  "/img/brand/client_logos/CXperts/trustwill.png",
  "/img/brand/client_logos/CXperts/tweezedrman.png",
  "/img/brand/client_logos/CXperts/yankeecandle.png",
  "/img/brand/client_logos/flex labs/ape born.jpg",
  "/img/brand/client_logos/flex labs/Badass.png",
  "/img/brand/client_logos/flex labs/dive right.webp",
  "/img/brand/client_logos/flex labs/Ellae Lisque.png",
  "/img/brand/client_logos/flex labs/groom here.jpg",
  "/img/brand/client_logos/flex labs/ITO.png",
  "/img/brand/client_logos/flex labs/make wonder.png",
  "/img/brand/client_logos/flex labs/nix.png",
  "/img/brand/client_logos/flex labs/paramount.png",
  "/img/brand/client_logos/flex labs/Raadshop.png",
  "/img/brand/client_logos/flex labs/relinc.jpg",
  "/img/brand/client_logos/flex labs/Ridge river.jpg",
  "/img/brand/client_logos/flex labs/ruff greens.jpg",
  "/img/brand/client_logos/flex labs/silvercut.jpg",
  "/img/brand/client_logos/flex labs/The hatpros.png",
  "/img/brand/client_logos/funnelenvy/bootcamp.png",
  "/img/brand/client_logos/funnelenvy/box.png",
  "/img/brand/client_logos/funnelenvy/dice.png",
  "/img/brand/client_logos/funnelenvy/gong.png",
  "/img/brand/client_logos/funnelenvy/Hawlette.png",
  "/img/brand/client_logos/funnelenvy/miro.png",
  "/img/brand/client_logos/funnelenvy/socialsolutions.jpg",
  "/img/brand/client_logos/funnelenvy/tibco.png",
  "/img/brand/client_logos/funnelenvy/vmware.png",
  "/img/brand/client_logos/funnelenvy/Zoom.png",
  "/img/brand/client_logos/PM digital/Bijoubuild.png",
  "/img/brand/client_logos/PM digital/ADVtennis.png",
  "/img/brand/client_logos/PM digital/Alpha touch.png",
  "/img/brand/client_logos/PM digital/Pavoi.png",
  "/img/brand/client_logos/PM digital/Blanks by thirteen.png",
  "/img/brand/client_logos/PM digital/Earthly holistic Herbs.png",
  "/img/brand/client_logos/PM digital/easelocks.jpg",
  "/img/brand/client_logos/PM digital/Headon.png",
  "/img/brand/client_logos/PM digital/Newport.png",
  "/img/brand/client_logos/PM digital/olivia.png",
  "/img/brand/client_logos/PM digital/Organifi.png",
  "/img/brand/client_logos/PM digital/peak.jpg",
  "/img/brand/client_logos/PM digital/revealnail.png",
  "/img/brand/client_logos/PM digital/Ripely Radar.png",
  "/img/brand/client_logos/PM digital/robust.png",
  "/img/brand/client_logos/PM digital/Shieldwallet.jpg",
  "/img/brand/client_logos/PM digital/spiritly.png",
  "/img/brand/client_logos/PM digital/wearsilky.png",
  // Purple Fire
  "https://iili.io/3gl1xHB.png",
  "https://iili.io/3gl1zAP.png",
  "https://iili.io/3gl1TDF.png",
  "https://iili.io/3gl1RVa.png",
  "https://iili.io/3gl15iJ.png",
  "https://iili.io/3gl1cSp.png",
  "https://iili.io/3gl10HN.png",
  "https://iili.io/3gl1ENt.png",
  "https://iili.io/3gl1Vxn.png",
  "https://iili.io/3gl1WVs.jpg",
  "https://iili.io/3gl1XiG.png",
  "https://iili.io/3gl1NUl.png",
  "https://iili.io/3gl1eJ2.jpg",
  "https://iili.io/3gl1vO7.png",
  "https://iili.io/3gl18b9.png",
  "https://iili.io/3gl1P0x.jpg",
  "https://iili.io/3gl1iUQ.png",
  "https://iili.io/3gl1ZOP.png",
  "https://iili.io/3gl1bzF.jpg",
  "https://iili.io/3gl1mWg.png",
  "https://iili.io/3gl1psa.jpg",
  "https://iili.io/3glE9qJ.png",
  "https://iili.io/3glEJgR.jpg",
  "https://iili.io/3glE2Jp.png",
  "https://iili.io/3glE35N.png",
  "https://iili.io/3glEFeI.png",
  "https://iili.io/3glEBXn.png",
  "https://iili.io/3glEoqG.png",
  "https://iili.io/3glEx1f.png",
  "https://iili.io/3glEzg4.png",
  // Singlee Grain
  "https://iili.io/3glb2mx.png",
  "https://iili.io/3glbKXV.png",
  "https://iili.io/3glbfLB.png",
  "https://iili.io/3glbBqP.jpg",
];

const CompanyLogosSection = () => {
  return (
    <section className="company-logos-section">
      <div className="container">
        {/* <p className="company-logos-text">
          We help designers and product teams from top companies:
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
              <img
                key={`logo2-${idx}`}
                src={src}
                alt={`brand-logo-duplicate-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
