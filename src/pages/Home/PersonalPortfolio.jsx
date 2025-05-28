// PersonalPortfolio.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import BannerTwo from "../../components/Banner/BannerTwo";
import BrandArea from "../../components/Brand/BrandArea";
import AboutAreaTwo from "../../components/About/AboutAreaTwo";
import CounterArea from "../../components/CounterArea/CounterArea";
// import ServicesAreaTwo from "../../components/ServicesArea/ServicesAreaTwo";
import WorkArea from "../../components/Work/WorkArea";
// import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
// import TestimonialAreaTwo from "../../components/Testimonial/TestimonialAreaTwo";
import teamMembers from "../../components/teamMembers.json";
import CompanyLogosSectionThree from "../../components/Technology/CompanyLogosSectionThree";
// import ProjectsSection from "../../components/Project/ProjectsSection";

const PersonalPortfolio = () => {
  const { id } = useParams();
  const [teamMember, setTeamMember] = useState(null);
  const [devData, setDevData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find team member by id from teamMembers.json.
    const member = teamMembers.find((member) => member.id === id);
    setTeamMember(member || null);

    if (member && member.devFile) {
      import(`../../components/${member.devFile}.json`)
        .then((module) => {
          setDevData(module.default);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading dev data:", err);
          setDevData(null);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <Layout header={2} footer={2} className="black-background">
        <div className="container mx-auto py-20 text-center">
          <h2>Loading...</h2>
        </div>
      </Layout>
    );
  }

  if (!teamMember) {
    return (
      <Layout header={2} footer={2} className="black-background">
        <div className="container mx-auto py-20 text-center">
          <h2>Team member not found</h2>
          <p>The team member with ID "{id}" could not be found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout header={2} footer={2} className="black-background">
      {/* Pass the devData data down to each component */}
      <BannerTwo {...(devData?.bannerTwo || {})} />
      <BrandArea {...(devData?.brandArea || {})} />
      <AboutAreaTwo {...(devData?.aboutAreaTwo  || {})} />
      <CounterArea {...(devData?.counterArea || {})} />
      <CompanyLogosSectionThree {...(devData?.CompanyLogosSectionThree || {})} />
      {/* <ServicesAreaTwo {...(devData?.servicesArea || {})} /> */}
      <WorkArea {...(devData?.workArea || {})} />
      {/* <ProjectsSection {...(devData?.projectsSection || {})} /> */}
      {/* <TestimonialAreaTwo {...(devData?.testimonialArea || {})} /> */}
    </Layout>
  );
};

export default PersonalPortfolio;
