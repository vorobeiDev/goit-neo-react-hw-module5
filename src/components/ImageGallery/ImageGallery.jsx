import ImageCard from '../ImageCard/ImageCard.jsx';

import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className={css.gallery}>
    {images.map((image) => (
      <li key={image.id}>
        <ImageCard
          onClick={onClick}
          image={image}
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
