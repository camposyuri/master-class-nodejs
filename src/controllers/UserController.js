const knex = require("../database");

module.exports = {
  async index(request, response) {
    const { id } = request.params;

    const results = await knex("users").orderBy("id");
    // .where("deleted_at", null);

    return response.json(results);
  },

  async indexID(request, response, next) {
    try {
      const { id } = request.params;

      const results = await knex("users").select("*").where({ id });

      return response.json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(request, response, next) {
    const { username, name, email, number } = request.body;

    try {
      await knex("users").insert({
        username,
        name,
        email,
        number,
      });

      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    try {
      const { username, name, email, number } = request.body;
      const { id } = request.params;

      await knex("users")
        .update({ username, name, email, number })
        .where({ id });

      return response.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      await knex("users")
        .where({ id })
        // .update("deleted_at", new Date())
        .del();

      return response.send();
    } catch (error) {
      next(error);
    }
  },
};
