/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMovieIdSlice } from '../store/slice/movieId.slice';
import { Star } from 'lucide-react';

export default function CardMovies({ movies }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMovieClick = (movieId) => {
    dispatch(setMovieIdSlice(movieId));
    navigate("/movies");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-1 line-clamp-2">{movie.title}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm">{movie.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}