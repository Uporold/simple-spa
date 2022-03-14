import path from "path";
import { Configuration } from "webpack";
import baseConfig from "./webpack.base.config";
import merge from "webpack-merge";
import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config: Configuration = {
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/[name].[contenthash].bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: false,
              modules: false,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    runtimeChunk: {
      name: "runtime",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

const prodConfig = merge(baseConfig, config);
export default prodConfig;
