const express = require("express");
const { newCompanie } = require("../controllers/controllers_newCompanie");
const app = express();

app.get("/api/companies/new", newCompanie);
  
  module.exports = app;