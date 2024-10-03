import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { apiKey } from '../utils/config';
const useMovieList = (url) => {
  const [movies, setMovies] = useState([]);
  const [moviesview, setMoviesview] = useState([])
  const [tvseries, setTvSeries] = useState([])
  const [error, setError] = useState(null);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(url, {
            params: {
              language: 'es-MX',
              page: `${currentPage}`,
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
    }, 900)
  }, [url, currentPage]);

  return { movies, error, moviesview, tvseries, loading };
};

export default useMovieList;
