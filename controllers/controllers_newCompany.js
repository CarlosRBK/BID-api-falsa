const { faker } = require('@faker-js/faker');

const user = [];
const companies = [];

function createRandomUser(){
  return {
    _id: faker.datatype.uuid(),
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    number : faker.phone.number(),
    email : faker.internet.email(),
    password : faker.internet.password(),
  };
}

function createRandomCompanies(){
    return {
      _id: faker.datatype.uuid(),
      firstName : faker.company.name(),
      address : faker.address.street(),
      city : faker.address.city(),
      state : faker.address.state(),
      zipCode : faker.address.zipCode(),
      country : faker.address.country(),
    };
  }

  Array.from({ length: 1 }).forEach(() => {
    user.push(createRandomUser());
    user.push(createRandomCompanies());    
  });
  

const newCompany = (req, res) => {
    res.json( [user, companies] );
  }

  module.exports = {
    newCompany,
  }