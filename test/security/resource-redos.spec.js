'use strict';

describe('ngResource ReDoS protection', function() {
  beforeEach(module('ngResource'));

  it('checks long non-trailing slash sequences in linear time', inject(function($httpBackend, $resource) {
    var url = '/api' + new Array(20001).join('/') + 'x';
    var Resource = $resource(url);
    var startedAt = performance.now();

    $httpBackend.expectGET(url).respond({});
    Resource.get();

    expect(performance.now() - startedAt).toBeLessThan(300);
    $httpBackend.flush();
  }));
});
