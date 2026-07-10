'use strict';

describe('srcset sanitization protections', function() {
  var capturedSourceAttrs;

  beforeEach(module('ng', function($compileProvider) {
    $compileProvider.directive('captureSourceAttrs', function() {
      return function(scope, element, attrs) {
        capturedSourceAttrs = attrs;
      };
    });
  }));

  it('sanitizes every comma-separated image candidate', inject(function($compile, $rootScope) {
    var element = $compile('<img srcset="{{value}}">')($rootScope);
    $rootScope.value = 'https://example.test/safe.png,javascript:alert(1) 2x';

    $rootScope.$digest();

    expect(element.attr('srcset')).toContain('unsafe:javascript:alert(1) 2x');
  }));

  it('sanitizes srcset assigned to source elements through Attributes#$set',
      inject(function($compile, $rootScope) {
        var element = $compile('<source capture-source-attrs>')($rootScope);

        // eslint-disable-next-line no-script-url
        capturedSourceAttrs.$set('srcset', 'javascript:alert(1) 2x');

        expect(element.attr('srcset')).toBe('unsafe:javascript:alert(1) 2x');
      }));

  it('parses long whitespace sequences in linear time', inject(function($compile, $rootScope) {
    var element = $compile('<img srcset="{{value}}">')($rootScope);
    $rootScope.value = 'https://example.test/safe.png' + new Array(20001).join(' ') + 'invalid';
    var startedAt = window.performance.now();

    $rootScope.$digest();

    expect(window.performance.now() - startedAt).toBeLessThan(300);
    expect(element.attr('srcset')).toContain('https://example.test/safe.png');
  }));
});
