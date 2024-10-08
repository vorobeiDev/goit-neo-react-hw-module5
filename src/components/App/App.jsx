import { Route, Routes } from 'react-router-dom';
import { ROUTER } from '../../constants/router.js';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import MovieCast from '../MovieCast/MovieCast.jsx';
import MovieReviews from '../MovieReviews/MovieReviews.jsx';
import Navigation from '../Navigation/Navigation.jsx';

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path={ROUTER.HOME} element={<HomePage />} />
          <Route path={ROUTER.MOVIES} element={<MoviesPage />} />
          <Route path={`${ROUTER.MOVIES}/:movieId`} element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Route>
          <Route path={ROUTER.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
