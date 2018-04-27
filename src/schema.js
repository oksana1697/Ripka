import { normalize, schema } from 'normalizr';
 // TODO: id : user
// Define a users schema
const user = new schema.Entity('users');

// Define your event schema
const event = new schema.Entity('events', {
    author: user,
});

const normalizedData = normalize(originalData, event);
