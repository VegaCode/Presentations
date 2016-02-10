'use strict';

angular.module('AutoFontSize', [])
    .directive('autoFontSize', ['$window',
        function($window) {

            return {
                template: '<div data-role="inner"  ng-transclude></div>',
                transclude: true,
                link: {
                    post: function(scope, elem, attrs) {

                        var providedOptions = scope.$eval(attrs.autoFontSize) || {};
                        var options = angular.extend({
                            shrink: true,
                            grow: true,
                            minSize: 1
                        }, providedOptions);

                        var inner = angular.element(elem[0].querySelector('div[data-role]'));
                        scope.$watch(shrinkOrGrow);

                        function shrinkOrGrow() {
                            var fontLength = inner.children().text().trim().length;
                            if (elem[0].id === 'category' || elem[0].id === 'rationale') {

                                if (fontLength <= 15) {
                                    setFontSize(50);
                                } else if (fontLength <= 50) {
                                    setFontSize(40);
                                } else {
                                    setFontSize(40);
                                }

                            } else if (elem[0].id === 'testName') {
                                if (fontLength <= 14){
                                  setFontSize(120);
                                }else if(fontLength <= 16){
                                  setFontSize(100);
                                }else if(fontLength <= 18){
                                  setFontSize(92);
                                }else if(fontLength <= 20){
                                  setFontSize(85);
                                }else if(fontLength <= 22){
                                  setFontSize(72);
                                }else if(fontLength <= 23){
                                  setFontSize(73);
                                }else if(fontLength <= 26){
                                  setFontSize(65);
                                }else if(fontLength <= 29){
                                  setFontSize(60);
                                }else if(fontLength <= 33){
                                  setFontSize(55);
                              }else if(fontLength <= 47){
                                  setFontSize(44);
                                }else{
                                    setFontSize(40);
                                }
                            }else if( elem[0].id === 'subRationale'){

                                 setFontSize(30);
                            }

                            scope.$emit('auto-font-size:resized', {
                                fontSize: fontSizeI(),
                                elem: elem
                            });
                        }

                        function css(el, prop) {
                            if ($window.getComputedStyle) return $window.getComputedStyle(el[0]).getPropertyValue(prop);
                        }

                        function fontSizeI() {
                            var fontSize = css(inner, 'font-size');
                            return Number(fontSize.match(/\d+/)[0]);
                        }

                        function setFontSize(size) {
                            inner[0].style.fontSize = size + 'px';
                            adjustLineHeightAndInlineImages();
                        }

                        function adjustLineHeightAndInlineImages() {
                            if (!fontSizeAdjusted()) {
                                return;
                            }
                            var size = 0;
                            var images = 0;
                            if (elem[0].id === 'category') {
                                size = 50;
                                inner[0].style.lineHeight = (size + 2) + 'px';
                                images = inner[0].querySelectorAll('img');
                                angular.forEach(images, function(img) {
                                    img.style.height((size + 2) + 'px');
                                });

                            } else if (elem[0].id === 'testName') {
                                size = 180;
                                inner[0].style.lineHeight = (size + 2) + 'px';
                                images = inner[0].querySelectorAll('img');
                                angular.forEach(images, function(img) {
                                    img.style.height((size + 2) + 'px');
                                });
                            }else if (elem[0].id === 'rationale') {
                                size = 40;
                                inner[0].style.lineHeight = (size + 2) + 'px';
                                images = inner[0].querySelectorAll('img');
                                angular.forEach(images, function(img) {
                                    img.style.height((size + 2) + 'px');
                                });
                              }

                        }
                        function fontSizeAdjusted() {
                            return !!inner[0].style.fontSize;
                        }
                    }
                }
            };
        }
    ]);
