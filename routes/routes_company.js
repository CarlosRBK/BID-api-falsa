const express = require("express");
const { newCompany } = require("../controllers/controllers_newCompany");
const app = express();

app.get("/api/user/company", newCompany);

module.exports = app;