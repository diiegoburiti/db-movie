import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Button from '../Form/Button'
import { NoPhotoMovie } from '../Helper/NoPhotoMovie'
import {
  InfoCard,
  WrapperResultCard,
  PostWrapper,
  HeaderInfo,
  InfoTitle,
  InfoDate,
  InfoOverview,
  ControlsWrapper
} from './styles'

const ResultsCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched
  } = useContext(GlobalContext)
  let storedMovie = watchlist.find((object) => object.id === movie.id)
  let storedMovieWatched = watched.find((object) => object.id === movie.id)
  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false

  const watchedListDisabled = storedMovieWatched ? true : false
  return (
    <WrapperResultCard>
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

      <InfoCard>
        <HeaderInfo>
          <InfoTitle>
            Title: <span>{movie.title}</span>
          </InfoTitle>
          <InfoDate>
            Year:{' '}
            <span>
              {movie.release_date ? movie.release_date.substring(0, 4) : ''}
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
      </InfoCard>
    </WrapperResultCard>
  )
}

export default ResultsCard
