const parse = require("pg-connection-string").parse;
const config = process.env.DATABASE_URL
  ? parse(process.env.DATABASE_URL)
  : undefined;

console.log("***READ FROM DEVELOPMENT***");
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", config?.host || "127.0.0.1"),
      port: env.int("DATABASE_PORT", config?.port || 5432),
      database: env("DATABASE_NAME", config?.database || "laundro"),
      user: env("DATABASE_USERNAME", config?.user || "mimi"),
      password: env("DATABASE_PASSWORD", config?.password || "skeletonkey200"),
      ssl:
        process.env.NODE_ENV === "development"
          ? env.bool("DATABASE_SSL", false)
          : {
              rejectUnauthorized: false,
            },
    },
    // pool: {
    //   min: 0,
    //   max: 0,
    //   acquireTimeoutMillis: 10000,
    //   createTimeoutMillis: 10000,
    // },
    debug: true,
  },
});
