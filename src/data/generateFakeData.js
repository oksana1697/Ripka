module.exports = function(){
    let faker =  require('faker')
    let _ = require('lodash')
    return {
        events: _.times(10,function (n) {
            return {
                id: n,
                name: faker.Company.companyName(),
                description: faker.Company.catchPhrase(),
                organization:faker.Company.companySuffix(),
                contacts: faker.PhoneNumber.phoneNumber(),
                location: faker.Address.streetAddress(),
                photo: faker.Image.cats()
            }})}}