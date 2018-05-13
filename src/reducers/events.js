import { combineReducers } from 'redux';
import {
  ADD_EVENT_START,
  ADD_EVENT_FAILURE,
  ADD_EVENT_SUCCESS,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_START,
  FETCH_EVENT_FAILURE,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_START,
  DELETE_EVENT_SUCCESS,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAILURE,
  EDIT_EVENT_START,
  SEARCH_EVENTS_SUCCESS,
  SEARCH_EVENTS_FAILURE,
} from '../actions/actionTypes';

export const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        ...action.events,
      };
    case FETCH_EVENTS_SUCCESS:
    case SEARCH_EVENTS_SUCCESS:
      return { ...state, ...action.events };
    case DELETE_EVENT_SUCCESS:
      const { id } = action;
      let keys = Object.keys(state).filter(el => el !== id);
      let newState = {};
      keys.forEach(item => {
        newState[item] = state[item];
      });

      return { ...newState };
    case EDIT_EVENT_SUCCESS:
      const { edit_id } = action;
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
    case SEARCH_EVENTS_SUCCESS:
    case FETCH_EVENTS_SUCCESS:
    case ADD_EVENT_SUCCESS:
      return [...state, ...action.ids].filter(
        (el, i, arr) => arr.indexOf(el) === i,
      );
    case DELETE_EVENT_SUCCESS: {
      return state.filter(el => el !== action.id);
    }
    case FETCH_EVENT_FAILURE:
    case FETCH_EVENTS_FAILURE:
    case SEARCH_EVENTS_FAILURE:
    case ADD_EVENT_FAILURE:
      return action;
    default:
      return state;
  }
};

const isEventProcessing = (state = false, action) => {
  switch (action.type) {
    case ADD_EVENT_START:
    case EDIT_EVENT_START:
      return true;

    case ADD_EVENT_FAILURE:
    case ADD_EVENT_SUCCESS:
    case EDIT_EVENT_FAILURE:
    case EDIT_EVENT_SUCCESS:
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
  byId,
  allIds,
  isFetching,
  isEventProcessing,
});
export const getIsEventProcessing = state => state.isEventProcessing;
export const getAllAvailableEvents = state => state.events.allIds;
export const getEventById = (state, id) => {
  return state.events.byId[id];
};
export const getIsEventFetching = (id, state) => state.isFetching[id];
