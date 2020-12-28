const path = require("path");
const { HtmlWebpackPlugin } = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    /*new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"./src/templates/index.html")
    })*/
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "hanu.js",
    path: path.resolve(__dirname, "dist"),
  },
};
