import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
    events: [{
        id: v4(),
        name: 'hey',
        description: 'true',
    }, {
        id: v4(),
        name: '123',
        description: 'true',
    }, {
        id: v4(),
        name: '122',
        description: 'true',
    }],
};

const delay = (ms) =>
    new Promise(resolve =>
        setTimeout(resolve, ms));

export const fetchTodos = () =>
    delay(500).then(() => {
        return fakeDatabase.events})
