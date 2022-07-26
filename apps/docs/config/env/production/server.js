console.log("### USING PROD SERVER ###");
module.export = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
