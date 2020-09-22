import React, { useContext } from "react";
import { FaEye, FaTimes, FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    addMovieToWatchedList,
    removeMovieFromWatchList,
    removeFromWatchedList,
    moveToWatchList,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => addMovieToWatchedList(movie)}
          >
            <FaEye />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
            <FaEyeSlash />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchedList(movie.id)}
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
