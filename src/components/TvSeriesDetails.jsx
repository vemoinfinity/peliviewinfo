import React from 'react';
import { useSelector } from 'react-redux';
import useMovieList from '../hooks/useMovieList';
import CardTvSeriesDetail from './CardTvSeriesDetail';
import CardTvSeries from './CardTvSeries';

const TvSeriesDetails = () => {
  const movieId = useSelector(state => state.movieId)
 /* */
  const { tvseries, isLoading, error } = useMovieList(
    `https://api.themoviedb.org/3/tv/${movieId}`
  );
  const {movies} = useMovieList(
    `https://api.themoviedb.org/3/tv/${movieId}/similar`
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }
   
  return (
    <div>
      {tvseries && (
        <CardTvSeriesDetail tvseries={tvseries}/>
      )}
      <CardTvSeries tvseries={movies} title="series similares" />
    </div>
  );
};

export default TvSeriesDetails;