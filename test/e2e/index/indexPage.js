require
function indexPage(){

  var arrayOfNewNames = ['APTIERA', 'ARCTECA', 'ARKIZEL', 'AVENSIVE', 'ELATHERA', 'FIRLYNSA', 'FUTROZEL', 'FYNHESS', 'KLAUSTRA',
                  'LONVALTA', 'NYTARGA', 'OMPRIENCE', 'ORYNEO', 'PANHIBYX', 'PERHENSA', 'PLYKADA', 'REBUTRA', 'REMYNO', 'REPRONA',
                  'SCEPTUVA', 'SOVRIGAN', 'SPECITOL', 'SUHAVA', 'TOLEORA', 'TRIETTO', 'ULEXTA', 'VARIZERA', 'ALMYNDRA', 'ALTYLARI',
                  'AMURYS', 'BARCADO', 'BRIKOTA', 'DAURIANT', 'ENARUM', 'FORFENSA', 'GALKEPTA', 'GLANYON', 'GLEPEUS', 'HUVAR',
                  'IBATYS', 'LYGZATO', 'MIRAQADE', 'NAISENTA', 'ORBICTA', 'RYSLIS', 'SNEPRI', 'SNYPONA', 'SNYPRAD', 'SNYPREL', 'STELTHYN',
                  'STRYTIN', 'VARIKADE', 'ALENVIO', 'ALMIVO', 'DEPATCHA', 'ENRIVOD', 'ENVALTRO', 'GLAVERSA', 'HEDGEOR',
                  'HEDGITA', 'HEDGORIN', 'HEDGYX', 'HIBHYX', 'HIGNAHL', 'IBSYMON', 'INHEDGIA', 'OFZIG', 'ONGLORIN', 'ONPLET', 'ONPLEVO',
                  'ORHIGE', 'PATHEDGEREDESMO', 'REHGPATH', 'SMIBYXO', 'SMOBIX', 'SMOFEX', 'SMOLECTRA', 'SMOLORA', 'SMOLORIN',
                  'STROMODIC', 'TARISMO', 'TREGALIR', 'TUVOMOD', 'ANTHEDO', 'ATINZYA', 'AVTANO', 'EXIMPTA', 'LANCERIN', 'MEGLAVIA',
                  'MEPAVLI', 'NATYMOS', 'ONZEDO', 'ORPALO', 'QUPRAZIL', 'RINFEDA', 'STRALADA', 'SYTARIA', 'TALMIVO', 'TAVYON',
                  'TEKACYO', 'XYFEENA', 'YIREZO', 'ZARTRI'];

  var arrayOfExploreRoots = ['AP-','ARC-','ARK','AV-','FU','-LA-','OMP','NEO','PAN','SA','ADA','RE','GAN','TO',
                'ALM','AMUR','CAD','BRI','DA','FOR','GLE','HUV','I','ZATO','AQA','ORB','PRI','TIN','ADE','VIO','PAT','VAL',
                'VER','GIT','RYN','ZIG','ON','PATHS','SMO','LOR','MO','GAL','MOD','DO','EX','LANCE','NATY','ALO','ZYL','LAD',
                'AP-','ARC-','ARK','AV-','FU','-LA-','OMP','NEO','PAN','SA','ADA','RE','GAN','TO','ALM','AMUR','CAD','BRI',
                'DA','FOR','GLE','HUV','I','ZATO','AQA','ORB','PRI','TIN','ADE','VIO','PAT','VAL','VER','GIT','RYN','ZIG',
                'ON','PATHS','SMO','LOR','MO','GAL','MOD','DO','EX','LANCE','NATY','ALO','ZYL','LAD'];

  var arrayOfAvoidRoots = ['APT-','-TEC-','-ZEL','AVE-','FUT-','KLA-','-RIEN-','ORY','BYX','PER-','PLYK-','-BUTRA','SOV',
                'TRI','-MYN-','-RYS','BAR-','OTA','-ANT','-FENS-','PEUS','-VAR','-BATYS','LYG','QADE','BICTA','SNE','STR','KADE','ALE',
                'DEP','ENV','GLAV','HED','GOR','OF','PLET','THE','RED','MOL','TAR','LIR','TUVO','ANT-','-IMP-','CER','SOM','ORP','QUP-',
                'STRA','APT-','-TEC-','-ZEL','AVE-','FUT-','KLA-','-RIEN-','ORY','BYX','PER-','PLYK-','-BUTRA','SOV','TRI','-MYN-','-RYS',
                'BAR-','OTA','-ANT','-FENS-','PEUS','-VAR','-BATYS','LYG','QADE','BICTA','SNE','STR','KADE','ALE','DEP','ENV','GLAV','HED',
                'GOR','OF','PLET','THE','RED','MOL','TAR','LIR','TUVO','ANT-','-IMP-','CER','SOM','ORP','QUP-','STRA'];

  var _minimumRank = 1;
  var _maximumRank = 3;
  var _startTesting = 19;
  var _finishTesting = 69;
  var _alreadyPositive = true;
  var _alreadyNegative = true;
  var _alreadyNeutral = false;
  var _SleepyTime = 0000;
// ************** Menu Bar Declaration ****************************************************************************************************
  this.buttonNextSlide = element(by.id('navright'));
  this.selectNameModel = element(by.model('main.selectedName'));
  this.selectNameBinding = element(by.binding('main.nameCandidate'));
  this.totalPageNumbers = element(by.binding('main.totalOfTestNames'));
  this.buttonGoHome = element(by.id('goHome'));
// ************** Declaration For Display Names Section ****************************************************************************************************
  this.testName = element(by.id('testName'));
  this.buttonResetSlide = element(by.id('resetSlide'));
  this.buttonResetProject = element(by.id('resetProject'));
  this.radioButtonPositive = element(by.id('positiveRank'));
  this.radioButtonNeutral = element(by.id('neutralRank'));
  this.radioButtonNegative = element(by.id('negativeRank'));
  this.buttonTally = element(by.id('buttonTally'));
  this.inputNewName = element(by.id('newNameBox'));
  this.inputExplore = element(by.id('exploreBox'));
  this.inputAvoid = element(by.id('avoidBox'));
  this.buttonAdminLogin = element(by.id('cogSettings'));

// ************** Declaration For Summary Slides ****************************************************************************************************
  this.buttonGoToSummary = element(by.id('goesToSummary'));
  this.displayRetainedNames = element(by.id('showRetainedNames'));
  this.displayNegativeNames = element(by.id('showNegativeNames'));
  this.displayNewNames = element(by.id('showNewNames'));
  this.displayExploreRoots = element(by.id('showExploreRoots'));
  this.displayAvoidRoots = element(by.id('showAvoidRoots'));
// ************** General functions ****************************************************************************************************
  this.get = function(url){
    browser.get(url);
  };

  this.sleep = function(time){
    browser.sleep(time);
  };

  this.getTitle = function(){
    return browser.getTitle();
  };

  this.browserSwitchToAlert = function(){
    return browser.switchTo().alert();
  };

  this.sendKeys = function(string){
    browser.switchTo().alert().sendKeys(string);
  };

  this.getTextOfSelectedName = function(){
    return this.selectNameBinding.getText();
  };

  this.tallyIsDisplayed = function(){
    return this.buttonTally.isDisplayed();
  };

  this.retainedNamesAreDisplayed = function(){
    return this.displayRetainedNames.isPresent();
  };
  this.negativeNamesAreDisplayed = function(){
    return this.displayNegativeNames.isPresent();
  };
  this.newNamesAreDisplayed = function(){
    return this.displayNewNames.isPresent();
  };
  this.exploreRootsAreDisplayed = function(){
    return this.displayExploreRoots.isPresent();
  };
  this.avoidRootsAreDisplayed = function(){
    return this.displayAvoidRoots.isPresent();
  };

  this.continueMoving = function(){
    var index;
    for (index = 0; index< _startTesting; index++){
      this.clickButtonNextSlide();
    }
  };
  this.testNames = function(){
    var index;
      for (index = 19; index< _finishTesting; index++){
        //debugger;
        if(_alreadyPositive === true && _alreadyNeutral === true){
          this.clickRadioButtonNegative();
          _alreadyNegative = true;
          _alreadyNeutral = false;
          this.sendKeysOfInputNewName(index - 19);
          this.sendKeysOfInputExplore(index - 19);
          this.sendKeysOfInputAvoid(index - 19);
        }else if (_alreadyNeutral === true && _alreadyNegative === true) {
          this.clickRadioButtonPositive();
          _alreadyPositive = true;
          _alreadyNegative = false;
          this.sendKeysOfInputNewName(index - 19);
          this.sendKeysOfInputExplore(index - 19);
          this.sendKeysOfInputAvoid(index - 19);
        }else if (_alreadyNegative === true && _alreadyPositive === true){
          this.clickRadioButtonNeutral();
          _alreadyNeutral = true;
          _alreadyPositive = false;
          this.sendKeysOfInputNewName(index - 19);
          this.sendKeysOfInputExplore(index - 19);
          this.sendKeysOfInputAvoid(index - 19);
        }
        this.sleep(_SleepyTime);
        this.clickButtonNextSlide();
      }
  };

  this.switchToAlert = function(string){
    var EC = protractor.ExpectedConditions;
    this.clickButtonAdminLogin();
    //waits to find the alert in the browser for 5sec
    browser.wait(EC.alertIsPresent(), 5000);
    //sends string to prompt window
    this.sendKeys(string);
    this.alertAccept();
  };

  this.alertAccept = function(){
    var EC = protractor.ExpectedConditions;
    //waits to find the alert in the browser for 5sec
    browser.wait(EC.alertIsPresent(), 5000);
    this.browserSwitchToAlert().accept();
  };

// ************** Pressing Arrow Key Functions ****************************************************************************************************
  this.pressKeyArrowUp = function(){
    browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
  };

  this.pressKeyArrowRight = function(){
    browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
  };

  this.pressKeyEnter = function(){
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  };

// ************** sendKeys Functions ****************************************************************************************************
  this.sendKeysOfSelectedName = function(name){
    this.selectNameModel.sendKeys(name);
  };

  this.sendKeysOfInputNewName = function(arrayIndex){
    this.inputNewName.sendKeys(arrayOfNewNames[arrayIndex]);
  };

  this.sendKeysOfInputExplore = function(arrayIndex){
    this.inputExplore.sendKeys(arrayOfExploreRoots[arrayIndex]);
  };

  this.sendKeysOfInputAvoid = function(arrayIndex){
    this.inputAvoid.sendKeys(arrayOfAvoidRoots[arrayIndex]);
  };

// *************************  Click Button Functions ****************************************************************************************************
  this.clickButtonNextSlide = function(){
    this.buttonNextSlide.click();
  };

  this.clickButtonGoHome = function(){
    this.buttonGoHome.click();
  };

  this.clickButtonResetProject = function(){
    this.buttonResetProject.click();
  };
  this.clickButtonResetSlide = function(){
    this.buttonResetSlide.click();
  };

  this.clickRadioButtonPositive = function(){
    this.radioButtonPositive.click();
  };
  this.clickRadioButtonNeutral = function(){
    this.radioButtonNeutral.click();
  };
  this.clickRadioButtonNegative = function(){
    this.radioButtonNegative.click();
  };

  this.clickButtonTally = function(){
    this.buttonTally.click();
  };

  this.clickDisplayRetainedNames = function(){
    this.displayRetainedNames.click();
  };
  this.clickDisplayNegativeNames = function(){
    this.displayNegativeNames.click();
  };
  this.clickDisplayNewNames = function(){
    this.displayNewNames.click();
  };
  this.clickDisplayExploreRoots = function(){
    this.displayExploreRoots.click();
  };
  this.clickDisplayAvoidRoots = function(){
    this.displayAvoidRoots.click();
  };

  this.clickButtonGoToSummary = function(){
    this.buttonGoToSummary.click();
  };

  this.clickButtonAdminLogin = function(){
    this.buttonAdminLogin.click();
  };
  this.stackedProgressBarClick = function(){
    this.stackedProgressBar.click();
  };
}// end of the function

module.exports = indexPage;
