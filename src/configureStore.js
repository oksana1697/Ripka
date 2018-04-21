import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import eventApp from './reducers/index';
import thunk from 'redux-thunk';

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(
    eventApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );
};

export default configureStore;
