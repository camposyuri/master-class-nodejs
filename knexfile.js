// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "123456",
    },
    migrations: {
      tablename: "knex_miogrations",
      directory: `${__dirname}/src/database/migrations`,
    },
  },
  onUpdateTrigger: (table) => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  `,
};
