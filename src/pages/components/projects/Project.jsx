import React, { useState } from "react";
import Image from "next/image";

import classes from "./project.module.css";
import add from "public/images/add.png";
import remove from "public/images/remove.png";

const Project = () => {
  const [projects, setProject] = useState([
    {
      projectName: "",
      projectURL: "",
    },
  ]);

  const handleProjectForm = (e, i) => {
    const data = [...projects];
    data[i][e.target.name] = e.target.value;
    setProject(data);
  };
  const addProjectHandler = () => {
    const newProject = {
      projectName: "",
      projectURL: "",
    };

    setProject((prevState) => [...prevState, newProject]);
  };

  const removeProjectHandler = (index) => {
    const removedProject = projects.filter((el, i) => i != index);
    setProject(removedProject);
  };
  return (
    <div className={classes.projectWrapper}>
      {projects.map((project, i) => (
        <div className={classes.inputWrapper} key={i}>
          <div className={classes.inputs}>
            <label htmlFor="project">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={project.projectName}
              className={classes.formControl}
              onChange={() => handleProjectForm(event, i)}
            />
          </div>
          <div className={classes.inputs}>
            <label htmlFor="projecturl">Project URL</label>
            <input
              type="url"
              name="projectURL"
              value={project.projectURL}
              className={classes.formControl}
              onChange={() => handleProjectForm(event, i)}
            />
          </div>
          <div className={classes.btn} onClick={addProjectHandler}>
            <Image src={add} width={30} height={30} alt="add" />
          </div>

          {projects.length > 1 && (
            <div
              className={classes.btn}
              onClick={() => removeProjectHandler(i)}
            >
              <Image src={remove} width={25} height={25} alt="remove" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
