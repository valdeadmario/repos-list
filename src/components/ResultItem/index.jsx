import React from 'react';

import './style.scss';

const ResultsItem = ({ name, html_url, stargazers_count }) => {
  return (
    <li className='results-item__container'>
      <a
        className='results-item__text results-item__text--link'
        href={html_url}
      >
        {name}
      </a>
      <p className='results-item__text'> Stars - {stargazers_count}</p>
    </li>
  );
};

export default ResultsItem;
