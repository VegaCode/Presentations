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
    }])
//this directive is for selecting the type of fonts for the NW
    .directive('fontsConfiguration', function(){
      return {
        restrict: 'EA',
        scope: true,
        templateUrl: 'views/font-configuration.html',
        template: '<button type="button" class="btn btn-primary glyphicon glyphicon-cog" ng-click="legendAboutOption()"></button>',
        controller: function(){
          self.legendAboutOption = function(){
            alertify.alert("views/font-configuration.html").set('title', 'Font Settings').set('resizable', true).resizeTo('35%', '70%');
          };
        }
        controllerAs: 'legend'
      };
    });
