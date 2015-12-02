// spec.js
var indexPage = require('./indexPage');

describe('Protractor Demo App', function() {
  var page = new indexPage();
  page.get('http://localhost:9001/#/main/1012');

  it("should show correct title and displays menu", function(){
    page.sleep(5000);
    page.pressKeyArrowUp();
    expect(page.getTitle()).toEqual('NW');
  });

  it('should go to next slide twice', function(){
    page.sleep(5000);
    page.clickButtonNextSlide();
    page.clickButtonNextSlide();
  });

  it('should go to next slide using right arrow key', function(){
    page.sleep(5000);
    page.pressKeyArrowRight();
  });

  it('should input a name in Search Bar and go to slide name', function(){
    page.sleep(5000);
    page.sendKeysOfSelectedName();
    page.pressKeyEnter();
    expect(page.getTextOfSelectedName()).toBe('ANAPNEO');
  });

  it('should reset current slide', function(){
    page.sleep(5000);
    page.clickButtonResetSlide();
  });

  it('should rank name', function(){
    page.sleep(5000);
    page.clickRadioButtonNegative();
    expect(page.radioButtonNegative).toBeTruthy();
  });

  it('should input information in new name, explore and avoid boxes', function(){
    page.sleep(5000);
    page.sendKeysOfInputNewName();
    page.sendKeysOfInputExplore();
    page.sendKeysOfInputAvoid();
  });

  it('should go to next slide using right arrow key', function(){
    page.sleep(5000);
    page.pressKeyArrowRight();
  });

  it('should display Tally', function(){
    page.sleep(5000);
    page.clickButtonTally();
    expect(page.tallyIsDisplayed()).toBe(true);
  });

  it('should go to summary slide', function(){
    page.sleep(5000);
    page.clickButtonGoToSummary();
  });

  it('should show negative names', function(){
    page.sleep(5000);
    page.clickDisplayNegativeNames();
    expect(page.negativeNamesAreDisplayed()).toBeTruthy();
    page.sleep(50000);
  });
});
