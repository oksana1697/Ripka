import {v4} from 'node-uuid'
import * as api from '../api'

export const addEvent = (name, description, date, organization, contacts, location) =>
    ({
        type: 'ADD_EVENT',
        id: v4(),
        name,
        description,
        date,
        organization,
        contacts,
        location,
    });

const receiveEvents = (response) => ({
    type: 'RECEIVE_EVENTS',
    response
});

export const fetchEvents = () =>
    api.fetchEvents().then(response =>
        receiveEvents(response)
    );







