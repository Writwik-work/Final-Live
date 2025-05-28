import React from "react";
// import AboutArea from "../../components/About/AboutArea";
import BannerOne from "../../components/Banner/BannerOne";
// import ConsultationArea from "../../components/Consultation/ConsultationArea";
import ProjectArea from "../../components/Project/ProjectArea";
import TeamArea from "../../components/Team/TeamArea";
import TestimonialArea from "../../components/Testimonial/TestimonialArea";
import Layout from "../../layouts/Layout";
import FaqSection from "../../components/QAFs/FaqSection"; // FAQ Section
import ServicesSection from "../../components/Services/ServicesSection";
import CroServicesSection from "../../components/CRO/CroServicesSection";
// import CompanyLogosSection from "../../components/Technology/CompanyLogosSection";
import ConsultationMarketingSection from "../../components/Consultation/ConsultationMarketingSection";
import BrandAreaFour from "../../components/Brand/BrandAreaFour";
import CompanyLogosSectionTwo from "../../components/Technology/CompanyLogosSectionTwo";

const CreativeAgency = () => {

  return (
    <Layout header={1} footer={1}>
      <BannerOne />
      <CroServicesSection />
      <CompanyLogosSectionTwo />
      <ServicesSection />
      {/* <AboutArea /> */}
      <BrandAreaFour />
      <TeamArea />
      <ProjectArea />
      <TestimonialArea />
      <ConsultationMarketingSection />
      {/* <ConsultationArea /> */}
      <FaqSection />
    </Layout>
  );
};

export default CreativeAgency;
