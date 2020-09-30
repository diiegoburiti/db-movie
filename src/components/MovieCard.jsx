import React from "react";
import MovieControls from "./MovieControls";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img src={IMG_URL + `${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
