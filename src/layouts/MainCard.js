import React from "react";
import classes from "./MainCard.module.scss";

const MainCard = ({ children }) => {
  return (
    <>
      <div className={classes.main_continer}>
        <div className={classes.mainCard_background}></div>
      {children}
      </div>
    </>
  );
};

export default MainCard;
