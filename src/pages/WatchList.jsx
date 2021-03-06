import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Title from "../components/Helper/Title";
import MovieCard from "../components/Cards/MovieCard";
import NoMoviesInLists from "../components/Helper/NoMoviesInLists";

import { Header, WatchListGrid, Wrapper } from "./stylesPages";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <Wrapper>
      <div className="container">
        <Header>
          <Title fontSize={3} title={"My Watch List"} />
          <span>
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </Header>

        {watchlist.length > 0 ? (
          <WatchListGrid>
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
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

export default WatchList;
