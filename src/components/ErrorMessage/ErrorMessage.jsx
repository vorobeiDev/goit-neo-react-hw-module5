import css from './ErrorMessage.module.css';

const ErrorMessage = () => (
  <p className={css.error}>
    Something went wrong with image loading, please try again...
  </p>
);

export default ErrorMessage;
