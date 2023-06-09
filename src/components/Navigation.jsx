import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import useMovieSearch from '../hooks/useMovieSearch';
import { useDispatch } from 'react-redux';
import { setMovieIdSlice } from '../store/slice/movieId.slice';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading, error, searchMovies, clearSearchResults } = useMovieSearch();
  const navigate = useNavigate();
const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchQuery);
    setSearchQuery('');
  };

  const handleMovieClick = (movieId) => {
    dispatch(setMovieIdSlice(movieId));
    navigate("/movies");
clearSearchResults();
  };
  
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link to="/toprated">Top Rated</Link>
          </li>
          <li>
            <Link to="/tvseries">Tv Series</Link>
          </li>
        </ul>
        <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar película..."
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {movies.length > 0 && (
        <div>
          <h2>Resultados de búsqueda:</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      </nav>  
    </div>
  );
};

export default Navigation;
