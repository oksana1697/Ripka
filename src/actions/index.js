import {v4} from 'node-uuid'
import * as api from '../api'

const addEVENT = (response) => ({
    type: 'ADD_EVENT',
    ...response
});
export const addEvent = (name, description, date, organization, contacts, location, photo) => (dispatch) => {
    return api.pushEvent({
        id: v4(),
        name,
        description,
        date,
        organization,
        contacts,
        location,
        photo,
    }).then((response) => {
        return dispatch(addEVENT(response))
    });
};

const receiveEvents = (response) => ({
    type: 'RECEIVE_EVENTS',
    response
});
export const fetchEvents = () => (dispatch) => {
    return api.fetchEvents().then((response) => {
        console.log("action/index/fetchEvents:", response)
        return dispatch(receiveEvents(response));
    });
};

const addUSER = (response) => ({
    type: 'ADD_USER',
    ...response
});
export const addUser = (user_name, user_description, user_date, user_interests, user_contacts, user_location,user_photo) => (dispatch) => {
    return api.pushUser({
        id: v4(),
        user_name,
        user_description,
        user_date,
        user_interests,
        user_contacts,
        user_location,
        user_photo
    }).then((response) => {
        return dispatch(addUSER(response))
    });
};

const receiveUsers = (response) => ({
    type: 'RECEIVE_USERS',
    response
});
export const fetchUsers = () => (dispatch) => {
    return api.fetchUsers().then((response) => {
        return dispatch(receiveUsers(response));
    });
};

const receiveSliceEvents = (response) => ({
    type: 'SLICE_EVENTS',
    response
});
export const testfetchSliceEvents = (num) => (dispatch) => {
    console.log("test_num:", num)
    return api.fetchSliceEvents(num).then((response) => {
        console.log("action/index:", response)
        return dispatch(receiveSliceEvents(response));
    });
};


const deleteEVENT = (responce) => ({
    type: 'DELETE_EVENT',
    ...responce
})

export const deleteEvent = (event) => (dispatch) => {
    return api.deleteEvent(event).then((response) => {
        return dispatch(deleteEVENT(response));
    });
}







