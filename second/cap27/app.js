
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

  $scope.people = [
    {
      name: 'Jane Doe',
      address: '555 Main St.',
      city: 'New York',
      state: 'NY',
      zip: '11111'
    },
    {
      name: 'Jhon Doe',
      address: '555 Second St.',
      city: 'Buffalo',
      state: 'NY',
      zip: '2222'
    },
    {
      name: 'Peter Doe',
      address: '333 Third St.',
      city: 'Miami',
      state: 'FL',
      zip: '33333'
    }

  ];

  $scope.formattedAddress = function(person){

    return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
  };
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
      personObject: "=",
      formattedAddressFunction: "&"
    }
  }
});
