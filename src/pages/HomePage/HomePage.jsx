import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import MoviesList from '../../components/MoviesList/MoviesList.jsx';

import { getTrendingMovies } from '../../utils/api.js';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getTrendingMovies();
        setMovies(response);
      } catch (error) {
        setIsError(true);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} /> }
    </div>
  );
};

export default HomePage;
