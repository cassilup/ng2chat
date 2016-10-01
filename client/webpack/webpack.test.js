'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    // preLoaders: [
    //   { exclude: /node_modules/, loader: 'tslint', test: /\.ts$/ }
    // ],
    loaders: [
      { loader: 'raw', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts'], // empty string is for node_modules, which we don't specify extension for
    modulesDirectories: ['node_modules'],
    root: path.resolve('.', 'src')
  }
};
