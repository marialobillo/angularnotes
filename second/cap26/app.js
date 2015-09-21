
var myApp = angular.module('myApp', []);

window.addEventListener('hashchange', function(){

  if(window.location.hash === '#bookmark/1'){
    console.log('Page 1 is cool.');
  }

  if(window.location.hash === '#bookmark/2'){
    console.log('Page 2 is cool.');
  }

  if(window.location.hash === '#bookmark/3'){
    console.log('Page 3 is cool.');
  }
});
