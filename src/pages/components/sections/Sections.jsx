import React from "react";
import BasicInfo from "../basicInfo/BasicInfo";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Project from "../projects/Project";
import Skills from "../achievement/Skills";
import { Others } from "../others/Others";

const Sections = ({ step, handleNavigation }) => {
  // console.log("Sections", step);

  switch (step) {
    case "basicInfo":
      return <BasicInfo />;
    case "education":
      return <Education handleNavigation={handleNavigation} />;

    case "experience":
      return <Experience />;
    case "project":
      return <Project />;

    case "skills":
      return <Skills />;

    case "others":
      return <Others />;
    default:
      return <BasicInfo />;
  }
};

export default Sections;
