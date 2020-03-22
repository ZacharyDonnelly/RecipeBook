const webpackMerge = require("webpack-merge");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = env => {
  return webpackMerge(
    // A presets common configuration details
    {
      target: "node",
      resolve: {
        extensions: [".ts", ".tsx", ".mjs", ".js", ".json"]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: "awesome-typescript-loader"
              }
            ]
          }
        ]
      },
      plugins: [new CheckerPlugin()]
    },
    // Any mode specific capabilities for that preset
    { production: {}, development: {} }[env.mode]
  );
};
