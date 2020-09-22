import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchList: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  });

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
  };

  const addMovieToWatchedList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED_LIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCH_LIST", payload: id });
  };

  const moveToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie });
  };

  const removeFromWatchedList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED_LIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        addMovieToWatchedList,
        removeMovieFromWatchList,
        moveToWatchList,
        removeFromWatchedList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
