function indexPage2(){
  var _minimumRank = 1;
  var _maximumRank = 3;
  var _startTesting = 19; //starts Ranking Names in the slide # provided
  var _pauseTesting = 29; //pauses the Ranking process in the slide # provided and then starts at the paused slide #
  var _finishTesting = 69;  //ends Ranking Names in the slide # provided
  var _alreadyPositive = true;
  var _alreadyNegative = true;
  var _alreadyNeutral = false;
  var _SleepyTime = 0000;

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

  var arrayOfExploreRoots = ['AP-','ARC-','ARK','AV-','FU','LA-','OMP','NEO','PAN','SA','ADA','RE','GAN','TO',
                'ALM','AMUR','CAD','BRI','DA','FOR','GLE','HUV','I','ZATO','AQA','ORB','PRI','TIN','ADE','VIO','PAT','VAL',
                'VER','GIT','RYN','ZIG','ON','PATHS','SMO','LOR','MO','GAL','MOD','DO','EX','LANCE','NATY','ALO','ZYL','LAD',
                'AP-','ARC-','ARK','AV-','FU','LA-','OMP','NEO','PAN','SA','ADA','RE','GAN','TO','ALM','AMUR','CAD','BRI',
                'DA','FOR','GLE','HUV','I','ZATO','AQA','ORB','PRI','TIN','ADE','VIO','PAT','VAL','VER','GIT','RYN','ZIG',
                'ON','PATHS','SMO','LOR','MO','GAL','MOD','DO','EX','LANCE','NATY','ALO','ZYL','LAD'];

  var arrayOfAvoidRoots = ['APT-','-TEC-','-ZEL','AVE-','FUT-','KLA-','-RIEN-','ORY','BYX','PER-','PLYK-','-BUTRA','SOV',
                'TRI','-MYN-','-RYS','BAR-','OTA','-ANT','-FENS-','PEUS','-VAR','-BATYS','LYG','QADE','BICTA','SNE','STR','KADE','ALE',
                'DEP','ENV','GLAV','HED','GOR','OF','PLET','THE','RED','MOL','TAR','LIR','TUVO','ANT-','-IMP-','CER','SOM','ORP','QUP-',
                'STRA','APT-','-TEC-','-ZEL','AVE-','FUT-','KLA-','-RIEN-','ORY','BYX','PER-','PLYK-','-BUTRA','SOV','TRI','-MYN-','-RYS',
                'BAR-','OTA','-ANT','-FENS-','PEUS','-VAR','-BATYS','LYG','QADE','BICTA','SNE','STR','KADE','ALE','DEP','ENV','GLAV','HED',
                'GOR','OF','PLET','THE','RED','MOL','TAR','LIR','TUVO','ANT-','-IMP-','CER','SOM','ORP','QUP-','STRA'];

  this.AppTitle = function(){
    return browser.getTitle();
  };

  this.AppUrl = function(url) {
      browser.get(url);
  };

  this.AppDisplaysInformation = function(elementTest, typeOfInformation) {
    if (typeOfInformation === 'isPresent'){
      return this.elementFinder(elementTest).isPresent();
    }else if (typeOfInformation === 'isDisplayed'){
      return this.elementFinder(elementTest).isDisplayed();
    }

  };

  this.AppSleep = function(time){
    browser.sleep(time);
  };

  // ************** Finds elements *********************************************************************************************************
  this.elementFinder = function (elementTest){
    var foundElement;
    if(elementTest.id !== undefined){
      foundElement = element(by.id(elementTest.id));
      return foundElement;
    }else if(elementTest.className !== undefined){
      foundElement = element(by.className(elementTest.className));
      return foundElement;
    }else if(elementTest.css !== undefined){
      foundElement = element(by.css(elementTest.css));
      return foundElement;
    }else if(elementTest.binding !== undefined){
      foundElement = element(by.binding(elementTest.binding));
      return foundElement;
    }else if(elementTest.tagName !== undefined){
      foundElement = element(by.tagName(elementTest.tagName));
      return foundElement;
    }else if(elementTest.name !== undefined){
      foundElement = element(by.name(elementTest.name));
      return foundElement;
    }else if(elementTest.model !== undefined){
      foundElement = element(by.model(elementTest.model));
      return foundElement;
    }
  };

  // ************** Sends Information to Intupoxes, TextArea, etc by providing Element to be Found and String or Integer to Send ***********
  this.sendStringToBox = function(elementTest, string){
    var foundElement = this.elementFinder(elementTest);
    foundElement.sendKeys(string);
  };

  // ************** Clicks Element After Finding it ****************************************************************************************
  this.elementClick = function(elementTest){
    this.elementFinder(elementTest).click();
  };

  // ************** Switches to popup and performs an action (accept, cancel, read text from popup or sendskeys for inputbox) **************
  this.switchToPopupString = function(string){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000);
    browser.switchTo().alert().sendKeys(string);
  };

  this.switchToPopup = function(typeOfPopup){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 5000);
    if(typeOfPopup === 'accept'){
      browser.switchTo().alert().accept();
    }else if(typeOfPopup === 'cancel'){
      browser.switchTo().alert().dismiss();
    }else if(typeOfPopup === 'readText'){
      browser.switchTo().alert().getText();
    }
  };

  // ************** Sends keyboard events **************************************************************************************************
  this.sendKeyBoard = function(typeOfKeyBoard){
    if(typeOfKeyBoard === 'ARROW_UP'){
      browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
    }else if(typeOfKeyBoard === 'ARROW_RIGHT'){
      browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
    }else if(typeOfKeyBoard === 'ARROW_DOWN'){
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    }else if(typeOfKeyBoard === 'ARROW_LEFT'){
      browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
    }else if(typeOfKeyBoard === 'ESCAPE'){
      browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }else if(typeOfKeyBoard === 'ENTER'){
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
  };

  // ************** Hover over an element and performs all sorted actions ******************************************************************
  this.moveMouseToElement = function(elementTest){
    browser.actions().mouseMove(elementTest).perform();
  };

  // ************** Obtains Text from inputbox, label, button, etc *************************************************************************

  this.obtainText = function (elementTest){
    return  this.elementFinder(elementTest).getText();
  };

  // ************** General functions ******************************************************************************************************

  this.continueMoving = function(elementTest){
    var index;
    for (index = 0; index< _startTesting; index++){
      this.elementClick(elementTest);
    }
  };

  this.testNames = function(){
    var index;
    for (index = _startTesting; index< _pauseTesting; index++){
      //debugger;
      if(_alreadyPositive === true && _alreadyNeutral === true){
        this.elementClick({id: 'negativeRank'});
        _alreadyNegative = true;
        _alreadyNeutral = false;
        this.sendStringToBox({id: 'newNameBox'}, arrayOfNewNames[index - _startTesting]);
        this.sendStringToBox({id: 'exploreBox'}, arrayOfExploreRoots[index - _startTesting]);
        this.sendStringToBox({id: 'avoidBox'}, arrayOfAvoidRoots[index - _startTesting]);
      }else if (_alreadyNeutral === true && _alreadyNegative === true) {
        this.elementClick({id: 'positiveRank'});
        _alreadyPositive = true;
        _alreadyNegative = false;
        this.sendStringToBox({id: 'newNameBox'}, arrayOfNewNames[index - _startTesting]);
        this.sendStringToBox({id: 'exploreBox'}, arrayOfExploreRoots[index - _startTesting]);
        this.sendStringToBox({id: 'avoidBox'}, arrayOfAvoidRoots[index - _startTesting]);
      }else if (_alreadyNegative === true && _alreadyPositive === true){
        this.elementClick({id: 'neutralRank'});
        _alreadyNeutral = true;
        _alreadyPositive = false;
        this.sendStringToBox({id: 'newNameBox'}, arrayOfNewNames[index - _startTesting]);
        this.sendStringToBox({id: 'exploreBox'}, arrayOfExploreRoots[index - _startTesting]);
        this.sendStringToBox({id: 'avoidBox'}, arrayOfAvoidRoots[index - _startTesting]);
      }
      this.elementClick({id: 'navright'});
    }

    // this.sleep(20000);

    // for (index = _pauseTesting; index< _finishTesting; index++){
    //   if(_alreadyPositive === true && _alreadyNeutral === true){
    //     this.clickRadioButtonNegative();
    //     _alreadyNegative = true;
    //     _alreadyNeutral = false;
    //     this.sendKeysOfInputNewName(index - _startTesting);
    //     this.sendKeysOfInputExplore(index - _startTesting);
    //     this.sendKeysOfInputAvoid(index - _startTesting);
    //   }else if (_alreadyNeutral === true && _alreadyNegative === true) {
    //     this.clickRadioButtonPositive();
    //     _alreadyPositive = true;
    //     _alreadyNegative = false;
    //     this.sendKeysOfInputNewName(index - _startTesting);
    //     this.sendKeysOfInputExplore(index - _startTesting);
    //     this.sendKeysOfInputAvoid(index - _startTesting);
    //   }else if (_alreadyNegative === true && _alreadyPositive === true){
    //     this.clickRadioButtonNeutral();
    //     _alreadyNeutral = true;
    //     _alreadyPositive = false;
    //     this.sendKeysOfInputNewName(index - _startTesting);
    //     this.sendKeysOfInputExplore(index - _startTesting);
    //     this.sendKeysOfInputAvoid(index - _startTesting);
    //   }
      // this.sleep(_SleepyTime);
      // this.clickButtonNextSlide();
    // }
  };

}//end of the function

module.exports = indexPage2;
