'use strict';

module.exports = (config) => {
  config.set({
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS'],
    files: [
      'karma.entry.js'
    ],
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    phantomJsLauncher: {
      exitOnResourceError: true
    },
    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    singleRun: false,
    webpack: require('../webpack/webpack.test'),
    webpackServer: {
      noInfo: true
    }
  });
};
