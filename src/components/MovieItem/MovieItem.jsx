import { Link } from 'react-router-dom';

import { ROUTER } from '../../constants/router.js';

const MovieItem = ({ movie }) => (
  <Link to={`${ROUTER.MOVIES}/${movie.id}`}>
    {movie.title}
  </Link>
);

export default MovieItem;
