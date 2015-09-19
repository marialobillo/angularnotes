
var myApp = angular.module('myApp', []);

var tb = document.getElementById("name");

tb.addEventListener("keypress",
  function(event){
    console.log("Pressed!");
  }
);
