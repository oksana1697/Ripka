import * as api from '../api';
import {
  deleteEventFailure,
  deleteEventStart,
  deleteEventSuccess,
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
