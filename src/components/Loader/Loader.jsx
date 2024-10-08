import { Triangle } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Triangle color="orange" />
    </div>
  );
};

export default Loader;