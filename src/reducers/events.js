import { combineReducers } from "redux";
import {
  ADD_EVENT_START,
  ADD_EVENT_FAILURE,
  ADD_EVENT_SUCCESS
} from "../actions/actionTypes";

export const events = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT_SUCCESS:
      return [...state, action.event];

    case "RECEIVE_EVENTS":
      return [...action.response];

    case "SLICE_EVENTS":
      return [...state, ...action.response];

    case "DELETE_EVENT":
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

export default combineReducers({
  events,
  isEventProcessing
});

export const getIsEventProcessing = state => state.isEventProcessing;
export const getAllAvailableEvents = state => state.events;