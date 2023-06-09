import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardMovies from '../components/CardMovies';
import useChangeApi from '../hooks/useChangeApi';

const UpComing = () => {
  const { movies, loading, error } = useChangeApi(
    'https://api.themoviedb.org/3/movie/upcoming'
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching top rated movies: {error.message}</p>;
  }

  return (
    <div>
     <CardMovies movies={movies} title="Proximamente en carteleras" />;
    </div>
  );
};

export default UpComing;
