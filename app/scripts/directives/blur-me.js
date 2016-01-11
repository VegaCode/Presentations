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
       if(color === 'rgb(0, 0, 0)'||color === '#000000' || color === 'hsl(0, 0%, 0)'
                                  || color === 'rgb(255, 255, 255)'
                                  ||color === 'hsl(360, 100%, 100%)'
                                  ||color === '#ffffff'){//test if color is black or white

         element.css('color', '#FF0000');
       }else{
         element.css('color', '#000000');
       }
     });
   }
 };
});
