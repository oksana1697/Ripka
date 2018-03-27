const assert =  require('assert');
// const users = require('./src/reducers/users')
import events from './src/reducers/events'
describe('tests', function(){
    describe('users', function(){
        it('should add user', function(){
            // Call the exported function from the module
            const expected = [{
                "id": "1",
                // "name": "Event Name",
                // "description": "Good Event",
                // "date": null,
                // "organization": "Organization Name",
                // "contacts": "+12 345 67 89",
                // "location": "Kyiv",
                // "photo": "https://res.cloudinary.com/ucu/image/upload/v1521905282/hlehumlq5evp7opbvn8k.png"
            }];
            const received = events([{
                "id": "1",
                // "name": "Event Name",
                // "description": "Good Event",
                // "date": null,
                // "organization": "Organization Name",
                // "contacts": "+12 345 67 89",
                // "location": "Kyiv",
                // "photo": "https://res.cloudinary.com/ucu/image/upload/v1521905282/hlehumlq5evp7opbvn8k.png"
            }], 'ADD_EVENT');
            
            // console.log("received:", received)
            // console.log("expected:", expected)
            assert.deepEqual(expected, received)
        })
    });
    // describe('events', function(){
    //     it('should add user', function(){
    //         // Call the exported function from the module
    //         const expected = 1;
    //         const received = 1;
    //         assert.equal(expected, received)
    //     })
    // });
})