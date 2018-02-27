import { createStore } from 'redux'

const events = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'REMOVE_EVENT':
            return state.map(t => event(t, action));
        default:
            return state;
    }
};


const event = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'REMOVE_EVENT':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};
const Events = (state = {}, action) => {
    return {
        events: events(
            state.events,
            action
        )}};

const store = createStore(Events);

//can add new info to the reducer via reducer composition
// (for example to filter events as past and upcoming)- but is not needed now
