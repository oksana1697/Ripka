import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from './reducers/index'
import thunk from 'redux-thunk'


const configureStore = () => {
        const middlewares = [];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        todoApp,
            applyMiddleware(thunk)
    );
};

export default configureStore;

