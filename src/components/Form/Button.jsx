import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 10px 15px;
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  border: none;
  font-size: 1rem;
  line-height: 1.1;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    @media (max-width: 415px) {
      margin-bottom: 1rem;
      padding: 6px 9px;
    }
  }
`;

const Button = ({ children, disabled, ...props }) => {
  return (
    <Btn disabled={disabled} {...props}>
      {children}
    </Btn>
  );
};

export default Button;
