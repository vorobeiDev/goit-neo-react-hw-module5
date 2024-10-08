import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import Loader from '../Loader/Loader.jsx';

import { getMovieReviews } from '../../utils/api.js';

import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        setIsError(true);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {reviews.length > 0
        ? (
          <ul className={css.cast}>
            {reviews.map((review) => (
              <li key={review.id}>
                <MovieReviewsItem review={review} />
              </li>
            ))}
          </ul>
        )
        : <p>We don't have any reviews for this movie</p>
      }
    </>
  );
};

export default MovieReviews;
