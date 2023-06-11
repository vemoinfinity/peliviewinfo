import React from 'react';
import { useSelector } from 'react-redux';
import useMovieList from '../hooks/useMovieList';
import CardTvSeriesDetail from './CardTvSeriesDetail';
import CardTvSeries from './CardTvSeries';
import Loading from '../utils/Loading.jsx'
const TvSeriesDetails = () => {
  const movieId = useSelector(state => state.movieId)
 /* */
  const { tvseries, loading, error } = useMovieList(
    `https://api.themoviedb.org/3/tv/${movieId}`
  );
  const {movies} = useMovieList(
    `https://api.themoviedb.org/3/tv/${movieId}/similar`
  );

  if (loading) {
    return <Loading/>;
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