// import { createStore } from 'redux'
// import eventApp from "./src/reducers";
//
// const addPromiseSupportToDispatch = (store) => {
//     const rawDispatch = store.dispatch;
//     return (action) => {
//         if (typeof action.then === 'function') {
//             return action.then(rawDispatch);
//         }
//         return rawDispatch(action);
//     };
// };
//
//
//
// const configureStore = () => {
//
//     const store = createStore(eventApp)
//
//
//     store.dispatch = addPromiseSupportToDispatch(store);
//
//     return store
// };
//
// export default configureStore






import { createStore, applyMiddleware } from 'redux'
import todoApp from './src/reducers/index'

import promise from 'redux-promise'
import createLogger from 'redux-logger'

const configureStore = () => {
    const middlewares = [promise];
    if (process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger)
    }
    return createStore(todoApp,    applyMiddleware(...middlewares))
};

export default configureStore