import React from "react";
import styled from "styled-components";
import MovieControls from "../MovieControls";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  border: 0;
  display: block;
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);
`;

const MovieCard = ({ movie, type }) => {
  return (
    <Wrapper>
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
