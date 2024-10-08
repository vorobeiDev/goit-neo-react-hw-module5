import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <div
    className={css.wrapper}
    onClick={() => onClick(image)}
  >
    <img
      className={css.img}
      src={image.urls.small}
      alt={image.alt_description}
    />
  </div>
);

export default ImageCard;
