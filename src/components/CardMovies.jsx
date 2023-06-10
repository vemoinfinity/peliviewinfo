import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setMovieIdSlice } from '../store/slice/movieId.slice';

const CardMovies = ({ movies }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(setMovieIdSlice(data));
    navigate("/movies");
  };
  return (
    <div >
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => submit(movie.id)}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />          
        </div>
      ))}
    </div>
  );
};

export default CardMovies;
