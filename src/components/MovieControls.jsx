import React from "react";
import { FaEye, FaTimes } from "react-icons/fa";

const MovieControls = ({ movie, type }) => {
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <FaEye />
          </button>

          <button className="ctrl-btn">
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
