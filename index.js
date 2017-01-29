require('babel-register')
require('babel-polyfill')

// webpack dev config
require('./config/webpack.config.dev.js')

// bootstrap server
require('./src/server/index.js')
