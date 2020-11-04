const knex = require("../database");

module.exports = {
  async index(request, response) {
    const results = await knex("users");
    return response.json(results);
  },

  async create(request, response, next) {
    const { username } = request.body;

    try {
      await knex("users").insert({
        username,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
