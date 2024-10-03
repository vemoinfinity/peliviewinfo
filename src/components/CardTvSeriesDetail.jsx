/* eslint-disable react/prop-types */

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
    backdrop_path
  } = tvseries;

  return (
    <div>
      <div className='flex justify-center items-center'>
        <a className='text-[30px] '>{name}</a>
      </div>
      <div className=' relative lg:flex md:flex my-5 justify-center items-center rounded-lg bg-gray-900 text-cyan-300 '>
        <img className=' w-screen lg:h-[400px] rounded-lg opacity-20' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={name} />
        <div className=' lg:absolute lg:flex md:flex my-5 justify-center items-center rounded-lg'>
        <img className='absolute top-2 lg:static lg:m-3 m-auto rounded-lg ' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={name} />
          {overview &&
            <p className=' m-5 text-justify rounded-lg lg:w-[30%] -opacity-10 '>{overview}</p>
          }
        <div className='m-5'>
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
        </div>
      </div>
    </div>
  );
};

export default CardTvSeriesDetail;
