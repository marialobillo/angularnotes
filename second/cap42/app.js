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

weatherApp.controller('forecastController', ['$scope','cityService','$resource', function($scope, $cityService, $resource){

  $scope.city = $cityService.city;

  $scope.weatherApp = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
    callback: "JSON_CALLBACK"
  },
  {
    get: { method: "JSONP" }
  });
  $scope.weatherResult = $scope.weatherApp.get({ q: $scope.city, cnt: 2});


  $scope.converToCelsius = function(degK){

    return Math.round(1.8 * (degK - 273));
  }

  $scope.convertToDate = function(dt){

    return new Date(dt * 1000);
  }
}]);
