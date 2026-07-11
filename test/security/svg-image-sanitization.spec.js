'use strict';

describe('SVG image source restrictions', function() {
  describe('core compiler', function() {
    beforeEach(module('ng', function($compileProvider) {
      $compileProvider.imgSrcSanitizationTrustedUrlList(/^https:\/\/allowed\.example\//);
    }));

    it('applies media URL restrictions to image href', inject(function($compile, $rootScope) {
      var element = $compile('<svg><image href="{{imageUrl}}"></image></svg>')($rootScope);
      $rootScope.imageUrl = 'https://blocked.example/image.png';

      $rootScope.$digest();

      expect(element.find('image').attr('href')).toBe('unsafe:https://blocked.example/image.png');
    }));
  });

  describe('ngSanitize', function() {
    beforeEach(module('ngSanitize', function($sanitizeProvider, $$sanitizeUriProvider) {
      $sanitizeProvider.enableSvg(true);
      $$sanitizeUriProvider.imgSrcSanitizationTrustedUrlList(/^https:\/\/allowed\.example\//);
    }));

    it('applies image restrictions to href and xlink:href', inject(function($sanitize) {
      var sanitized = $sanitize(
          '<svg><image href="https://blocked.example/a.png" ' +
          'xlink:href="https://blocked.example/b.png"></image></svg>');

      expect(sanitized).not.toContain('blocked.example');
    }));

    it('keeps allowed SVG image sources', inject(function($sanitize) {
      var sanitized = $sanitize(
          '<svg><image href="https://allowed.example/a.png" ' +
          'xlink:href="https://allowed.example/b.png"></image></svg>');

      expect(sanitized).toContain('https://allowed.example/a.png');
      expect(sanitized).toContain('https://allowed.example/b.png');
    }));
  });
});
