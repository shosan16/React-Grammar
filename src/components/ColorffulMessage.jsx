import React from "react";

const ColorfulMessage = (props) => {
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontsize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
