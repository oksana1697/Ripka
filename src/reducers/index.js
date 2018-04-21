import { combineReducers } from "redux";
import events, * as fromEvents from "./events";
import users from "./users";

const eventApp = combineReducers({
  events,
  users
});
export default eventApp;

export const getIsEventProcessing = state =>
  fromEvents.getIsEventProcessing(state.events);

export const getAllAvailableEvents = state => fromEvents.getAllAvailableEvents(state.events);