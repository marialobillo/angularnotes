
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$location','$log', function($scope, $location, $log){

  $log.info($location.path());

}]);
