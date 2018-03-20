module.exports = function(){
    let faker =  require('faker')
    let _ = require('lodash')
    return {
        events: _.times(10,function (n) {
            return {
                id: n,
                name: faker.Company.companyName(),
                description: faker.Company.catchPhrase(),
                contacts: faker.PhoneNumber.phoneNumber(),
                location: faker.Address.streetAddress(),
                photo: faker.Image.cats()

            }})}}
// generate and save locally to json file

//
// module.exports = function(){
//     const faker =  require('faker')
//     const obj = {events:[]}
//     const fs = require('fs');
//     fs.readFile('events.json', 'utf8', function readFileCallback(err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             let obj = JSON.parse(data); //now it an object
//             for (let ids = 0; ids < 50; ids++) {
//
//                 obj.events.push({
//                     id: ids,
//                     name: faker.Name.findName(),
//                     description: faker.Company.companyName(),
//                     contacts: faker.PhoneNumber.phoneNumber(),
//                     location: faker.Address.streetAddress(),
//                     photo: faker.Image.cats()
//                 })}
//             const json = JSON.stringify(obj); //convert it back to json
//             fs.writeFile('events.json', json, 'utf8', function readFileCallback(err, data){
//                 return obj.events
//             }); // write it back
//         }
//     });
//
//     console.log(obj.events)
//     return {"events":obj.events}
// }
