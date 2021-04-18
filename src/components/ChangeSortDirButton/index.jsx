import React from 'react';

import './style.scss';

const ChangeSortDirButton = ({ dir, handleClick }) => {
  return (
    <div className='sort-dir__container'>
      <button className='sort-dir__button' onClick={handleClick}>
        Change sort direction(now {dir})
      </button>
    </div>
  );
};

export default ChangeSortDirButton;
