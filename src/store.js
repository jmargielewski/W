/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import async from './middleware/async';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {
    auth: { authenticated: localStorage.getItem('isLoggin') },
    form: { register: { value: { email: null, password: null } } },
  },
  composeEnhancers(applyMiddleware(async, thunk)),
);

export default store;
