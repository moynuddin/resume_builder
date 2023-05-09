import React, { useState } from "react";
import Image from "next/image";
import classes from "./skills.module.css";
import add from "public/images/add.png";
import remove from "public/images/remove.png";

const Skills = () => {
  // const prof = ["Beginner", "Intermediate", "Expert"];
  const [skill, setSkill] = useState("");
  const [skillsList, setskillsList] = useState([]);
  const [proficiency, setProficiency] = useState("");

  const handleEvent = (e) => {
    setProficiency(e.target.value);
  };

  const addSkillsHandler = () => {
    const newSkill = {
      skill: skill,
      proficiency: proficiency,
    };
    setskillsList((prevState) => [...prevState, newSkill]);
    setProficiency("");
    setSkill("");
  };

  const removeSkillHandler = (index) => {
    const removedSkill = skillsList.filter((el, i) => i !== index);

    setskillsList(removedSkill);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.skillWrapper}>
          <div className={classes.inputs}>
            <label htmlFor="skill">Add Skills</label>
            <input
              type="text"
              name="skill"
              value={skill}
              className={classes.formControl}
              onChange={(event) => setSkill(event.target.value)}
              // onBlur={() => handleInputBlur(event)}
            />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="skill">Proficiency</label>
            <select
              name="proficiency"
              className={classes.formControl}
              onChange={() => handleEvent(event)}
              value={proficiency}
            >
              <option value="">Select Proficiency</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className={classes.btn} onClick={addSkillsHandler}>
            <Image src={add} width={30} height={30} alt="add" />
          </div>
        </div>
      </div>
      <div className={classes.skillsList}>
        {skillsList.map((el, i) => (
          <div key={i} onClick={() => removeSkillHandler(i)}>
            <p className={classes.skill}>{el.skill}</p>
            <p className={classes.prof}>{el.proficiency}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
