'use strict';

// Declare app level module which depends on views, and components
angular.module('BOOX', [
  'ngRoute',
  // 'ui.bootstrap',

  'BOOX.directives',
  'BOOX.views'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
