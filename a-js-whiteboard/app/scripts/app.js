'use strict';

/**
 * @ngdoc overview
 * @name wbFloggitApp
 * @description
 * # wbFloggitApp
 *
 * Main module of the application.
 */
angular.module('wbFloggitApp', [
  'wbFloggitApp.controllers',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.sortable'
])

.config(function ($routeProvider) {

  $routeProvider
    .when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/add-post-it', {
      templateUrl: 'views/add-post-it.html',
      controller: 'CreatePostItCtrl'
    })
    .when('/edit-post-it/:pid', {
      templateUrl: 'views/edit-post-it.html',
      controller: 'EditPostItCtrl'
    })
    .otherwise({
      redirectTo: '/main'
    });

});