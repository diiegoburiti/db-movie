import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Form/Input";
import Title from "../Helper/Title";
import ResultsCard from "../Cards/ResultsCard";

const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}`;

const WrapperContent = styled.div`
  padding: 50px 0;
  max-width: 600px;
  margin: 0 auto;
`;

const ResultsList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 20px;

  li {
    list-style: none;
  }
`;

const Add = () => {
  const [query, setquery] = useState("");
  const [results, setResults] = useState([]);

  async function handleChange(event) {
    event.preventDefault();
    setquery(event.target.value);
    let response;
    let json;
    try {
      response = await fetch(
        `${API_URL}&language=en-US&page=1&include_adult=false&query=${event.target.value}`,
      );
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
      setResults(json.results);
    } catch (err) {
      console.log(err);
      setResults([]);
    }
  }

  return (
    <section className="container">
      <WrapperContent>
        <Title margimBottom={1} title={"Search Movies"} fontSize={5} />
        <div>
          <Input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={handleChange}
          />
        </div>

        {results.length > 0 && (
          <ResultsList>
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultsCard movie={movie} />
              </li>
            ))}
          </ResultsList>
        )}
      </WrapperContent>
    </section>
  );
};

export default Add;
