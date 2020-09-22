import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultsCard = ({ movie }) => {
  const {
    addMovieToWatchList,
    addMovieToWatchedList,
    watchList,
    watched,
  } = useContext(GlobalContext);
  let storedMovie = watchList.find((object) => object.id === movie.id);
  let storedMovieWatched = watched.find((object) => object.id === movie.id);
  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedListDisabled = storedMovieWatched ? true : false;
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
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchListDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to watchlist
          </button>
          <button
            className="btn"
            disabled={watchedListDisabled}
            onClick={() => addMovieToWatchedList(movie)}
          >
            Add to watched list
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
