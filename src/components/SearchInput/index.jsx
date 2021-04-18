import React from 'react';

import './style.scss';

const SearchInput = ({ handleChange, value }) => {
  return (
    <div className='search__container'>
      <p className='search__title'>Go ahead, search repositories</p>
      <input
        className='search__input'
        type='text'
        placeholder='Search'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
