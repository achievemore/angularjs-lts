'use strict';

describe('linky ReDoS protection', function() {
  beforeEach(module('ngSanitize'));

  it('scans long non-link text in linear time', inject(function($filter) {
    var input = new Array(20001).join('a');
    var startedAt = window.performance.now();

    var output = $filter('linky')(input);

    expect(window.performance.now() - startedAt).toBeLessThan(300);
    expect(output).toBe(input);
  }));
});
