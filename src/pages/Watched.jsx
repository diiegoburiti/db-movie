import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import NoMoviesInLists from "../components/Helper/NoMoviesInLists";
import Title from "../components/Helper/Title";
import MovieCard from "../components/Cards/MovieCard";
import { Header, WatchListGrid, Wrapper } from "./stylesPages";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="container">
      <Wrapper>
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
      </Wrapper>
    </div>
  );
};

export default Watched;
