const webpack     = require("webpack");
const fs          = require("fs");
const path        = require("path");
const libPath     = __dirname + "/dist";
const libraryName = "context-form";

const rules = [
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
    test : /\.css$/,
    use  : ["style-loader", "css-loader"]
  },
  {
    test : /\.(png|svg|jpg|gif)$/,
    use  : [
      "file-loader"
    ]
  }
];

module.exports = [
  {
    devtool : "source-map",
    output  : {
      path           : libPath + '/umd',
      filename       : libraryName + ".js",
      library        : libraryName,
      libraryTarget  : "umd",
      umdNamedDefine : true
    },
    module  : {
      rules
    },
    mode    : "development"
  }, {
    output       : {
      path           : libPath + '/umd',
      filename       : libraryName + ".min.js",
      library        : libraryName,
      libraryTarget  : "umd",
      umdNamedDefine : true
    },
    optimization : {
      minimize : true
    },
    module       : {
      rules
    },
    mode         : "production"
  },  {
    devtool : "source-map",
    output  : {
      path           : libPath + '/cjs',
      filename       : libraryName + ".js",
      library        : libraryName,
      libraryTarget  : "commonjs",
    },
    module  : {
      rules
    },
    mode    : "development"
  }, {
    output       : {
      path           : libPath + '/cjs',
      filename       : libraryName + ".min.js",
      library        : libraryName,
      libraryTarget  : "commonjs",
    },
    optimization : {
      minimize : true
    },
    module       : {
      rules
    },
    mode         : "production"
  }];
