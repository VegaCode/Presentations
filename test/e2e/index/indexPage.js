function indexPage(){
// ************** Menu Bar Declaration ****************************************************************************************************
  this.buttonNextSlide = element(by.id('navright'));
  this.selectNameModel = element(by.model('main.selectedName'));
  this.selectNameBinding = element(by.binding('main.nameCandidate'));

// ************** Declaration For Display Names Section ****************************************************************************************************
  this.buttonResetSlide = element(by.id('reset'));
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
    this.selectNameModel.sendKeys('ANAPNEO');
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
