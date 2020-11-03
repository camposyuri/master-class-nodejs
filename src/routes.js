const express = require("express");
const routes = express.Router();
const knex = require("./database/index");

routes.get("/users", (request, response) => {
  knex("users").then((results) => {
    return response.json(results);
  });
});

module.exports = routes;
