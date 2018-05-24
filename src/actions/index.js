import {
    ADD_EVENT_FAILURE, ADD_EVENT_START, ADD_EVENT_SUCCESS, ADD_USER_FAILURE, ADD_USER_START, ADD_USER_SUCCESS,
    DELETE_EVENT_START,
    DELETE_EVENT_FAILURE,
    DELETE_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    FETCH_EVENT_START,
    FETCH_EVENT_SUCCESS, FETCH_EVENTS_FAILURE, FETCH_EVENTS_START, FETCH_EVENTS_SUCCESS, FETCH_USER_FAILURE,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    EDIT_EVENT_START,
    EDIT_EVENT_FAILURE,
    EDIT_EVENT_SUCCESS, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, EDIT_USER_START, EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE, SEARCH_USERS_SUCCESS, SEARCH_USERS_START, SEARCH_USERS_FAILURE, SEARCH_EVENTS_SUCCESS,
    SEARCH_EVENTS_START, SEARCH_EVENTS_FAILURE
} from "./actionTypes";

export const fetchEventStart = id => ({type: FETCH_EVENT_START, id});
export const fetchEventSuccess =(ids, events) => ({type: FETCH_EVENT_SUCCESS, ids,events});
export const fetchEventFailure = error => ({type: FETCH_EVENT_FAILURE, error});

export const fetchUserStart = id => ({type: FETCH_USER_START, id});
export const fetchUserSuccess = (ids,users) => ({type: FETCH_USER_SUCCESS, ids,users});
export const fetchUserFailure = error => ({type: FETCH_USER_FAILURE, error});

export const fetchUsersStart = () => ({type: FETCH_USERS_START});
export const fetchUsersSuccess = (ids,users) => ({type: FETCH_USERS_SUCCESS, ids,users});
export const fetchUsersFailure = error => ({type: FETCH_USERS_FAILURE, error});

export const fetchEventsStart = () => ({type: FETCH_EVENTS_START});
export const fetchEventsSuccess = (ids, events, page, direction) => ({type: FETCH_EVENTS_SUCCESS, ids, events, page, direction});
export const fetchEventsFailure = error => ({type: FETCH_EVENTS_FAILURE, error});


export const addEventStart =  events => ({type: ADD_EVENT_START, events});
export const addEventSuccess = (ids,events) => ({type: ADD_EVENT_SUCCESS, ids,events});
export const addEventFailure = error => ({type: ADD_EVENT_FAILURE, error});

export const addUserStart = users => ({type: ADD_USER_START, users});
export const addUserSuccess = (ids,users) => ({type: ADD_USER_SUCCESS, ids,users});
export const addUserFailure = error => ({type: ADD_USER_FAILURE, error});

export const deleteEventStart = id => ({ type: DELETE_EVENT_START, id });
export const deleteEventSuccess = id => ({ type: DELETE_EVENT_SUCCESS, id });
export const deleteEventFailure = id => ({ type: DELETE_EVENT_FAILURE, id });

export const deleteUserStart = id => ({ type: DELETE_USER_START, id });
export const deleteUserSuccess = id => ({ type: DELETE_USER_SUCCESS, id });
export const deleteUserFailure = id => ({ type: DELETE_USER_FAILURE, id });

export const editEventStart = id => ({ type: EDIT_EVENT_START, id });
export const editEventSuccess = id => ({ type: EDIT_EVENT_SUCCESS, id });
export const editEventFailure = id => ({ type: EDIT_EVENT_FAILURE, id });

export const editUserStart = id => ({ type: EDIT_USER_START, id });
export const editUserSuccess = id => ({ type: EDIT_USER_SUCCESS, id });
export const editUserFailure = id => ({ type: EDIT_USER_FAILURE, id });

export const searchUsersSuccess = foundUsers => ({ type: SEARCH_USERS_SUCCESS, foundUsers });
export const searchUsersStart = id => ({ type: SEARCH_USERS_START, id });
export const searchUsersFailure = id => ({ type: SEARCH_USERS_FAILURE, id });

export const searchEventsSuccess = foundEvents => ({ type: SEARCH_EVENTS_SUCCESS, foundEvents });
export const searchEventsStart = id => ({ type: SEARCH_EVENTS_START, id });
export const searchEventsFailure = id => ({ type: SEARCH_EVENTS_FAILURE, id });