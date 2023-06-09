import React from 'react';
import CardTvSeries from '../components/CardTvSeries';
import useChangeApi from '../hooks/useChangeApi';

const TvPopular = () => {
  const { movies, loading, error } = useChangeApi(
    'https://api.themoviedb.org/3/tv/popular'
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching top rated movies: {error.message}</p>;
  }
  console.log(movies)
  return (
    <div>
      <CardTvSeries tvseries={movies} title="series de tv populares" />
    </div>
  );
};

export default TvPopular;