import React from "react";
import { NoPhotoMovie } from "../Helper/NoPhotoMovie";
import Title from "../Helper/Title";
import { CardWrapper, Info, OverView, PosterWrapper, Vote } from "./styles";

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
