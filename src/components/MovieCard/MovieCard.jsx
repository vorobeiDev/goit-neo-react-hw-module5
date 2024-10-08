import getImageFullPath from '../../utils/imagePath.js';

import css from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={css.movie}>
      <img className={css.poster} src={getImageFullPath(movie.poster_path)} alt={movie.title} />
      <div className={css.details}>
        <h2>{movie.title}</h2>
        <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
        <h3>
          Overview
        </h3>
        <p>
          {movie.overview}
        </p>
        <h4>Genres</h4>
        <p>
          {movie.genres?.map((genre) => genre.name).join(' ')}
        </p>
      </div>
    </div>
  )
};

export default MovieCard;
