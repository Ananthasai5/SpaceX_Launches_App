const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [ "css-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'awesome-typescript-loader'
        },
        exclude: /node_modules/
     }
    ],
  },
};
