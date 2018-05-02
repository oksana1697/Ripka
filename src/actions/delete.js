import * as api from '../api';
import {
  deleteEventFailure,
  deleteEventStart,
  deleteEventSuccess,
} from './index';

export const deleteEvent = id => async dispatch => {
  console.log('111111111111')
  dispatch(deleteEventStart(id));
  try {
    await api.deleteEvent(id);
    console.log(2222222222222222);

      dispatch(deleteEventSuccess(id));
  } catch (e) {
      console.log('asasas', e);
    dispatch(deleteEventFailure(id));
  }
};
