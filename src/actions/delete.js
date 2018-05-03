import * as api from '../api';
import {
  deleteEventFailure,
  deleteEventStart,
  deleteEventSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} from './index';

export const deleteEvent = id => async dispatch => {
  dispatch(deleteEventStart(id));
  try {
    await api.deleteEvent(id);
    dispatch(deleteEventSuccess(id));
  } catch (e) {
    dispatch(deleteEventFailure(id));
  }
};
export const deleteUser = id => async dispatch => {
  dispatch(deleteUserStart(id));
  try {
    await api.deleteUser(id);
    dispatch(deleteUserSuccess(id));
  } catch (e) {
    dispatch(deleteUserFailure(id));
  }
};
