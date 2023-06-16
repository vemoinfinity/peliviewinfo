import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useMovieList from '../hooks/useMovieList';
import useChangeApi from '../hooks/useChangeApi';
import CardMovies from './CardMovies';
import CardMovieDetail from './CardMovieDetail';
import Loading from '../utils/Loading'
const MovieDetails = () => {
  const movieId = useSelector(state => state.movieId)
 
  const { moviesview, loading, error } = useChangeApi(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );
  const {movies} = useMovieList(
    `https://api.themoviedb.org/3/movie/${movieId}/similar`
  );
  
  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }
  return (
    <div>
      <div className='flex'>
      {moviesview && (
        <CardMovieDetail movie={moviesview}/>
        )}
        </div>
<CardMovies movies={movies} title="Películas Similares" />;
    </div>
  );
};

export default MovieDetails;
