
// Blur directive is use via attribute <div blur-me /> and it will blur button or inputc boxes
angular.module('nwApp').directive('blurMe', function blurElemDirective() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind('click', function () {
        element.blur();
      });
    }
  };
})