import { Component } from 'react';

import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import { API } from '../services/fetch';

class App extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
    loading: false,
    modalVisible: false,
    modalBody: null,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (prevState.query !== query || prevState.page < page) {
      this.setState({ loading: true });

      try {
        const response = await API.fetch(query, page);
        const data = response.data.hits;
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data],
          loading: false,
        }));
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
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
      modalBody,
    });
  };

  closeModal = (e, key) => {
    if (e.target === e.currentTarget || key === 'Escape') {
      this.setState({
        modalVisible: false,
      });
    }
  };
  getQueryOnSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { pictures, loading, modalVisible, modalBody } = this.state;
    const { loadMore, openModal, closeModal, getQueryOnSubmit } = this;

    return (
      <>
        <SearchBar onSubmit={getQueryOnSubmit} />
        {Boolean(pictures.length) && (
          <ImageGallery pictures={pictures} onClick={openModal} />
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

export default App;
