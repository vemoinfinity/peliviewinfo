import React, { useState } from 'react';
import CardTvSeries from '../components/CardTvSeries';
import useMovieList from '../hooks/useMovieList';
import { useDispatch, useSelector } from 'react-redux';
import { increasePage } from '../store/slice/pagination.slice';
import { decreasePage } from '../store/slice/pagination.slice';
const TvPopular = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const [aniNext, setAniNext] = useState(null);
  const [aniPrev, setAniPrev] = useState(null);
  const handleIncreasePage = () => {
    dispatch(increasePage());
    setAniNext(true);
      setTimeout(()=>{
      setAniNext(false)},1000)  
  };

  const handleDecreasePage = () => {
    if (currentPage > 1) {
      dispatch(decreasePage());
      setAniPrev(true);
      setTimeout(()=>{
      setAniPrev(false)},1000)
    }
  };
  const { movies, isLoading, error } = useMovieList(
    'https://api.themoviedb.org/3/tv/popular'
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching top rated movies: {error.message}</p>;
  }
  const isPrevButtonDisabled = currentPage === 1;
  return (
    <div>
      <div className=' text-5xl flex  my-6 justify-center  rounded-lg'>Series de tv populares</div>     
      <nav className=' bg-gray-500 flex my-4 mx-10 lg:mx-52 justify-between items-center rounded-lg' >
        <button onClick={handleDecreasePage} disabled={isPrevButtonDisabled}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
          </svg>
        </button>
        <span className='text-gray-300' >Page #{currentPage}</span>
        <button onClick={handleIncreasePage}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
          </svg>
        </button>
      </nav> 
      <div className={`${aniNext?'animate-[slideLeft_3s]':'animate-[slideRight_3s]'} lg:mx-52`}>
        <div className={`${aniPrev?'animate-[slideRightL_3s]':'animate-[slideLeftR_3s]'} `}>
      <CardTvSeries tvseries={movies}/>
        </div>
      </div>
    </div>
  );
};

export default TvPopular;