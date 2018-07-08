const libPath     = __dirname + "/dist";
const libraryName = "ContextForm";
const fileName    = "context-form";

const rules = [
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
];

module.exports = [
  {
    devtool : "source-map",
    output  : {
      path           : libPath + "/umd",
      filename       : fileName + ".js",
      globalObject   : "this",
      library        : libraryName,
      libraryTarget  : "umd",
      umdNamedDefine : true
    },
    module  : {
      rules
    },
    mode    : "development"
  }, {
    // devtool : "source-map",
    output  : {
      path          : libPath + "/cjs",
      filename      : fileName + ".min.js",
      library       : "",
      libraryTarget : "commonjs"
    },
    optimization : {
      minimize : true
    },
    module  : {
      rules
    },
    mode    : "development"
  }
];
