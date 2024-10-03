import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useMovieSearch from '../hooks/useMovieSearch';
import { useDispatch } from 'react-redux';
import { setMovieIdSlice } from '../store/slice/movieId.slice';
const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, error, searchMovies, clearSearchResults } = useMovieSearch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchQuery);
    setSearchQuery('');
  };

  const handleMovieClick = (movieId, movietitle, moviename) => {
    dispatch(setMovieIdSlice(movieId));
    if (movietitle) {
      navigate("/movies")
      clearSearchResults();
    }
    else if (moviename) {
      navigate("/tvseriesdetail");
      clearSearchResults();
    }
    clearSearchResults();
  };
  const handeShow = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  return (
    <nav className='bg-gradient-to-r  from-stone-900 via-gray-800 to-zinc-700 ' >
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={handeShow} type="button" className="inline-flex items-center justify-center rounded-b-none rounded-md p-2 text-gray-400 bg-transparent" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {show &&
              <div className="sm:hidden relative">
                <div className=" absolute flex -top-5 z-10 bg-transparent rounded-md rounded-tl-none">
                  <Link to='/' class=" grid   text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                  <Link to='/tvseries' class="grid  text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">TV Series</Link>
                  <Link to='/toprated' class="grid   text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Top Rated</Link>
                  <Link to='/upcoming' class="grid   text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Up Coming</Link>
                </div>
              </div>
            }
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">
                <Link to='/' class=" grid   text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                <Link to='/tvseries' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">TV Series</Link>
                <Link to='/toprated' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Top Rated</Link>
                <Link to='/upcoming' class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Up Coming</Link>
              </div>
            </div>
          </div>
          <div className=" flex items-center 
          pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <form className="rounded-full p-1 text-gray-400 " onSubmit={handleSearch}>
              <input className="rounded-full bg-transparent p-1 text-gray-400"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar película..."
              />
              <button type="submit" className=" relative rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="absolute -bottom-2 right-1 h-7 w-7 icon icon-tabler icon-tabler-search" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" >
                  <path stroke="none" strokeLinecap="round" strokeLinejoin="round" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
            </form>          
            {error && <p>Error: {error.message}</p>}
            {movies.length > 0 && (
              <div className="relative ml-3">
                <div className="absolute right-0 z-10 mt-2 w-48 
                bg-gradient-to-r  from-stone-900 via-gray-800 to-zinc-700  
                origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  {movies.map((movie) => (
                    <button className="block px-4 py-2 text-sm text-gray-400 select-none" role="menuitem"
                      key={movie.id} onClick={() => handleMovieClick(movie.id, movie.title, movie.name)}>
                      {movie.title} {movie.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navigation;
