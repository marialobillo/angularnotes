var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter', function($scope, $filter){

  $scope.handle = '';

  $scope.lowercasehandle = function(){

    return $filter('lowercase')($scope.handle);
  };

  $scope.$watch('handle', function(newValue, oldValue){

    console.info('Changed!');
    console.log('Old:' + oldValue);
    console.log('New:' + newValue);
  });
}]);
