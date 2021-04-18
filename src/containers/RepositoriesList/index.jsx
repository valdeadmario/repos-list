import React from 'react';

import Spinner from 'components/Spinner';
import EmptyView from 'components/EmptyView';
import ResultsList from 'components/ResultsList';
import Pagination from 'components/Pagination';

import { useGithubReposTable } from './hooks/useGithubReposTable';

const RepositoriesList = ({ inputText }) => {
  const {
    isLoading,
    items,
    totalPages,
    currentPage,
    handleChangePage,
  } = useGithubReposTable(inputText);

  if (isLoading) {
    return <Spinner />;
  }

  if (!items?.length) {
    return <EmptyView />;
  }

  return (
    <div>
      <ResultsList list={items} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};

export default RepositoriesList;
