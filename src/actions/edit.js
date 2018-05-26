import * as api from '../api/index';
import {
  editEventFailure,
  editEventStart,
  editEventSuccess,
  editUserFailure,
  editUserStart,
  editUserSuccess,
} from './index';

export const editEvent = id => async dispatch => {
  dispatch(editEventStart(id));
  try {
    await api.editEvent(id);
    dispatch(editEventSuccess(id));
  } catch (e) {
    dispatch(editEventFailure(id));
  }
};

export const editUser = id => async dispatch => {
  dispatch(editUserStart(id));
  try {
    await api.editUser(id);
    dispatch(editUserSuccess(id));
  } catch (e) {
    dispatch(editUserFailure(id));
  }
};
