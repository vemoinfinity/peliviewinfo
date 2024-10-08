import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../utils/config';

const useChangeApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [moviesview, setMoviesview] = useState([])
  const [tvseries, setTvSeries] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            language: 'es-MX',           
            api_key: apiKey,
          },
        });
        setMovies(response.data.results);
        setMoviesview(response.data);
        setTvSeries(response.data)
       

      } catch (error) {
        setError(error);
        
      }
    };
  

    fetchMovies();
    setLoading(false);
  },900)
  }, [url]);

  return { movies, loading, error, moviesview, tvseries };
};

export default useChangeApi;
