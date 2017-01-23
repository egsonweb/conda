const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractCSS = require('extract-text-webpack-plugin');
const config = require('./webpack.config.base');
const sources = (location) => path.resolve(path.join(__dirname, '../src', location));

const prodConfig = merge(config, {
  cache: false,
  // devtool: 'source-map',
  entry: {
    bundle: sources('client/index.js')
  },
  output: {
    publicPath: '/build/'
  }
});

prodConfig.module.rules.push({
  test: /\.(css|scss)(\?.+)?$/,
  include: [sources('assets/styles')],
  loaders: ExtractCSS.extract({
    fallbackLoader: 'style-loader',
    loader: 'css-loader!sass-loader'
  })
});

prodConfig.output.path = path.join(__dirname, '../build/public');
prodConfig.plugins.push(
  new ExtractCSS({
    filename: 'bundle.css',
    allChunks: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true
    },
    compress: {
      unused: true,
      screw_ie8: true,
      dead_code: true,
      warnings: false
    },
    comments: false
  })
);

prodConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.DEV': false,
    'process.env.NODE_ENV': JSON.stringify('production')
  })
);

module.exports = prodConfig;
