var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){

  $scope.alertClick = function(){
    alert('Clicked!');
  };

  $scope.name = 'Jane Doe';

  var rulesrequest = new XMLHttpRequest();
  rulesrequest.onreadystatechange = function(){

    $scope.$apply(function(){});
    if (rulesrequest.readyState == 4 && rulesrequest.status == 200){
      $scope.rules = JSON.parse(rulesrequest.responseText);
    }
  };

  rulesrequest.open("GET", "http://localhost:54765/api", true);
  rulesrequest.send();
}]);
