'use strict';

describe('angular-translate missing-key XSS protection', function() {
  beforeEach(module('pascalprecht.translate', function($translateProvider) {
    $translateProvider.translations('en', {});
    $translateProvider.preferredLanguage('en');
  }));

  it('renders an unresolved translation key as text', inject(function($compile, $rootScope) {
    var element = $compile('<div translate="{{translationKey}}"></div>')($rootScope);
    $rootScope.translationKey = '<img class="injected-translation" src="invalid">';

    $rootScope.$digest();

    expect(element[0].querySelector('.injected-translation')).toBeNull();
    expect(element.text()).toBe($rootScope.translationKey);
  }));
});
