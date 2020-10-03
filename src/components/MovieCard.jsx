import React from "react";
import styled from "styled-components";
import MovieControls from "./MovieControls";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;

  &:hover & ${MovieControls} {
    opacity: 0;
    cursor: not-allowed;
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  transition: all 0.3s ease;
`;

const MovieCard = ({ movie, type }) => {
  return (
    <Wrapper>
      <Overlay />

      {movie.poster_path ? (
        <img src={IMG_URL + `${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </Wrapper>
  );
};

export default MovieCard;
