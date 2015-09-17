var myApp = angular.module('myApp', []);

myApp.controller('mainController' function($scope){

  $scope.name = 'Maria';
  $scope.occupation = 'Coder';

  $scope.getname = function(){
    return 'Jane Doe';
  }

  $scope.getname();
  
  console.log($scope);
});
