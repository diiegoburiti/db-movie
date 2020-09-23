import React from "react";
import styled from "./Button.module.css";

const Btn = ({ children, disabled, ...props }) => {
  return (
    <button className={styled.btn} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Btn;
