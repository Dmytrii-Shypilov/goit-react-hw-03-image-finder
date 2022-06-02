import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './search-bar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
    pictures: [],
  };

  getSearchQuery = e => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { getSearchQuery, onSubmit } = this;
    const { query } = this.state;

    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={onSubmit} class="form">
          <input
            onChange={getSearchQuery}
            className={s.input}
            type="text"
            value={query}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
