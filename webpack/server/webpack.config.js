const path = require("path");
const webpack = require("webpack");
const named = require("simple-named-modules-plugin-webpack");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");
module.exports = {
  target: "node",
  mode: "development",
  entry: {
    main: './server/index.ts'
  },
  output: {
    path: path.resolve(__dirname, "../../build/server"),
    filename: "server.js",
    libraryTarget: "commonjs2",
  },
  plugins: [
  ],
  optimization: {
    moduleIds: "named",
  },
  module: {
    rules: [
      {
        // should use babel-loader for all ts js tsx and jsx files
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
};
