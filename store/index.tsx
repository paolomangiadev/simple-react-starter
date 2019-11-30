import { createStore, compose } from 'redux';

// Import custom components
import reducers from '../reducers';

const store = (initialState = {}) => {
  return createStore(reducers, initialState);
};

export default store;