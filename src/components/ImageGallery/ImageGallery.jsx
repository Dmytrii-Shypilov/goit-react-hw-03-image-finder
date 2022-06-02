import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './image-gallery.module.css';

import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { API } from 'components/services/fetch';

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    loading: false,
    modalVisible: false,
    modalBody: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;

    if (prevProps.query !== this.props.query || prevState.page < page) {
      this.setState({ loading: true });

      try {
        const response = await API.fetch(query, page);
        const data = response.data.hits;
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data],
          loading: false,
        }));
      } catch (error) {
        this.setState({ loading: false });
        console.error(error);
      }
    }
  }

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  openModal = modalBody => {
    this.setState({
      modalVisible: true,
      modalBody: modalBody.largeImageURL,
    });
  };

  closeModal = (e, key) => {
    if (e.target === e.currentTarget || key === 'Escape') {
      this.setState({
        modalVisible: false,
      });
    }
  };

  render() {
    const { pictures, loading, modalVisible, modalBody } = this.state;
    const { loadMore, openModal, closeModal } = this;

    return (
      <>
        {Boolean(pictures.length) && (
          <ul className={s.gallery}>
            <ImageGalleryItem pictures={pictures} onClick={openModal} />
          </ul>
        )}
        {loading && <Loader />}
        {Boolean(pictures.length) && <Button onClick={loadMore} />}
        {modalVisible && (
          <Modal onClick={closeModal}>
            <img width="600" height="380" src={modalBody} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.defaultProps = {
  pictures: [],
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
