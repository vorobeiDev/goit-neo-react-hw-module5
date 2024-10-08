import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
