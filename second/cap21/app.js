 var myApp = angular.module('myApp', []);

 myApp.controller('mainController', ['$scope', function($scope){

   $scope.alertClick = function(){
     alert('Clicked!');
   };

   $scope.name = 'Jane Doe';
 }]);
