const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

console.log("***READ FROM PRODUCTION***", JSON.stringify(config, null, 2));

module.export = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    // options: {
    //   ssl: false,
    // },
    debug: false,
  },
});
