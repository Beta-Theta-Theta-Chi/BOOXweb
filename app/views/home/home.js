
'use strict';

angular.module('BOOX.views')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);