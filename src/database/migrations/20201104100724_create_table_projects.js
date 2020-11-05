const { onUpdateTrigger } = require("../../../knexfile");

exports.up = async (knex) => {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id").primary();
      table.string("title");

      table
        .integer("user_id")
        .references("users.id")
        .notNullable()
        .onDelete("CASCADE");

      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger("projects")));
};

exports.down = (knex) => {
  return knex.schema.dropTable("projects");
};
