import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardMovies from '../components/CardMovies';
import useMovieList from '../hooks/useMovieList';
import { increasePage } from '../store/slice/pagination.slice';
import { decreasePage } from '../store/slice/pagination.slice';
import { useDispatch, useSelector } from 'react-redux';
const HomePage = () => {
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
    <div className='font-medium'>
      <div className=' text-5xl flex mx-10 my-6 justify-center  rounded-lg'>Películas Populares</div>     
      <nav className=' bg-gray-500 flex mx-10 my-4 justify-between items-center rounded-lg' >
        <button onClick={handleDecreasePage} disabled={isPrevButtonDisabled}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
          </svg>
        </button>
        <span className='text-gray-300' >Page #{currentPage}</span>
        <button onClick={handleIncreasePage}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
          </svg>
        </button>
      </nav>   
      <CardMovies movies={movies}  />;
    </div>
  );
};

export default HomePage;