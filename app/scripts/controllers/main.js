'use strict';
/**
 * @ngdoc function
 * @name nwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nwApp
 */

angular.module('nwApp')
.controller('MainCtrl', ['hotkeys','$timeout', 'localStorageService', '$http', '$rootScope', '$routeParams', 'queryStringCheck', '$modal', 'setSettings','growl',
    function(hotkeys, $timeout, localStorageService, $http, $rootScope,  $routeParams, queryStringCheck, $modal, setSettings, growl) {
            var    _nameSummarySlideNumber , _id, _DisplayName, _StrokeRange,  _StrokeColor, _Stroke,
                    _HeaderFontColor, _HeaderFontFamily, _Name, _NameCategory, _NameGroup, _NameLogo,
                    _NameNotation, _NameRanking, _NameRationale, _NamesToAvoid, _NamesToExplore, _NewNames,
                     _Overlay, _PresentationId, _Project, _RationaleFontColor, _RationaleFontFamily, _SlideBGFileName,
                     _SlideDescription, _SlideNumber, _SlideType, _TemplateFileName, _TemplateId, _TemplateName,
                     _TestNameFontColor, _TestNameFontFamily,  _ToNeutral ,_ToPositive, _TotalNames, _IsTheAppStarted ,
                     _IsBackgroundDefault, _TemporaryBackGround, _KanaNames, _KanaNamesNegative, _PresentationType;
            var projectId, apiCall, webBaseUrl;
            var self = this;
            webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';
            webBaseUrl = 'http://localhost:64378/';
            projectId = queryStringCheck;
            self.displaySettings =false;
            self.slides = [];
            self.progressBarValue = 0;
            self.presentTestNamesAtSlide = '';
            self.sendStoredKatakana =[];
            self.katakanaObjToDisplay = [];
            self.katakanaColor = '#000000';
            self.KatakanaNegativeFromDB =[];
            self.phonetics = [];
            self.kanaNegativeString = '';

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
            var resetIsTrue = false;
            resetIsTrue = confirm('You are about to Reset the Project');
            if(resetIsTrue){
                var apiCall = 'api/ResetAllSlidesData/';
                 self.displayTally = false;
                  $http.get(webBaseUrl + apiCall + projectId).success(function (result) {
                      self.goHome();
                  });
             }
         };

        self.setOverlay = function() {
          if (self.isOverlayAvailable === true) {
              self.overlayStyle = 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)';
          } else {
            self.displaySettings = true;
          }
        }
      };

      self.saveThemeSettings = function() {
        if (self.BackGroundName !== '') {
          var configModel = themeConfigurationModel(self.BackGroundName,
            self.BackGround, self.headerFontColor, self.headerFontFamily, self.rationaleFontColor, self.rationaleFontFamily,
            self.testNameFontColor, self.testNameFontFamily, self.strokeColor, self.strokeRange, self.isStrokeIt, self.isOverlayAvailable);
          configModel = JSON.stringify(configModel);
          setSettings.postdata(configModel).then(function(result) {
            alertify.alert('Your  settings for Theme: ' + result[0].TemplateName + '  are saved').set('resizable', true).set('title', 'Template Saved ');
          });
        }
      };

      //typeOf = string made of only (success, warning, error, info), titleForMessage and message must be string, timeOutLimit = milliseconds (-1 never disappear, 1000ms = 1 second; seconds to display message)
      self.growlTrigger = function(typeOfMesage, message, titleForMessage, timeOutLimit){
        if(typeOfMesage === 'success'){
            growl.success(message, {title: titleForMessage, ttl: timeOutLimit});
        }else if (typeOfMesage === 'warning'){
            growl.warning(message, {title: titleForMessage, ttl: timeOutLimit});
        }else if (typeOfMesage === 'error'){
            growl.error(message, {title: titleForMessage, ttl: timeOutLimit});
        }else if (typeOfMesage === 'info'){
            growl.info(message, {title: titleForMessage, ttl: timeOutLimit});
        }
      };
