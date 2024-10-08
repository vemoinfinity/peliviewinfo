
import { useState } from 'react';
import axios from 'axios';
import { apiKey } from '../utils/config';

const useMovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          query
        )}&include_adult=false&language=es-MX&page=1&api_key=${apiKey}`
      );
  
      const tvResponse = await axios.get(
        `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
          query
        )}&include_adult=false&language=es-MX&page=1&api_key=${apiKey}`
      );
  
      const movieResults = movieResponse.data.results;
      const tvResults = tvResponse.data.results;
      
      const results = [...movieResults, ...tvResults];

      setMovies(results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  const clearSearchResults = () => {
    setMovies([]);
  };

  return { movies, loading, error, searchMovies, clearSearchResults };
};

export default useMovieSearch;
