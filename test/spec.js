// spec.js
describe('Protractor Demo App', function() {
//   it('should have a title', function() {
// browser.get('http://localhost:9001/#/main/1012')
// 	.then(function(){
// 	browser.actions().sendKeys(protractor.Key.ARROW_UP).perform()
// 		.then(function(){
// 			  var el = element(by.id('navright'));
// 			  el.click();
// 			  el.click();
// 			  el.click();
// 	          		 })
// 			.then(function(){
// 			   element(by.model('main.selectedName')).sendKeys('LOX');
// 			    browser.actions().sendKeys(protractor.Key.ENTER).perform();
// 			    browser.sleep(5000);
// 		  	  })
// 			.then(function(){
// 			    expect(element(by.binding('main.nameCandidate')).getText()).toEqual('LOXARESC');
// 			    expect(browser.getTitle()).toEqual('NW');
// 		           });
 
 
//     });
    
//   });


 var el;
  it('should have a title and then displays menu', function() {
    browser.get('http://localhost:9001/#/main/1012');
    browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();

    expect(browser.getTitle()).toEqual('NW');
    browser.sleep(5000);
    // element(by.id('gobutton')).click();
  });

  it('should go to next slide', function(){

    el = element(by.id('navright'));

    el.click();
    browser.sleep(500);
    el.click();
    browser.sleep(500);
  });

  it('should go to next slide using right arrow key', function(){
    browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
  });

  it('should input a name in Search Bar and go to slide name', function(){

    element(by.model('main.selectedName')).sendKeys('LOXARESC');

    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    expect(element(by.binding('main.nameCandidate')).getText()).toBe('LOXARESC');

  });

  it('should reset current slide', function(){

    el = element(by.id('reset'));
    el.click();
    browser.sleep(2000);
  });

  it('should rank name', function(){

    el = element(by.id('negativeRank'));
    el.click();
    expect(el).toBeTruthy();
  });

  it('should input information in new name, explore and avoid boxes', function(){
    el = element(by.id('newNameBox')).sendKeys('NewName Test');
    el = element(by.id('exploreBox')).sendKeys('ExploreInputTest');
    el = element(by.id('avoidBox')).sendKeys('AvoidInputTest');

    browser.sleep(2000);
  });

  it('should go to next slide to save information provided', function(){
    el = element(by.id('navright'));
    el.click();
    browser.sleep(500);
  });

  it('should display Tally', function(){

    el = element(by.id('buttonTally'));
    el.click();
    expect(el.isDisplayed()).toBe(true);
  });

  it('should go to summary slide', function(){
    el = element(by.id('goesToSummary')).click();
    expect(el.isDisplayed()).toBeTruthy();
  });

  it('should show negative names', function(){
    el = element(by.id('showNegativeNames'));
    el.click();
    expect(el.isDisplayed()).toBeTruthy();
    browser.sleep(500);
  });
  
});