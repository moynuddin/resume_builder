import { useRef, useState } from "react";
import classes from "./editor.module.css";
import Sections from "../sections/Sections";

const Editor = () => {
  const nav = useRef();
  const [isActive, setIsActive] = useState("basicInfo");
  const resumeDetail = {
    basicInfo: "Basic Info",
    education: "Education",
    experience: "Experience",
    project: "Project",
    skills: "Skills",
    others: "Others",
  };
  const steps = Object.entries(resumeDetail);

  const handleNavigation = (link) => {
    setIsActive(link);
  };
  return (
    <>
      <div className={classes.wrapper}>
        {steps.map((step) => (
          <div
            key={step[0]}
            onClick={() => handleNavigation(step[0])}
            className={`${isActive === step[0] && classes.active} ${
              classes.items
            }`}
          >
            <p>{step[1]}</p>
          </div>
        ))}
      </div>
      <Sections step={isActive} handleNavigation={handleNavigation} />
    </>
  );
};

export default Editor;
