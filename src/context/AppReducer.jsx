export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    /*  case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchList],
      }; */
    default:
      return state;
  }
};
