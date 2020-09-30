import React from "react";
import styled from "styled-components";

const InputSearch = styled.input`
  width: 100%;
  background-color: var(--card-bg);
  padding: 10px;
  border-radius: 5px;
  border: 3px solid transparent;
  color: var(--white);
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid var(--white);
    outline: none;
  }
`;

const Input = ({ ...props }) => {
  return <InputSearch {...props} />;
};

export default Input;