//test
      // **********  Event listeners for revealjs  ****************************************************************************************************
      if (self.greeting === 't') {
        Reveal.addEventListener('overviewshown', function() {
          if (_SlideNumber > 4) {
            Reveal.slide(0, _SlideNumber - 2, 0);
          } else {
            Reveal.slide(0, _SlideNumber - 1, 0);
          }
          $rootScope.$apply(function() {
            self.isOverview = true;
          });
        });


        Reveal.addEventListener('overviewhidden', function() {
          $rootScope.$apply(function() {
            self.isOverview = false;
          });
        });
      }
      self.selectSlide = function(index) {
        var slideModel = JSON.stringify(new SlideInfoModel(projectId, index + 1, '', '', '', '', '', ''));
        getTestNamesObject(slideModel);
      };

      // **********  Getting Slides URL Images and the description for over view  *************************************************************************************
      var apicall = 'api/NW_NamesAndSlides?projectId=';
      $http.get(webBaseUrl + apicall + projectId).success(function(result) {
        _nameSummarySlideNumber = result[0].SummarySlide;
        self.slides = result;
        result.map(function(obj) {
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
              var projectIdAndNote = JSON.stringify(projectId + ", N'" + note + "', 'Avoid'");
              $http.post(webBaseUrl + apiCall , projectIdAndNote);
               alertify.confirm('You are about to save').set('onok', function(){
                      alertify.alert('Thank you !').set('title', 'Comments are saved');
                    }).set('oncancel', function(){}).set('title', 'Saving Avoid Notes');
            };

            var selectColumnSize = function(totalNames){
              if (self.typeOfPresentation === 'Normal'){
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
              }else if (self.typeOfPresentation === 'Nonproprietary') {
                self.columnSize = 12;
                self.sizeOfFont = '40px';
              }else if (self.typeOfPresentation === 'Katakana') {
                self.columnSize = 12;
                self.sizeOfFont = '40px';
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
             //growl.info('Selecting a Rank', {ttl: -1, title:'hello'});
                $('input[type="radio"]').each(function( ) {
                          $(this).blur();
                        });
            };
 //************ Methods to get summary data ***********************************************************************************************************
        self.getRetainedNames = function() {
            //growl.success('Displaying Retained Names', {ttl: 2000});
          resetBooleanSummarySlideVars();
          self.displayRetained = true;
          var apiCall = 'api/NW_GetSummary?instruccion=';
          var instruccion = projectId + ', "Positive Retained Names"';
          $http.get(webBaseUrl + apiCall + instruccion).success(function(positiveName) {
            for (var i = 0; i < positiveName.length; i++) {
              self.retainedNames.push(positiveName[i]);
            }
            var instruccion = projectId + ',"Neutral Retained Names"';
            $http.get(webBaseUrl + apiCall + instruccion).success(function(neutralName) {
              for (var i = 0; i < neutralName.length; i++) {
                self.retainedNames.push(neutralName[i]);
              }
            });
          });
          selectColumnSize(self.retainedNames.length);
        };

            // Change the presentation direction to be RTL
            rtl: false,

            // Turns fragments on and off globally
            fragments: true,

        self.getNegativesNames = function() {
            //growl.warning('Displaying Negative Names', {ttl: 2000});
          resetBooleanSummarySlideVars();
          self.displayNegative = true;
          var apiCall = 'api/NW_GetSummary?instruccion=';
          var instruccion = projectId + ', "Negative Names"';
          $http.get(webBaseUrl + apiCall + instruccion).success(function(negativeName) {
            for (var i = 0; i < negativeName.length; i++) {
              self.negativeNames.push(negativeName[i]);
            }
            selectColumnSize(negativeName.length);
          });
        };

        self.getNewsNames = function() {
            //growl.info('Displaying New Names', {ttl: 2000});
          resetBooleanSummarySlideVars();
          self.displayNewName = true;
          var apiCall = 'api/NW_GetSummary?instruccion=';
          var instruccion = projectId + ',"New Names"';
          $http.get(webBaseUrl + apiCall + instruccion).success(function(newName) {
            newName.map(function(obj) {
              self.newNames.push(obj);
            });
            selectColumnSize(newName.length);
          });
        };

            // Number of milliseconds between automatically proceeding to the
            // next slide, disabled when set to 0, this value can be overwritten
            // by using a data-autoslide attribute on your slides
            autoSlide: 0,

            // Stop auto-sliding after user input
            autoSlideStoppable: true,

        self.getrootsToExplores = function() {
            //growl.info('Displaying Roots to Explore', {ttl: 2000});
          getNotesFromServer();
          resetBooleanSummarySlideVars();
          self.displayRootExplore = true;
          var apiCall = 'api/NW_GetSummary?instruccion=';
          var instruccion = projectId + ', "Roots to Explore"';
          $http.get(webBaseUrl + apiCall + instruccion).success(function(rootExplore) {
            rootExplore.map(function(obj) {
              self.rootsToExplore.push(obj);
            });
            selectColumnSize(rootExplore.length);
          });
        };

        self.getrootsToAvoids = function() {
            //growl.error('Displaying Roots to Avoid', {ttl: 2000});
          getNotesFromServer();
          resetBooleanSummarySlideVars();
          self.displayRootAvoid = true;
          var apiCall = 'api/NW_GetSummary?instruccion=';
          var instruccion = projectId + ', "Roots to Avoid"';
          $http.get(webBaseUrl + apiCall + instruccion).success(function(rootAvoid) {
            rootAvoid.map(function(obj) {
              self.rootsToAvoid.push(obj);
            });
            selectColumnSize(rootAvoid.length);
          });
        };

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

      self.backGroundChanged = function(backGroundName) {
        apiCall = 'api/NW_InsertTemplateConfiguration?templateName=';
        $http.get(webBaseUrl + apiCall + backGroundName).success(function(theme) {
          self.BackGround = theme[0].TemplateFileName;
          self.BackGroundName = theme[0].TemplateName;
          self.testNameFontFamily = theme[0].TestNameFontFamily;
          self.testNameFontColor = theme[0].TestNameFontColor;
          self.rationaleFontFamily = theme[0].RationaleFontFamily;
          self.rationaleFontColor = theme[0].RationaleFontColor;
          self.headerFontColor = theme[0].HeaderFontColor;
          self.headerFontFamily = theme[0].HeaderFontFamily;
          self.nameNotation = theme[0].NameNotation;
          self.isStrokeIt = theme[0].Stroke === 'false' ? false : true;
          if (self.isStrokeIt === true) {
            self.isTextShadow = 'text-shadow';
          } else {
            self.isTextShadow = '';
          }
          self.strokeRange = theme[0].StrokeRange;
          self.strokeColor = theme[0].StrokeColor;
          self.isOverlayAvailable = theme[0].Overlay === 'False' ? false : true;
          self.overlayStyle = self.isOverlayAvailable === true ? 'url(https://tools.brandinstitute.com/nw/images/Backgrounds/overlay.png)' : '';
          centerTestNames(self.nameCandidate);
        });
      };

      if (self.isStrokeIt === true) {
        self.isTextShadow = 'text-shadow';
      } else {
        self.isTextShadow = '';
      }

      var centerTestNames = function(nameCandidate) {
        // CA- added function above to make sure if it is katakana or not when billboard or subwaystop is displayed
        self.testNameWidth = '85';
        if (_TemplateName === 'Billboard' || _TemplateName === 'SubwayStop') {
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

        self.goHome = function() {
            //growl.info('Welcome to the test', {ttl: 2000});
            if(_IsTheAppStarted){self.goNextSlide();}
            setTimeout(function () {
                var negativeNames = self.sendStoredKatakana.join(',');
                var initialSlideModel = JSON.stringify(new SlideInfoModel(projectId, 0, '', '', '', '', 'Next', negativeNames));
                getTestNamesObject(initialSlideModel);
            },10);

        };
      };

        self.goToSummarySlide = function() {
            //growl.info('Going to Summary Slides', {ttl: 2000});
            self.goNextSlide();
            setTimeout(function () {
                setProgressBarsSummary();
                self.selectSlide(_nameSummarySlideNumber - 1);
            },10);

        };
      };

      // **********  To Set SUMMARY Slides  ****************************************************************************************************
      var setProgressBarsSummary = function() {
        var instruccion = [projectId + ', "Positive Retained Names"', projectId + ', "Neutral Retained Names"', projectId + ', "Negative Names"', projectId + ', "New Names"'];
        var apiCall = 'api/NW_GetSummary?instruccion=';
        $http.get(webBaseUrl + apiCall + instruccion[0]).success(function(result) {
          self.barType = 'success';
          self.positiveCount = result.length;
          $http.get(webBaseUrl + apiCall + instruccion[1]).success(function(result) {
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
          }); // end of neutral
        }); //end of  positives

        self.goNextSlide = function() {
            //growl.info('Goes to Next Slide', {ttl: 2000});
            var negativeNames = self.sendStoredKatakana.join(',');
            var slideModel = JSON.stringify(new SlideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Next',negativeNames));
            if (_SlideType === 'NameEvaluation') {
                self.mustRank();
            }
            else {
                getTestNamesObject(slideModel);
            }
        };

        $http.get(webBaseUrl + apiCall + instruccion[3]).success(function(result) {
          self.newNameCount = result.length;
        });

        // WARNING leave the code in this position
         self.goHome();

        _IsTheAppStarted =true;

        self.selectedName = '';

        self.onSelect = function(slideName) {
            //growl.success('Selecting Slide name to travel', {ttl: 2000});
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
          });
        });
        selectColumnSize(self.retainedNames.length);
      };

      self.getPositivesNames = function() {
        resetBooleanSummarySlideVars();
        self.displayPositive = true;
        var apiCall = 'api/NW_GetSummary?instruccion=';
        var instruccion = projectId + ', "Positive Retained Names"';
        $http.get(webBaseUrl + apiCall + instruccion).success(function(positiveName) {
          for (var i = 0; i < positiveName.length; i++) {
            self.positiveNames.push(positiveName[i]);
          }
          selectColumnSize(positiveName.length);
        });
      };

      self.getNeutralsNames = function() {
        resetBooleanSummarySlideVars();
        self.displayNeutral = true;
        var apiCall = 'api/NW_GetSummary?instruccion=';
        var instruccion = projectId + ', "Neutral Retained Names"';
        $http.get(webBaseUrl + apiCall + instruccion).success(function(neutralName) {
          for (var i = 0; i < neutralName.length; i++) {
            self.neutralNames.push(neutralName[i]);
            self.retainedNames.push(neutralName[i]);
          }
          selectColumnSize(neutralName.length);
        });
      };

      self.getNegativesNames = function() {
        resetBooleanSummarySlideVars();
        self.displayNegative = true;
        var apiCall = 'api/NW_GetSummary?instruccion=';
        var instruccion = projectId + ', "Negative Names"';
        $http.get(webBaseUrl + apiCall + instruccion).success(function(negativeName) {
          for (var i = 0; i < negativeName.length; i++) {
            self.negativeNames.push(negativeName[i]);
          }
          selectColumnSize(negativeName.length);
        });
      };

      self.getNewsNames = function() {
        resetBooleanSummarySlideVars();
        self.displayNewName = true;
        var apiCall = 'api/NW_GetSummary?instruccion=';
        var instruccion = projectId + ',"New Names"';
        $http.get(webBaseUrl + apiCall + instruccion).success(function(newName) {
          newName.map(function(obj) {
            self.newNames.push(obj);
          });
          selectColumnSize(newName.length);
        });
      };

      var getNotesFromServer = function() {
        var apiCall = 'api/NW_GetNotes?projectid=';
        $http.get(webBaseUrl + apiCall + projectId).success(function(rootExplore) {
          self.dataExploreInput = rootExplore[0].NotesExplore;
          self.dataAvoidInput = rootExplore[0].NotesAvoid;
        });

      };

      self.getrootsToExplores = function() {
        getNotesFromServer();
        resetBooleanSummarySlideVars();
        self.displayRootExplore = true;
        var apiCall = 'api/NW_GetSummary?instruccion=';
        var instruccion = projectId + ', "Roots to Explore"';
        $http.get(webBaseUrl + apiCall + instruccion).success(function(rootExplore) {
          rootExplore.map(function(obj) {
            self.rootsToExplore.push(obj);
          });
          selectColumnSize(rootExplore.length);
        });
      };

      self.getrootsToAvoids = function() {
        getNotesFromServer();
        resetBooleanSummarySlideVars();
        self.displayRootAvoid = true;
        var apiCall = 'api/NW_GetSummary?instruccion=';
        var instruccion = projectId + ', "Roots to Avoid"';
        $http.get(webBaseUrl + apiCall + instruccion).success(function(rootAvoid) {
          rootAvoid.map(function(obj) {
            self.rootsToAvoid.push(obj);
          });
          selectColumnSize(rootAvoid.length);
        });
      };

      var getTestNamesObject = function(initialSlideModel) {
        var apiCall = 'api/NW_SaveAndReturnSlideData';
        $http.post(webBaseUrl + apiCall, initialSlideModel).success(function(slideObject) {
          if (slideObject.length > 0) {
            _TotalNames = slideObject[0].TotalNames;
            self.totalOfTestNames = parseInt(_TotalNames);
            self.progressBarUnit = 100 / self.totalOfTestNames;
            setUpTheSlideInfo(slideObject);
          } else {
            alertify.alert('The test names for the  project: ' + projectId + ' is not available plese contact IS for further support').set('title', 'Help info');
          }
        }).error(function(err) {
          return err;
        });
      };

      //************ Navigation Methods KATKANA ***********************************************************************************************************
      self.isKatakanaNegative = function(phonetic) {
        var idx = self.sendStoredKatakana.indexOf(phonetic);
        if (idx < 0) {
          self.sendStoredKatakana.push(phonetic);
        } else {
          if (idx > -1) {
            self.sendStoredKatakana.splice(idx, 1);
          }
        }
      };

      self.displayKatakana = function() {
        self.phonetics.map(function(obj) {
          var isKatakanaEqual = self.KatakanaNegativeFromDB.indexOf(obj);
          if (isKatakanaEqual === -1) {
            var newKatakanaObj = new KatakanaModel(obj, 'rgb(0, 0, 0)');
            self.katakanaObjToDisplay.push(newKatakanaObj);

          } else {
            var newKatakanaObj2 = new KatakanaModel(obj, 'rgb(255, 0, 0)');
            self.sendStoredKatakana.push(obj);
            self.katakanaObjToDisplay.push(newKatakanaObj2);
          }
        });
        var kanaToDisplay = self.katakanaObjToDisplay;
        self.kanaNamestoDisplay = [];
        while (kanaToDisplay.length > 0) {
          self.kanaNamestoDisplay.push(kanaToDisplay.splice(0, 3));
        }
      };

      self.goHome = function() {
        if (_IsTheAppStarted) {
          self.goNextSlide();
        }
        var negativeNames = self.sendStoredKatakana.join(',');
        var initialSlideModel = JSON.stringify(new SlideInfoModel(projectId, 0, '', '', '', '', 'Next', negativeNames));
        getTestNamesObject(initialSlideModel);
      };

      self.goToSummarySlide = function() {
        self.goNextSlide();
        setProgressBarsSummary();
        self.selectSlide(_nameSummarySlideNumber - 1);
      };

      self.goNextSlide = function() {
        var negativeNames = self.sendStoredKatakana.join(',');
        var slideModel = JSON.stringify(new SlideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Next', negativeNames));
        if (_SlideType === 'NameEvaluation') {
          self.mustRank();
        } else {
          getTestNamesObject(slideModel);
        }
      };

      self.goPrevSlide = function() {
        var negativeNames = self.sendStoredKatakana.join(',');
        var slideModel = JSON.stringify(new SlideInfoModel(projectId, self.pageNumber, self.nameRamking, self.newName, self.explore, self.avoid, 'Prev', negativeNames));
        getTestNamesObject(slideModel);
      };

      // WARNING leave the code in this position
      self.goHome();

      _IsTheAppStarted = true;

      self.selectedName = '';

      self.onSelect = function(slideName) {
        var foundMatch = false;
        var amount = 0;
        if (self.testName.indexOf(slideName) < 0) {
          while (foundMatch === false) {
            if (slideName === self.slides[amount].SlideDescription) {
              var numberOfPage = self.slides[amount].$id;
              self.selectSlide(parseInt(numberOfPage) - 1);
              foundMatch = true;
            } else {
              amount += 1;
              foundMatch = false;
            }
          }
        } else {

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

        self.resetSlide = function() {
            //growl.error('Slide will be Reset', {ttl: 2000});
            self.nameRamking = false;
            self.newName = '';
            self.explore = '';
            self.avoid = '';
        };

        self.tally = function() {
            //growl.info('Displaying Tally', {ttl: 2000});
            self.displayTally = true;
        };

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
        combo: 'O',
        description: 'Overview',
        callback: function() {}
      });

      hotkeys.add({
        combo: 'right',
        description: 'To go forward',
        callback: function(e) {
          e.preventDefault();
          self.goNextSlide();
        }
      });

      hotkeys.add({
        combo: 'left',
        description: 'To go Back',
        callback: function() {
          self.goPrevSlide();
        }
      });

      hotkeys.add({
        combo: 'up',
        description: 'Display Menu',
        callback: function() {
          self.displayMenu = true;
        }
      });

      hotkeys.add({
        combo: 'down',
        description: 'Hide Menu',
        callback: function() {
          self.displayMenu = false;
        }
      });
      hotkeys.add({
        combo: 'Ctrl +',
        description: 'Zoom in',
        callback: function() {
          self.displayMenu = false;
        }
      });

      hotkeys.add({
        combo: 'Ctrl -',
        description: 'Zoom out',
        callback: function() {
          self.displayMenu = false;
        }
      });

      hotkeys.add({
        combo: 'F11',
        description: 'Enter and exit Full Screen Mode',
        callback: function() {
          self.displayMenu = false;
        }
      });
    } // end of controller

  ]);
