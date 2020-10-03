import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NoMoviesInLists from "../Helper/NoMoviesInLists";
import Title from "../Helper/Title";
import MovieCard from "../MovieCard";
import { Header, WatchListGrid, Wrapper } from "../WatchList/WatchList";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <Wrapper>
      <div className="container">
        <Header>
          <Title fontSize={3} title={"My Watched List"} />
          <span>
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </Header>

        {watched.length > 0 ? (
          <WatchListGrid>
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watched" />
            ))}
          </WatchListGrid>
        ) : (
          <NoMoviesInLists
            title={"No movies in your watch list. Add some :)"}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Watched;
