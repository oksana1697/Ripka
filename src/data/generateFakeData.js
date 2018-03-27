module.exports = function(){
    let faker =  require('faker')
    let _ = require('lodash')
    return {
        events: _.times(101,function (n) {
            return {
                id: n,
                name: faker.Company.companyName(),
                description: faker.Company.catchPhrase(),
                organization:faker.Company.companySuffix(),
                contacts: faker.PhoneNumber.phoneNumber(),
                location: faker.Address.streetAddress(),
                photo: faker.Image.cats()
            }}),
        users: _.times(101,function (n) {
            return {
                id: n,
                user_name: faker.Name.findName(),
                user_description: faker.Name.lastName(),
                // organization:faker.Company.companySuffix(),
                user_contacts: faker.PhoneNumber.phoneNumber(),
                user_location: faker.Address.streetAddress(),
                user_photo: faker.Image.cats()
            }})

    }
}