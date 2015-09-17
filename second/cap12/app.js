
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){


});

var searchPeople = function(firstname, lastname, height, age, accupation){

  return 'Jane Doe';
}

var searchPeopleString = searchPeople.toString();
console.log(searchPeople);
