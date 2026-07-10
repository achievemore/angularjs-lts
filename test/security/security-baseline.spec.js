'use strict';

describe('AchieveMore LTS security harness', function() {
  it('loads the fork version', function() {
    expect(angular.version.full).toBe('1.8.4-achievemore.1');
  });
});
