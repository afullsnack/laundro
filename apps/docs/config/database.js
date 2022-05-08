module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'laundro'),
      user: env('DATABASE_USERNAME', 'mimi'),
      password: env('DATABASE_PASSWORD', 'skeletonkey200'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
