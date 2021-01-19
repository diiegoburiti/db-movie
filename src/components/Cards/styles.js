import styled from 'styled-components'
import { device } from "../../device";


export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border-radius: 5px;
  background: var(--card-bg);
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  transform: translateY(0px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;

  &:hover div:last-of-type {
    transform: translateY(0%);
  }

  &:hover {
    transform: translateY(-12px);
  }
`

export const PosterWrapper = styled.div`
  img {
    display: block;
    max-width: 100%;
    color: transparent;
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0.1rem;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: 600;
`

export const Vote = styled.span`
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--header-bg);
  padding: 0.3rem;
  color: var(--white);
  border-radius: 3px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
`

export const OverView = styled.div`
  position: absolute;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.8rem;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  h2 {
    color: var(--main-bg);
    text-align: center;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: var(--main-bg);
  }
`
/*End card styles */

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);
`;

/*End movie card styles */

export const WrapperResultCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: var(--card-bg);
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const PostWrapper = styled.div`
  max-width: 100%;

  img {
    background-color: #dbdada;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: block;
    color: transparent;
    width: 100%;

    @media ${device.mobile} {
      border-radius: 0px;
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.5rem;
`;

export const HeaderInfo = styled.div``;

export const InfoTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    font-weight: normal;
    color: var(--white);
    font-size: 1rem;
  }
`;

export const InfoDate = styled.h4`
  font-size: 1.25rem;
  margin: 1rem 0;
  color: var(--white);

  span {
    font-weight: normal;
    color: var(--white);
    font-size: 1rem;
  }
`;

export const InfoOverview = styled.h5`
  font-size: 1.25rem;
  color: var(--white);
  max-height: 210px;
  overflow-y: auto;

  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const ControlsWrapper = styled.div`
  button {
    &:last-child {
      margin-top: 0.9rem;
    }
  }

  @media ${device.mobile} {
    margin: 1rem auto;
    width: 60%;
    padding: 10px;
  }
`;
