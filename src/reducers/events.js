import { combineReducers } from "redux";
import {
    ADD_EVENT_START,
    ADD_EVENT_FAILURE,
    ADD_EVENT_SUCCESS, FETCH_EVENT_SUCCESS, FETCH_EVENT_START, FETCH_EVENT_FAILURE, DELETE_EVENT, FETCH_EVENTS,
    SLICE_EVENTS, FETCH_EVENTS_SUCCESS
} from "../actions/actionTypes";

export const events = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT_SUCCESS:
        case FETCH_EVENT_SUCCESS:
            return [...state, action.event];
        case FETCH_EVENTS_SUCCESS:
            return [...action.response];
        case SLICE_EVENTS:
            return [...state,...action.response];

        case DELETE_EVENT:
            const { id } = action;
            return state.filter(el => el.id !== id);

        default:
            return state;
    }
};

const isEventProcessing = (state = false, action) => {
    switch (action.type) {
        case ADD_EVENT_START:
            return true;

        case ADD_EVENT_FAILURE:
        case ADD_EVENT_SUCCESS:
            return false;

        default:
            return state;
    }
};
const isFetching = (state = {}, action) => {
    switch (action.type) {
        case FETCH_EVENT_START:
            return {
                ...state,
                [action.id]: true
            };

        case FETCH_EVENT_FAILURE:
        case FETCH_EVENT_SUCCESS:
            return {
                ...state,
                [action.id]: false
            };

        default:
            return state;
    }
};
export default combineReducers({
    events,
    isFetching,
    isEventProcessing
});

export const getIsEventProcessing = state => state.isEventProcessing;
export const getAllAvailableEvents = state => state.events;
export const getEventById = (id, state) =>
    state.events.find(event => event.id === Number(id));

export const getIsEventFetching = (id, state) => state.isFetching[id];