'use strict';

describe('SCE resource URL matcher protection', function() {
  beforeEach(module('ng', function($sceDelegateProvider) {
    $sceDelegateProvider.trustedResourceUrlList([
      /https:\/\/safe\.example\/|https:\/\/other\.example\//
    ]);
  }));

  it('anchors regular expression alternatives as one matcher', inject(function($sce) {
    expect(function() {
      $sce.getTrustedResourceUrl('https://evil.example/https://other.example/');
    }).toThrowMinErr('$sce', 'insecurl');
  }));

  it('continues to allow complete matches for every alternative', inject(function($sce) {
    expect($sce.getTrustedResourceUrl('https://safe.example/')).toBe('https://safe.example/');
    expect($sce.getTrustedResourceUrl('https://other.example/')).toBe('https://other.example/');
  }));
});
