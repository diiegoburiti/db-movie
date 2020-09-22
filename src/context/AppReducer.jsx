export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };

    case "ADD_MOVIE_TO_WATCHED_LIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id,
        ),
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_MOVIE_FROM_WATCH_LIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload,
        ),
      };

    case "REMOVE_MOVIE_FROM_WATCHED_LIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    case "MOVE_TO_WATCH_LIST":
      return {
        ...state,
        watched: state.watchList.filter(
          (movie) => movie.id !== action.payload.id,
        ),
        watchList: [action.payload, ...state.watchList],
      };

    default:
      return state;
  }
};
