import React from "react";
import Title from "./Title";
//import styled from "styled-components";

const NotFound = () => {
  return (
    <div className="container">
      <Title title={"Error: 404"} />
      <span>Page Not Found</span>
    </div>
  );
};

export default NotFound;
