import { combineReducers } from 'redux';
import events from './events';
import users from './users';

const eventApp = combineReducers({
  events,
  users,
});
export default eventApp;
