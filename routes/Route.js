const route = require("express").Router();

const CURDRouter = require("../Controller/Controller");

route.get("/Read", CURDRouter.read);

module.exports = route;
