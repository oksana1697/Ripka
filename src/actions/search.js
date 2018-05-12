import { arrayOfEvents } from './schema';
import {
  fetchEventFailure,
  fetchUsersFailure,
  searchEventsFailure,
  searchEventsStart,
  searchEventsSuccess,
  searchUsersFailure,
  searchUsersStart,
  searchUsersSuccess,
} from './index';
import { normalize } from 'normalizr/index';
import * as api from '../api';

export const searchEvents = filter => async dispatch => {
  dispatch(searchEventsStart(filter));
  try {
    let events = await api.findEvents(filter);
    if (!events.error) {
      events = normalize([events], arrayOfEvents);
      dispatch(searchEventsSuccess(events.result, events.entities.events));
    } else {
      dispatch(searchEventsFailure(events.error));
    }
  } catch (error) {
    fetchEventFailure(error);
  }
};

export const searchUsers = filter => async dispatch => {
  dispatch(searchUsersStart(filter));
  try {
    let users = await api.findUsers(filter);
    if (!users.error) {
      users = normalize([users], arrayOfUsers);
      dispatch(searchUsersSuccess(users.result, users.entities.events));
    } else {
      dispatch(searchUsersFailure(users.error));
    }
  } catch (error) {
    fetchUsersFailure(error);
  }
};
