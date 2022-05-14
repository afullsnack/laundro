const withTM = require("next-transpile-modules")(["ui"]);
const withPWA = require("next-pwa");
const path = require("path");

module.exports = withTM(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
      // process.env.NODE_ENV === "development",
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: "@svgr/webpack",
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      });

      config.resolve.alias["@components"] = path.join(__dirname, "components");
      config.resolve.alias["@public"] = path.join(__dirname, "public");
      config.resolve.alias["@lib"] = path.join(__dirname, "lib");

      return config;
    },
  })
);
