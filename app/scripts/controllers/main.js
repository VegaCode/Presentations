'use strict';

/**
 * @ngdoc function
 * @name nwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nwApp
 */

angular.module('nwApp')
    .controller('MainCtrl', ['$timeout', 'localStorageService', '$http', 'GetSlides', '$rootScope', '$routeParams', 'queryStringCheck', '$modal', 'setSettings','GetNamesAndSlides',
        function($timeout, localStorageService, $http, GetSlides, $rootScope, $routeParams, queryStringCheck, $modal, setSettings, GetNamesAndSlides) {
            var _id, _DisplayName, _FooterFontColor, _FooterFontFamily, _HeaderFontColor, _HeaderFontFamily, _Name, _NameCategory, _NameGroup, _NameLogo, _NameNotation, _NameRanking, _NameRationale, _NamesToAvoid, _NamesToExplore, _NewNames, _Overlay, _PresentationId, _Project, _RationaleFontColor, _RationaleFontFamily, _SlideBGFileName, _SlideDescription, _SlideNumber, _SlideType, _TemplateFileName, _TemplateId, _TemplateName, _TestNameFontColor, _TestNameFontFamily,  _ToNeutral ,_ToPositive;
            var candidateNames, projectIdPrefixed, storeKey, projectId,pageNumber, apiCall, webBaseUrl;
            var self = this;
            // webBaseUrl = 'http://localhost:64378/';
            webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';       
            var feedBackBox = [];
            projectId = queryStringCheck;        
            self.displaySettings =false;
            self.slides = [];
            self.isTesNameTime = true;
            self.isOverview = false;
            self.changeBackground = ['Default','Balloon','Billboard', 'Parasail','GirlWithBalloons','GreenField','NatureCouple','RedFlowers',
                                                        'PrescriptionPad',   'SunCouple','SubwayStop','Victory','WhiteFlowers','WomanWithTree',  'Cardiology','Cognition',
                                                        'OlderRunningCouple','Respiratory','Sleep','Synapses','Synapses_Blue' ];

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

// **********  Getting Slides URL Images and the description for over view  *************************************************************************************
    GetNamesAndSlides.getdata(projectId).then(function(result){
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
  
     self.backGroundChanged = function(){             
            apiCall = 'api/NW_InsertTemplateConfiguration?templateName=';
           $http.get(webBaseUrl + apiCall + self.BackGround).success(function(theme){
                self.BackGround  = theme[0].TemplateName;
                self.testNameFontFamily  = theme[0].TestNameFontFamily;
                self.testNameFontColor  = theme[0].TestNameFontColor;
                self.rationaleFontFamily  = theme[0].RationaleFontFamily;
                self.rationaleFontColor  = theme[0].RationaleFontColor;
                self.headerFontColor  = theme[0].HeaderFontColor;
                self.headerFontFamily = theme[0].HeaderFontFamily;                                   
                self.nameNotation = theme[0].NameNotation; 
                self.isOverlayAvailable = (theme[0].Overlay === 'False')? false : true ;
                (self.isOverlayAvailable === true ) ? self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' :  self.overlayStyle = '';                                 
                centerTestNames(self.nameCandidate)    
              })
             };
    
             var centerTestNames = function(nameCandidate) {
                        self.testNameWidth= '85';
                        if (self.BackGround === 'Billboard' || self.BackGround === 'SubwayStop') {   
                           self.textAttribute = 'left';                                   
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
                                    self.columnOffSet = '3';
                                    break;
                                case 6:
                                case 7:
                                    self.columnOffSet = '2';
                                    break;
                                case 8:
                                case 9:
                                case 10:
                                    self.columnOffSet = '1';
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
                                    self.marginLeftTestName = '20';
                                    break;
                                case 5:
                                case 6:
                                case 7:
                                    self.marginLeftTestName = '30';
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
                   };  

             self.setOverlay = function() {
                            if (self.isOverlayAvailable === true) {
                                self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)'; 
                            } else {
                                self.overlayStyle = '';
                            }
                         };

            self.showThemeOptions = function() {self.displaySettings = !self.displaySettings;};

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

            var slideInfoModel = function(presentationid, slideNumber, NameRanking, NewNames, NamesToExplore,NamesToAvoid, Direction) {
                        return {
                            "presentationid": presentationid,
                            "slideNumber": slideNumber,
                            "NameRanking": NameRanking,
                            "NewNames": NewNames,
                            "NamesToExplore": NamesToExplore,
                            "NamesToAvoid": NamesToAvoid,
                            "Direction": Direction
                        };
                    };

            var initialSlideModel = JSON.stringify( new slideInfoModel(projectId,0,'','','','', 'First'));
         
 var getTestNamesObject = function(initialSlideModel){   
                
                     apiCall = 'api/NW_SaveAndReturnSlideData';                                       
                   $http.post(webBaseUrl + apiCall , initialSlideModel ).success(function(slideObject){
                     // capturing the data 
                         if(slideObject.length>0){
                            _id = slideObject[0].$id;_DisplayName = slideObject[0].DisplayName;_FooterFontColor = slideObject[0].FooterFontColor;
                            _FooterFontFamily = slideObject[0].FooterFontFamily;_HeaderFontColor = slideObject[0].HeaderFontColor;
                            _HeaderFontFamily = slideObject[0].HeaderFontFamily;_Name = slideObject[0].Name;_NameCategory = slideObject[0].NameCategory;
                            _NameGroup = slideObject[0].NameGroup;_NameLogo = slideObject[0].NameLogo;_NameNotation = slideObject[0].NameNotation;
                            _NameRanking = slideObject[0].NameRanking;_NameRationale = slideObject[0].NameRationale;_NamesToAvoid = slideObject[0].NamesToAvoid;
                            _NamesToExplore = slideObject[0].NamesToExplore;_NewNames = slideObject[0].NewNames;_Overlay = slideObject[0].Overlay;
                            _PresentationId = slideObject[0].PresentationId;_Project = slideObject[0].Project;_RationaleFontColor = slideObject[0].RationaleFontColor;
                            _RationaleFontFamily = slideObject[0].RationaleFontFamily;_SlideBGFileName = slideObject[0].SlideBGFileName;
                            _SlideDescription = slideObject[0].SlideDescription;_SlideNumber = slideObject[0].SlideNumber;_SlideType = slideObject[0].SlideType;
                            _TemplateFileName = slideObject[0].TemplateFileName;_TemplateId = slideObject[0].TemplateId;_TemplateName = slideObject[0].TemplateName;
                            _TestNameFontColor = slideObject[0].TestNameFontColor;_TestNameFontFamily = slideObject[0].TestNameFontFamily;
                            _ToNeutral =slideObject[0].TotNeutral; _ToPositive = slideObject[0].TotPositive;
                            (_SlideType === 'NameGroup')? self.displayNameGroup = true: self.displayNameGroup = false;
                            (_SlideType === 'NameGroup')? self.controlsPosition = -286: self.controlsPosition = -23;
                            self.isOverlayAvailable = (_Overlay === 'False')? false : true ;
                           (self.isOverlayAvailable === true && _SlideType !== 'NameGroup') ? self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' :  self.overlayStyle = '';                                 
                            self.pageNumber = _SlideNumber;
                            pageNumber =parseInt(_SlideNumber);
                            self.logoPath = 'images/LogIcons/icon-1.png';
                         
                            self.showTemplate = false;
                            self.totalOfTestNames = '700'; 
                            var progressBarUnit = 100/ self.totalOfTestNames;
                            self.progressBarValue = self.progressBarValue + progressBarUnit ; 
                            self.displayTally = false;
                            self.nameCandidate = _SlideDescription;

                            self.nameCategory = _NameCategory;
                            self.nameNotation = _NameNotation;
                            self.Rationale = _NameRationale.split('-')[0];
                            self.BackGround = _TemplateName;     

                            // inputs
                           self.nameRamking  = _NameRanking;
                           self.newName  = _NewNames;
                           self.avoid  = _NamesToAvoid;
                           self.explore  = _NamesToExplore;
                           self.positiveScore = _ToPositive;
                           self.neutralScore = _ToNeutral;
                          
                           // color and font settings
                            self.headerFontFamily= _HeaderFontFamily;
                            self.headerFontColor= _HeaderFontColor;
                            self.testNameFontFamily= _TestNameFontFamily;
                            self.testNameFontColor= _TestNameFontColor;
                            self.rationaleFontFamily= _RationaleFontFamily;
                            self.rationaleFontColor=  _RationaleFontColor;
                            self.subRationale = ( _NameRationale.split('-')[1] !== undefined) ? _NameRationale.split('-')[1] : '';   
                            centerTestNames(_SlideDescription);
                        }else{   alertify.alert('The test names for the  project: '+ projectId +' is not available plese contact IS for further support').set('title', 'Help info');}
                   }).error(function(err) {
                       return err;
                    })    
            }
                   // INITIAL SETUP
                  getTestNamesObject(initialSlideModel);  

                  self.goNextSlide = function() {      
                   initialSlideModel = JSON.stringify( new slideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore,self.avoid, 'Next'));
                   getTestNamesObject(initialSlideModel);
                  }

                  self.goPrevSlide = function() {         
                   initialSlideModel = JSON.stringify( new slideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Prev'));
                   getTestNamesObject(initialSlideModel);
                 }

                 self.tally = function() {
                            self.displayTally = true;                                                                    
                        }

            
        }

    ]);