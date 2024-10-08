import MovieItem from '../MovieItem/MovieItem.jsx';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <MovieItem movie={movie} />
      </li>
    ))}
  </ul>
);

export default MoviesList;
