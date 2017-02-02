const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const sources = (location) => path.resolve(path.join(__dirname, '../src', location))

const nodeModules = {}
fs.readdirSync('node_modules')
.filter(function (x) {
  return [ '.bin' ].indexOf(x) === -1
})
.forEach(function (mod) {
  nodeModules[mod] = 'commonjs ' + mod
})

module.exports = {
  entry: [
    'babel-polyfill',
    sources('server.js')
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js'
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
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
      comments: false,
      warnings: false
    })
  ]
}
