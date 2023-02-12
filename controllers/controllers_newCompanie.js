const companies = [];
const { faker } = require('@faker-js/faker');

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
    companies.push(createRandomCompanies());
  });
  

const newCompanie =  (req, res) => {
    res.json( companies );
  };

module.exports = {
    newCompanie
}