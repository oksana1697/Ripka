import {v4} from 'node-uuid'
import * as api from '../api'
// TODO: thunk middleware


const add = (response) => ({
    type: 'ADD_EVENT',
    ...response
});


export const addEvent =(name, description, date, organization, contacts, location,photo)=> (dispatch) => {
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
        return dispatch(add(response))
    });
};



const receiveEvents = (response) => ({
    type: 'RECEIVE_EVENTS',
    response
});

export const fetchEvents = () => (dispatch) => {
        return api.fetchEvents().then((response) => {
            return dispatch(receiveEvents(response));
        });
};







