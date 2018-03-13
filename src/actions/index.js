import {v4} from 'node-uuid'
import * as api from '../api'

export const addEvent = (name, description,
                         date, organization,contacts
) =>
    ({
        type: 'ADD_EVENT',
        id: v4(),
        name,
        description,
        date,
        organization,
        contacts,

    });

const receiveTodos = (response) => ({
    type: 'RECEIVE_TODOS',
    response
});

export const fetchTodos = () =>
api.fetchTodos().then(response =>
        receiveTodos(response)

);







