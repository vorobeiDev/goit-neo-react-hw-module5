import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import MovieCard from '../../components/MovieCard/MovieCard.jsx';
import { ROUTER } from '../../constants/router.js';

import { getMovieDetails } from '../../utils/api.js';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const previousLocation = useRef(location.state || ROUTER.MOVIES);

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        setIsError(true);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Link to={previousLocation.current}>Go Back</Link>
      {movie && <MovieCard movie={movie} />}
      <h4>
        Additional information
      </h4>
      <ul>
        <li>
          <Link to={`${ROUTER.MOVIES}/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${ROUTER.MOVIES}/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
