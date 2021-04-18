import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from 'containers/RepositoriesList/actions';

export const useGithubReposTable = (input) => {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector((state) => state.repos);

  const getTableData = async ({ input }) => {
    if (input) {
      dispatch(
        actions.requestGithubUsers({
          input,
        })
      );
    } else {
      dispatch(actions.toDefault());
    }
  };

  useEffect(() => {
    getTableData({ input });
  }, [input]);

  return {
    isLoading,
    items,
  };
};
