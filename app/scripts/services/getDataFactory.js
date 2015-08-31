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
    }]);