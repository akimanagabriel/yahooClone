const express = require("express");
const routes = express.Router();
const {
  allUser,
  marksDetails,
  addressOut,
} = require("../controller/userController");

routes.get("/", (req, res) => {
  res.render('form');
});

routes.get("/users", allUser);
routes.get("/marks", marksDetails);
routes.get("/address", addressOut);

module.exports = routes;
