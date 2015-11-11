'use strict';

/**
 * @ngdoc function
 * @name nwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nwApp
 */

angular.module('nwApp')
.controller('MainCtrl', ['hotkeys','$timeout', 'localStorageService', '$http', '$rootScope', '$routeParams', 'queryStringCheck', '$modal', 'setSettings','GetNamesAndSlides', 'GetTestNames', 'ResetProject', 'GetRetainedNames',
    function(hotkeys, $timeout, localStorageService, $http, $rootScope,  $routeParams, queryStringCheck, $modal, setSettings, GetNamesAndSlides,GetTestNames, ResetProject, GetRetainedNames) {
            var _nameSummarySlideNumber , _id, _DisplayName, _StrokeRange,  _StrokeColor, _Stroke, _HeaderFontColor, _HeaderFontFamily, _Name, _NameCategory, _NameGroup, _NameLogo, _NameNotation, _NameRanking, _NameRationale, _NamesToAvoid, _NamesToExplore, _NewNames, _Overlay, _PresentationId, _Project, _RationaleFontColor, _RationaleFontFamily, _SlideBGFileName, _SlideDescription, _SlideNumber, _SlideType, _TemplateFileName, _TemplateId, _TemplateName, _TestNameFontColor, _TestNameFontFamily,  _ToNeutral ,_ToPositive, _TotalNames;
            var candidateNames, projectIdPrefixed, storeKey, projectId,pageNumber, apiCall, webBaseUrl;
            var self = this;
            // webBaseUrl = 'http://localhost:64378/';
            webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
            var feedBackBox = [];
            projectId = queryStringCheck;
            self.displaySettings =false;
            self.slides = [];
            self.progressBarValue = 0;
            self.presentTestNamesAtSlide = '';
            self.isJapanese = false; // CA- Added variable to turn on the katakana input
            self.displayMenu = false;
            self.negativeKanaNames = '';

            self.isOverview = false;
            self.changeBackground = ['Default','Balloon','Billboard', 'Parasail','GirlWithBalloons','GreenField','NatureCouple','RedFlowers',
                                                        'PrescriptionPad',   'SunCouple','SubwayStop','Victory','WhiteFlowers','WomanWithTree',  'Cardiology','Cognition',
                                                        'OlderRunningCouple','Respiratory','Sleep','Synapses','Synapses_Blue' ];

            self.typeOfFont = ['Serif','Sans-serif','Roboto','BabelSans','BabelSans-BoldOblique','BadScript','Gidole','LaBelleAurore','Calibri'];

            self.help = function() {
                     alertify.alert(document.getElementById("help").innerHTML).set('title', 'Help info').set('resizable',true).resizeTo('35%', '60%');
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

  // **********  Getting Slides REVEAL TEST  presentation  ****************************************************************************************************
    self.togglePresentation = function() {
                        if (self.isTesNameTime === false) {
                            self.isTesNameTime = true;
                                   self.displaySettings = false;
                        }else {
                            self.isTesNameTime = false;
                            self.displaySettings = true;
                        }
                    };

            Reveal.addEventListener('overviewshown', function(event) {
                if(_SlideNumber > 4){
                    Reveal.slide(  0, _SlideNumber-2, 0 );
                }else{ Reveal.slide(  0, _SlideNumber-1, 0 );}
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
                        if (self.presentTestNamesAtSlide == event.indexh + 1) {
                            $rootScope.$apply(function() {
                                self.isTesNameTime = false;
                            });
                        }
                    });

             self.selectSlide = function(index) {
                    var slideModel = JSON.stringify( new slideInfoModel(projectId, index+1, '','','','', '' ));
                     getTestNamesObject(slideModel);
                   };

// **********  Getting Slides URL Images and the description for over view  *************************************************************************************
    GetNamesAndSlides.getdata(projectId).then(function(result){
                _nameSummarySlideNumber = result[0].SummarySlide;

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
                 (theme[0].Stroke === 'false')? self.isStrokeIt = false : self.isStrokeIt = true;
                if(self.isStrokeIt === true){ self.isTextShadow = 'text-shadow';}else{ self.isTextShadow = ''};
                self.strokeRange =  theme[0].StrokeRange;
                self.strokeColor=  theme[0].StrokeColor;
                self.isOverlayAvailable = (theme[0].Overlay === 'False')? false : true ;
                (self.isOverlayAvailable === true ) ? self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' :  self.overlayStyle = '';
                centerTestNames(self.nameCandidate)
              })
             }; if(  self.isStrokeIt === true){ self.isTextShadow = 'text-shadow';}else{ self.isTextShadow = ''};
                            self.strokeRange = _StrokeRange;
                            self.strokeColor= _StrokeColor;

// CA- this will test for japanese NW
        var isItJapanese = function(japanese){
                   if(japanese === true){
                     self.makeShorterNewNameInput = '6';
                   }else{
                     self.makeShorterNewNameInput = '12';
                   }};

        var centerTestNames = function(nameCandidate) {
               // CA- added function above to make sure if it is katakana or not when billboard or subwaystop is displayed
                        isItJapanese(self.isJapanese);
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
                                    break
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

        //  CA- added function to toggle between on and off default
        var temporaryBackGround;
        self.changeToDefault = function(){
          if (!(self.BackGroundName === 'Default')){
            temporaryBackGround = self.BackGroundName;
            self.backGroundChanged('Default');
          }
          else{
            self.backGroundChanged(temporaryBackGround);
            temporaryBackGround ='';
          }
        };

        self.positiveCount = 0;
        self.neutralCount = 0;
        self.negativeCount = 0;
        self.newNameCount = 0;
        self.retainedNameCount = 0;
        self.stacked = [];
        self.barOfType = ['success', 'primary'];
        var indexOfType = 0;
        var percentageCount = 0;
        var isAddToBarAgain = 0;

        self.addToBar = function(Count){
            self.retainedNameCount = self.positiveCount + self.neutralCount;

            var percentageCount = ((Count * 100) / self.retainedNameCount).toFixed(1);

            self.stacked.push({
              value: percentageCount,
              type: self.barOfType[indexOfType]
            });
            indexOfType = indexOfType + 1;
            isAddToBarAgain += 1;
        };

        // CA- requires users to rank each testName
        self.mustRank = function(){
          if (self.nameRamking === "False" || self.nameRamking === false){
            var isNotRanked = confirm("Name has not been Ranked");
            if (isNotRanked == true){
              alert("Please rank the name before moving forward");
            }else{
              alert("Skipping Slide");
              var slideModel = JSON.stringify( new slideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore,self.avoid, 'Next'));
              getTestNamesObject(slideModel);
            }
          }else{
            var slideModel = JSON.stringify( new slideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore,self.avoid, 'Next'));
            getTestNamesObject(slideModel);
          }
        };

        // CA- added reset button per slide
        self.resetSlide = function(){
          self.nameRamking = false;
          self.newName = "";
          self.explore = "";
          self.avoid = "";
        };

        self.resetAll = function(){
          alertify.confirm('Slides will be reset').set('onok', function(closeEvent){
            self.displayTally = false;
            alert('The slides are reset');
          }).set('oncancel', function(closeEvent){}).set('title', 'Resetting Sides');

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
           var password = prompt("Enter Password");
                if(password === 'admin123'){
                  self.displaySettings = true;
                }else{
                  alert("Please provide the correct password");
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
                            _ToNeutral =slideObject[0].TotNeutral; _ToPositive = slideObject[0].TotPositive;

                            if(slideObject[0].SlideBGFileName === ""){
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
//piece of code in order to commit
                                var instruccion = [projectId + ', "Positive Retained Names"', projectId + ', "Neutral Retained Names"', projectId + ', "Negative Names"', projectId + ', "New Names"'];
                                var apiCall = 'api/NW_GetSummary?instruccion=';
                                var instructionCounter = 0;

                                $http.get(webBaseUrl + apiCall + instruccion[0]).success(function(result){
                                  self.barType = 'success';
                                  self.positiveCount = result.length;
                                });
                                $http.get(webBaseUrl + apiCall + instruccion[1]).success(function(result){
                                  self.barType = 'primary';
                                  self.neutralCount = result.length;
                                });
                                $http.get(webBaseUrl + apiCall + instruccion[2]).success(function(result){
                                  self.negativeCount = result.length;
                                  self.addToBar(self.positiveCount);
                                  self.addToBar(self.neutralCount);
                                });
                                $http.get(webBaseUrl + apiCall + instruccion[3]).success(function(result){
                                  self.newNameCount = result.length;
                                });
                            }else{
                                self.displayNameGroup = false;
                                self.controlsPosition = -23;
                                self.displaySummary = false;
                                self.isTestNameButtons = true;
                            }

                            self.isOverlayAvailable = (_Overlay === 'False')? false : true ;
                           (self.isOverlayAvailable === true && _SlideType !== 'Image') ? self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' :  self.overlayStyle = '';


                           ( self.presentTestNamesAtSlide == '')? self.presentTestNamesAtSlide =_SlideNumber : self.presentTestNamesAtSlide = self.presentTestNamesAtSlide;

                            self.pageNumber = _SlideNumber;
                            //pageNumber =parseInt(_SlideNumber);
                            self.logoPath = 'images/LogIcons/icon-1' + '.png';

                            self.showTemplate = false;

                            self.displayTally = false;
                            self.nameCandidate = _SlideDescription;

                            self.nameCategory = _NameCategory;
                            self.nameNotation = _NameNotation;
                            self.Rationale = _NameRationale.split('$')[0];


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
                            (_Stroke === 'false')?  self.isStrokeIt = false:  self.isStrokeIt = true;
                            if(  self.isStrokeIt === true){ self.isTextShadow = 'text-shadow';}else{ self.isTextShadow = ''};
                            self.strokeRange = _StrokeRange;
                            self.strokeColor= _StrokeColor;
                            self.subRationale = ( _NameRationale.split('$')[1] !== undefined) ? _NameRationale.split('$')[1] : '';
                            centerTestNames(_SlideDescription);
                            if(parseInt(self.pageNumber) === 1){
                              self.progressBarValue = 0;
                            }else{
                              self.progressBarValue = (parseInt(self.pageNumber) * self.progressBarUnit);
                            }
        }

        self.jqueryScrollBarOptions = {
          "onScroll": function(x,y){
            if(y.scroll == y.maxScroll){
              alert('Scrolled to bottom');
            }
          }
        }

        self.positiveNames = [];
        self.neutralNames = [];
        self.negativeNames = [];
        self.newNames = [];
        self.rootsToExplore = [];
        self.rootsToAvoid = [];

        self.displayPositive = false;
        self.displayNeutral = false;
        self.displayNewName = false;
        self.displayRootExplore = false;
        self.displayRootAvoid = false;
        var pushingNameFirstTime = 1;

        self.displaySummarys = function(index){
          if(index === 0){
            self.getPositivesNames();
          }else if (index === 1){
            self.getNeutralsNames();
          }
        };

        self.dataInput = "";

        self.saveExploreComments = function(note){
          var apiCall = 'api/NW_SaveNotes'
          var projectIdAndNote = JSON.stringify(projectId + ", N'"+ note + "', 'Explore'");
          $http.post(webBaseUrl + apiCall , projectIdAndNote)
             alertify.confirm('You are about to save').set('onok', function(closeEvent){
                  alertify.alert("Saved").set('title', 'Result');
                   }).set('oncancel', function(closeEvent){}).set('title', 'Saving Explore Notes')
              self.dataInput='';
        };

        self.saveAvoidComments = function(note){
          var apiCall = 'api/NW_SaveNotes'
          var projectIdAndNote = JSON.stringify(projectId + ", N'"+ note + "', 'Avoid'");
          $http.post(webBaseUrl + apiCall , projectIdAndNote)
           alertify.confirm('You are about to save').set('onok', function(closeEvent){
                  alertify.alert("Saved").set('title', 'Result');
                   }).set('oncancel', function(closeEvent){}).set('title', 'Saving Avoid Notes')
              self.dataInput='';
        };

        self.cancelComments = function(){
          self.dataInput = "";
        };

// CA- this is an example of what can be done depending on the amount of names
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
        }

        self.selectNameFromSummary = function(name){
            var query = projectId+','+"'"+ name +"'";

             apiCall = 'api/NW_NamesAndSlides?projectIdAndTestName=';
                  $http.get(webBaseUrl + apiCall + query).success(function(result){
                      setUpTheSlideInfo(result);
                  })
        };

        self.getPositivesNames = function(){

          self.displayPositive = true;
          self.displayNeutral = false;
          self.displayNegative = false;
          self.displayNewName = false;
          self.displayRootExplore = false;
          self.displayRootAvoid = false;
          self.positiveNames = [];

          GetRetainedNames.getPositiveNames(projectId).then(function(positiveName){
            for(var i = 0; i<positiveName.length; i++){
                self.positiveNames.push(positiveName[i].Name);
            }
            selectColumnSize(positiveName.length);
          });
        };

        self.getNeutralsNames = function(){
          self.displayPositive = false;
          self.displayNeutral = true;
          self.displayNegative = false;
          self.displayNewName = false;
          self.displayRootExplore = false;
          self.displayRootAvoid = false;
          self.neutralNames = [];

          GetRetainedNames.getNeutralNames(projectId).then(function(neutralName){
            for(var i = 0; i<neutralName.length; i++){
                self.neutralNames.push(neutralName[i].Name);
            }
            selectColumnSize(neutralName.length);
          });
        };

        self.getNegativesNames = function(){
          self.displayPositive = false;
          self.displayNeutral = false;
          self.displayNegative = true;
          self.displayNewName = false;
          self.displayRootExplore = false;
          self.displayRootAvoid = false;
          self.negativeNames = [];

          GetRetainedNames.getNegativeNames(projectId).then(function(negativeName){
            for(var i = 0; i<negativeName.length; i++){
                self.negativeNames.push(negativeName[i].Name);
            }
            selectColumnSize(negativeName.length);
          });
        };

        self.getNewsNames = function(){
          self.displayPositive = false;
          self.displayNeutral = false;
          self.displayNegative = false;
          self.displayNewName = true;
          self.displayRootExplore = false;
          self.displayRootAvoid = false;
          self.newNames = [];

          GetRetainedNames.getNewNames(projectId).then(function(newName){
            for(var i = 0; i<newName.length; i++){
                self.newNames.push(newName[i].Name);
            }
            selectColumnSize(newName.length);
          });
        };
        self.getrootsToExplores = function(){
          self.displayPositive = false;
          self.displayNeutral = false;
          self.displayNegative = false;
          self.displayNewName = false;
          self.displayRootExplore = true;
          self.displayRootAvoid = false;
           self.rootsToExplore =[];
          GetRetainedNames.getRootsToExplore(projectId).then(function(rootExplore){
            for(var i = 0; i<rootExplore.length; i++){
                self.rootsToExplore.push(rootExplore[i].Name.trim());
            }
            selectColumnSize(rootExplore.length);
          });
        };

        self.getrootsToAvoids = function(){
          self.displayPositive = false;
          self.displayNeutral = false;
          self.displayNegative = false;
          self.displayNewName = false;
          self.displayRootExplore = false;
          self.displayRootAvoid = true;
          self.rootsToAvoid = [];
          GetRetainedNames.getRootsToAvoid(projectId).then(function(rootAvoid){
            for(var i = 0; i<rootAvoid.length; i++){
                self.rootsToAvoid.push(rootAvoid[i].Name);
            }
            selectColumnSize(rootAvoid.length);
          });
        };

                 var getTestNamesObject = function(initialSlideModel){
                             apiCall = 'api/NW_SaveAndReturnSlideData';
                           $http.post(webBaseUrl + apiCall , initialSlideModel ).success(function(slideObject){
                                 if(slideObject.length>0){
                                   _TotalNames = slideObject[0].TotalNames;
                                   self.totalOfTestNames = parseInt(_TotalNames);
                                   self.progressBarUnit = 100/ self.totalOfTestNames;
                                   setUpTheSlideInfo(slideObject);
                                 }else{   alertify.alert('The test names for the  project: '+ projectId +' is not available plese contact IS for further support').set('title', 'Help info');}
                           }).error(function(err) {
                               return err;
                            })
                    }
                   // INITIAL SETUP
                  self.goHome = function(){
                  var initialSlideModel = JSON.stringify( new slideInfoModel(projectId,0,'','','','', 'First'));
                  getTestNamesObject(initialSlideModel);
                  }

                  self.goHome();

                  self.goToSummarySlide = function(){
                    self.selectSlide(_nameSummarySlideNumber-1);
                  }

                 self.goNextSlide = function() {
                   var slideModel = JSON.stringify( new slideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore,self.avoid, 'Next'));
                   if(_SlideType !== 'Image'){
                     self.mustRank();
                   }else{
                     getTestNamesObject(slideModel);
                   }
                  }

                  self.goPrevSlide = function() {
                   var slideModel = JSON.stringify( new slideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Prev'));
                   getTestNamesObject(slideModel);
                 }

                 self.selectedName = "";
                 self.onSelect = function (slideName) {
                   self.selectedName = slideName;
                    var query = projectId+','+"'"+ slideName +"'";
                       apiCall = 'api/NW_NamesAndSlides?projectIdAndTestName=';
                            $http.get(webBaseUrl + apiCall + query).success(function(result){
                                setUpTheSlideInfo(result);
                            })

                    if(parseInt(self.pageNumber) === 1){
                      self.progressBarValue = 0;
                    }else{
                      self.progressBarValue = (parseInt(self.pageNumber) * self.progressBarUnit);
                    }
                };

                self.logKey = function (event){
                 if(event.keyCode === 13){
                    self.onSelect(self.selectedName);
                  }
                }

                 // CA- the following code will allow to search the candidate names and then display them
                self.testName = [];
                 GetTestNames.getdata(projectId).then(function(testnames){
                     testnames.map(function(obj){
                     self.testName.push(obj.Name);
                   });
                 });

                 // CA- assume it works. (It doesn't work yet since we cannot delete the data from the current project)
                 self.resetingProjects = function(){
                   alertify.confirm('Slides will be reset').set('onok', function(closeEvent){
                     self.displayTally = false;
                     ResetProject.resetProject(projectId);
                     alert('The slides are reset');
                     self.pageNumber = 1;
                   }).set('oncancel', function(closeEvent){}).set('title', 'Resetting Slides');
                 };

                 self.tally = function() {
                        self.displayTally = true;
                        }

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

                        self.blurEffect= function(e){
                            $('input[type="radio"]').each(function( index ) {
                                      $(this).blur();
                                    });
                        }
        }// end of controller

    ]);
