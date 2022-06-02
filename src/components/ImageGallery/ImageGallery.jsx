import PropTypes from 'prop-types';

import s from './image-gallery.module.css';

import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem pictures={pictures} onClick={onClick}/>
    </ul>
  );
};
export default ImageGallery;

ImageGallery.defaultProps = {
  pictures: [],
};

ImageGallery.propTypes = {
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
