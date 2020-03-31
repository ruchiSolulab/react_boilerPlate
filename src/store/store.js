import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import rootReducer from '../reducers/index';

const isProdcution = false;

const composeEnhancers =
  !isProdcution &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const middleware = applyMiddleware(thunk, promise, loadingBarMiddleware());
const enhancer = composeEnhancers(middleware);

export default createStore(rootReducer, {}, enhancer);
