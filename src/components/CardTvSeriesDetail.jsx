import React from 'react';

const CardTvSeriesDetail = ({ tvseries }) => {
  const {
    name,
    overview,
    poster_path,
    first_air_date,
    genres,
    vote_average,
    vote_count,
    number_of_seasons,
    number_of_episodes,
    status,
  } = tvseries;

  return (
    <div>
      <h1>{name}</h1>
      <p>{overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={name} />
      <p>First Air Date: {first_air_date}</p>
      {genres &&     
      <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
      }
      <p>Vote Average: {vote_average}</p>
      <p>Vote Count: {vote_count}</p>
      <p>Number of Seasons: {number_of_seasons}</p>
      <p>Number of Episodes: {number_of_episodes}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CardTvSeriesDetail;
