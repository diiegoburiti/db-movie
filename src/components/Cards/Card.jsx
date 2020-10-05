import React from "react";
import styled from "styled-components";
import { NoPhotoMovie } from "../Helper/NoPhotoMovie";

const CardWrapper = styled.div`
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
`;

const PosterWrapper = styled.div`
  img {
    display: block;
    max-width: 100%;
    color: transparent;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0.1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: 600;
`;

const Vote = styled.span`
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--header-bg);
  padding: 0.3rem;
  color: var(--white);
  border-radius: 3px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const OverView = styled.div`
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
`;

const Card = ({ movie }) => {
  return (
    <CardWrapper>
      <PosterWrapper>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <NoPhotoMovie text={movie.title} />
        )}
      </PosterWrapper>

      <Info>
        <Title>{movie.title}</Title>
        <Vote>{movie.vote_average}</Vote>
      </Info>
      <OverView>
        <h2>OverView</h2>
        <p>{movie.overview.substring(0, 220)}</p>
      </OverView>
    </CardWrapper>
  );
};

export default Card;
