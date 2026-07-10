'use strict';

describe('core ReDoS protections', function() {
  it('copies regular expressions without stringifying them', function() {
    var source = /angular/gi;
    source.lastIndex = 3;
    source.toString = function() {
      throw new Error('RegExp#toString must not be called');
    };

    var copy = angular.copy(source);

    expect(copy.source).toBe(source.source);
    expect(copy.flags).toBe(source.flags);
    expect(copy.lastIndex).toBe(source.lastIndex);
  });

  describe('currency filter', function() {
    beforeEach(module('ng', function($provide) {
      $provide.value('$locale', {
        id: 'security-test',
        NUMBER_FORMATS: {
          CURRENCY_SYM: '',
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [{
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: '',
            posSuf: '',
            negPre: '-',
            negSuf: '',
            gSize: 3,
            lgSize: 3
          }, {
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: new Array(20001).join(' '),
            posSuf: '',
            negPre: '-',
            negSuf: '',
            gSize: 3,
            lgSize: 3
          }]
        }
      });
    }));

    it('handles long currency patterns in linear time', inject(function($filter) {
      var startedAt = performance.now();

      $filter('currency')(1, '');

      expect(performance.now() - startedAt).toBeLessThan(300);
    }));
  });

  describe('URL input validation', function() {
    beforeEach(module('ng'));

    it('handles long malformed URLs in linear time', inject(function($compile, $rootScope) {
      var scope = $rootScope.$new();
      var input = $compile('<input type="url" ng-model="value">')(scope);
      var control = input.controller('ngModel');
      var value = 'scheme:' + new Array(20001).join('/');
      var startedAt = performance.now();

      control.$setViewValue(value);

      expect(performance.now() - startedAt).toBeLessThan(300);
      expect(control.$valid).toBe(false);
    }));
  });
});
