import React from "react";
import styled from "styled-components";
import { device } from "../../device";

const HomeTitle = styled.h1`
  font-size: ${(props) => props.fontSize || 8}rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${(props) => props.margimBottom || 0}rem;
  color: rgba(255, 255, 255, 0);
  text-decoration: none;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 1);
  transition: 0.3s all;

  &:hover {
    color: var(--white);
    color: rgba(255, 255, 255, 1);
    -webkit-text-fill-color: rgba(255, 255, 255, 1);
    -webkit-text-stroke-color: rgba(255, 255, 255, 0);
  }

  @media ${device.tablet} {
    font-size: 6rem;
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

const Title = ({ title, fontSize, margimBottom }) => {
  return (
    <HomeTitle margimBottom={margimBottom} fontSize={fontSize}>
      {title}
    </HomeTitle>
  );
};

export default Title;
