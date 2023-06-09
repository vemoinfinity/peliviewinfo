import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardMovies from '../components/CardMovies';
import useMovieList from '../hooks/useMovieList';
import { increasePage } from '../store/slice/pagination.slice';
import { decreasePage } from '../store/slice/pagination.slice';
import { useDispatch, useSelector } from 'react-redux';
const HomePage= () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const handleIncreasePage = () => {
    dispatch(increasePage());
  };

  const handleDecreasePage = () => {
    if (currentPage > 1) {
      dispatch(decreasePage());
    }
  };
  const { movies, loading, error } = useMovieList(
    'https://api.themoviedb.org/3/movie/popular'
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }
  const isPrevButtonDisabled = currentPage === 1;
  
  return (
    <div>
      <nav>
        <button onClick={handleDecreasePage} disabled={isPrevButtonDisabled}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleIncreasePage}>Next Page</button>
      </nav>
      {isPrevButtonDisabled && <p>No se puede disminuir más la página.</p>}

    <CardMovies movies={movies} title="Películas Populares" />;
  </div>
  );
};

export default HomePage;