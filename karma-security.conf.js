'use strict';

var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'AngularJS LTS: security'});

  config.set({
    browsers: ['ChromeHeadless'],
    files: [
      'node_modules/jquery/dist/jquery.js',
      'build/angular.js',
      'build/angular-resource.js',
      'build/angular-sanitize.js',
      'packages/angular-translate/dist/angular-translate.js',
      'build/angular-mocks.js',
      'test/helpers/matchers.js',
      'test/helpers/privateMocks.js',
      'test/helpers/support.js',
      'test/helpers/testabilityPatch.js',
      'test/security/**/*.spec.js'
    ],
    singleRun: true
  });
};
