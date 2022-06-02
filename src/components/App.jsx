import { Component } from 'react';

import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    query: '',
  };

  getQueryOnSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { getQueryOnSubmit } = this;
    const { query } = this.state;

    return (
      <>
        <SearchBar onSubmit={getQueryOnSubmit} />
        <ImageGallery query={query} />
      </>
    );
  }
}

export default App;
