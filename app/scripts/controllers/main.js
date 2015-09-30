'use strict';

/**
 * @ngdoc function
 * @name nwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nwApp
 */

angular.module('nwApp')
    .controller('MainCtrl', ['$timeout', 'localStorageService', 'GetTestNames', 'GetSlides', '$rootScope', '$routeParams', 'queryStringCheck', '$modal', 'setSettings','GetNamesAndSlides',
        function($timeout, localStorageService, GetTestNames, GetSlides, $rootScope, $routeParams, queryStringCheck, $modal, setSettings, GetNamesAndSlides) {
          
            var candidateNames, projectIdPrefixed, storeKey, projectId;
            var self = this;
            self.displayTally = false;
            var feedBackBox = [];
            projectId = queryStringCheck;        
            self.displaySettings =false;
            self.slides = [];
            self.isTesNameTime = true;
            self.isOverview = false;
            self.colors = ['red','blue','black','white'];
            self.changeBackground = ['Default','Balloon','Billboard',  
            'GirlWithBalloons','GreenField','NatureCouple','RedFlowers',
            'PrescriptionPad',   'SunCouple','SubwayStop','Victory','WhiteFlowers','WomanWithTree', 
             'Cardiology','Cognition','OlderRunningCouple','Respiratory','Sleep','Synapses','Synapses_Blue' ];
            self.typeOfFont = ['Serif','Sans-serif','Roboto','BabelSans','BabelSans-BoldOblique','BadScript','Gidole','LaBelleAurore','Calibri'];
            self.help = function() {
                     alertify.alert(document.getElementById("help").innerHTML).set('title', 'Help info').set('resizable',true).resizeTo('35%', '60%');
                };

         
            // Model for theme configuration
            var themeConfigurationModel = function(TemplateName,TemplateFileName,HeaderFontColor,HeaderFontFamily, RationaleFontColor,RationaleFontFamily,TestNameFontColor,TestNameFontFamily,FooterFontColor,FooterFontFamily,Overlay){                    
                          return{
                                         'TemplateName': TemplateName,
                                         'TemplateFileName': TemplateFileName,
                                         'HeaderFontColor': HeaderFontColor,
                                         'HeaderFontFamily': HeaderFontFamily,
                                         'RationaleFontColor': RationaleFontColor,
                                         'RationaleFontFamily': RationaleFontFamily,
                                         'TestNameFontColor': TestNameFontColor,
                                         'TestNameFontFamily': TestNameFontFamily,
                                         'FooterFontColor': FooterFontColor,
                                         'FooterFontFamily': FooterFontFamily,
                                          'Overlay': Overlay
                                     };   
                         };
            self.togglePresentation = function() {
                        if (self.isTesNameTime === false) {
                            self.isTesNameTime = true;
                                   self.displaySettings = false;
                        } else {
                            self.isTesNameTime = false;
                            self.displaySettings = true;
                        }
                    };

            Reveal.addEventListener('overviewshown', function(event) {
                        $rootScope.$apply(function() {
                            self.isOverview = true;
                        });
                    });

            Reveal.addEventListener('overviewhidden', function(event) {
                        $rootScope.$apply(function() {
                            self.isOverview = false;
                        });
                    });

              //Warning! DO NOT CHANGE  THE "==" for "==="
            Reveal.addEventListener('slidechanged', function(event) {                  
                    // if (startTestNamesAtPage == event.indexh + 1) {
                        if (2 == event.indexh + 1) {
                            $rootScope.$apply(function() {
                                self.isTesNameTime = false;
                            });
                        }
                    });

// **********  Getting Slides URL Images aand description for over view  *************************************************************************************
    GetNamesAndSlides.getdata(1004).then(function(result){
                self.slides = result;                   
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
                        parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.png'"

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

// **********  Getting Slides TEST NAMES presentation  ****************************************************************************************************
     GetTestNames.getdata(projectId).then(function(result) {
  
    var centerTestNames = function(nameCandidate) {
                        self.testNameWidth= '85';
                        if (self.BackGround === 'Billboard' || self.BackGround === 'SubwayStop') {                                      
                            self.columnNameCandSet= '8';
                            switch (nameCandidate.length) {
                                case 3:
                                    self.columnSet = '12';
                                    break;
                                case 4:
                                    self.columnSet = '2';
                                    break;
                                case 5:
                                    self.columnSet = '4';
                                    break;
                                case 6:
                                    self.columnSet = '11';
                                    break;
                                case 7:
                                    self.columnSet = '6';
                                    break;
                                case 8:
                                    self.columnSet = '12';
                                    break;
                                case 9:
                                    self.columnSet = '8';
                                    break;
                                case 10:
                                    self.columnSet = '4';
                                    break;
                                default:

                                    break;
                            }
                            switch (nameCandidate.length) {
                                case 3:
                                case 4:
                                case 5:
                                    self.columnOffSet = '4';
                                    break;
                                case 6:
                                case 7:
                                    self.columnOffSet = '3';
                                    break;
                                case 8:
                                case 9:
                                case 10:
                                    self.columnOffSet = '2';
                                    break;
                                default:

                                    break;
                            }

                            switch (nameCandidate.length) {
                                case 3:
                                    self.marginLeftTestName = '1';
                                    break;
                                case 4:
                                case 8:
                                case 9:
                                case 10:
                                    self.marginLeftTestName = '0';
                                    break;
                                case 5:
                                case 6:
                                case 7:
                                    self.marginLeftTestName = '-40';
                                    break;
                                default:
                                    break;
                            }
                            switch (nameCandidate.length) {
                                case 3:
                                    self.marginLeftImage = '49';
                                    break;
                                case 4:
                                    self.marginLeftImage = '118';
                                    break;
                                case 5:
                                    self.marginLeftImage = '119';
                                    break;
                                case 6:
                                    self.marginLeftImage = ' -13px';
                                    break;
                                case 7:
                                    self.marginLeftImage = '101';
                                    break;
                                case 8:
                                    self.marginLeftImage = '50';
                                    break;
                                case 9:
                                    self.marginLeftImage = '72';
                                    break;
                                case 10:
                                    self.marginLeftImage = '109';
                                    break;
                                default:

                                    break;
                            }

                        }else{
                              self.columnSet = '12';
                              self.columnOffSet = '0';
                              self.marginLeftImage = '0';
                               self.marginLeftTestName = '0';
                              self.columnNameCandSet= '12';
                              self.textAttribute = 'center';
                        }
                   };//  end of centerTestNames
     self.backGroundChanged = function(){
      centerTestNames(self.nameCandidate);
     };

    var setThemeOptions = function(index){
                            self.BackGround  = candidateNames[index].TemplateName;
                            self.testNameFontFamily  = candidateNames[index].TestNameFontFamily;
                            self.testNameFontColor  = candidateNames[index].TestNameFontColor;
                            self.rationaleFontFamily  = candidateNames[index].RationaleFontFamily;
                            self.rationaleFontColor  = candidateNames[index].RationaleFontColor;
                            self.headerFontColor  = candidateNames[index].HeaderFontColor;
                            self.headerFontFamily = candidateNames[index].HeaderFontFamily;                                   
                            self.nameNotation = candidateNames[index].NameNotation; 
                            self.isOverlayAvailable =  candidateNames[index].Overlay;     
                              if (self.isOverlayAvailable === "True" || self.isOverlayAvailable === true){
                              self.isOverlayAvailable = true;
                              self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)'; 
                               }  else{  self.overlayStyle = ''; self.isOverlayAvailable = false; }  
                             centerTestNames(self.BackGround)               
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


    var updateFeedBack = function(storedFeedBack) {
                                self.radioButtons.map(function(obj) {
                                    if (obj.text === storedFeedBack.feedBackScore) {
                                        obj.isUserAnswer = true;
                                    } else {
                                        obj.isUserAnswer = false;
                                    }
                                });
                        };
             
    var candidateNamesSize = 0;
  
    var slideCounter = 0;
    self.radioButtons = [{
                                    id: 1,
                                    text: "Positive",
                                    isUserAnswer: false}, {
                                    id: 2,
                                    text: "Neutral",
                                    isUserAnswer: false}, {
                                    id: 3,
                                    text: "Negative",
                                    isUserAnswer: false
                        }]; 
                        
    if (result.length > 0) {
                    candidateNames = result;
                    projectIdPrefixed = candidateNames[0].PresentationId;
                    storeKey = projectIdPrefixed + 'FEED_BACK_RESULTS';
                    self.textAttribute = 'default';
                    self.logoPath = 'images/LogIcons/icon-1.png';
                    self.isOverlayAvailable =false;
                    self.showTemplate = false;
                    candidateNamesSize = candidateNames.length;
                    self.totalOfTestNames = candidateNames.length;
                    self.slideCounter = false;
                    self.slideCounter2 = true; 
                    self.progressBarValue = 1;   
                    self.positiveScore = 0;
                    self.neutralScore = 0;
                    self.negativeScore = 0;                 
                    self.subRationale ='';               
                    self.subRationale = "Im a Subrationale";                 
                    setThemeOptions(0);
                              
               self.resetSlide = function() {
                            self.displayTally = false;
                            localStorageService.clearAll();
                            location.reload();
                            alert('The slides are reset');
                            self.pageNumber = 1;
                         };

                self.setOverlay = function() {
                            if (self.isOverlayAvailable === true) {
                                self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)'; 
                            } else {
                                self.overlayStyle = '';
                            }
                         };

                self.showThemeOptions = function() {self.displaySettings =  !self.displaySettings;};

                self.saveThemeSettings = function() {
                            if ( self.BackGround !== '') {
                                var configModel = themeConfigurationModel( self.BackGround, 
                                    self.BackGround + '.jpg', self.headerFontColor,  self.headerFontFamily, self.rationaleFontColor,  self.rationaleFontFamily,
                                     self.testNameFontColor, self.testNameFontFamily, 'black', 'Arial', self.isOverlayAvailable);
                                setSettings.postdata(configModel).then(function(result) {
                                  alertify.alert('Your  settings for Theme: ' + result[0].TemplateName + '  are saved').set('resizable',true).set('title','Template Saved ');                                
                                });
                            }
                        };
          
            } else {
                alertify.alert('The test names for this  project is not available plese contact IS for further support').set('title', 'Help info');
        }
     
                var setLayoutVariables = function(nameCandidate, storedFeedBack, candidateNamesIndex) {
                            self.isOverlayAvailable=  candidateNames[candidateNamesIndex].Overlay;
                            self.nameCandidate =nameCandidate;                                                        
                            self.nameCategory = candidateNames[candidateNamesIndex].NameCategory;
                            self.nameNotation = candidateNames[candidateNamesIndex].NameNotation;
                            self.Rationale = candidateNames[candidateNamesIndex].NameRationale;    
                            self.BackGround =   candidateNames[candidateNamesIndex].TemplateName;
                            centerTestNames(self.nameCandidate);
                            self.newName = (storedFeedBack.length>0) ? storedFeedBack[candidateNamesIndex].newName: '';
                            self.explore = (storedFeedBack.length>0) ? storedFeedBack[candidateNamesIndex].explore: '';
                            self.avoid = (storedFeedBack.length>0) ? storedFeedBack[candidateNamesIndex].avoid: '';
                            updateFeedBack((storedFeedBack.length>0) ? storedFeedBack[candidateNamesIndex] : '');
                              
                       };

                // INITIAL SETUP             
                self.pageNumber = slideCounter + 1;
                var isStoreAvailable = localStorageService.get(storeKey);
                var storedFeedBack = (isStoreAvailable === null) ? null : JSON.parse(localStorageService.get(storeKey));

                if (storedFeedBack !== null) {
                    setLayoutVariables (candidateNames[0].Name, storedFeedBack, 0);
                } else {
                    setLayoutVariables (candidateNames[0].Name, [], 0);
                    self.nameCandidate = candidateNames[0].Name;
                    centerTestNames(self.nameCandidate);
                    self.newName = '';
                    self.explore = '';
                    self.avoid = '';
                }

              // END OF INITIAL SETUP

             self.goPrevSlide = function() {                
                        self.displayTally = false;
                        if (slideCounter > 0) {
                            slideCounter = slideCounter - 1;
                            self.progressBarValue = self.progressBarValue - (100 / candidateNamesSize); 
                            var storedFeedBack = JSON.parse(localStorageService.get(storeKey));
                            if (slideCounter < storedFeedBack.length) {
                                setLayoutVariables (storedFeedBack[slideCounter].candidate, storedFeedBack, slideCounter); 
                                setThemeOptions(slideCounter);
                                self.slideCounter2 = true;
                                self.pageNumber = slideCounter + 1;                         
                            }
                           
                        } else {
                            alertify.alert('You are in the 1rst Slide').set('title', 'Help info');
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
                            alertify.alert('Please answer the feed back questions before continuing').set('title', 'Help info');
                        } else { // begin else

                            self.progressBarValue = self.progressBarValue + (100 / candidateNamesSize); // Progress Bar
                            var isStoreAvailable = localStorageService.get(storeKey);
                            var storedFeedBack = (isStoreAvailable === null) ? null : JSON.parse(localStorageService.get(storeKey));
                            if (storedFeedBack !== null && storedFeedBack[slideCounter + 1] !== undefined) { // record exist
                                var updateBeforeData = storedFeedBack;
                                updateBeforeData[slideCounter].newName = self.newName;
                                updateBeforeData[slideCounter].feedBackScore = feedBack;
                                updateBeforeData[slideCounter].candidate = self.nameCandidate;
                                updateBeforeData[slideCounter].explore = self.explore;
                                updateBeforeData[slideCounter].avoid = self.avoid;
                                localStorageService.remove(storeKey);
                                localStorageService.set(storeKey, JSON.stringify(updateBeforeData));
                                setLayoutVariables (storedFeedBack[slideCounter + 1].candidate, storedFeedBack, slideCounter + 1);                         
                                slideCounter = slideCounter + 1;
                                self.slideCounter = true;
                                self.pageNumber = slideCounter + 1;

                            } else {

                                // No Local Stored feed back
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
                                }// End Updating the slide data before next name

                                    // Next Name setup
                                if (slideCounter < candidateNamesSize - 1) {
                                    slideCounter = slideCounter + 1;
                                    self.slideCounter = true;
                                    var addKatakana = (candidateNames[slideCounter].Kana === undefined) ? '' : ' , ' + candidateNames[slideCounter].Kana;
                                    setLayoutVariables ( candidateNames[slideCounter].Name + addKatakana, [], slideCounter);                                           
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
                                                    isUserAnswer: false }
                                      ];

                                    self.pageNumber = slideCounter;
                                } // end if counter
                            }

                        } // end else
                         setThemeOptions(slideCounter);
                    } else {
                        self.slideCounter2 = false;
                         alertify.alert('End of the Slides').set('title', 'Help info');
                    }
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

          self.tally = function() {
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
                };// end tally

            }); // end of the promise call GetTestNames
        }

    ]);