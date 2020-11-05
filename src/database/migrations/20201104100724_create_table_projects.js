exports.up = (knex) => {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("title");

    table
      .integer("user_id")
      .references("users.id")
      .notNullable()
      .onDelete("CASCADE");

    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("projects");
};
