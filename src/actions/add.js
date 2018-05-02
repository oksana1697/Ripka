import * as api from '../api';

import {
  addEventFailure,
  addEventStart,
  addEventSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess,
} from './index';
import {arrayOfEvents} from "./schema";
import { normalize } from 'normalizr';
export const addEvent = events => async dispatch => {
  const tempEvent = {...events};
  dispatch(addEventStart(events));

  try {
    let events = await api.addEvent(tempEvent);

    if (!events.errors) {
        events = normalize([events], arrayOfEvents);
        console.log("API add event: ",events)
      dispatch(addEventSuccess(events.result,events.entities.events));
    } else {
      dispatch(addEventFailure(events.error));
    }
  } catch (error) {
    dispatch(addEventFailure(error));
  }
};

export const addUser = user => async dispatch => {
  const tempUser = {...user};
  dispatch(addUserStart(user));

  try {
    const user = await api.addUser(tempUser);

    if (!user.errors) {
      dispatch(addUserSuccess(user));
    } else {
      dispatch(addUserFailure(user.error));
    }
  } catch (error) {
    dispatch(addUserFailure(error));
  }
};
