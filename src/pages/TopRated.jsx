import CardMovies from '../components/CardMovies';
import useChangeApi from '../hooks/useChangeApi';
import Loading from '../utils/Loading';

const TopRated = () => {
  const { movies, loading, error } = useChangeApi(
    'https://api.themoviedb.org/3/movie/top_rated'
  );

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <p>Error fetching top rated movies: {error.message}</p>;
  }

  return (
    <div>
      <CardMovies movies={movies} title="Top Películas" />;
    </div>
  );
};

export default TopRated;
