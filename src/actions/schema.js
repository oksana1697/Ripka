import { schema} from 'normalizr';

export const eventSchema = new schema.Entity('events');
export const arrayOfEvents = new schema.Array(eventSchema);

export const userSchema = new schema.Entity('users');
export const arrayOfUsers = new schema.Array(userSchema);
