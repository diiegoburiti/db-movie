import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Title from "../Helper/Title";
import MovieCard from "../MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <Title fontSize={3} title={"My Watched List"} />
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No movies in your watched list. Add some :)
          </h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
