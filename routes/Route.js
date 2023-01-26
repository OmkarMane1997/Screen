const route = require("express").Router();

const CURDRouter = require("../Controller/Controller");

route.get("/Read", CURDRouter.read);
route.post("/Create", CURDRouter.create);

module.exports = route;
