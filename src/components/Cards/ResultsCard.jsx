import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Button from "../Form/Button";
import styled from "styled-components";
import { NoPhotoMovie } from "../Helper/NoPhotoMovie";
import { device } from "../../device";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: var(--card-bg);
  box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const PostWrapper = styled.div`
  max-width: 100%;

  img {
    background-color: #dbdada;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: block;
    color: transparent;
    width: 100%;

    @media ${device.mobile} {
      border-radius: 0px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const HeaderInfo = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--white);
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    font-weight: normal;
    color: var(--white);
    font-size: 1rem;
  }
`;

const InfoDate = styled.h4`
  font-size: 1.25rem;
  margin: 1rem 0;
  color: var(--white);

  span {
    font-weight: normal;
    color: var(--white);
    font-size: 1rem;
  }
`;

const InfoOverview = styled.h5`
  font-size: 1.25rem;
  color: var(--white);
  max-height: 210px;
  overflow-y: auto;

  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const ControlsWrapper = styled.div`
  button {
    &:last-child {
      margin-top: 0.9rem;
    }
  }

  @media ${device.mobile} {
    margin: 1rem auto;
    width: 60%;
    padding: 10px;
  }
`;

const ResultsCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  let storedMovie = watchlist.find((object) => object.id === movie.id);
  let storedMovieWatched = watched.find((object) => object.id === movie.id);
  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedListDisabled = storedMovieWatched ? true : false;
  return (
    <Wrapper>
      <PostWrapper>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <NoPhotoMovie text={movie.title} />
        )}
      </PostWrapper>

      <Info>
        <HeaderInfo>
          <InfoTitle>
            Title: <span>{movie.title}</span>
          </InfoTitle>
          <InfoDate>
            Year:{" "}
            <span>
              {movie.release_date ? movie.release_date.substring(0, 4) : ""}
            </span>
          </InfoDate>
          <InfoOverview>
            Overview:
            <p>{movie.overview}</p>
          </InfoOverview>
        </HeaderInfo>

        <ControlsWrapper>
          <Button
            disabled={watchListDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to watchlist
          </Button>
          <Button
            disabled={watchedListDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to watched list
          </Button>
        </ControlsWrapper>
      </Info>
    </Wrapper>
  );
};

export default ResultsCard;
