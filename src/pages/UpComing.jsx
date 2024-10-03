import CardMovies from '../components/CardMovies';
import useChangeApi from '../hooks/useChangeApi';
import Loading from '../utils/Loading';

const UpComing = () => {
  const { movies, loading, error } = useChangeApi(
    'https://api.themoviedb.org/3/movie/upcoming'
  );

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <p>Error fetching top rated movies: {error.message}</p>;
  }

  return (
    <div>
     <CardMovies movies={movies} title="Proximamente en carteleras" />;
    </div>
  );
};

export default UpComing;
