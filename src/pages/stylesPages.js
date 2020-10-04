import styled from "styled-components";
import { device } from "../device";

export const Wrapper = styled.section`
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  span {
    display: block;
    background-color: var(--secondary);
    padding: 5px 15px;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 999px;
    color: var(--primary);
  }
`;

export const WatchListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 10px;
  justify-content: space-between;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 200px);
  }

  @media ${device.mobile} {
    font-size: 3rem;
    grid-template-columns: 200px;
    justify-content: center;
  }
`;
