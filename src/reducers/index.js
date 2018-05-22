import { combineReducers } from "redux";
import events, * as fromEvents from "./events";
import users, * as fromUsers from "./users";
import { reducer as formReducer } from 'redux-form';

const eventApp = combineReducers({
    events,
    users,
    form: formReducer
});
export default eventApp;

export const getIsEventProcessing = state => fromEvents.getIsEventProcessing(state.events);
export const getAllAvailableEvents = state =>fromEvents.getAllAvailableEvents(state);
export const getEventById = (state, id) => fromEvents.getEventById(state, id);
export const getIsEventFetching = (id, state) => fromEvents.getIsEventFetching(id, state.events);

export const getIsUserProcessing = state => fromUsers.getIsUserProcessing(state.users);
export const getAllAvailableUsers = state => fromUsers.getAllAvailableUsers(state);
export const getUserById = (state, id) => fromUsers.getUserById(state, id);
export const getIsUserFetching = (id, state) => fromUsers.getIsUserFetching(id, state.users);