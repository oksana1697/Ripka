import {
    ADD_EVENT_FAILURE, ADD_EVENT_START, ADD_EVENT_SUCCESS, ADD_USER_FAILURE, ADD_USER_START, ADD_USER_SUCCESS,
    DELETE_EVENT,
    DELETE_EVENT_FAILURE,
    DELETE_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    FETCH_EVENT_START,
    FETCH_EVENT_SUCCESS, FETCH_EVENTS_FAILURE, FETCH_EVENTS_START, FETCH_EVENTS_SUCCESS, FETCH_USER_FAILURE,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS
} from "./actionTypes";

export const addEventStart = event => ({type: ADD_EVENT_START, event});
export const addEventSuccess = event => ({type: ADD_EVENT_SUCCESS, event});
export const addEventFailure = error => ({type: ADD_EVENT_FAILURE, error});

export const addUserStart = user => ({type: ADD_USER_START, user});
export const addUserSuccess = user => ({type: ADD_USER_SUCCESS, user});
export const addUserFailure = error => ({type: ADD_USER_FAILURE, error});

export const fetchEventStart = id => ({type: FETCH_EVENT_START, id});
export const fetchEventSuccess = event => ({type: FETCH_EVENT_SUCCESS, event});
export const fetchEventFailure = error => ({type: FETCH_EVENT_FAILURE, error});

export const fetchUsersStart = response => ({type: FETCH_USERS_START, response});
export const fetchUsersSuccess = response => ({type: FETCH_USERS_SUCCESS, response});
export const fetchUsersFailure = error => ({type: FETCH_USERS_FAILURE, error});


export const fetchEventsStart = response => ({type: FETCH_EVENTS_START, response});
export const fetchEventsSuccess = (response) => ({type: FETCH_EVENTS_SUCCESS, response});
// export const fetchEventsSuccess = (ids, response) => ({type: FETCH_EVENTS_SUCCESS, ids, response});
export const fetchEventsFailure = error => ({type: FETCH_EVENTS_FAILURE, error});

export const fetchUserStart = id => ({type: FETCH_USER_START, id});
export const fetchUserSuccess = user => ({type: FETCH_USER_SUCCESS, user});
export const fetchUserFailure = error => ({type: FETCH_USER_FAILURE, error});

export const deleteEventStart = id => ({ type: DELETE_EVENT, id });
export const deleteEventSuccess = id => ({ type: DELETE_EVENT_SUCCESS, id });
export const deleteEventFailure = id => ({ type: DELETE_EVENT_FAILURE, id });
