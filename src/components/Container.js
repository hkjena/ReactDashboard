import React from "react";

const Container = ({ classes, style, children }) => {
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};
export default Container;
