import React from "react";
import classes from "./ContentCard.module.scss"

const ContentCard = ({ children }) => {
  return (
    <>
      <div className={classes.main_continer}>{children}</div>
    </>
  );
};

export default ContentCard;
