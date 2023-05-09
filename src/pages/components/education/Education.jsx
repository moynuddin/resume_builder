import React, { useState } from "react";
import Image from "next/image";
import classes from "./education.module.css";

import add from "../../../../public/images/add.png";
import remove from "../../../../public/images/remove.png";

const Education = ({ handleNavigation }) => {
  // States

  const [inputField, setInputField] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      desc: "",
    },
  ]);

  const handleFormChange = (i, event) => {
    let data = [...inputField];
    data[i][event.target.name] = event.target.value;
    setInputField(data);
  };

  const addEducation = () => {
    const newInput = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      desc: "",
    };
    console.log("clicked");

    setInputField([...inputField, newInput]);
  };

  const removeEducation = (index) => {
    const removed = inputField.filter((el, i) => i != index);

    setInputField(removed);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputField);
    // handleNavigation();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.addEducation} onClick={addEducation}>
          <p>Add education</p>
          <Image
            className={classes.add}
            src={add}
            width={25}
            height={25}
            alt="add"
          />
        </div>
        <form onSubmit={handleFormSubmit}>
          {inputField.map((el, i) => (
            <div key={i}>
              <h3 className={classes.title}>Education {i + 1} </h3>
              <div className={classes.list}>
                <div>
                  <label htmlFor="school">School</label>
                  <input
                    type="text"
                    name="school"
                    className={classes.formControl}
                    value={el.school}
                    onChange={() => handleFormChange(i, event)}
                  />
                </div>
                <div>
                  <label htmlFor="degree">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    className={classes.formControl}
                    value={el.degree}
                    onChange={() => handleFormChange(i, event)}
                  />
                </div>
                <div>
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    className={classes.formControl}
                    value={el.startDate}
                    onChange={() => handleFormChange(i, event)}
                  />
                </div>
                <div>
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className={classes.formControl}
                    value={el.endDate}
                    onChange={() => handleFormChange(i, event)}
                  />
                </div>
              </div>
              <div className={classes.textarea}>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="desc"
                    cols="100"
                    rows="10"
                    className={classes.desc}
                    placeholder="Start typing..."
                    value={el.desc}
                    onChange={() => handleFormChange(i, event)}
                  ></textarea>
                </div>
              </div>
              {inputField.length > 1 && (
                <div className={classes.imageWrapper}>
                  <div onClick={() => removeEducation(i)}>
                    <p>Remove</p>
                    <Image src={remove} width={20} height={20} alt="remove" />
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={classes.btn}>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
