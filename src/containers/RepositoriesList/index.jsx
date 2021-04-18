import React from 'react';

import Spinner from 'components/Spinner';
import EmptyView from 'components/EmptyView';
import ResultsList from 'components/ResultsList';

import { useGithubReposTable } from './hooks/useGithubReposTable';

const RepositoriesList = ({ inputText }) => {
  const { isLoading, items } = useGithubReposTable(inputText);

  if (isLoading) {
    return <Spinner />;
  }

  if (!items?.length) {
    return <EmptyView />;
  }

  return (
    <div>
      <ResultsList list={items} />
    </div>
  );
};

export default RepositoriesList;
