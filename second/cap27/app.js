
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

myApp.service('nameService', function(){

  var self = this;
  this.name = 'Jane Doe';
  this.namelength = function(){

    return self.name.length;
  };

});

myApp.controller('mainController', ['$scope','$log','nameService', function($scope, $log, nameService){

  $scope.name = nameService.name;

  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

  $scope.person = {
    name: 'Jane Doe',
    address: '555 Main St., New York, NY 11111'
  }
}]);

myApp.controller('secondController', ['$scope','$log','$routeParams','nameService',
function($scope, $log, $routeParams, nameService){

  $scope.num = $routeParams.num || 1;

  $scope.name = nameService.name;

  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

}]);


myApp.directive("searchResult", function(){
  return {
    restrict: 'EACM',
    templateUrl: "directives/searchResult.html",
    replace: true,
    scope: {

    }
  }
});
