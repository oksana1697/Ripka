// import { combineReducers } from "redux";
// import {
//     ADD_EVENT_START,
//     ADD_EVENT_FAILURE,
//     ADD_EVENT_SUCCESS, FETCH_EVENT_SUCCESS, FETCH_EVENT_START, FETCH_EVENT_FAILURE, DELETE_EVENT, FETCH_EVENTS,
//     SLICE_EVENTS, FETCH_EVENTS_SUCCESS
// } from "../actions/actionTypes";
//
// export const events = (state = [], action) => {
//     switch (action.type) {
//         case ADD_EVENT_SUCCESS:
//         case FETCH_EVENT_SUCCESS:
//             return [...state, action.event];
//         case FETCH_EVENTS_SUCCESS:
//             return [...action.response];
//         case SLICE_EVENTS:
//             return [...state,...action.response];
//
//         case DELETE_EVENT:
//             const { id } = action;
//             return state.filter(el => el.id !== id);
//
//         default:
//             return state;
//     }
// };
//
// const isEventProcessing = (state = false, action) => {
//     switch (action.type) {
//         case ADD_EVENT_START:
//             return true;
//
//         case ADD_EVENT_FAILURE:
//         case ADD_EVENT_SUCCESS:
//             return false;
//
//         default:
//             return state;
//     }
// };
// const isFetching = (state = {}, action) => {
//     switch (action.type) {
//         case FETCH_EVENT_START:
//             return {
//                 ...state,
//                 [action.id]: true
//             };
//
//         case FETCH_EVENT_FAILURE:
//         case FETCH_EVENT_SUCCESS:
//             return {
//                 ...state,
//                 [action.id]: false
//             };
//
//         default:
//             return state;
//     }
// };
// export default combineReducers({
//     events,
//     isFetching,
//     isEventProcessing
// });
//
// export const getIsEventProcessing = state => state.isEventProcessing;
// export const getAllAvailableEvents = state => state.events;
// export const getEventById = (id, state) =>
//     state.events.find(event => event.id === Number(id));
//
// export const getIsEventFetching = (id, state) => state.isFetching[id];
import {combineReducers} from 'redux';
import {
    ADD_EVENT_START,
    ADD_EVENT_FAILURE,
    ADD_EVENT_SUCCESS,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_START,
    FETCH_EVENT_FAILURE,
    DELETE_EVENT,
    SLICE_EVENTS,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    FETCH_EVENTS_START,
    DELETE_EVENT_SUCCESS, EDIT_EVENT_SUCCESS,
} from '../actions/actionTypes';
// export const events = (state = [], action) => {
//     switch (action.type) {
//         case ADD_EVENT_SUCCESS:
//         case FETCH_EVENT_SUCCESS:
//             return [...state, action.event];
//         case FETCH_EVENTS_SUCCESS:
//             return [...action.response];
//
//         case DELETE_EVENT:
//             const { id } = action;
//             return state.filter(el => el.id !== id);
//
//         default:
//             return state;
//     }
// };

export const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_EVENT_SUCCESS:
        case ADD_EVENT_SUCCESS:
            console.log('(from Reducer fetch event) action.event: ', state, action.events);
            return {
                ...state,
                ...action.events,
            };
        case FETCH_EVENTS_SUCCESS:
            return {...state, ...action.events};
        case DELETE_EVENT_SUCCESS:
            const {id} = action;
            return state.filter(el => el.id !== id);
        case EDIT_EVENT_SUCCESS:
            const {edit_id} = action;
            return state.filter(el => el.id !== edit_id);
        case FETCH_EVENT_FAILURE:
        case ADD_EVENT_FAILURE:
        case FETCH_EVENTS_FAILURE:
            return action;
        default:
            return state;
    }
};
export const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_EVENT_SUCCESS:
        case FETCH_EVENTS_SUCCESS:
        case ADD_EVENT_SUCCESS:
            return [...state, ...action.ids].filter(
                (el, i, arr) => arr.indexOf(el) === i,
            );
        case FETCH_EVENT_FAILURE:
        case FETCH_EVENTS_FAILURE:
        case ADD_EVENT_FAILURE:
            return action;
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
        case FETCH_EVENTS_START:
            return {
                ...state,
                [action.id]: true,
            };
        case FETCH_EVENTS_FAILURE:
        case FETCH_EVENTS_SUCCESS:
        case FETCH_EVENT_FAILURE:
        case FETCH_EVENT_SUCCESS:
            return {
                ...state,
                [action.id]: false,
            };
        default:
            return state;
    }
};
export default combineReducers({
    // events,
    byId,
    allIds,
    isFetching,
    isEventProcessing,
});
export const getIsEventProcessing = state => state.isEventProcessing;
export const getAllAvailableEvents = state => state.events.allIds;
export const getEventById = (state, id) => {
    console.log('STATE:', state, 'id', id);
    // console.log('STATE.event.byId:', state.events.byId[id]);
    return state.events.byId[id];
};
export const getIsEventFetching = (id, state) => {
    // console.log('STATE.ISFetching:', id, state, state.isFetching[id]);
    return state.isFetching[id];
};
