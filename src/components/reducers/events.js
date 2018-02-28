import {createStore} from "redux";

export const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                event(undefined, action)
            ];
        case 'REMOVE_EVENT':
            return state.map(t => event(t, action));
        default:
            return state;
    }
};

import { combineReducers } from 'redux'; // CDN Redux import

const eventApp = combineReducers({
    events
});

export const store = createStore(eventApp);