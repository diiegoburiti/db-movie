import React from "react";
import styled from "styled-components";

const HomeTitle = styled.h1`
  font-size: ${(props) => props.fontSize || 8}rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  margin-bottom: ${(props) => props.margimBottom || 0}rem;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: glitch 500ms infinite;
  color: #fff;

  span {
    &:first-child {
      animation: glitch 4s infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.025em, -0.0125em);
      /* color: green; */
      opacity: 0.8;
    }
    &:last-child {
      animation: glitch 4s infinite;
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.0125em, 0.025em);
      /* color: red; */
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 750px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 750px) {
    font-size: 3rem;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
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
