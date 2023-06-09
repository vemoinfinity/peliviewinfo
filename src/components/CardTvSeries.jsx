import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMovieIdSlice } from '../store/slice/movieId.slice';

const CardTvSeries = ({ tvseries, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (id) => {
    dispatch(setMovieIdSlice(id));
    navigate('/tvseriesdetail');
  };

  return (
    <div>
      <h1>{title}</h1>
      {tvseries.map((tvshow) => (
        <div key={tvshow.id} onClick={() => submit(tvshow.id)}>
          <h2>{tvshow.name}</h2>
          <p>{tvshow.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
            alt={tvshow.name}
          />
          <p>{tvshow.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default CardTvSeries;
