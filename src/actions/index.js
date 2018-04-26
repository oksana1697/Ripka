import {v4} from "uuid";
import * as api from "../api";

import {
    ADD_EVENT_START,
    ADD_EVENT_FAILURE,
    ADD_EVENT_SUCCESS,
    //
    DELETE_EVENT,
    DELETE_EVENT_FAILURE,
    DELETE_EVENT_SUCCESS,
    //
    RECEIVE_EVENTS,
    RECEIVE_USERS,
    SLICE_EVENTS,
    FETCH_EVENT_START,
    FETCH_EVENT_FAILURE,
    FETCH_EVENT_SUCCESS,
    //
    ADD_USER_START,
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS,
    //
    FETCH_USER_START,
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS
} from "./actionTypes";

const addEventStart = event => ({type: ADD_EVENT_START, event});
const addEventSuccess = event => ({type: ADD_EVENT_SUCCESS, event});
const addEventFailure = error => ({type: ADD_EVENT_FAILURE, error});

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

const receiveEvents = response => ({
    type: RECEIVE_EVENTS,
    response
});

export const fetchEvents = () => dispatch => {
    return api.fetchEvents().then(response => {
        console.log("action/index/fetchEvents:", response);
        return dispatch(receiveEvents(response));
    });
};

const receiveSliceEvents = response => ({
    type: SLICE_EVENTS,
    response
});

export const testFetchSliceEvents = num => dispatch => {
    return api.fetchSliceEvents(num).then(response => {
        return dispatch(receiveSliceEvents(response));
    });
};

const deleteEventStart = id => ({type: DELETE_EVENT, id});
const deleteEventSuccess = id => ({type: DELETE_EVENT_SUCCESS, id});
const deleteEventFailure = id => ({type: DELETE_EVENT_FAILURE, id});

export const deleteEvent = id => async dispatch => {
    dispatch(deleteEventStart(id));
    try {
        await api.deleteEvent(id);
        dispatch(deleteEventSuccess(id));
    } catch (e) {
        dispatch(deleteEventFailure(id));
    }
};

const fetchEventStart = id => ({type: FETCH_EVENT_START, id});
const fetchEventSuccess = event => ({type: FETCH_EVENT_SUCCESS, event});
const fetchEventFailure = error => ({type: FETCH_EVENT_FAILURE, error});

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



const addUserStart = user => ({type: ADD_USER_START, user});
const addUserSuccess = user => ({type: ADD_USER_SUCCESS, user});
const addUserFailure = error => ({type: ADD_USER_FAILURE, error});

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

const receiveUsers = response => ({
    type: RECEIVE_USERS,
    response
});

export const fetchUsers = () => dispatch =>
    api.fetchUsers().then(response => dispatch(receiveUsers(response)));

const fetchUserStart = id => ({type: FETCH_USER_START, id});
const fetchUserSuccess = user => ({type: FETCH_USER_SUCCESS, user});
const fetchUserFailure = error => ({type: FETCH_USER_FAILURE, error});

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