import React from "react";
import buttonCss from "./Button.module.css";

export const Button = (props) => {
  return <button className={buttonCss.b1}>{props.buttonText}</button>;
};
