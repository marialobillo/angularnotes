
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second/', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});

myApp.controller('mainController', ['$scope','$log', function($scope, $log){

  $scope.name = 'Main';
  $log.main = 'Property from main';
  $log.log($log);
}]);

myApp.controller('secondController', ['$scope','$log','$routeParams', function($scope, $log, $routeParams){

  $scope.num = $routeParams.num || 1;

  $log.seccond = 'Property from second';
  $log.log($log);
}]);
