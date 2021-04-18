import { SET_REPOS, SET_IS_LOADING, SET_TOTAL_REPOS, TO_DEFAULT } from './actionTypes';

const initialState = {
  items: [],
  totalItems: 0,
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return { ...state, items: action.payload };
    case SET_TOTAL_REPOS:
      return { ...state, totalItems: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case TO_DEFAULT:
      return initialState;
    default:
      return state;
  }
};

export default usersReducer;
