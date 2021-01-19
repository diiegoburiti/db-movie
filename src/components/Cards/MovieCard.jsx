import React from "react";
import { NoPhotoMovie } from "../Helper/NoPhotoMovie";
import MovieControls from "../MovieControls";
import { Wrapper } from "./styles";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

const MovieCard = ({ movie, type }) => {
  return (
    <Wrapper>
      {movie.poster_path ? (
        <img src={IMG_URL + `${movie.poster_path}`} alt={movie.title} />
      ) : (
        <NoPhotoMovie text={movie.title} />
      )}

      <MovieControls type={type} movie={movie} />
    </Wrapper>
  );
};

export default MovieCard;
