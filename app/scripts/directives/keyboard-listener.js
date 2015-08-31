  'use strict';

        /**
         * @ngdoc function
         * @name nwApp.directive:keyboardkey
         * @description
         * # keyboardkey
         * Controller of the nwApp
         */
angular.module('nwApp')
// this directive is to listen for keyboard codes for the navigation system
.directive('keyboardkey', [function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, slideShowCtrl) {
                element.on('keydown', function(event) {
                   // console.log(event.keyCode);
                });
            }
        };
    }]);
