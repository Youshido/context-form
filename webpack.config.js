const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack           = require("webpack");
const fs                = require("fs");
const path              = require("path");

module.exports = {
  module    : {
    rules : [
      {
        test    : /\.js$/,
        exclude : /(node_modules)/,
        use     : {
          loader  : "babel-loader",
          options : {
            presets : [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins : [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-optional-chaining"
            ]
          }
        }
      },
      {
        test : /\.css$/,
        use  : ["style-loader", "css-loader"]
      },
      {
        test : /\.(png|svg|jpg|gif)$/,
        use  : [
          "file-loader"
        ]
      }
    ]
  },
  devServer : {
    hot : true
  },
  plugins   : [
    new HtmlWebpackPlugin({
      template : "src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
