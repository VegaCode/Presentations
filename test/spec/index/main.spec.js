// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
browser.get('http://localhost:9001/#/main/1013')
	.then(function(){
	browser.actions().sendKeys(protractor.Key.ARROW_UP).perform()
		.then(function(){
			  var el = element(by.id('navright'));
			  el.click();
			  el.click();
			  el.click();
	          		 })
			.then(function(){
			   element(by.model('main.selectedName')).sendKeys('LOX');
			    browser.actions().sendKeys(protractor.Key.ENTER).perform();
			    browser.sleep(5000);
		  	  })
			.then(function(){
			    expect(element(by.binding('main.nameCandidate')).getText()).toEqual('LOXARESC');
			    expect(browser.getTitle()).toEqual('NW');
		           });

    });

  });
  });
