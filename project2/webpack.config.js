const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "name[hash:6].js",
    clean: true, // 在生成文件之前清空 output 目录
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/template.html"),
    }),
    new ModuleFederationPlugin({
      name: "remoteV2",
      library: { type: "var", name: "remoteV2" },
      filename: "remoteEntry.js",
      exposes: [
        {
          "./List": "./src/List.vue",
        },
      ],
    }),
  ],
};
