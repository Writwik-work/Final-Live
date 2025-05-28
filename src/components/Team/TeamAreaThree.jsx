import React from "react";
import TeamAreaTwoItem from "./TeamAreaTwoItem";
import teamMembers from "../teamMembers.json"; // Import the external JSON data

const TeamAreaThree = () => {
  return (
    <section className="team-area-two pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <TeamAreaTwoItem item={member} className="team-item-hover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAreaThree;
