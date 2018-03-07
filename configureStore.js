import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import eventApp from "./src/reducers";

const configureStore = () => {
    localStorage.clear();
    const persistedState = loadState();
    const store = createStore(eventApp, persistedState)

    store.subscribe(throttle(() => {
        saveState({
            events: store.getState().events
        })
    }, 1000));

    return store
};

export default configureStore