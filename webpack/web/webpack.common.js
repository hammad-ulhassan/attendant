const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpack = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
  target: "web",
  entry: path.resolve(__dirname, "../../web/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../../build/web"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'web'),
    },
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
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
      {
        // should use style-loader and css-loader for all css files
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // v5 supports image loaders out of box
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "../../.env"), // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "../web/index.html"),
    }),
    new CopyWebpack({
      patterns: [{ from: "sourcefolder", to: "destinationfolder", noErrorOnMissing: true }],
    }),
  ],
};
