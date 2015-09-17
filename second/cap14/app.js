var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter){

  $log.log("Hello.");
  $log.info("Information");
  $log.warn("Warning");
  $log.debug("Debbug");
  $log.error("The Error!!!");

  $scope.name = 'John';
  $scope.formattedname = $filter('uppercase');
});
