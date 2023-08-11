import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <button className="b1 fs-6 fs-sm-5 fs-md-6 fs-lg-7 ">
      {props.buttonText}
    </button>
  );
};
