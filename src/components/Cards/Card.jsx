import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border-radius: 5px;
  background: var(--card-bg);
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);
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

const Card = ({ movie }) => {
  return (
    <CardWrapper>
      <PosterWrapper>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        )}
      </PosterWrapper>

      <Info>
        <Title>{movie.title}</Title>
        <Vote>{movie.vote_average}</Vote>
      </Info>
    </CardWrapper>
  );
};

export default Card;
