'use strict';

/**
 * @ngdoc function
 * @name nwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nwApp
 */
angular.module('nwApp')
    .controller('MainCtrl', ['$timeout', 'localStorageService', 'GetTestNames', 'GetSlides', '$rootScope', '$routeParams', 'queryStringCheck', '$modal', 'setSettings',
        function($timeout, localStorageService, GetTestNames, GetSlides, $rootScope, $routeParams, queryStringCheck, $modal, setSettings) {
            var candidateNames, projectIdPrefixed, storeKey, addDigit;
            var self = this;
            self.displayTally = false;
            var feedBackBox = [];
            var projectId = '';
            projectId = queryStringCheck;
            self.togglePresentation = function() {
                if (self.isTesNameTime === false) {
                    self.isTesNameTime = true;
                } else {
                    self.isTesNameTime = false;
                }
            };

            self.slides = [];
            self.isTesNameTime = true;
            self.isOverview = false;
       
  GetSlides.getdata(projectId).then(function(result) {
                addDigit = '00';

                self.totalSlides = result[0].totalSlides;
                for (var i = 1; i < result[0].totalSlides; i++) {
                    var id = {};
                    if (i > 9) {
                        addDigit = '0';
                    }
                    id = result[0].path + addDigit + i + '.jpg';
                    self.slides.push(id);
                    // Displaying IMages url
                }

                Reveal.addEventListener('overviewshown', function(event) {
                    $rootScope.$apply(function() {
                        self.isOverview = true;
                        self.slideTitle = 'TEST';
                    });
                });

                Reveal.addEventListener('overviewhidden', function(event) {
                    $rootScope.$apply(function() {
                        self.isOverview = false;
                    });
                });

                var startTestNamesAtPage = result[0].NameEvaluationFirstSlide;
                Reveal.addEventListener('slidechanged', function(event) {
                    //Warning! DO NOT CHANGE  THE "==" for "==="
                    // console.log('the index is :  '+event.indexh+1);
                    // if (startTestNamesAtPage == event.indexh + 1) {
                    if (2 == event.indexh + 1) {
                        $rootScope.$apply(function() {
                            self.isTesNameTime = false;
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
                        maxScale: 1.2,


                        // Display controls in the bottom right corner
                        controls: true,

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

                        dependencies: [{
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

            
                self.testNameFontFamily ='Roboto' ;
                self.testNameFontColor ='black' ;
                self.rationaleFontFamily = 'sans-serif';
                self.rationaleFontColor ='white';
                self.headerFontFamily = 'sans-serif';
                self.headerFontColor ='black';


            self.legendAboutOption = function() {

                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'views/templates/configuration.html',
                    size: '600px'
                });


                modalInstance.result.then(function() {}, function() {
                    self.BackGround = setSettings.getBackground();                 
                    self.testNameFontFamily = (setSettings.getTestNameFontType() ==='')?'Roboto' : setSettings.getTestNameFontType() ;
                    self.testNameFontColor = (setSettings.getTestNameFontColor() ==='')? 'black': setSettings.getTestNameFontColor() ;
                    self.rationaleFontFamily = (setSettings.getRationaleFontType() === '')? 'sans-serif': setSettings.getRationaleFontType();
                    self.rationaleFontColor = (setSettings.getRationaleFontColor()==='')? 'white' : setSettings.getRationaleFontColor();
                    self.headerFontColor = (setSettings.getHeaderFontColor()==='')? 'black' : setSettings.getHeaderFontColor();
                    self.headerFontFamily =(setSettings.getHeaderFontType() ==='')? 'sans-serif' : setSettings.getHeaderFontType();
                });

            };
            self.showTemplate = false;

            self.fontSizes = [
                '8',
                '14',
                '20'
            ];


            self.changeBackground = [
                'default',
                'Balloon',
                'Billboard',
                'BusStop',
                'GirlWithBalloons',
                'GreenField',
                'NatureCouple',
                'RedFlowers',
                'PrescriptionPad',
                'SeniorMan',
                'SunCouple',
                'Victory',
                'WhiteFlowers',
                'WomanWithTree',
            ];

            self.typeOfFont = [
                'Serif',
                'Sans-serif',
                'Roboto'
            ];



            self.help = function() {
                alertify.alert(document.getElementById("help").innerHTML).set('title', 'Help info').set('resizable', true).resizeTo('35%', '70%');
            };

     GetTestNames.getdata(projectId).then(function(result) {
                if (result.length > 0) {
                    candidateNames = result;
                    projectIdPrefixed = candidateNames[0].nwid;
                    storeKey = projectIdPrefixed + 'FEED_BACK_RESULTS';
                    self.title = candidateNames[0].Category;


                    var UpdateFeedBack = function(storedFeedBack) {
                        self.radioButtons.map(function(obj) {
                            if (obj.text === storedFeedBack.feedBackScore) {
                                obj.isUserAnswer = true;
                            } else {
                                obj.isUserAnswer = false;
                            }
                        });
                    };
                } else {
                    alert('The test names for this  project is notavailable plese contact IS for further support');
                }

                var candidateNamesSize = candidateNames.length;
                var slideCounter = 0;
                self.slideCounter = false;
                self.slideCounter2 = true;
                self.progressBarValue = 1;

                self.radioButtons = [{
                    id: 1,
                    text: "Positive",
                    isUserAnswer: false
                }, {
                    id: 2,
                    text: "Neutral",
                    isUserAnswer: false
                }, {
                    id: 3,
                    text: "Negative",
                    isUserAnswer: false
                }];
                // INITIAL SETUP
                self.positiveScore = 0;
                self.neutralScore = 0;
                self.negativeScore = 0;
                self.Rationale = candidateNames[0].Rationale;
                self.pageNumber = slideCounter + 1;
                var isStoreAvailable = localStorageService.get(storeKey);
                var storedFeedBack = (isStoreAvailable === null) ? null : JSON.parse(localStorageService.get(storeKey));

                if (storedFeedBack !== null) {
                    storedFeedBack = storedFeedBack[0];
                    self.newName = storedFeedBack.newName;
                    self.nameCandidate = storedFeedBack.candidate;
                    self.explore = storedFeedBack.explore;
                    self.avoid = storedFeedBack.avoid;
                    UpdateFeedBack(storedFeedBack);

                } else {
                    self.nameCandidate = candidateNames[0].TestName;
                    self.newName = '';
                    self.explore = '';
                    self.avoid = '';
                }



                self.resetSlide = function() {
                    self.displayTally = false;
                    localStorageService.clearAll();
                    location.reload();
                    alert('The slides are reset');
                    self.pageNumber = 1;
                };

                self.goPrevSlide = function() {
                    self.displayTally = false;
                    if (slideCounter > 0) {
                        slideCounter = slideCounter - 1;
                        self.progressBarValue = self.progressBarValue - (100 / candidateNamesSize); // Progress Bar
                        var storedFeedBack = JSON.parse(localStorageService.get(storeKey));
                        if (slideCounter < storedFeedBack.length) {
                            self.nameCandidate = storedFeedBack[slideCounter].candidate;
                            self.newName = storedFeedBack[slideCounter].newName;
                            self.explore = storedFeedBack[slideCounter].explore;
                            self.avoid = storedFeedBack[slideCounter].avoid;
                            UpdateFeedBack(storedFeedBack[slideCounter]);
                            self.slideCounter2 = true;
                            self.pageNumber = slideCounter + 1;
                            self.Rationale = candidateNames[slideCounter].Rationale;
                            self.title = candidateNames[slideCounter].Category;
                        } // end if
                    } else {
                        alert('You are in the 1rst Slide');
                        self.slideCounter = false;
                        self.slideCounter2 = true;
                    }
                };

                self.goNextSlide = function() {
                    self.displayTally = false;
                    var feedBack = '';
                    if (slideCounter < candidateNamesSize) {
                        self.radioButtons.map(function(obj) {
                            if (obj.isUserAnswer) {
                                feedBack = obj.text;
                            }
                        });

                        if (feedBack === '') {
                            alert('Please answer the feed back questions before continuing');
                        } else { // begin else
                            self.progressBarValue = self.progressBarValue + (100 / candidateNamesSize); // Progress Bar
                            var isStoreAvailable = localStorageService.get(storeKey);
                            var storedFeedBack = (isStoreAvailable === null) ? null : JSON.parse(localStorageService.get(storeKey));
                            if (storedFeedBack !== null && storedFeedBack[slideCounter + 1] !== undefined) { // record exist
                                var getObjectAlreadyStored = storedFeedBack[slideCounter + 1];
                                var updateBeforeData = storedFeedBack;
                                updateBeforeData[slideCounter].newName = self.newName;
                                updateBeforeData[slideCounter].feedBackScore = feedBack;
                                updateBeforeData[slideCounter].candidate = self.nameCandidate;
                                updateBeforeData[slideCounter].explore = self.explore;
                                updateBeforeData[slideCounter].avoid = self.avoid;

                                localStorageService.remove(storeKey);
                                localStorageService.set(storeKey, JSON.stringify(updateBeforeData));
                                self.newName = getObjectAlreadyStored.newName;
                                self.nameCandidate = getObjectAlreadyStored.candidate;
                                self.explore = getObjectAlreadyStored.explore;
                                self.avoid = getObjectAlreadyStored.avoid;
                                self.Rationale = candidateNames[slideCounter + 1].Rationale;
                                self.title = candidateNames[slideCounter + 1].Category;

                                UpdateFeedBack(getObjectAlreadyStored);
                                slideCounter = slideCounter + 1;
                                self.slideCounter = true;
                                self.pageNumber = slideCounter + 1;
                            } else {
                                if (storedFeedBack === null || storedFeedBack[slideCounter] === undefined) {
                                    var val = feedBackModel(feedBack, self.newName, self.nameCandidate, self.explore, self.avoid);
                                    feedBackBox.push(val);
                                    localStorageService.set(storeKey, JSON.stringify(feedBackBox));
                                } else {

                                    var updateBeforeData2 = storedFeedBack;
                                    updateBeforeData2[slideCounter].newName = self.newName;
                                    updateBeforeData2[slideCounter].feedBackScore = feedBack;
                                    updateBeforeData2[slideCounter].candidate = self.nameCandidate;
                                    updateBeforeData2[slideCounter].explore = self.explore;
                                    updateBeforeData2[slideCounter].avoid = self.avoid;
                                    localStorageService.remove(storeKey);
                                    localStorageService.set(storeKey, JSON.stringify(updateBeforeData2));
                                }
                                if (slideCounter < candidateNamesSize - 1) {
                                    slideCounter = slideCounter + 1;
                                    self.slideCounter = true;
                                    var addKatakana = (candidateNames[slideCounter].Kana === '') ? '' : ' , ' + candidateNames[slideCounter].Kana;
                                    self.nameCandidate = candidateNames[slideCounter].TestName + addKatakana;
                                    self.Rationale = candidateNames[slideCounter].Rationale;
                                    self.title = candidateNames[slideCounter].Category;
                                    self.newName = '';
                                    self.explore = '';
                                    self.avoid = '';
                                    self.radioButtons = [{
                                        id: 1,
                                        text: "Positive",
                                        isUserAnswer: false
                                    }, {
                                        id: 2,
                                        text: "Neutral",
                                        isUserAnswer: false
                                    }, {
                                        id: 3,
                                        text: "Negative",
                                        isUserAnswer: false
                                    }];

                                    self.pageNumber = slideCounter;
                                } // end if counter
                            }

                        } // end else
                    } else {
                        self.slideCounter2 = false;
                        alert('End of the Slides');

                    }
                };

                var feedBackModel = function(feedBackScore, newName, candidate, explore, avoid) {
                    return {
                        "feedBackScore": feedBackScore,
                        "newName": newName,
                        "candidate": candidate,
                        "explore": explore,
                        "avoid": avoid
                    };
                };

                self.updateControl = function(buton) {
                    self.radioButtons.map(function(obj) {
                        if (obj.text === buton.text) {
                            obj.isUserAnswer = true;
                        } else {
                            obj.isUserAnswer = false;
                        }
                    });
                };

                self.tally = function(buton) {

                    self.displayTally = true;
                    var storeObject = localStorageService.get(storeKey);
                    self.positiveScore = 0;
                    self.neutralScore = 0;
                    self.negativeScore = 0;
                    if (storeObject !== null) {
                        storeObject = JSON.parse(storeObject);


                        angular.forEach(storeObject, function(value) {

                            if (value.feedBackScore === 'Positive') {
                                self.positiveScore += 1;
                            }

                            if (value.feedBackScore === 'Neutral') {
                                self.neutralScore += 1;
                            }

                            if (value.feedBackScore === 'Negative') {
                                self.negativeScore += 1;
                            }

                        });
                    }
                };
            }); // end of the promise call GetTestNames
        }
    ])
    .controller('SettingsCtrl', ['setSettings', function(setSettings) {
        var self = this;
        self.backGroundSelected = 'Balloon';
        self.showTemplate = false;

        self.setSettings= function(){

alert('hello');

        };

        self.backGroundChanged = function(MYBackGround) {
            setSettings.setBackground(MYBackGround);
        };
        self.testNameFontTypeChanged = function(ft) {
            setSettings.setTestNameFontType(ft);
        };
        self.testNameFontColorChanged = function(ft) {
            setSettings.setTestNameFontColor(ft);
        };
        self.rationaleFontTypeChanged = function(ft) {
            setSettings.setRationaleFontType(ft);
        };
        self.rationaleFontColorChanged = function(ft) {
            setSettings.setRationaleFontColor(ft);
        };
            self.headerFontTypeChanged = function(ft) {
            setSettings.setHeaderFontType(ft);
        };
        self.headerFontColorChanged = function(ft) {
            setSettings.setHeaderFontColor(ft);
        };

        self.fontSizes = [
            '8',
            '14',
            '20'
        ];
        self.colors = [
            'red',

            'blue',

            'black',

            'white',
        ];
        self.changeBackground = [
            'default',
            'Balloon',
            'Billboard',
            'BusStop',
            'GirlWithBalloons',
            'GreenField',
            'NatureCouple',
            'RedFlowers',
            'PrescriptionPad',
            'SeniorMan',
            'SunCouple',
            'Victory',
            'WhiteFlowers',
            'WomanWithTree',
        ];
        self.typeOfFont = [
            'Serif',
            'Sans-serif',
            'Roboto'
        ];

    }]);
