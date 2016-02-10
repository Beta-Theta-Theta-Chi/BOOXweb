'use strict';

// Declare app level module which depends on views, and components
angular.module('BOOX', [
  'ngRoute',
  'ui.bootstrap',

  'BOOX.directives',
  'BOOX.views',
  'BOOX.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
