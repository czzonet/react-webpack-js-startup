const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isDev = process.env.ENV != "production";

  return {
    mode: isDev ? "development" : "production",
    devtool: isDev ? "inline-source-map" : undefined,
    entry: {
      index: path.resolve(__dirname, "../src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: isDev ? "[name].[contenthash:5].js" : "[name].js",
    },
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, use: ["babel-loader"] },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.s(c|a)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
