const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const config = require('./webpack.base')
const sources = (location) => path.resolve(path.join(__dirname, '../src', location))

const prodConfig = merge(config, {
  cache: false,
  devtool: false,
  entry: {
    bundle: sources('client.js')
  },
  output: {
    publicPath: '/dist/'
  }
})

prodConfig.output.path = path.join(__dirname, '../dist/public')
prodConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  })
)

module.exports = prodConfig
