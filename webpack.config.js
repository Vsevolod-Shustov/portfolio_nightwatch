const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const PORT = 3001;

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: PORT,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.svg$/,
        use: ["url-loader"]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ESLintPlugin({
      extensions: ["js"],
    }),
  ],
};
