import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from './src/reducers/index'
import thunk from 'redux-thunk'


const configureStore = () => {
        // const middlewares = [promise];
        const middlewares = [];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        todoApp,
        //applyMiddleware(...middlewares),
            applyMiddleware(thunk)
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


