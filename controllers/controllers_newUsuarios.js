const { faker } = require('@faker-js/faker');

const user = [];

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

  Array.from({ length: 1 }).forEach(() => {
    user.push(createRandomUser());
  });

const newUser = (req, res) => {
    res.json( user );
}

module.exports = {
    newUser
}