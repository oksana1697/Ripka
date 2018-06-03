import { combineReducers } from "redux"
import events, * as fromEvents from "./events"
import users, * as fromUsers from "./users"
import { reducer as formReducer } from "redux-form"

const eventApp = combineReducers({
  events,
  users,
  form: formReducer
})
export default eventApp

//Events
export const getSearchEventsResult = (offset, count, query, state) => fromEvents.getSearchEventsResult(offset, count, query, state.events)

export const getEventsSearchResults = state => fromEvents.getEventsSearchResults(state.events)
export const getAllAvailableEvents = state => fromEvents.getAllAvailableEvents(state.events)
export const getEventById = (state, id) => fromEvents.getEventById(state.events, id)
export const getIsEventFetching = (id, state) => fromEvents.getIsEventFetching(id, state.events)

//Users
export const getUsersSearchResults = state => fromUsers.getUsersSearchResults(state.users)
export const getAllAvailableUsers = state => fromUsers.getAllAvailableUsers(state.users)
export const getUserById = (state, id) => fromUsers.getUserById(state.users, id)
export const getIsUserFetching = (id, state) => fromUsers.getIsUserFetching(id, state.users)
