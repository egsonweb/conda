const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackServer = require('webpack-dev-server');
const config = require('./webpack.config.base');
const sources = (location) => path.resolve(path.join(__dirname, '../src', location));

const devConfig = merge(config, {
    cache: true,
    devtool: 'eval-cheap-module-source-map', // eval eval-cheap-module-source-map source-map
    entry: {
        bundle: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3001',
            'webpack/hot/only-dev-server',
            sources('client/index.js')
        ]
    },
    output: {
        publicPath: 'http://localhost:3001/build/',
        libraryTarget: 'var',
        pathinfo: true
    }
});

devConfig.module.rules.push({
    test: /\.(css|scss)(\?.+)?$/,
    include: [sources('assets/styles')],
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ]
});

devConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV': true,
      'process.env.NODE_ENV': JSON.stringify('development')
    })
);

const compiler = webpack(devConfig);
const port = 3001;

new webpackServer(compiler, {
    publicPath: devConfig.output.publicPath,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'SourceMap,X-SourceMap'
    },
    hot: true,
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: false
    },
    stats: {
        colors: true,
        hash: false,
        timings: false,
        version: false,
        chunks: false,
        modules: false,
        children: false,
        chunkModules: false
    }
}).listen(port, '0.0.0.0', function (err, result) {
    if (err) return console.log('webpack:error', err);

    console.log('Webpack server running on port ' + port)
});
