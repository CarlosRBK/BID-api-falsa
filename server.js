const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ); 


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
  companies.push(createRandomCompanies());
});

console.log(user)
console.log(companies)

//Devulve nuevo usuario

app.get("/api/users/new", (req, res) => {
  res.json( user );
});

//devuelve nueva compañia

app.get("/api/companies/new", (req, res) => {
  res.json( companies );
});

//devuelve compañia y usuario

app.get("/api/user/company", (req, res) => {
  
  let usuario = createRandomUser();

  let empresa = createRandomCompanies();

  let usuarioEmpresa = {usuario, empresa};

  res.json( usuarioEmpresa )

});

app.listen( port, () => console.log(`Listening on port: ${port}`) );