import React from "react";
import styled from "./Button.module.css";

const Btn = ({ children, ...props }) => {
  return (
    <button className={styled.btn} {...props}>
      {children}
    </button>
  );
};

export default Btn;
