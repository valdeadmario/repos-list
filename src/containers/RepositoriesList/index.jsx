import React from 'react';

import Pagination from 'components/Pagination';
import Spiner from 'components/Spinner';
import EmptyView from 'components/EmptyView';
import ResultsList from 'components/ResultsList';
import ChangeSortDirButton from 'components/ChangeSortDirButton';

import { useGithubReposTable } from './hooks/useGithubReposTable';

const RepositoriesList = ({ inputText }) => {
  const {
    isLoading,
    items,
    sortDir,
    totalPages,
    currentPage,
    handleChangePage,
    handleChangeSortDir,
  } = useGithubReposTable(inputText);

  if (isLoading) {
    return <Spiner />;
  }

  if (!items?.length) {
    return <EmptyView />;
  }

  return (
    <div>
      <ChangeSortDirButton handleClick={handleChangeSortDir} dir={sortDir} />
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
