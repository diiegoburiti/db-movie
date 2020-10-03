import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: #c4c4c4;
  font-size: 3rem;
  text-align: center;
`;
const NoMoviesInLists = ({ title }) => {
  return <Title>{title}</Title>;
};

export default NoMoviesInLists;
