const path = require('path')
const sources = (location) => path.resolve(path.join(__dirname, '../src', location))

module.exports = {
  entry: {},

  output: {
    filename: 'bundle.js',
    sourcePrefix: '',
    path: path.resolve(__dirname, '../dist')
  },

  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [ sources('') ],
        options: {
          cacheDirectory: false
        }
      }
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      sources(''),
      'node_modules'
    ],
    alias: {
      'shared': sources('shared'),
      'components': sources('components')
    }
  },
  plugins: []
}
