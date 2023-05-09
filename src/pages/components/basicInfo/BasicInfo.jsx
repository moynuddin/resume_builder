import React from "react";
import classes from "./basicInfo.module.css";
const BasicInfo = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.list}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" className={classes.formControl} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className={classes.formControl} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" className={classes.formControl} />
          </div>
        </div>
        <div className={classes.list}>
          <div>
            <label htmlFor="phone">Mobile Number</label>
            <input type="text" className={classes.formControl} />
          </div>
          <div>
            <label htmlFor="firstName">City</label>
            <input type="text" className={classes.formControl} />
          </div>
          <div>
            <label htmlFor="firstName">Country</label>
            <input type="text" className={classes.formControl} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
