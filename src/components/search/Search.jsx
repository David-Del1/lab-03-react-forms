import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ input, onChange, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    data-testid="search-form"
  >
    <label htmlFor="search-input">Search</label>
    <input type="text"
      name="searchInput"
      id="search-input"
      value={input}
      onChange={onChange}
    />
    <button>Search</button>
  </form>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  input: PropTypes.string,
};

export default Search;
