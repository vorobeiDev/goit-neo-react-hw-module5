import css from './ErrorMessage.module.css';

const ErrorMessage = () => (
  <p className={css.error}>
    Something went wrong, please try again...
  </p>
);

export default ErrorMessage;
