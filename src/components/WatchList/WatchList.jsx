import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Title from "../Helper/Title";
import MovieCard from "../MovieCard";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <Title fontSize={3} title={"My Watch List"} />
          <span className="count-pill">
            {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No movies in your watch list. Add some :)
          </h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
