import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'containers/RepositoriesList/actions';

import { usePagination } from 'hooks/usePagination';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';

import { REQUEST_TIME_DELAY } from 'config';

export const useGithubReposTable = (input) => {
  const dispatch = useDispatch();

  const [sortDir, setSortDir] = useState('asc');

  const { items, totalItems, isLoading } = useSelector((state) => state.repos);

  const { totalPages, currentPage, setCurrentPage } = usePagination(totalItems);

  const toDefault = () => {
    setSortDir('asc');
    setCurrentPage(0);
  };

  const handleChangeSortDir = () => {
    const dir = sortDir === 'asc' ? 'desc' : 'asc';

    setSortDir(dir);
    setCurrentPage(0);
    getTableData({ dir, input, page: 1 });
  };

  const handleChangePage = ({ selected }) => {
    setCurrentPage(selected);
    getTableData({ page: selected + 1, input });
  };

  const getTableData = async ({ input, ...restParams }) => {
    if (input) {
      dispatch(
        actions.requestGithubUsers({
          dir: sortDir,
          page: currentPage + 1,
          input,
          ...restParams,
        })
      );
    } else {
      dispatch(actions.toDefault());
    }
  };

  useDebouncedEffect(
    () => {
      toDefault();
      getTableData({ input, page: 1, dir: 'asc' });
    },
    REQUEST_TIME_DELAY,
    [input]
  );

  return {
    isLoading,
    items,
    sortDir,
    totalPages,
    currentPage,
    handleChangePage,
    handleChangeSortDir,
    getTableData,
  };
};
