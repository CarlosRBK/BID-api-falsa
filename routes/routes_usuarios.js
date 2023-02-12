const express = require("express");
const { newUser } = require("../controllers/controllers_newUsuarios");
const app = express();

  
app.get("/api/users/new", newUser);

module.exports = app;