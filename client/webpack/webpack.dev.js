'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  debug: true,
  devServer: {
    contentBase: path.resolve(rootDir, 'dist'),
    port: 9000
  },
  devtool: 'source-map',
  entry: {
    app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
    vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
  },
  module: {
     loaders: [
       { loader: 'raw', test: /\.(css|html)$/ },
       { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
     ]
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(rootDir, 'dist')
   },
   plugins: [
    new ChunkWebpack({ // prevents us from having same lib imported multiple times
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
      name: 'vendor'
    }),
    new HtmlWebpack({ // automatically injects <script> tag into index.html
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'app', 'index.html')
    })
  ],
  resolve: {
    extensions: [ '', '.js', '.ts' ]
  }
};
