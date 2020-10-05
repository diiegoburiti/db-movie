import React, { useContext } from "react";
import { FaEye, FaTimes, FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

import styled from "styled-components";

const WrapperControls = styled.div`
  display: block;
  position: absolute;
  bottom: 20px;
  left: 100px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 3px;
  transition: all 0.3s ease;
`;

const CtrlBtn = styled.button`
  color: #fefefe;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease;
  font-size: 1.25rem;
  padding: 5px;
  margin: 0;

  &:hover {
    color: var(--secondary);
    cursor: pointer;
  }
`;

const MovieControls = ({ movie, type }) => {
  const {
    addMovieToWatched,
    removeMovieFromWatchlist,
    removeFromWatched,
    moveToWatchlist,
  } = useContext(GlobalContext);

  return (
    <WrapperControls>
      {type === "watchlist" && (
        <>
          <CtrlBtn
            onClick={() => addMovieToWatched(movie)}
            title={"Add Movie to Watched List"}
          >
            <FaEye />
          </CtrlBtn>

          <CtrlBtn
            onClick={() => removeMovieFromWatchlist(movie.id)}
            title={"Remove Movie Watch List"}
          >
            <FaTimes />
          </CtrlBtn>
        </>
      )}

      {type === "watched" && (
        <>
          <CtrlBtn
            onClick={() => moveToWatchlist(movie)}
            title={"Back Movie to Watch List"}
          >
            <FaEyeSlash />
          </CtrlBtn>

          <CtrlBtn
            onClick={() => removeFromWatched(movie.id)}
            title={"Remove Movie"}
          >
            <FaTimes />
          </CtrlBtn>
        </>
      )}
    </WrapperControls>
  );
};

export default MovieControls;
