// Reference: http://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    basePath: '',
    frameworks: [
      'mocha', 'chai'
    ],
    reporters: [
      'spec',
      'coverage'
    ],
    files: [
      'angular/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'angular/**/*.test.js'
    ],
    preprocessors: {
      'angular/index.js': ['webpack', 'sourcemap'],
      'angular/**/*.test.js': ['webpack', 'sourcemap']
    },
    colors: true,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};