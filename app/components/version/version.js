'use strict';

angular.module('BOOX.version', [
  'BOOX.version.interpolate-filter',
  'BOOX.version.version-directive'
])

.value('version', '0.1');
