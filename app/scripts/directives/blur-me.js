'use strict';
// Blur directive is use via attribute <div blur-me /> and it will blur button or inputc boxes
var angular;
angular.module('nwApp')
.directive('blurMe', function blurElemDirective() {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.bind('click', function () {
        element.blur();
      });
    }
  };
})
.directive('redMe', function blurElemDirective() {
 return {
   restrict: 'A',
   link: function (scope, element) {
     element.bind('click', function () {
       var color = element.css('color');
       if(color === 'rgb(0, 0, 0)'){//test if color is black
         element.css('color', 'red');
       }else{
         element.css('color', 'black');
       }
     });
   }
 };
});
