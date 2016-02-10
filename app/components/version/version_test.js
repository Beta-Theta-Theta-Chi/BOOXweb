'use strict';

describe('BOOX.version module', function() {
  beforeEach(module('BOOX.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
