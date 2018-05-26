import * as api from '../api/index';
import { normalize } from 'normalizr';

import {
  addEventFailure,
  addEventStart,
  addEventSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess,
} from './index';
import { arrayOfEvents, arrayOfUsers } from './schema';

export const addEvent = events => async dispatch => {
  const tempEvent = { ...events };
  dispatch(addEventStart(events));
  try {
    let events = await api.addEvent(tempEvent);
    if (!events.errors) {
      events = normalize([events], arrayOfEvents);
      dispatch(addEventSuccess(events.result, events.entities.events));
    } else {
      dispatch(addEventFailure(events.error));
    }
  } catch (error) {
    dispatch(addEventFailure(error));
  }
};

export const addUser = users => async dispatch => {
  const tempUser = { ...users };
  dispatch(addUserStart(users));
  try {
    let users = await api.addUser(tempUser);
    if (!users.errors) {
      users = normalize([users], arrayOfUsers);
      dispatch(addUserSuccess(users.result, users.entities.users));
    } else {
      dispatch(addUserFailure(users.error));
    }
  } catch (error) {
    dispatch(addUserFailure(error));
  }
};
