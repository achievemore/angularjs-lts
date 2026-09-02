'use strict';

describe('AchieveMore LTS security harness', function() {
  it('loads the fork version', function() {
    expect(angular.version.full).toBe('1.9.11-achievemore.1');
  });
});
