import React from 'react';

const SearchInput = ({ handleChange, value }) => {
  return (
    <input
      className='search__input'
      type='text'
      placeholder='Search'
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
