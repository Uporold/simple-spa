import path from "path";
import { Configuration } from "webpack";
import baseConfig from "./webpack.base.config";
import merge from "webpack-merge";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {};

const config: Configuration = {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    static: path.join(__dirname, "../build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
};

const devConfig = merge(baseConfig, config);
export default devConfig;
