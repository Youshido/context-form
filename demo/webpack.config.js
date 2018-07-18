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
            ...JSON.parse(fs.readFileSync(path.resolve(__dirname, "./.babelrc")))
          }
        }
      },
      {
        test : /\.sass/,
        use  : ["style-loader", "css-loader", "sass-loader"]
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
