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
import { arrayOfEvents, arrayOfUsers } from './schema';
import { normalize } from 'normalizr';

export const fetchEvent = id => async dispatch => {
  dispatch(fetchEventStart(id));
  try {
    let events = await api.fetchEvent(id);
    if (!events.error) {
      events = normalize([events], arrayOfEvents);
      dispatch(fetchEventSuccess(events.result, events.entities.events));
    } else {
      dispatch(fetchEventFailure(events.error));
    }
  } catch (error) {
    fetchEventFailure(error);
  }
};

export const fetchEvents = () => async dispatch => {
    // dispatch(fetchEventsStart());
    // try {
    //     let response = await api.fetchEvents();
    //     if (!response.error) {
    //         response = normalize(response, arrayOfEvents);
    //         dispatch(fetchEventsSuccess(response.result, response.entities.events));
    //     } else {
    //         dispatch(fetchEventsFailure(response.error));
    //     }
    // } catch (error) {
    //     fetchEventsFailure(error);
    // }
};

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersStart());
  try {
    let response = await api.fetchUsers();
    if (!response.error) {
      response = normalize(response, arrayOfUsers);
        dispatch(fetchUsersSuccess(response.result, response.entities.users));
    } else {
      dispatch(fetchUsersFailure(response.error));
    }
  } catch (error) {
    fetchUsersFailure(error);
  }
};

export const fetchUser = id => async dispatch => {
  dispatch(fetchUserStart(id));
  try {
    let users = await api.fetchUser(id);
    if (!users.error) {
        users = normalize([users], arrayOfUsers);
      dispatch(fetchUserSuccess(users.result, users.entities.users));
    } else {
      dispatch(fetchUserFailure(users.error));
    }
  } catch (error) {
    fetchUserFailure(error);
  }
};

export const fetchPaginateEvents = (page, direction) => async dispatch => {
    console.log(page, direction)
    dispatch(fetchEventsStart());
    try {
        let response = await api.fetchPaginateEvents(page);
        if (!response.error) {
            response = normalize(response, arrayOfEvents);
            dispatch(fetchEventsSuccess(response.result, response.entities.events, page, direction));
        } else {
            dispatch(fetchEventsFailure(response.error));
        }
    } catch (error) {
        fetchEventsFailure(error);
    }
};

export const fetchPaginateUsers = page => async dispatch => {
    dispatch(fetchUsersStart());
    try {
        let response = await api.fetchPaginateUsers(page);
        if (!response.error) {
            response = normalize(response, arrayOfUsers);
            dispatch(fetchUsersSuccess(response.result, response.entities.users));
        } else {
            dispatch(fetchUsersFailure(response.error));
        }
    } catch (error) {
        fetchUsersFailure(error);
    }
};
