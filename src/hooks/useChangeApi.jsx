import { useEffect, useState } from 'react';
import axios from 'axios';

const useChangeApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [moviesview, setMoviesview] = useState([])
  const [tvseries, setTvSeries] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
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
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { movies, loading, error, moviesview, tvseries };
};

export default useChangeApi;
