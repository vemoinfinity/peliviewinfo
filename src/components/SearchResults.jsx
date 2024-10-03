/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { Search, Film, Tv } from 'lucide-react';

export default function SearchResults({ error, movies, handleMovieClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen(movies.length > 0);
  }, [movies]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (error) {
    return <p className="text-red-500 text-center mt-2 bg-red-100 p-2 rounded">Error: {error.message}</p>;
  }

  return (
    <>
      {isOpen && movies.length > 0 && (
        <div ref={dropdownRef} className="absolute right-0 z-10 mt-2 w-72 bg-gradient-to-r from-gray-900 to-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96 overflow-y-auto">
          {movies.map((movie) => (
            <button
              key={movie.id}
              onClick={() => {
                handleMovieClick(movie.id, movie.title, movie.name);
                setIsOpen(false);
              }}
              className=" w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-400 hover:text-gray-900 flex items-center space-x-3"
            >
              {movie.poster_path ? (
                <img 
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                  alt={movie.title || movie.name}
                  className="w-12 h-18 object-cover rounded"
                />
              ) : (
                <div className="w-12 h-18 bg-gray-200 flex items-center justify-center rounded">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <p className="font-medium">{movie.title || movie.name}</p>
                <p className="text-xs text-gray-500">
                  {movie.release_date || movie.first_air_date 
                    ? new Date(movie.release_date || movie.first_air_date).getFullYear() 
                    : 'Unknown year'}
                </p>
              </div>
              {movie.media_type === 'movie' ? (
                <Film className="w-4 h-4 text-gray-400" />
              ) : (
                <Tv className="w-4 h-4 text-gray-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </>
  );
}