import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import actionsReducer from '../reducers/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      items: actionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
