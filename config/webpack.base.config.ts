import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import CopyWebpackPlugin from "copy-webpack-plugin";
const devServer: DevServerConfiguration = {};

const baseConfig: Configuration = {
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].bundle.js",
    publicPath: "/",
    clean: true,
  },
  entry: [path.resolve(__dirname, "../src") + "/index.tsx"],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: "assets",
          globOptions: {
            ignore: ["**/*.html"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
};

export default baseConfig;
