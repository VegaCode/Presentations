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
        apiCall = ' api/NW_SaveAndReturnSlideData';
        _getdata = function(slideObject) {
           $http.post(webBaseUrl + apiCall , slideObject ).success(function(result){
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
 var apiCall, deferred, factory,  _getdata, _postdata ;
        factory = {};
        deferred = $q.defer();
      
        _getdata = function(projectid) {  
           apiCall = 'api/NW_Presentation?projectIdForData=';
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
    var factory, apiCall, deferred, _postdata, _getTemplateConfiguration ;
      var  self= this;
       factory = {};
       deferred = $q.defer();

      _postdata = function(TemplateObject) {
            apiCall = 'api/NW_InsertTemplateConfiguration';
           $http.post(webBaseUrl + apiCall, TemplateObject  ).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };  
        factory.postdata = _postdata;
        return  factory;
  }]);
