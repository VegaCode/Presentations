// spec.js
var indexPage = require('./indexPage2');
var growl;

describe('Protractor Demo App', function() {
  var page = new indexPage();

 //  if (jasmine.version) { //the case for version 2.0.0
 //    console.log('jasmine-version:' + jasmine.version);
 // }
 // else { //the case for version 1.3
 //    console.log('jasmine-version:' + jasmine.getEnv().versionString());
 // }

  jasmine.DEFAULT_TIMEOUT_INTERVAL =2000000;
  page.AppUrl('http://localhost:9001/#/main/1013');

  // it("it should welcome the tester to the testing unit", function(){
  //   page.clickButtonGrowlTriggerWelcome();
  //   page.AppSleep(4000);
  // });

  it("should show correct title and displays menu", function(){
    page.sendKeyBoard('ARROW_UP');
    expect(page.AppTitle()).toEqual('NW');
  });

  it('should go through slides', function(){
    page.AppSleep(3000);
    page.continueMoving({id: 'navright'});
  });

  it('should open prompt for login password', function(){
    page.elementClick({id: 'cogSettings'});
    page.AppSleep(5000);
    page.switchToPopupString('admin123');
    page.AppSleep(5000);
    page.switchToPopup('accept');
    page.AppSleep(3000);
  });

  it('should reset the whole project', function(){
    page.elementClick({id: 'resetProject'});
    page.switchToPopup('accept');
    page.AppSleep(3000);
  });

  it('should go through slides', function(){
    page.continueMoving({id: 'navright'});
  });

  it('should no longer display the settings for the admin by clicking the cog button', function(){
    page.elementClick({id: 'cogSettings'});
    page.AppSleep(2000);
  });

  it('should start ranking Names and providing input information', function(){
    page.testNames();
  });

  it('should show the Summary Slide', function(){
    page.elementClick({id: 'goesToSummary'});
    page.AppSleep(2000);
    page.switchToPopup('accept');
  });

  it('should show retained names', function(){
    page.elementClick({id: 'showRetainedNames'});
    expect(page.AppDisplaysInformation({id: 'showRetainedNames'})).toBeTruthy();
    page.AppSleep(10000);
  });

  it('should show negative names', function(){
    page.elementClick({id: 'showNegativeNames'});
    expect(page.AppDisplaysInformation({id: 'showNegativeNames'})).toBeTruthy();
    page.AppSleep(10000);
  });

  it('should display new names', function(){
    page.elementClick({id: 'showNewNames'});
    expect(page.AppDisplaysInformation({id: 'showNewNames'})).toBeTruthy();
    page.AppSleep(10000);
  });
  it('should display roots to explore', function(){
    page.elementClick({id: 'showExploreRoots'});
    expect(page.AppDisplaysInformation({id: 'showExploreRoots'})).toBeTruthy();
    page.AppSleep(10000);
  });
  it('should input something in the comments for roots to explore', function(){
    page.sendStringToBox({id: 'exploreTextArea'}, 'Test Explore');
    page.elementClick({id: 'saveExploreComments'});
    page.switchToPopup('accept');
    page.AppSleep(10000);
  });
  it('should display roots to avoid', function(){
    page.elementClick({id: 'showAvoidRoots'});
    expect(page.AppDisplaysInformation({id: 'showAvoidRoots'})).toBeTruthy();
    page.AppSleep(10000);
  });
  it('should input something in the comments for roots to avoid', function(){
    page.sendStringToBox({id: 'avoidTextArea'}, 'Test Avoid');
    page.elementClick({id: 'saveAvoidComments'});
    page.switchToPopup('accept');
    page.AppSleep(10000);
  });





  // it('should display information of the TypeAhead functionality', function(){
  //   page.clickButtonGrowlTriggerTypeAhead();
  //   page.AppSleep(2000);
  // });
  // it('should input a name in Search Bar and go to slide of the name', function(){
  //   page.sendKeysOfSelectedName('APTIERA');
  //   page.pressKeyEnter();
  //   expect(page.getTextOfSelectedName()).toBe('APTIERA');
  //   page.AppSleep(2000);
  // });
  //
  // it('should reset the slide and then change the rank', function(){
  //   page.clickButtonResetSlide();
  //   page.clickRadioButtonPositive();
  // });
  //
  // it('should display Tally', function(){
  //   page.AppSleep(2000);
  //   page.clickButtonTally();
  //   expect(page.tallyIsDisplayed()).toBe(true);
  // });
  //
  // it('should go to summary slide', function(){
  //   // page.clickButtonGrowlTriggerGoToSummary();
  //   // page.AppSleep(6000);
  //   page.clickButtonGoToSummary();
  //   page.AppSleep(2000);
  // });

});
