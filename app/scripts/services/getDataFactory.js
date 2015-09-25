'use strict';

/**
 * @ngdoc function
 * @name nwApp.factory:getData
 * @description
 * # Getting data
 * Factory of the nwApp
 */
 var  webBaseUrl;
//webBaseUrl = 'http://localhost:64378/';
 webBaseUrl = 'https://tools.brandinstitute.com/BIWebServices/';

angular.module('nwApp')
 .factory('GetNamesAndSlides',  [ '$q' , '$http', function GetSlidesFactory($q, $http) {
 var apiCall, deferred, factory,  _getdata;
        factory = {};
        deferred = $q.defer();

        _getdata = function(projectid) {
            apiCall = 'api/NW_NamesAndSlides?projectId=';
           $http.get(webBaseUrl + apiCall + projectid  ).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };
       
        factory.getdata = _getdata;       
        return factory; 
    }])
  .factory('GetSlides',  [ '$q' , '$http', function GetSlidesFactory($q, $http) {
 var apiCall, deferred, factory,  _getdata ;
        factory = {};
        deferred = $q.defer();
        apiCall = 'api/NW_Presentation?projectId=';
        _getdata = function(projectid) {
           $http.get(webBaseUrl + apiCall +projectid  ).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };
        factory.getdata = _getdata;
        return factory;
    }])
  .factory('GetTestNames',  [ '$q' , '$http', function GetSlidesFactory($q, $http) {
 var apiCall, deferred, factory,  _getdata ;
        factory = {};
        deferred = $q.defer();
        apiCall = 'api/NW_Presentation?projectIdForData=';
        _getdata = function(projectid) {
           $http.get(webBaseUrl + apiCall +projectid  ).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };
        factory.getdata = _getdata;
        return factory;
    }]).
  factory('setSettings',  [ '$q' , '$http', function ($q, $http) {
    var _setBackground, _setTestNameFontType, _setTestNameFontColor,_getHeaderFontType,_setHeaderFontType,
    _getTestNameFontColor,_getRationaleFontColor,_getRationaleFontType,_getHeaderFontColor,_setHeaderFontColor,
    _getTestNameFontType, _setRationaleFontType,_setRationaleFontColor, _getBackground, factory, apiCall, deferred, _postdata, _getTemplateConfiguration ;
      var  self= this;
       factory = {};
       deferred = $q.defer();
      self.MYBackGround ='';
      self.TestNameFontType  ='';
      self.TestNameFontColor ='';
      self.RationaleFontType   ='';
      self.RationaleFontColor  ='';
      self.setHeaderFontType  ='';
      self.setHeaderFontColor  ='';
        _setBackground =function(bg){
          self.MYBackGround =bg;
        };

         _getBackground =function(){
                return self.MYBackGround ;
        };

          _setTestNameFontType =function(ft){
            self.TestNameFontType  =ft;
        };

         _getTestNameFontType =function(){
                return self.TestNameFontType ;
        };

          _setTestNameFontColor =function(fc){
               self.TestNameFontColor =fc;
        };

          _getTestNameFontColor =function(){
          return  self.TestNameFontColor;
        };

          _setRationaleFontType =function(rft){
          self.RationaleFontType   =rft;
        };

          _getRationaleFontType =function(){
          return self.RationaleFontType;
        };

          _setRationaleFontColor =function(rfc){
          self.RationaleFontColor   =rfc;
        };

      _getRationaleFontColor =function(){
           return self.RationaleFontColor;
        };

        _setHeaderFontColor =function(rfc){
          self.setHeaderFontColor   = rfc;
        };

      _getHeaderFontColor =function(){
           return self.setHeaderFontColor;
        };

       _setHeaderFontType =function(rfc){
          self.setHeaderFontType   =rfc;
        };

      _getHeaderFontType =function(){
           return self.setHeaderFontType;
        };
      
      _postdata = function(TemplateObject) {
            apiCall = 'api/NW_InsertTemplateConfiguration';
           $http.post(webBaseUrl + apiCall, TemplateObject  ).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };  

        _getTemplateConfiguration = function(templateName) {
            apiCall = 'api/NW_InsertTemplateConfiguration?templateName=';
           $http.get(webBaseUrl + apiCall +templateName).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };

        factory.postdata = _postdata;
        factory.getTemplateConfiguration = _getTemplateConfiguration;
        factory.setBackground = _setBackground;
        factory.getBackground = _getBackground;
        factory.setTestNameFontType = _setTestNameFontType;
        factory.getTestNameFontType = _getTestNameFontType;
        factory.setTestNameFontColor = _setTestNameFontColor;
        factory.getTestNameFontColor = _getTestNameFontColor;
        factory.setRationaleFontType = _setRationaleFontType;
        factory.getRationaleFontType = _getRationaleFontType;
        factory.setRationaleFontColor = _setRationaleFontColor;
        factory.getRationaleFontColor = _getRationaleFontColor;
        factory.setHeaderFontColor = _setHeaderFontColor;
        factory.getHeaderFontColor = _getHeaderFontColor; 
        factory.setHeaderFontType = _setHeaderFontType;
        factory.getHeaderFontType = _getHeaderFontType;
        return  factory;
  }]);
