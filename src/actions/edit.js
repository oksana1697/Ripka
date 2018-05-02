import * as api from '../api';
import {
    editEventFailure,
    editEventStart,
    editEventSuccess,
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
