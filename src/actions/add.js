import * as api from '../api';

import {
  addEventFailure,
  addEventStart,
  addEventSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess,
} from './index';

export const addEvent = event => async dispatch => {
  dispatch(addEventStart(event));

  try {
    const event = await api.addEvent(event);

    if (!event.errors) {
      dispatch(addEventSuccess(event));
    } else {
      dispatch(addEventFailure(event.error));
    }
  } catch (error) {
    dispatch(addEventFailure(error));
  }
};

export const addUser = user => async dispatch => {
  dispatch(addUserStart(user));

  try {
    const user = await api.addUser(user);

    if (!user.errors) {
      dispatch(addUserSuccess(user));
    } else {
      dispatch(addUserFailure(user.error));
    }
  } catch (error) {
    dispatch(addUserFailure(error));
  }
};
