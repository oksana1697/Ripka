// import {v4} from "node-uuid";

module.exports = function() {
  let faker = require('faker');
  let _ = require('lodash');
  let { v4 } = require('node-uuid');
  return {
    events: _.times(100, function(n) {
      return {
        // id: n,
        id: v4(),
        name: faker.Company.companyName(),
        description: faker.Company.catchPhrase(),
        organization: faker.Company.companySuffix(),
        contacts: faker.PhoneNumber.phoneNumber(),
        location: faker.Address.streetAddress(),
        photo: faker.Image.cats(),
      };
    }),
    users: _.times(2, function(n) {
      return {
        id: v4(),
        user_name: faker.Name.findName(),
        user_description: faker.Name.lastName(),
        // organization:faker.Company.companySuffix(),
        user_contacts: faker.PhoneNumber.phoneNumber(),
        user_location: faker.Address.streetAddress(),
        user_photo: faker.Image.cats(),
      };
    }),
  };
};
