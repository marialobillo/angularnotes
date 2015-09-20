var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){

  $scope.handle = '';

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $scope.rules = [
    { rulername: "Must be 5 characters" },
    { rulername: "Must not be used elsewhere"},
    { rulername: "Must be cool"}
  ];

}]);
