const faker = require('faker');
const _ = require('lodash');
const { v4 } = require('uuid');

module.exports = function() {
  console.log(faker);
  return {
    events: _.times(100, function(n) {
      return {
        // id: n,
        id: v4(),
        name: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        organization: faker.company.companySuffix(),
        contacts: faker.phone.phoneNumber(),
        location: faker.address.streetAddress(),
        photo: faker.image.cats(),
      };
    }),
    users: _.times(2, function(n) {
      return {
        id: v4(),
        user_name: faker.name.findName(),
        user_description: faker.name.lastName(),
        // organization:faker.Company.companySuffix(),
        user_contacts: faker.phone.phoneNumber(),
        user_location: faker.address.streetAddress(),
        user_photo: faker.image.cats(),
      };
    }),
  };
};
