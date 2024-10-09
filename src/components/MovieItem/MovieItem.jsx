import { Link, useLocation } from 'react-router-dom';

import { ROUTER } from '../../constants/router.js';

const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <Link to={`${ROUTER.MOVIES}/${movie.id}`} state={location}>
      {movie.title}
    </Link>
  );
};

export default MovieItem;
