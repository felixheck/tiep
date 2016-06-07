(function() {

  'use strict';

  module.exports = function(config) {
    config.set({
      basePath: './',
      frameworks: ['jasmine'],
      files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/lodash/lodash.js',
        'src/tiep.js',
        'test/**/*.spec.js'
      ],
      exclude: [],
      preprocessors: {
        'src/**/*.js': ['coverage']
      },
      coverageReporter: {
        type : 'html',
        dir : 'test/',
        subdir: 'coverage'
      },
      reporters: [
        'mocha',
        'coverage'
      ],
      mochaReporter: {
        output: 'full'
      },
      plugins: [
        'karma-jasmine',
        'karma-mocha-reporter',
        'karma-coverage',
        'karma-firefox-launcher',
        'karma-chrome-launcher'
      ],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      browsers: ['Chrome', 'Firefox'],
      autoWatch: true,
      singleRun: false
    });
  };

})();
