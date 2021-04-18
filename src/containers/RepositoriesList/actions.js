import * as api from 'services/reposService';

import {
  SET_REPOS,
  SET_IS_LOADING,
  SET_TOTAL_REPOS,
  TO_DEFAULT,
} from './actionTypes';

const setRepos = (users) => ({
  type: SET_REPOS,
  payload: users,
});

const setTotalRepos = (totalRepos) => ({
  type: SET_TOTAL_REPOS,
  payload: totalRepos,
});

const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const toDefault = () => ({
  type: TO_DEFAULT,
});

export const requestGithubUsers = (params) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));

    const { items, totalCount } = await api.getRepositories(params);

    dispatch(setRepos(items));
    dispatch(setTotalRepos(totalCount));

    dispatch(setIsLoading(false));
  } catch (err) {
    console.log('Bad news...', err);
    dispatch(setRepos([]));
  }
};
