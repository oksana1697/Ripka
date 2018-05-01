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
  const tempEvent = {...event};
  dispatch(addEventStart(event));

  try {
    const event = await api.addEvent(tempEvent);

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
