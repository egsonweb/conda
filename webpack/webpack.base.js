const path = require('path')
const webpack = require('webpack')
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
			'node_modules',
      sources(''),
    ]
  },
  plugins: [
		new webpack.DefinePlugin({
			'process.env.DEV': JSON.stringify(process.env.DEV || false),
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
		})
	]
}
