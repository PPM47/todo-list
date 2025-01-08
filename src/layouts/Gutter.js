import React from "react";
import classes from './Gutter.module.scss'

const Gutter = ({ children }) => {
  return (
    <>
      <div className={classes.main_continer}>
      { children }
      </div>
    </>
  );
};

export default Gutter;
