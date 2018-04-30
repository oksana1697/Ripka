import * as api from '../api';
import {
  fetchEventFailure,
  fetchEventsFailure,
  fetchEventsStart,
  fetchEventsSuccess,
  fetchEventStart,
  fetchEventSuccess,
  fetchUserFailure,
  fetchUsersFailure,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUserStart,
  fetchUserSuccess,
} from './index';
import { arrayOfEvents } from './schema';
import { normalize } from 'normalizr';

export const fetchEvent = id => async dispatch => {
  dispatch(fetchEventStart(id));

  try {
    const event = await api.fetchEvent(id);

    if (!event.error) {
      dispatch(fetchEventSuccess(event));
    } else {
      dispatch(fetchEventFailure(event.error));
    }
  } catch (error) {
    fetchEventFailure(error);
  }
};

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersStart());
  try {
    const response = await api.fetchUsers();
    if (!response.error) {
      dispatch(fetchUsersSuccess(response));
    } else {
      dispatch(fetchUsersFailure(response.error));
    }
  } catch (error) {
    fetchUsersFailure(error);
  }
};

export const fetchEvents = () => async dispatch => {
  dispatch(fetchEventsStart());
  try {
    // const response = await api.fetchEvents();
    let response = await api.fetchEvents();
    if (!response.error) {
      // response = normalize(response, arrayOfEvents);
      dispatch(fetchEventsSuccess(response));
      // dispatch(fetchEventsSuccess(response.result, response.entities.events));
    } else {
      dispatch(fetchEventsFailure(response.error));
    }
  } catch (error) {
    fetchEventsFailure(error);
  }
};

export const fetchUser = id => async dispatch => {
  dispatch(fetchUserStart(id));

  try {
    const user = await api.fetchUser(id);

    if (!user.error) {
      dispatch(fetchUserSuccess(user));
    } else {
      dispatch(fetchUserFailure(user.error));
    }
  } catch (error) {
    fetchUserFailure(error);
  }
};
