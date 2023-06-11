import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useMovieList from '../hooks/useMovieList';
import useChangeApi from '../hooks/useChangeApi';
import CardMovies from './CardMovies';
import CardMovieDetail from './CardMovieDetail';
const MovieDetails = () => {
  const movieId = useSelector(state => state.movieId)
 
  const { moviesview, isLoading, error } = useChangeApi(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );
  const {movies} = useMovieList(
    `https://api.themoviedb.org/3/movie/${movieId}/similar`
  );
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }

  return (
    <div>
      <h1>Movie Details</h1> 
      {moviesview && (
        <CardMovieDetail movie={moviesview}/>
      )}
<CardMovies movies={movies} title="Películas Similares" />;
    </div>
  );
};

export default MovieDetails;
