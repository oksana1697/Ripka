import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import todoApp from './src/reducers/index'
import {fakeDate} from './getFakeData'

const configureStore = () => {
        const middlewares = [promise];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }
    return createStore(
        todoApp,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import todoApp from './src/reducers/index'
//
// // Note: this API requires redux@>=3.1.0
// const configureStore = () => createStore(
//     todoApp,
//     applyMiddleware(thunk)
// );
// export default configureStore;


