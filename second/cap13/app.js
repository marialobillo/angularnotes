
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  console.log($scope);
});

var searchPeople = function(firstname, lastname, height, age, accupation){

  return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));
