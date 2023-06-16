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
    backdrop_path
  } = movie;

  return (
    <div className=''>
      <div className='flex justify-center items-center'>
        <a className='text-[30px] '>{title}</a>
      </div>
      <div className='relative lg:flex md:flex m-5 justify-center items-center rounded-lg bg-gray-900 text-cyan-300'>
        <img className=' w-screen lg:h-[400px] rounded-lg opacity-20' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={name} />
        <div className=' lg:absolute lg:flex md:flex my-5 justify-center items-center rounded-lg'>
          <img className='absolute top-0 lg:static  lg:m-3 m-auto rounded-lg ' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
          <p className='m-5 text-justify rounded-lg lg:w-[30%]  -opacity-10 '>{overview}</p>
          <div className='m-5'>

            <p>Release Date: {release_date}</p>
            {genres &&
              <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
            }
            <p>Vote Average: {vote_average}</p>
            <p>Vote Count: {vote_count}</p>
            <p>Runtime: {runtime} minutes</p>
            {production_companies &&

              <p>
                Production Companies:{' '}
                {production_companies.map((company) => company.name).join(', ')}
              </p>
            }
            {
              production_countries &&
              <p>
                Production Countries:{' '}
                {production_countries.map((country) => country.name).join(', ')}
              </p>
            }
            <p>Status: {status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovieDetail;
