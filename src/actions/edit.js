import * as api from '../api';
import {
    editEventFailure,
    editEventStart,
    editEventSuccess,
} from './index';

export const editEvent = (event, id) => async dispatch => {
    dispatch(editEventStart(id));
    try {
        await api.editEvent({...event, id});
        dispatch(editEventSuccess(id));
    } catch (e) {
        dispatch(editEventFailure(id));
    }
};
