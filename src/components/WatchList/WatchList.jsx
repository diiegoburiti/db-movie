import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import styled from "styled-components";
import Title from "../Helper/Title";
import MovieCard from "../MovieCard";

const Wrapper = styled.section`
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  span {
    display: block;
    background-color: var(--secondary);
    padding: 5px 15px;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 999px;
    color: var(--primary);
  }
`;

const WatchListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <Wrapper>
      <div className="container">
        <Header>
          <Title fontSize={3} title={"My Watch List"} />
          <span>
            {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
          </span>
        </Header>

        {watchList.length > 0 ? (
          <WatchListGrid>
            {watchList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </WatchListGrid>
        ) : (
          <h2 className="no-movies">
            No movies in your watch list. Add some :)
          </h2>
        )}
      </div>
    </Wrapper>
  );
};

export default WatchList;
