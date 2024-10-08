import { useState } from 'react';
import CardMovies from '../components/CardMovies';
import useMovieList from '../hooks/useMovieList';
import { increasePage } from '../store/slice/pagination.slice';
import { decreasePage } from '../store/slice/pagination.slice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../utils/Loading';
const HomePage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const [aniNext, setAniNext] = useState(null);
  const [aniPrev, setAniPrev] = useState(null);
  const handleIncreasePage = () => {
    dispatch(increasePage());
    setAniNext(true);
    setTimeout(() => {
      setAniNext(false)
    }, 1000)
  };
  const handleDecreasePage = () => {
    if (currentPage > 1) {
      dispatch(decreasePage());
      setAniPrev(true);
      setTimeout(() => {
        setAniPrev(false)
      }, 1000)
    }
  };

  const { movies, error, loading } = useMovieList(
    'https://api.themoviedb.org/3/movie/popular'
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error fetching movies: {error.message}</p>;
  }
  const isPrevButtonDisabled = currentPage === 1;

  return (
    <div className='' >
      <div className='  text-5xl flex  my-6 justify-center select-none rounded-lg'>Películas Populares</div>
      <nav className=' bg-transparent  flex my-4 mx-10 lg:mx-52 justify-between items-center rounded-lg' >
        <button className='hover:bg-gray-300 rounded-lg' onClick={handleDecreasePage} disabled={isPrevButtonDisabled}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left" width="40" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="#ff2825" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
          </svg>
        </button>
        <span className='text-gray-300 select-none' >Page #{currentPage}</span>
        <button className=' hover:bg-gray-300 rounded-lg' onClick={handleIncreasePage}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right" width="40" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="#ff2825" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
          </svg>
        </button>
      </nav>
      <div className=''>
        {aniNext ?
          <Loading /> : ''
        }
        {aniPrev ?
          <Loading /> : ''}
      </div>
      <div className={`${aniNext ? 'animate-[slideLeft_3s]' : 'animate-[slideRight_3s]'} lg:mx-52 static`}>
        <div className={`${aniPrev ? 'animate-[slideRightL_3s]' : 'animate-[slideLeftR_3s]'} `} >
          <CardMovies movies={movies} />;
        </div>
      </div>
    </div>
  );
};
export default HomePage;