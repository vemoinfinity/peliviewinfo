import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMovieIdSlice } from '../store/slice/movieId.slice';

const CardTvSeries = ({ tvseries }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (id) => {
    dispatch(setMovieIdSlice(id));
    navigate('/tvseriesdetail');
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },1000)
  };

  return (
    <div className='flex flex-wrap mx-10'>
      {tvseries.map((tvshow) => (
        <div
          className='group  rounded-lg relative transition 
          mx-5 my-3 border-4 
          hover:-translate-y-1 hover:scale-110 
          xl:basis-1/6 lg:basis-1/4 md:basis-1/4 '
          key={tvshow.id} onClick={() => submit(tvshow.id)}>
          <img className='rounded-lg object-fill'
            src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
            alt={tvshow.name} />
          <div
            className='absolute flex opacity-0 bottom-0 rounded-lg
            py-1 my-1 items-center 
          group-hover:bg-gray-900 group-hover:opacity-100'>
            <p className='text-[13px] group-hover:text-gray-200' >{tvshow.name}</p>
            <p className='flex transition items-center mr-3
            text-xl group-hover:text-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg"
                class=" icon icon-tabler icon-tabler-star" width="32" height="32"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="#ffec00"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 
                -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 
                6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              {tvshow.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default CardTvSeries;
