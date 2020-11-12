exports.up = (knex) => {
  return knex.schema.alterTable("users", (table) => {
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("number").unique().notNullable();
  });
};

exports.down = (knex) => {
  return knex.shema.alterTable("users", (table) => {
    table.dropColumn("name");
    table.dropColumn("email");
    table.dropColumn("number");
  });
};
