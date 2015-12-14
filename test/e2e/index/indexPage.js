function indexPage(){
  var _minimumRank = 1;
  var _maximumRank = 3;
  var totalNumber;
  var arrayOfNewNames = [''];
  var arrayOfExploreRoots = ['AP-'.'ARC-'.'ARK'.'AV-'.'FU'.'-LA-'.'OMP'.'NEO'.'PAN'.'SA'.'ADA'.'RE'.'GAN'.'TO'.'ALM'.'AMUR'.'CAD'.'BRI'.'DA'.'FOR'.'GLE'.'HUV'.'I'.'ZATO'.'AQA'.'ORB'.''.''.''.''.''.''.''.''.''.''.''.''.''.''.''.''.''];
  var arrayOfAvoidRoots = ['APT-'.'-TEC-'.'-ZEL'.'AVE-'.'FUT-'.'KLA-'.'-RIEN-'.'ORY'.'BYX'.'PER-'.'PLYK-'.'-BUTRA'.'SOV'.'TRI'.'-MYN-'.'-RYS'.'BAR-'.'OTA'.'ANT'.'-FENS-'.'PEUS'.'-VAR'.'-BATYS'.'LYG'.'QADE','BICTA'.'SNE'.''.''.''.''.''.''.''.''.''.''.''.''.''];
  var _startTesting = 19;
  var _finishTesting = 69;
  var _alreadyPositive = true;
  var _alreadyNegative = true;
  var _alreadyNeutral = false;

// ************** Menu Bar Declaration ****************************************************************************************************
  this.buttonNextSlide = element(by.id('navright'));
  this.selectNameModel = element(by.model('main.selectedName'));
  this.selectNameBinding = element(by.binding('main.nameCandidate'));
  this.totalPageNumbers = element(by.binding('main.totalOfTestNames'));

// ************** Declaration For Display Names Section ****************************************************************************************************
  this.testName = element(by.id('testName'));
  this.buttonResetSlide = element(by.id('reset'));
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
  this.displayNegativeNames = element(by.id('showNegativeNames'));

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

  this.getTextOfSelectedName = function(){
    return this.selectNameBinding.getText();
  };

  this.tallyIsDisplayed = function(){
    return this.buttonTally.isDisplayed();
  };

  this.negativeNamesAreDisplayed = function(){
    return this.displayNegativeNames.isDisplayed();
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
        if(_alreadyPositive === true && _alreadyNeutral === true){
          this.clickRadioButtonNegative();
          expect(this.radioButtonNegative).toBeTruthy();
          _alreadyNegative = true;
          _alreadyNeutral = false;
        }else if (_alreadyNeutral === true && _alreadyNegative === true) {
          this.clickRadioButtonPositive();
          expect(this.radioButtonPositive).toBeTruthy();
          _alreadyPositive = true;
          _alreadyNegative = false;
        }else if (_alreadyNegative === true && _alreadyPositive === true){
          this.clickRadioButtonNeutral();
          expect(this.radioButtonNeutral).toBeTruthy();
          _alreadyNeutral = true;
          _alreadyPositive = false;
        }
        this.clickButtonNextSlide();
      }
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
  this.sendKeysOfSelectedName = function(){
    this.selectNameModel.sendKeys('ARCTECA');
  };

  this.sendKeysOfInputNewName = function(){
    this.inputNewName.sendKeys('New Name Test');
  };

  this.sendKeysOfInputExplore = function(){
    this.inputExplore.sendKeys('Explore Input Test');
  };

  this.sendKeysOfInputAvoid = function(){
    this.inputAvoid.sendKeys('Avoid Input Test');
  };

// *************************  Click Button Functions ****************************************************************************************************
  this.clickButtonNextSlide = function(){
    this.buttonNextSlide.click();
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

  this.clickDisplayNegativeNames = function(){
    this.displayNegativeNames.click();
  };


  this.clickButtonGoToSummary = function(){
    this.buttonGoToSummary.click();
  };

  this.clickButtonAdminLogin = function(){
    this.buttonAdminLogin.click();
  };
}

module.exports = indexPage;
