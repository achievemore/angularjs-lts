'use strict';

var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '..');
var distDir = path.join(root, 'dist');
var files = {
  'build/angular.js': 'dist/angular.js',
  'build/angular.min.js': 'dist/angular.min.js',
  'build/angular-resource.js': 'dist/angular-resource.js',
  'build/angular-resource.min.js': 'dist/angular-resource.min.js',
  'build/angular-sanitize.js': 'dist/angular-sanitize.js',
  'build/angular-sanitize.min.js': 'dist/angular-sanitize.min.js',
  'build/angular-animate.js': 'dist/angular-animate.js',
  'build/angular-animate.min.js': 'dist/angular-animate.min.js',
  'build/angular-messages.js': 'dist/angular-messages.js',
  'build/angular-messages.min.js': 'dist/angular-messages.min.js',
  'packages/angular-translate/dist/angular-translate.js': 'dist/angular-translate.js',
  'packages/angular-translate/dist/angular-translate.min.js': 'dist/angular-translate.min.js'
};

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

Object.keys(files).forEach(function(source) {
  var sourcePath = path.join(root, source);
  var destinationPath = path.join(root, files[source]);

  if (!fs.existsSync(sourcePath)) {
    throw new Error('Missing build artifact: ' + source);
  }

  fs.copyFileSync(sourcePath, destinationPath);
});

console.log('Assembled ' + Object.keys(files).length + ' files in dist/.');
