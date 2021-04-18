import React from 'react';

import ResultItem from 'components/ResultItem';

import './style.scss';

const ResultsList = ({ list }) => {
  return (
    <div className='results__container'>
      <ul className='results__list'>
        {list?.map(({ id, ...restData }) => (
          <ResultItem key={id} {...restData} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
