import React from "react";
import styled from "styled-components";

const WrapperCard = styled.div``;
const Card = ({ movie }) => {
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            Year: {movie.release_date ? movie.release_date.substring(0, 4) : ""}
          </h4>
          <h4 className="release-date">Note: {movie.vote_average}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
