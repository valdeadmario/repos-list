import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reposReducer from 'containers/RepositoriesList/reducer';

const initialState = {};

const middlewares = [thunk];

const composedEnhancers = applyMiddleware(...middlewares);

const reducers = {
  repos: reposReducer,
};

const rootReducer = combineReducers({
  ...reducers,
});

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
