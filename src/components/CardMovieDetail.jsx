import React from 'react';

const CardMovieDetail = ({ movie }) => {
  const {
    title,
    overview,
    poster_path,
    release_date,
    genres,
    vote_average,
    vote_count,
    runtime,
    production_companies,
    production_countries,
    status,
  } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <p>Release Date: {release_date}</p>
      {genres&&
      <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
      }
      <p>Vote Average: {vote_average}</p>
      <p>Vote Count: {vote_count}</p>
      <p>Runtime: {runtime} minutes</p>
      {production_companies&&
      
      <p>
        Production Companies:{' '}
        {production_companies.map((company) => company.name).join(', ')}
      </p>
      }
      {
        production_countries&&
      <p>
        Production Countries:{' '}
        {production_countries.map((country) => country.name).join(', ')}
      </p>
      }
      <p>Status: {status}</p>
    </div>
  );
};

export default CardMovieDetail;
