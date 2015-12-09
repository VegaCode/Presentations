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
    }]).
    factory('GetTestNames',  [ '$q' , '$http', function GetSlidesFactory($q, $http) {
 var apiCall, deferred, factory,  _getdata, _getSumaryNames ;
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
        _getSumaryNames = function(instruccion) {
           apiCall = 'api/NW_GetSummary?instruccion=';
           $http.get(webBaseUrl + apiCall + instruccion  ).success(function(result){
           deferred.resolve(result);
           }).error(function(err) {
               deferred.reject(err);
            });
            return deferred.promise;
        };
        factory.getdata = _getdata;
        factory.getSumaryNames = _getSumaryNames;
        return factory;
    }]).
factory('setSettings',  [ '$q' , '$http', function ($q, $http) {
    var factory, apiCall, deferred, _postdata;
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
  }])
  .factory('ResetProject',  [ '$q' , '$http', function resetingProject($q, $http) {
   var apiCall, deferred, factory,  _resetProject;
          factory = {};
          deferred = $q.defer();
          _resetProject = function(projectid) {
              apiCall = 'api/ResetAllSlidesData/projectId';
              $http.get(webBaseUrl + apiCall + projectid).success(function(result){
              deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };
          factory.resetProject = _resetProject;
          return factory;
      }]).
      factory('GetRetainedNames',  [ '$q' , '$http', function GetRetainedNameFactory($q, $http) {
        var apiCall, instruccion, deferred, factory,  _getPositiveNames, _getNeutralNames, _getNegativeNames, _getNewNames, _getRootsToAvoid, _getRootsToExplore;
        //var apiCall, instruccion, deferred, factory,  _getPositiveNames, _postdata, _getNeutralNames, _getNegativeNames, _getNewNames, _getRootsToAvoid, _getRootsToExplore;
          factory = {};
          //deferred = $q.defer();
          _getPositiveNames = function(projectid) {
            deferred = $q.defer();
             instruccion = projectid + ', "Positive Retained Names"';
             apiCall = 'api/NW_GetSummary?instruccion=';
             $http.get(webBaseUrl + apiCall + instruccion).success(function(result){
             deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };
          _getNeutralNames = function(projectid) {
            deferred = $q.defer();
             apiCall = 'api/NW_GetSummary?instruccion=';
             instruccion = projectid + ', "Neutral Retained Names"';
             $http.get(webBaseUrl + apiCall + instruccion ).success(function(result){
             deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };
          _getNegativeNames = function(projectid) {
            deferred = $q.defer();
             apiCall = 'api/NW_GetSummary?instruccion=';
             instruccion = projectid + ', "Negative Names"';
             $http.get(webBaseUrl + apiCall + instruccion ).success(function(result){
             deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };
          _getNewNames = function(projectid) {
            deferred = $q.defer();
             apiCall = 'api/NW_GetSummary?instruccion=';
             instruccion = projectid + ', "New Names"';
             $http.get(webBaseUrl + apiCall + instruccion ).success(function(result){
             deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };
          _getRootsToExplore = function(projectid) {
            deferred = $q.defer();
             apiCall = 'api/NW_GetSummary?instruccion=';
             instruccion = projectid + ', "Roots to Explore"';
             $http.get(webBaseUrl + apiCall + instruccion ).success(function(result){
             deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };
          _getRootsToAvoid = function(projectid) {
            deferred = $q.defer();
             apiCall = 'api/NW_GetSummary?instruccion=';
             instruccion = projectid + ', "Roots to Avoid"';
             $http.get(webBaseUrl + apiCall + instruccion ).success(function(result){
             deferred.resolve(result);
             }).error(function(err) {
                 deferred.reject(err);
              });
              return deferred.promise;
          };

          factory.getPositiveNames = _getPositiveNames;
          factory.getNeutralNames = _getNeutralNames;
          factory.getNegativeNames = _getNegativeNames;
          factory.getNewNames = _getNewNames;
          factory.getRootsToExplore = _getRootsToExplore;
          factory.getRootsToAvoid = _getRootsToAvoid;
          return factory;
      }]);
