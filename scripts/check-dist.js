'use strict';

var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '..');
var coreVersion = require('../package.json').version;
var translateVersion = require('../packages/angular-translate/package.json').version;
var files = [
  'angular.js',
  'angular.min.js',
  'angular-resource.js',
  'angular-resource.min.js',
  'angular-sanitize.js',
  'angular-sanitize.min.js',
  'angular-translate.js',
  'angular-translate.min.js'
];

function read(filename) {
  var filePath = path.join(root, 'dist', filename);
  if (!fs.existsSync(filePath)) {
    throw new Error('Missing distribution file: dist/' + filename);
  }
  return fs.readFileSync(filePath, 'utf8');
}

var contents = {};
files.forEach(function(filename) {
  contents[filename] = read(filename);
});

files.forEach(function(filename) {
  var expectedVersion = filename.indexOf('angular-translate') === 0 ? translateVersion : coreVersion;
  if (contents[filename].indexOf(expectedVersion) === -1) {
    throw new Error('dist/' + filename + ' does not contain version ' + expectedVersion);
  }
  if (/v1\.(?:7\.|8\.[23](?:\D|$))/.test(contents[filename])) {
    throw new Error('dist/' + filename + ' contains a vulnerable AngularJS version banner');
  }
});

[
  ['angular.js', 'new RegExp(source.source, source.flags)'],
  ['angular.js', 'new RegExp(\'^(?:\' + matcher.source + \')$\')'],
  ['angular.js', 'Internet Explorer is not supported by AngularJS AchieveMore LTS'],
  ['angular-resource.js', 'url.charAt(lastNonSlashIndex) === \'/\''],
  ['angular-sanitize.js', 'match[5] === undefined'],
  ['angular-translate.js', 'iElement.text(scope.preText + value + scope.postText)']
].forEach(function(assertion) {
  if (contents[assertion[0]].indexOf(assertion[1]) === -1) {
    throw new Error('Missing security fix in dist/' + assertion[0] + ': ' + assertion[1]);
  }
});

console.log('Verified ' + files.length + ' LTS distribution files.');
