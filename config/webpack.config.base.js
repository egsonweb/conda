const path = require('path');
const webpack = require('webpack');
const sources = (location) => path.resolve(path.join(__dirname, '../src', location));

module.exports = {
  entry: {},

  output: {
    filename: 'bundle.js',
    sourcePrefix: '',
    path: path.resolve(__dirname, '../build')
  },

  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [sources('')],
        options: {
          cacheDirectory: false,
          presets: [
            ['es2015', { modules: false }],
            'stage-0',
            'react'
          ],
          plugins: [
            'react-hot-loader/babel'
          ]
        }
      },
      {
        test: /\.(jpg|png|svg)(\?.+)?$/,
        include: [sources('assets/images')],
        loader: 'url-loader',
        options: {
          limit: '10000'
        }
      },
      {
        test: /\.(ttf|otf|eot|woff2?)(\?.+)?$/,
        include: [sources('assets/fonts')],
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      sources(''),
      "node_modules"
    ],
    alias: {
      shared: sources('shared'),
      components: sources('components')
    }
  },
  plugins: []
};
