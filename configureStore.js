import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import todoApp from './src/reducers/index'


const configureStore = () => {
    const middlewares = [promise];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
        // Note: you can supply options to `createLogger()`
    }
    return createStore(
        todoApp,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;

