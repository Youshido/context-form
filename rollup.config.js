/* eslint-disable key-spacing */
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';

const config = {
  input : './src/index.js',

  output : {
    file    : './dist/context-form.js',
    format  : 'umd',
    name    : 'ContextForm',
    globals : {
      'react'     : 'React',
      'react-dom' : 'ReactDOM',
    },
  },

  plugins : [
    sass({
      output    : './dist/context-form.min.css',
      options   : {
        outputStyle : 'compressed',
      },
      processor : css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css),
    }),
    babel({
      babelrc : false,
      exclude : 'node_modules/**',
      presets : [['@babel/env', { modules : false }], '@babel/react'],
      plugins : ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-optional-chaining'],
    }),
    resolve({
      browser : true,
      main    : true,
    }),
    commonjs(),
  ],

  external : ['react', 'react-dom'],
};
export default [
  config,
  {
    ...config,
    output  : {
      ...config.output,
      sourcemap : true,
      file      : './dist/context-form.min.js',
    },
    plugins : [
      ...config.plugins,
      terser(),
    ],
  },
];
