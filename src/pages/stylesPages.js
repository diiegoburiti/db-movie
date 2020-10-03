import styled from "styled-components";

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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
