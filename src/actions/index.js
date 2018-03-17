import {v4} from 'node-uuid'
import * as api from '../api'
// TODO: thunk middleware


export const addEvent = (name, description, date, organization, contacts, location,photo) => {
    return api.pushEvent({
        id: v4(),
        name,
        description,
        date,
        organization,
        contacts,
        location,
        photo,
    }).then(response => {
        return {
            type: 'ADD_EVENT',
            ...response
        }
    });
};

const receiveEvents = (response) => ({
    type: 'RECEIVE_EVENTS',
    response
});

export const fetchEvents = () =>
    api.fetchEvents().then(response =>
        receiveEvents(response)
    );







