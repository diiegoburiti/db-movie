import React from "react";
import styled from "styled-components";

const Error = styled.h2`
  font-size: 2rem;
  color: var(--white);
  text-align: center;
  display: block:
  margin: 0 auto;
`;

export const NoPhotoMovie = ({ text }) => {
  return <Error> Sorry {text} Doesn't Have a Photo to Display </Error>;
};
