const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devServer: {
    inline: true,
    port: 8001
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ], 
  },
}