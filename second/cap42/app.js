//module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function($routeProvider){

  $routeProvider

  .when('/',{
    templateUrl: 'pages/home.htm',
    controller: 'homeController'
  })

  .when('/forecast',{
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  })
  .when('/forecast/:days',{
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  })

});

// services
weatherApp.service('cityService', function(){

  this.city = "New York, NY";
});

// controllers

weatherApp.controller('homeController', ['$scope','cityService', function($scope, $cityService){

  $scope.city = $cityService.city;

  $scope.$watch('city', function(){
    $cityService.city = $scope.city;
  });
}]);

weatherApp.controller('forecastController', ['$scope','cityService','$resource','$routeParams',
  function($scope, $cityService, $resource, $routeParams){

  $scope.city = $cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherApp = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
    callback: "JSON_CALLBACK"
  },
  {
    get: { method: "JSONP" }
  });
  $scope.weatherResult = $scope.weatherApp.get({ q: $scope.city, cnt: $scope.days});


  $scope.converToCelsius = function(degK){

    return Math.round(1.8 * (degK - 273));
  }

  $scope.convertToDate = function(dt){

    return new Date(dt * 1000);
  }
}]);

// Directives
weatherApp.directive("weatherReport", function(){

  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      
    }
  }
});
