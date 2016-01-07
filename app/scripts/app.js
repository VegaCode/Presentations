'use strict';

/**
 * @ngdoc overview
 * @name nwApp
 * @description
 * # nwApp
 *
 * Main module of the application.
 */
angular.module('nwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'angularScreenfull',
    'AutoFontSize',
    'ui.bootstrap',
    'cfp.hotkeys',
    'angular-growl',
  ])
  .config(function ($routeProvider) {
    $routeProvider
     .when('/', {
        //redirectTo: '/main'
      })
      .when('/main/:projectId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs:'main',
          resolve: {
                    queryStringCheck: function($q, $location, $route) {
                        var deferred = $q.defer();
                        var queryString =  $route.current.params.projectId;
                        if (queryString !== undefined) {
                            deferred.resolve(queryString);
                        } else {
                            deferred.reject('not_id');
                        }
                        return deferred.promise;
                    }
                }
      })
      .when('/slideShow/:', {
        templateUrl: 'views/slideShow.html',
        controller: '',
        controllerAs: 'slideShow',
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('NW')
    .setNotify(true, true);
});
