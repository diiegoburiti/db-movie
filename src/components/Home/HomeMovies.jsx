import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Cards/Card";

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-content: space-between;
`;

const HomeMovies = ({ page }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      let response;
      let json;

      try {
        response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
        );
        json = await response.json();
        console.log(json.results.length);
        if (!response.ok) throw new Error(json.message);
        setResults(json.results);
      } catch (err) {
        console.log(err);
        setResults([]);
      }
    }
    handleFetch();
  }, [setResults, page]);

  return (
    <>
      {results.length > 0 && (
        <Wrapper>
          {results.map((movie) => (
            <li key={movie.id}>
              <Card movie={movie} />
            </li>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default HomeMovies;