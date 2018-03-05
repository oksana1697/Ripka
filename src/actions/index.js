import { v4 } from 'node-uuid'
import { DateTime } from "luxon/src/datetime.js";
export const addEvent  = (name,description, date ) => ({
    type: 'ADD_EVENT',
    id: v4(),
    name,
    description,
    // date: date.toFormat("yyyy"),
    date
});


