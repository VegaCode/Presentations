        'use strict';

        /**
         * @ngdoc function
         * @name nwApp.controller:AboutCtrl
         * @description
         * # AboutCtrl
         * Controller of the nwApp
         */
        var Reveal, addDigit;
        angular.module('nwApp')
            .controller('slideShowCtrl', ['$timeout', 'GetSlides', '$location', '$rootScope', '$scope', function($timeout, GetSlides, $location, $rootScope, $scope) {
                var self = this;
                self.slides = [];
                GetSlides.getdata('4950').then(function(result) {
                    addDigit = '00';

                    self.totalSlides=result[0].totalSlides;
                    for (var i = 1; i < result[0].totalSlides; i++) {
                        var id = {};
                        if (i > 9) {
                            addDigit = '0';
                        }
                        id = result[0].path + addDigit + i + '.jpg';
                        self.slides.push(id);
                         // Displaying IMages url
                    }
                    var startTestNamesAtPage = result[0].NameEvaluationFirstSlide;
                    Reveal.addEventListener('slidechanged', function(event) {
                        //Warning! DO NOT CHANGE  THE "==" for "==="
                        console.log('the index is :  '+event.indexh);
                        if (startTestNamesAtPage == event.indexh + 1) {
                            $rootScope.$apply(function() {
                                $location.path('/main');
                            });
                        }
                    });
                    // slide show configuration settings
                    $timeout(function() {
                        Reveal.initialize({


                            width: 960,
                            height: 680,

                            // Factor of the display size that should remain empty around the content
                            margin: 0.1,

                            // Bounds for smallest/largest possible scale to apply to content
                            minScale: 1.2,
                            maxScale: 2,


                            // Display controls in the bottom right corner
                            controls: false,

                            // Display a presentation progress bar
                            progress: true,

                            // Display the page number of the current slide
                            slideNumber: true,

                            // Push each slide change to the browser history
                            history: false,

                            // Enable keyboard shortcuts for navigation
                            keyboard: true,

                            // Enable the slide overview mode
                            overview: true,

                            // Vertical centering of slides
                            center: true,

                            // Enables touch navigation on devices with touch input
                            touch: true,

                            // Loop the presentation
                            loop: false,

                            // Change the presentation direction to be RTL
                            rtl: false,

                            // Turns fragments on and off globally
                            fragments: true,

                            // Flags if the presentation is running in an embedded mode,
                            // i.e. contained within a limited portion of the screen
                            embedded: false,

                            // Flags if we should show a help overlay when the questionmark
                            // key is pressed
                            help: true,

                            // Number of milliseconds between automatically proceeding to the
                            // next slide, disabled when set to 0, this value can be overwritten
                            // by using a data-autoslide attribute on your slides
                            autoSlide: 0,

                            // Stop auto-sliding after user input
                            autoSlideStoppable: true,

                            // Enable slide navigation via mouse wheel
                            mouseWheel: true,

                            // Hides the address bar on mobile devices
                            hideAddressBar: false,

                            // Opens links in an iframe preview overlay
                            previewLinks: false,

                            // Transition style
                            transition: 'none', // none/fade/slide/convex/concave/zoom

                            // Transition speed
                            transitionSpeed: 'fast', // default/fast/slow

                            // Transition style for full page slide backgrounds
                            backgroundTransition: 'none', // none/fade/slide/convex/concave/zoom

                            // Number of slides away from the current that are visible
                            viewDistance: 1,

                            // Parallax background image
                            parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

                            // Parallax background size
                            parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

                            // Amount to move parallax background (horizontal and vertical) on slide change
                            // Number, e.g. 100
                            parallaxBackgroundHorizontal: '',
                            parallaxBackgroundVertical: '',

                               dependencies: [
                            {
                                src: 'bower_components/reveal-js/lib/js/classList.js',
                                condition: function() {
                                    return !document.body.classList;
                                }
                            }, {
                                src: 'bower_components/reveal-js/plugin/markdown/marked.js',
                                condition: function() {
                                    return !!document.querySelector('[data-markdown]');
                                }
                            }, {
                                src: 'bower_components/reveal-js/plugin/markdown/markdown.js',
                                condition: function() {
                                    return !!document.querySelector('[data-markdown]');
                                }
                            }, {
                                src: 'bower_components/reveal-js/plugin/highlight/highlight.js',
                                async: true,
                                callback: function() {
                                    hljs.initHighlightingOnLoad();
                                }
                            }, {
                                src: 'bower_components/reveal-js/plugin/zoom-js/zoom.js',
                                async: true,
                                condition: function() {
                                    return !!document.body.classList;
                                }
                            }, {
                                src: 'bower_components/reveal-js/plugin/notes/notes.js',
                                async: true,
                                condition: function() {
                                    return !!document.body.classList;
                                }
                            }]
                        });

                        Reveal.configure({});
                    }, 300);
                });
            }]);
