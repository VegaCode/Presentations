'use strict';
/**
 * @ngdoc function
 * @name nwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nwApp
 */
var angular, Reveal, alertify, hljs, alert, prompt;
angular.module('nwApp')
.controller('MainCtrl', ['hotkeys','$timeout', 'localStorageService', '$http', '$rootScope', '$routeParams', 'queryStringCheck', '$modal', 'setSettings',
    function(hotkeys, $timeout, localStorageService, $http, $rootScope,  $routeParams, queryStringCheck, $modal, setSettings) {
            var    _nameSummarySlideNumber , _id, _DisplayName, _StrokeRange,  _StrokeColor, _Stroke,
                    _HeaderFontColor, _HeaderFontFamily, _Name, _NameCategory, _NameGroup, _NameLogo,
                    _NameNotation, _NameRanking, _NameRationale, _NamesToAvoid, _NamesToExplore, _NewNames,
                     _Overlay, _PresentationId, _Project, _RationaleFontColor, _RationaleFontFamily, _SlideBGFileName,
                     _SlideDescription, _SlideNumber, _SlideType, _TemplateFileName, _TemplateId, _TemplateName,
                     _TestNameFontColor, _TestNameFontFamily,  _ToNeutral ,_ToPositive, _TotalNames, _IsTheAppStarted ,
                     _IsBackgroundDefault, _TemporaryBackGround, _KanaNames, _KanaNamesNegative, _PresentationType;
            var projectId, apiCall, webBaseUrl;
            var self = this;
           //webBaseUrl = 'http://localhost:64378/';
            webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
            projectId = queryStringCheck;
            self.displaySettings =false;
            self.slides = [];
            self.progressBarValue = 0;
            self.presentTestNamesAtSlide = '';

            // CA- Added variable to turn on the katakana input trying to push
            // self.phonetics = ['カタカナ', 'チャーシューー' ,'いいえ', '麻將' , 'シューマイ', 'こんにちは'];
            // self.KatakanaNegativeFromDB =['カタカナ', 'チャーシューー'];
            self.isJapanese = false;
            self.sendStoredKatakana =[];
            self.katakanaObjToDisplay = [];
            self.katakanaColor = '#000000';
            self.KatakanaNegativeFromDB =[];
            self.phonetics = [];

            self.displayMenu = false;

            self.isItRed = false;
            self.negativeKanaNames = '';
            _IsTheAppStarted = false;
            _IsBackgroundDefault = false;

            self.slidesNames = [];
            self.testName = [];
            self.isOverview = false;

            self.greeting = 'Hello World!';//****************************** test Karma variable
            self.positiveCount = 0;
            self.neutralCount = 0;
            self.negativeCount = 0;
            self.newNameCount = 0;
            self.retainedNameCount = 0;

             self.positiveNames = [];
             self.neutralNames = [];
             self.negativeNames = [];
             self.newNames = [];
             self.rootsToExplore = [];
             self.rootsToAvoid = [];
             self.retainedNames = [];

             self.displayPositive = false;
             self.displayNeutral = false;
             self.displayNegative = false;
             self.displayNewName = false;
             self.displayRootExplore = false;
             self.displayRootAvoid = false;
             self.displayRetained = false;

// **********  Slides ADMIN back end  ****************************************************************************************************

          self.selectSlide = function(index) {
                    var slideModel = JSON.stringify( new SlideInfoModel(projectId, index+1, '','','','', '' ));
                     getTestNamesObject(slideModel);
                   };
            self.changeBackground = ['Default','Balloon','Billboard', 'Parasail','GirlWithBalloons','GreenField','NatureCouple','RedFlowers',
                                                        'PrescriptionPad',   'SunCouple','SubwayStop','Victory','WhiteFlowers','WomanWithTree',  'Cardiology','Cognition',
                                                        'OlderRunningCouple','Respiratory','Sleep','Synapses','Synapses_Blue', 'Molecules' ];

            self.typeOfFont = ['Serif','Sans-serif','Roboto','BabelSans','BabelSans-BoldOblique','BadScript','Gidole','LaBelleAurore','Calibri'];

            self.help = function() {
                     alertify.alert(document.getElementById('help').innerHTML).set('title', 'Help info').set('resizable',true).resizeTo('35%', '60%');
                };

            // Model for theme configuration
            var themeConfigurationModel = function(TemplateName,TemplateFileName,HeaderFontColor,HeaderFontFamily, RationaleFontColor,RationaleFontFamily,TestNameFontColor,TestNameFontFamily,StrokeColor,StrokeRange,Stroke,Overlay){
                          return{
                                         'TemplateName': TemplateName,
                                         'TemplateFileName': TemplateFileName,
                                         'HeaderFontColor': HeaderFontColor,
                                         'HeaderFontFamily': HeaderFontFamily,
                                         'RationaleFontColor': RationaleFontColor,
                                         'RationaleFontFamily': RationaleFontFamily,
                                         'TestNameFontColor': TestNameFontColor,
                                         'TestNameFontFamily': TestNameFontFamily,
                                         'StrokeColor': StrokeColor,
                                         'StrokeRange': StrokeRange,
                                         'Stroke': Stroke,
                                         'Overlay': Overlay
                                     };
                         };

            self.resetingProjects = function(){
                    var apiCall = 'api/ResetAllSlidesData/';
                    alertify.confirm('Slides will be reset').set('labels', {cancel:'cancel', ok:'ok'}).set('onok', function(){
                     self.displayTally = false;
                      $http.get(webBaseUrl + apiCall + projectId);
                      self.goHome();
                   }).set('oncancel', function(){}).set('title', 'Resetting Slides');
                 };

            self.setOverlay = function() {
              if (self.isOverlayAvailable === true) {
                  self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)';
              } else {
                  self.overlayStyle = '';
              }
            };

            self.showThemeOptions = function() {
                if(self.displaySettings === true)
                    {
                        self.displaySettings =false;
                    }else{
                   var password = prompt('Enter Password');
                        if(password === 'admin123'){
                          self.displaySettings = true;
                        }else{
                          alert('Please provide the correct password');
                        }
                     }
            };

            self.saveThemeSettings = function() {
             if ( self.BackGround !== '') {
               var configModel = themeConfigurationModel( self.BackGround,
                 self.BackGround + '.jpg', self.headerFontColor,  self.headerFontFamily, self.rationaleFontColor,  self.rationaleFontFamily,
                 self.testNameFontColor, self.testNameFontFamily,  self.strokeColor,  self.strokeRange, self.isStrokeIt, self.isOverlayAvailable);
                 setSettings.postdata(configModel).then(function(result) {
                   alertify.alert('Your  settings for Theme: ' + result[0].TemplateName + '  are saved').set('resizable',true).set('title','Template Saved ');
                 });
               }
            };

// **********  Event listeners for revealjs  ****************************************************************************************************

            Reveal.addEventListener('overviewshown', function() {
                if(_SlideNumber > 4){
                    Reveal.slide(  0, _SlideNumber-2, 0 );
                }else{ Reveal.slide(  0, _SlideNumber-1, 0 );}
                        $rootScope.$apply(function() {
                            self.isOverview = true;
                        });
                    });

            Reveal.addEventListener('overviewhidden', function() {
                        $rootScope.$apply(function() {
                            self.isOverview = false;
                        });
                    });

          self.selectSlide = function(index) {
                    var slideModel = JSON.stringify( new SlideInfoModel(projectId, index+1, '','','','', '' ));
                     getTestNamesObject(slideModel);
                   };

// **********  Getting Slides URL Images and the description for over view  *************************************************************************************
             var apicall = 'api/NW_NamesAndSlides?projectId=';
             $http.get(webBaseUrl + apicall + projectId).success(function(result){
                   _nameSummarySlideNumber = result[0].SummarySlide;
                   self.slides = result;
                   result.map(function(obj){
                     self.slidesNames.push(obj.SlideDescription);
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
                            controls: false,

                            // Display a presentation progress bar
                            progress: false,

                            // Display the page number of the current slide
                            slideNumber: false,

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
                            help: false,

                            // Number of milliseconds between automatically proceeding to the
                            // next slide, disabled when set to 0, this value can be overwritten
                            // by using a data-autoslide attribute on your slides
                            autoSlide: 0,

                            // Stop auto-sliding after user input
                            autoSlideStoppable: true,

                            // Enable slide navigation via mouse wheel
                            mouseWheel: true,

                            // Hides the address bar on mobile devices
                            hideAddressBar: true,

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

        self.backGroundChanged = function(backGroundName){
                apiCall = 'api/NW_InsertTemplateConfiguration?templateName=';
               $http.get(webBaseUrl + apiCall + backGroundName).success(function(theme){
                    self.BackGround  = theme[0].TemplateFileName;
                    self.BackGroundName  = theme[0].TemplateName;
                    self.testNameFontFamily  = theme[0].TestNameFontFamily;
                    self.testNameFontColor  = theme[0].TestNameFontColor;
                    self.rationaleFontFamily  = theme[0].RationaleFontFamily;
                    self.rationaleFontColor  = theme[0].RationaleFontColor;
                    self.headerFontColor  = theme[0].HeaderFontColor;
                    self.headerFontFamily = theme[0].HeaderFontFamily;
                    self.nameNotation = theme[0].NameNotation;
                    self.isStrokeIt = theme[0].Stroke === 'false' ? false : true;
                    if(self.isStrokeIt === true){ self.isTextShadow = 'text-shadow';}else{ self.isTextShadow = '';}
                    self.strokeRange =  theme[0].StrokeRange;
                    self.strokeColor=  theme[0].StrokeColor;
                    self.isOverlayAvailable = theme[0].Overlay === 'False' ? false : true ;
                    self.overlayStyle = self.isOverlayAvailable === true  ?  'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' : '';
                    centerTestNames(self.nameCandidate);
                  });
             };

         if(  self.isStrokeIt === true){
            self.isTextShadow = 'text-shadow';
             }else{
              self.isTextShadow = '';
          }


        var centerTestNames = function(nameCandidate) {
               // CA- added function above to make sure if it is katakana or not when billboard or subwaystop is displayed
                        self.testNameWidth= '85';
                    if(_TemplateName === 'Billboard' ||_TemplateName ==='SubwayStop'){
                            self.textAttribute = 'left';

                // ************************ Column Off Set *************************************
                           switch (nameCandidate.length) {
                                case 3:
                                case 4:
                                  self.columnOffSet = '5';
                                  break;
                                case 5:
                                case 6:
                                    self.columnOffSet = '4';
                                    break;
                                case 7:
                                case 8:
                                case 9:
                                    self.columnOffSet = '3';
                                    break;
                                case 10:
                                    self.columnOffSet = '2';
                                    break;
                                default:
                                    break;
                            }
                // ************************ Margin Left of TestName ****************************
                            switch (nameCandidate.length) {
                                case 3:
                                case 5:
                                    self.marginLeftTestName = '90';
                                    break;
                                case 4:
                                    self.marginLeftTestName = '120';
                                    break;
                                case 6:
                                    self.marginLeftTestName = '145';
                                    break;
                                case 7:
                                    self.marginLeftTestName = '60';
                                    break;
                                case 8:
                                    self.marginLeftTestName = '110';
                                    break;
                                case 9:
                                    self.marginLeftTestName = '150';
                                    break;
                                case 10:
                                    self.marginLeftTestName = '100';
                                    break;
                                default:
                                    break;
                            }
                // ************************ Margin Left of Image *******************************
                            switch (nameCandidate.length) {
                                case 3:
                                case 5:
                                    self.marginLeftImage = '140';
                                    break;
                                case 4:
                                    self.marginLeftImage = '180';
                                    break;
                                case 6:
                                    self.marginLeftImage = '200';
                                    break;
                                case 7:
                                    self.marginLeftImage = '120';
                                    break;
                                case 8:
                                    self.marginLeftImage = '170';
                                    break;
                                case 9:
                                    self.marginLeftImage = '210';
                                    break;
                                case 10:
                                    self.marginLeftImage = '160';
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



        self.changeToDefault = function(){
              if (self.BackGroundName !== 'Default'){
                _TemporaryBackGround = self.BackGroundName;
                self.backGroundChanged('Default');
              }
              else{
                self.backGroundChanged(_TemporaryBackGround);
                _TemporaryBackGround ='';
              }
              _IsBackgroundDefault = (_IsBackgroundDefault === true) ? false:true ;
        };

        self.mustRank = function(){
              if (self.nameRamking === false || self.nameRamking ===''){
                alert('Please vote on the name');
              }else{
                var slideModel = JSON.stringify( new SlideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore,self.avoid, 'Next'));
                getTestNamesObject(slideModel);
              }
        };

        var SlideInfoModel = function(presentationid, slideNumber, NameRanking, NewNames, NamesToExplore,NamesToAvoid, Direction) {
          return {
              'presentationid': presentationid,
              'slideNumber': slideNumber,
              'NameRanking': NameRanking,
              'NewNames': NewNames,
              'NamesToExplore': NamesToExplore,
              'NamesToAvoid': NamesToAvoid,
              'Direction': Direction
          };
        };

        //made K start as caps since program recommends constructors to be initialized with a cap letter
        var KatakanaModel = function(name, color){
         return{
           'name': name,
           'katakanaColor': color
         };
        };

// **********  To Set SUMMARY Slides  ****************************************************************************************************
         var setProgressBarsSummary = function(){
                    var instruccion = [projectId + ', "Positive Retained Names"', projectId + ', "Neutral Retained Names"', projectId + ', "Negative Names"', projectId + ', "New Names"'];
                    var apiCall = 'api/NW_GetSummary?instruccion=';
                          $http.get(webBaseUrl + apiCall + instruccion[0]).success(function(result){
                                              self.barType = 'success';
                                              self.positiveCount = result.length;
                                                    $http.get(webBaseUrl + apiCall + instruccion[1]).success(function(result){
                                                      self.barType = 'primary';
                                                      self.neutralCount = result.length;
                                                           self.retainedNameCount = self.positiveCount + self.neutralCount;
                                                           var percentageRetainedCount = ((self.positiveCount * 100) / self.retainedNameCount).toFixed(0);
                                                           var percentageNeutralCount = ((self.neutralCount * 100) / self.retainedNameCount).toFixed(0);
                                                            self.stacked = [];
                                                            self.stacked.push({
                                                              description: 'Positive',
                                                              value: percentageRetainedCount,
                                                              type: 'success'
                                                            });
                                                          self.stacked.push({
                                                          description: 'Neutral',
                                                          value: percentageNeutralCount,
                                                          type: 'primary'
                                                        });
                                        });// end of neutral
                    });//end of  positives

                    $http.get(webBaseUrl + apiCall + instruccion[2]).success(function(result){
                      self.negativeCount = result.length;
                   });

                    $http.get(webBaseUrl + apiCall + instruccion[3]).success(function(result){
                      self.newNameCount = result.length;
                    });


                 };

        // for review
        var setUpTheSlideInfo = function(slideObject){
                            _id = slideObject[0].$id;_DisplayName = slideObject[0].DisplayName;_StrokeRange  = slideObject[0].StrokeRange;
                            _StrokeColor = slideObject[0].StrokeColor; _Stroke = slideObject[0].Stroke;_HeaderFontColor = slideObject[0].HeaderFontColor;
                            _HeaderFontFamily = slideObject[0].HeaderFontFamily;_Name = slideObject[0].Name;_NameCategory = slideObject[0].NameCategory;
                            _NameGroup = slideObject[0].NameGroup;_NameLogo = slideObject[0].NameLogo;_NameNotation = slideObject[0].NameNotation;
                            _NameRanking = slideObject[0].NameRanking;_NameRationale = slideObject[0].NameRationale;_NamesToAvoid = slideObject[0].NamesToAvoid;
                            _NamesToExplore = slideObject[0].NamesToExplore;_NewNames = slideObject[0].NewNames;_Overlay = slideObject[0].Overlay;
                            _PresentationId = slideObject[0].PresentationId;_Project = slideObject[0].Project;_RationaleFontColor = slideObject[0].RationaleFontColor;
                            _RationaleFontFamily = slideObject[0].RationaleFontFamily;_SlideBGFileName = slideObject[0].SlideBGFileName;
                            _SlideDescription = slideObject[0].SlideDescription;_SlideNumber = slideObject[0].SlideNumber;_SlideType = slideObject[0].SlideType;
                            _TemplateFileName = slideObject[0].TemplateFileName;_TemplateId = slideObject[0].TemplateId;_TemplateName = slideObject[0].TemplateName;
                            _TestNameFontColor = slideObject[0].TestNameFontColor;_TestNameFontFamily = slideObject[0].TestNameFontFamily;
                            _ToNeutral =slideObject[0].TotNeutral; _ToPositive = slideObject[0].TotPositive; _KanaNames = slideObject[0].KanaNames; _KanaNamesNegative = slideObject[0].KanaNamesNegative; _PresentationType = slideObject[0].PresentationType;

                            // check if the _IsBackgroundDefault is false or true to  add/remove the default background
                            if(_IsBackgroundDefault === false){
                                    if(slideObject[0].SlideBGFileName === ''){
                                      self.BackGround = slideObject[0].TemplateFileName;
                                    }else {
                                      self.BackGround = slideObject[0].SlideBGFileName;
                                    }
                                    self.BackGroundName = _TemplateName;
                                    if(_TemplateName === 'Billboard' ||_TemplateName ==='SubwayStop'){
                                         self.whatBackgroundIsIt =true;
                                     }else{
                                         self.whatBackgroundIsIt = false;
                                     }

                           // color and font settings
                            self.headerFontFamily= _HeaderFontFamily;
                            self.headerFontColor= _HeaderFontColor;
                            self.testNameFontFamily= _TestNameFontFamily;
                            self.testNameFontColor= _TestNameFontColor;
                            self.rationaleFontFamily= _RationaleFontFamily;
                            self.rationaleFontColor=  _RationaleFontColor;
                            self.isStrokeIt = (_Stroke === 'false')? false: true;
                            if(  self.isStrokeIt === true){ self.isTextShadow = 'text-shadow';}else{ self.isTextShadow = '';}
                            self.strokeRange = _StrokeRange;
                            self.strokeColor= _StrokeColor;
                            self.subRationale = ( _NameRationale.split('$')[1] !== undefined) ? _NameRationale.split('$')[1] : '';
                            centerTestNames(_SlideDescription);
                            self.pageNumber = _SlideNumber;

                            if(true){
                              self.KatakanaNegativeFromDB = _KanaNamesNegative.split(',');
                              self.phonetics = _KanaNames.split(',');
                            }

                            if(parseInt(self.pageNumber) === 1){
                              self.progressBarValue = 0;
                            }else{
                              self.progressBarValue = (parseInt(self.pageNumber) * self.progressBarUnit);
                            }


                          }else{self.BackGround = 'default';}

                            if(_SlideType === 'Image'){
                                 self.displayNameGroup = true;
                                 self.controlsPosition = -282;
                                 _SlideDescription='';
                                 self.displaySummary = false;
                                 self.isTestNameButtons = false;
                            }else if (_SlideType === 'NameSummary') {
                                 _SlideDescription='';
                                self.displaySummary = true;
                                self.displayNameGroup = true;
                                self.controlsPosition = -282;
                                self.isTestNameButtons = false;
                                setProgressBarsSummary();
                            }else{
                                self.displayNameGroup = false;
                                self.controlsPosition = -23;
                                self.displaySummary = false;
                                self.isTestNameButtons = true;
                            }

                            self.isOverlayAvailable = (_Overlay === 'False')? false : true ;
                            self.overlayStyle = (self.isOverlayAvailable === true && _SlideType !== 'Image') ?'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' : '';

                            self.presentTestNamesAtSlide = ( self.presentTestNamesAtSlide === '')?_SlideNumber : '';

                            self.logoPath = 'images/LogIcons/icon-1' + '.png';

                            self.showTemplate = false;

                            self.displayTally = false;
                            self.nameCandidate = _SlideDescription;

                            self.nameCategory = _NameCategory;
                            self.nameNotation = _NameNotation;
                            self.Rationale = _NameRationale.split('$')[0];
                            // inputs
                           self.nameRamking  = (_SlideType !== 'NameSummary') ? _NameRanking : true;
                           self.newName  = _NewNames;
                           self.avoid  = _NamesToAvoid;
                           self.explore  = _NamesToExplore;
                           self.positiveScore = _ToPositive;
                           self.neutralScore = _ToNeutral;

                           self.sendStoredKatakana = [];
                           self.katakanaObjToDisplay = [];
                           self.displayKatakana();
            };

        self.displaySummarys = function(index){
              if(index === 0){
                self.getPositivesNames();
              }else if (index === 1){
                self.getNeutralsNames();
              }
        };

        self.saveExploreComments = function(note){
              // DO NOT PUT SINGLE QUOATES HERE
              var apiCall = 'api/NW_SaveNotes';
              var projectIdAndNote = JSON.stringify(projectId + ', N"' + note + ',"Explore"');
              $http.post(webBaseUrl + apiCall , projectIdAndNote);
                 alertify.confirm('You are about to save').set('onok', function(){
                      alertify.alert('Thank you !').set('title', 'Comments are saved');
                    }).set('oncancel', function(){}).set('title', 'Saving Explore Notes');
            };

        self.saveAvoidComments = function(note){
              var apiCall = 'api/NW_SaveNotes';
              var projectIdAndNote = JSON.stringify(projectId + ', N"' + note + ',"Avoid"');
              $http.post(webBaseUrl + apiCall , projectIdAndNote);
               alertify.confirm('You are about to save').set('onok', function(){
                      alertify.alert('Thank you !').set('title', 'Comments are saved');
                    }).set('oncancel', function(){}).set('title', 'Saving Avoid Notes');
            };

            var selectColumnSize = function(totalNames){
                      if(totalNames <= 20){
                        self.columnSize = 4; //3 columns will be generated
                        self.sizeOfFont = '40px';
                      }else if(totalNames <= 50){
                        self.columnSize = 3; //4 columns will be generated
                        self.sizeOfFont = '35px';
                      }else if (totalNames <= 70) {
                        self.columnSize = 4; //3 columns will be generated
                        self.sizeOfFont = '35px';
                      }else if (totalNames <=100) {
                        self.columnSize = 3; //4 columns will be generated
                        self.sizeOfFont = '35px';
                      }
             };

        self.selectNameFromSummary = function(name){
            var query = projectId+','+'"'+ name +'"';
             apiCall = 'api/NW_NamesAndSlides?projectIdAndTestName=';
                  $http.get(webBaseUrl + apiCall + query).success(function(result){
                      setUpTheSlideInfo(result);
                  });
         };

        var resetBooleanSummarySlideVars = function(){
                  self.displayPositive = false;
                  self.displayNeutral = false;
                  self.displayNegative = false;
                  self.displayNewName = false;
                  self.displayRootExplore = false;
                  self.displayRootAvoid = false;
                  self.displayRetained = false;
                  self.positiveNames = [];
                  self.neutralNames = [];
                  self.negativeNames = [];
                  self.newNames = [];
                  self.rootsToExplore =[];
                  self.rootsToAvoid = [];
                  self.retainedNames = [];
                };

         self.blurEffect= function(){
                $('input[type="radio"]').each(function( ) {
                          $(this).blur();
                        });
            };
        //************ Methods to get summary data ***********************************************************************************************************

            self.getRetainedNames = function(){
                      resetBooleanSummarySlideVars();
                          self.displayRetained = true;
                          var apiCall = 'api/NW_GetSummary?instruccion=';
                          var instruccion = projectId + ', "Positive Retained Names"';
                          $http.get(webBaseUrl +  apiCall + instruccion ).success(function(positiveName){
                          for(var i = 0; i<positiveName.length; i++){
                              self.retainedNames.push(positiveName[i].Name);
                          }
                                var instruccion = projectId + ',"Neutral Retained Names"';
                                $http.get(webBaseUrl +  apiCall + instruccion).success(function(neutralName){
                                  for(var i = 0; i<neutralName.length; i++){
                                    self.retainedNames.push(neutralName[i].Name);
                                  }
                               });
                         });
                         selectColumnSize(self.retainedNames.length);
                };

                self.getPositivesNames = function(){
                    resetBooleanSummarySlideVars();
                         self.displayPositive = true;
                         var apiCall = 'api/NW_GetSummary?instruccion=';
                         var instruccion = projectId + ', "Positive Retained Names"';
                        $http.get(webBaseUrl +  apiCall + instruccion ).success(function(positiveName){
                        for(var i = 0; i<positiveName.length; i++){
                            self.positiveNames.push(positiveName[i].Name);
                        }
                        selectColumnSize(positiveName.length);
                      });
                };
                self.getNeutralsNames = function(){
                      resetBooleanSummarySlideVars();
                      self.displayNeutral = true;
                      var apiCall = 'api/NW_GetSummary?instruccion=';
                        var instruccion = projectId + ', "Neutral Retained Names"';
                      $http.get(webBaseUrl +  apiCall + instruccion).success(function(neutralName){
                        for(var i = 0; i<neutralName.length; i++){
                            self.neutralNames.push(neutralName[i].Name);
                            self.retainedNames.push(neutralName[i].Name);
                        }
                        selectColumnSize(neutralName.length);
                      });
                };
                self.getNegativesNames = function(){
                         resetBooleanSummarySlideVars();
                         self.displayNegative = true;
                         var apiCall = 'api/NW_GetSummary?instruccion=';
                         var instruccion = projectId +  ', "Negative Names"';
                          $http.get(webBaseUrl +  apiCall + instruccion ).success(function(negativeName){
                            for(var i = 0; i<negativeName.length; i++){
                                self.negativeNames.push(negativeName[i].Name);
                            }
                            selectColumnSize(negativeName.length);
                          });
                };
                self.getNewsNames = function(){
                     resetBooleanSummarySlideVars();
                      self.displayNewName = true;
                      var apiCall = 'api/NW_GetSummary?instruccion=';
                     var instruccion = projectId + ',"New Names"';
                     $http.get(webBaseUrl +  apiCall + instruccion ).success(function(newName){
                        newName.map(function(obj) {
                            self.newNames.push(obj);
                        });
                        selectColumnSize(newName.length);
                      });
                };

                var getNotesFromServer = function (){
                            var apiCall = 'api/NW_GetNotes?projectid=';
                           $http.get(webBaseUrl +  apiCall + projectId ).success(function(rootExplore){
                            self.dataExploreInput = rootExplore[0].NotesExplore;
                            self.dataAvoidInput = rootExplore[0].NotesAvoid;
                          });

                };

                self.getrootsToExplores = function(){
                           getNotesFromServer();
                           resetBooleanSummarySlideVars();
                           self.displayRootExplore = true;
                           var apiCall = 'api/NW_GetSummary?instruccion=';
                           var  instruccion = projectId + ', "Roots to Explore"';
                           $http.get(webBaseUrl +  apiCall + instruccion ).success(function(rootExplore){
                            rootExplore.map(function(obj) {
                                self.rootsToExplore.push(obj);
                            });
                            selectColumnSize(rootExplore.length);
                          });
                };


                self.getrootsToAvoids = function(){
                    getNotesFromServer();
                    resetBooleanSummarySlideVars();
                    self.displayRootAvoid = true;
                    var apiCall = 'api/NW_GetSummary?instruccion=';
                    var instruccion = projectId +  ', " to Avoid"';
                    $http.get(webBaseUrl +  apiCall + instruccion ).success(function(rootAvoid){
                      rootAvoid.map(function(obj) {
                      self.rootsToAvoid.push(obj);
                      });
                      selectColumnSize(rootAvoid.length);
                    });
                };


                 var getTestNamesObject = function(initialSlideModel){
                                      var apiCall = 'api/NW_SaveAndReturnSlideData';
                                       $http.post(webBaseUrl + apiCall , initialSlideModel ).success(function(slideObject){
                                             if(slideObject.length>0){
                                               _TotalNames = slideObject[0].TotalNames;
                                               self.totalOfTestNames = parseInt(_TotalNames);
                                               self.progressBarUnit = 100/ self.totalOfTestNames;
                                               setUpTheSlideInfo(slideObject);
                                             }else{   alertify.alert('The test names for the  project: '+ projectId +' is not available plese contact IS for further support').set('title', 'Help info');}
                                       }).error(function(err) {
                                           return err;
                                        });
                            };

 //************ Navigation Methods ***********************************************************************************************************
        self.isKatakanaNegative = function(phonetic,  index){
          if(self.sendStoredKatakana[index] === phonetic){
            if(self.phonetics[index]=== self.KatakanaNegativeFromDB[index]){
              self.sendStoredKatakana[index] = '';
            }else{
              self.sendStoredKatakana[index] = '';
            }
          }else{
            self.sendStoredKatakana[index] = phonetic;
          }
        };

        self.displayKatakana = function(){
          self.phonetics.map(function(obj){
            var isKatakanaEqual = self.KatakanaNegativeFromDB.indexOf(obj);
            if(isKatakanaEqual >= 0){
              var newKatakanaObj = new KatakanaModel(obj, 'red');
              self.katakanaObjToDisplay.push(newKatakanaObj);
              if(self.sendStoredKatakana.indexOf(obj) < 0){
                self.sendStoredKatakana.push(obj);
              }
            }else{
              var newKatakanaObj2 = new KatakanaModel(obj, 'black');
              self.katakanaObjToDisplay.push(newKatakanaObj2);
            }
          });
        };

        self.goHome = function() {
            if(_IsTheAppStarted){self.goNextSlide();}
            var initialSlideModel = JSON.stringify(new SlideInfoModel(projectId, 0, '', '', '', '', 'Next'));
            getTestNamesObject(initialSlideModel);
        };

        self.goToSummarySlide = function() {
            self.goNextSlide();
            setProgressBarsSummary();
            self.selectSlide(_nameSummarySlideNumber - 1);
        };

        self.goNextSlide = function() {
            var slideModel = JSON.stringify(new SlideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Next'));
            if (_SlideType !== 'Image') {
                self.mustRank();
            } else {
                getTestNamesObject(slideModel);
            }
        };

        // leave the code in this position
         self.goHome();
        _IsTheAppStarted =true;
        self.goPrevSlide = function() {
            var slideModel = JSON.stringify(new SlideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Prev'));
            getTestNamesObject(slideModel);
        };

        self.selectedName = '';

        self.onSelect = function(slideName) {

          var foundMatch = false;
          var amount = 0;
          if(self.testName.indexOf(slideName) < 0){
            while(foundMatch === false){
              if(slideName === self.slides[amount].SlideDescription){
                var numberOfPage = self.slides[amount].$id;
                self.selectSlide(parseInt(numberOfPage)-1);
                foundMatch = true;
              }else {
                amount += 1;
                foundMatch = false;
              }
            }
          }else{

            self.selectedName = slideName;
            var query = projectId + ',' + '"' + slideName + '"';
            apiCall = 'api/NW_NamesAndSlides?projectIdAndTestName=';
            $http.get(webBaseUrl + apiCall + query).success(function(result) {
                setUpTheSlideInfo(result);
            });

            if (parseInt(self.pageNumber) === 1) {
                self.progressBarValue = 0;
            } else {
                self.progressBarValue = (parseInt(self.pageNumber) * self.progressBarUnit);
            }
          }
        };

        self.logKey = function(event) {
            if (event.keyCode === 13) {
                self.onSelect(self.selectedName);
            }
        };

        // this list is to compare with displayable names for typeahead
        apiCall = 'api/NW_Presentation?projectIdForData=';
        $http.get(webBaseUrl + apiCall + projectId).success(function(testnames) {
            testnames.map(function(obj) {
                self.testName.push(obj.Name);
            });
        });

        self.resetSlide = function() {
            self.nameRamking = false;
            self.newName = '';
            self.explore = '';
            self.avoid = '';
        };

        self.tally = function() {
            self.displayTally = true;
        };

 //************ Cheat Sheet  ***********************************************************************************************************
                hotkeys.add({
                        combo:'O',
                        description:'Overview',
                        callback: function(){
                }});

                 hotkeys.add({
                            combo:'right',
                            description:'To go forward',
                            callback: function(e){
                                e.preventDefault();
                                 self.goNextSlide();
                            }});

                 hotkeys.add({
                                    combo:'left',
                                    description:'To go Back',
                                    callback: function(){
                                             self.goPrevSlide();
                            }});

                 hotkeys.add({
                                    combo:'up',
                                    description:'Display Menu',
                                    callback: function(){
                                                self.displayMenu = true;
                            }});

                 hotkeys.add({
                                    combo:'down',
                                    description:'Hide Menu',
                                    callback: function(){
                                               self.displayMenu = false;
                            }});
                 hotkeys.add({
                                    combo:'Ctrl +',
                                    description:'Zoom in',
                                    callback: function(){
                                               self.displayMenu = false;
                            }});

                 hotkeys.add({
                                    combo:'Ctrl -',
                                    description:'Zoom out',
                                    callback: function(){
                                               self.displayMenu = false;
                            }});

                 hotkeys.add({
                                    combo:'F11',
                                    description:'Enter and exit Full Screen Mode',
                                    callback: function(){
                                               self.displayMenu = false;
                            }});


        }// end of controller

    ]);
