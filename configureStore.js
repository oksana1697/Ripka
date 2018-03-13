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






import { createStore } from 'redux'
import todoApp from './src/reducers/index'

//import promise from 'redux-promise'
//import createLogger from 'redux-logger'

const logger = (store) => ( next) => {
    if (!console.group) {
        return next
    }

    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = next(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}

const promise = (store) =>(next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }
    return next(action);}

const wrapDispatchWithMiddlewares = (store, middlewares) =>
    middlewares.slice().reverse().forEach(middleware =>
        store.dispatch = middleware(store)(store.dispatch)
    );

const configureStore = () => {
    const store = createStore(todoApp)
    const middlewares = [promise];
    if (process.env.NODE_ENV !== 'production'){
        middlewares.push(logger)
    }
    wrapDispatchWithMiddlewares(store, middlewares);
    return store
};

export default configureStore