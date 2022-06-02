import { nanoid } from 'nanoid';
import s from './image-gallery-item.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ pictures, onClick }) => {
  return pictures.map(picture => {
    const id = nanoid();
    const { webformatURL, largeImageURL } = picture;
    return (
      <li
        onClick={() => onClick({ largeImageURL })}
        className={s.galleryItem}
        key={id}
      >
        <img className={s.galleryImage} src={webformatURL} alt="" />
      </li>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  pictures: [],
};

ImageGalleryItem.PropTypes = {
  onClick: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
