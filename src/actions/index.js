import { v4 } from 'node-uuid'

export const addEvent  = (name,description, date ) =>
    ({
    type: 'ADD_EVENT',
    id: v4(),
    name,
    description,
    date,
});







