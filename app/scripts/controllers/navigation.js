        'use strict';

        /**
         * @ngdoc function
         * @name nwApp.controller:NavigationController
         * @description
         * # NavigationController
         * Controller of the nwApp
         */

        angular.module('nwApp')
            .controller('NavigationController', ['$location', '$scope', function($location , $scope) {
                var alert;
                var self = this;
                   $scope.currentSlideNumber = 0;
                self.goHome = function() {
                    Reveal.slide(0, 0, 0);
                    self.getPagesInfo();
                };

                self.goLeft = function() {
                    Reveal.left();
                    self.getPagesInfo();

                };

                self.getPagesInfo = function() {
                    $scope.currentSlideNumber = Reveal.getIndices().h + 1;
                };

                self.goRigth = function() {
                      Reveal.right();
                       self.getPagesInfo();
                 
                };


                self.goToPresentation = function() {
                    $location.path('/main');
                };


                self.zoomPlus = function() {

                    Reveal.configure({
                        autoSlide: 0
                    });

                };


                self.zoomLess = function() {



                };


            }]);
