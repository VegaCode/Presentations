'use strict'

describe('auto-font-size', function() {

    var $compile, $rootScope, $document, elem, scope, stage;

    beforeEach(function() {
        module('AutoFontSize');
                
        inject(function(_$compile_, _$rootScope_, _$document_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $document = _$document_;
            $($document[0].body).append('<div class="afs_test_div"></div>');    
            stage = $.find('.afs_test_div');
            expect(stage.length).toBe(1);
            stage = $(stage);
            scope = $rootScope.$new();
        });
    });
    
    afterEach(function() {
        stage.remove();
    });

    // ### Shrinking text
    // If the text cannot fit in the fixed size of the container div, then
    // it will shrink until it fits.
    it('should shrink text to fit in a div', function() {
        render('<div auto-font-size="options" style="width: 40px; height: 10px; font-size: 16px">ipsum lorem</div>');
        assertFontSizeLessThan(10);
    });
    
    // ### Growing text
    // If the text is not big enough to fill the fixed size of the container div, then
    // it will grow until it does.
    it('should grow text to fill a div', function() {
        render('<div auto-font-size="options"  style="width: 100px; height: 100px; font-size: 12px">ipsum lorem</div>');
        assertFontSizeGreaterThan(12);
    });
    
    // ### Only allow text to grow
    // If you set the 'shrink' option to false, then text will still
    // be allowed to grow to fill a space, but it will not shrink to fit
    // in a space.
    it('should not shrink if configured not to', function() {
        scope.options = {shrink: false};
        render('<div auto-font-size="options" style="width: 40px; height: 10px; font-size: 16px">ipsum lorem</div>');
        assertFontSizeEquals(16);
    });
    
    // ### Only allow text to shrink
    // If you set the 'grow' option to false, then text will still
    // be allowed to shrink to git in a space, but it will not grow to fill
    // a space.
    it('should not grow if configured not to', function() {
        scope.options = {grow: false};
        render('<div auto-font-size="options"  style="width: 100px; height: 100px; font-size: 12px">ipsum lorem</div>');
        assertFontSizeEquals(12);
    });
    
    // ### Observing the resize
    // You can observe the 'auto-font-size:resized' event
    // if you need to know when a resize has happend
    it('should fire an event on resize', function() {
        var callback = jasmine.createSpy('callback');
        scope.$on('auto-font-size:resized', callback);
        
        //div is very large, so there should be no resize
        render('<div auto-font-size="{grow: false}" style="width: 400px; height: 1000px; font-size: 16px">ipsum lorem</div>');
        assertFontSizeEquals(16);
        expect(callback).not.toHaveBeenCalled();
        
        //requires resize
        render('<div auto-font-size="options" style="width: 40px; height: 10px; font-size: 16px">ipsum lorem</div>');
        var fontSize = assertFontSizeLessThan(10);
        expect(callback).toHaveBeenCalled();
        var data = callback.calls[0].args[1];
        expect(data.elem[0]).toBe(elem[0]);
        expect(data.fontSize).toBe(fontSize);        
    });
    
    // ### When does the resize happen?
    // The resize will be triggered on every call of scope.$digest()
    it('should resize on every scope.$digest', function() {
        render('<div auto-font-size="options" style="width: 20px; height: 20px; font-size: 16px">this is too much text to fit</div>');
        var fontSize = assertFontSizeLessThan(20);
        elem.find('[data-role="inner"]').html('less font');
        
        //font size should not have changed yet, because there has not been a scope digest
        assertFontSizeEquals(fontSize);
        
        //after the digest call, font size should change
        scope.$digest();
        assertFontSizeGreaterThan(fontSize);
    });
    
    function assertFontSizeEquals(size) {
        expect(fontSizeI()).toBe(size);
        return fontSizeI();
    }
    
    function assertFontSizeLessThan(size) {
        expect(fontSizeI() < size).toBe(true);
        return fontSizeI();
    }
    
    function assertFontSizeGreaterThan(size) {
        expect(fontSizeI() > size).toBe(true);
        return fontSizeI();
    }
    
    function fontSizeGreaterThan(size) {
        return fontSizeI() > size;
    }
    
    function fontSizeI() {
        var fontSize = elem.find('[data-role="inner"]').css('font-size');
        return Number(fontSize.match(/\d+/)[0]);        
    }
    
    function render(html) {
        elem = angular.element(html);
        stage.html('');
        stage.append(elem);
        var compiled = $compile(elem);
        compiled(scope);
        scope.$digest();
        
        elem = elem;
    }

});
