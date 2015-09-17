var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log){

  $log.log("Hello.");
  $log.info("Information");
  $log.warn("Warning");
  $log.debug("Debbug");
  $log.error("The Error!!!");
});
