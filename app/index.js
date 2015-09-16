'use strict';

/**
 * Module dependencies
 */
var angular = require('angular');

/**
 * Setup App Module
 */
var appModule = module.exports = angular

  .module('councils', [
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'ionic',
    'firebase',
    'angularMoment',
    // 'ionic.service.core',
    // 'ionic.service.deploy',
    // 'ionic.service.analytics',
    // 'ionic.service.push',
    // 'ngCordova',
    require('./common/services')(angular).name,
    require('./layout')(angular).name,
    require('./home')(angular).name,
    require('./councils')(angular).name,
    require('./detail')(angular).name
  ])

  .constant('version', require('../package.json').version)
  .constant('_', require('lodash'))

  .config(function ($compileProvider, $urlRouterProvider, $mdThemingProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    $urlRouterProvider.otherwise('/home');

    $mdThemingProvider.definePalette('councils-white', {
      '50': 'ffffff',
      '100': 'ffffff',
      '200': 'ffffff',
      '300': 'ffffff',
      '400': 'ffffff',
      '500': '414141',
      '600': 'ffffff',
      '700': 'ffffff',
      '800': 'ffffff',
      '900': 'ffffff',
      'A100': '414141',
      'A200': '414141',
      'A400': '414141',
      'A700': '414141',
      'contrastDefaultColor': 'dark',
      'contrastDarkColors': ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700']
    });

    $mdThemingProvider.definePalette('councils-green', {
      '50': '1EAD8A',
      '100': '1EAD8A',
      '200': '1EAD8A',
      '300': '1EAD8A',
      '400': '1EAD8A',
      '500': '1EAD8A',
      '600': '1EAD8A',
      '700': '1EAD8A',
      '800': '1EAD8A',
      '900': '1EAD8A',
      'A100': '414141',
      'A200': '414141',
      'A400': '414141',
      'A700': '414141',
      'contrastDefaultColor': 'dark',
      'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700', '500', '600', '700', '800', '900']
    });

    $mdThemingProvider.definePalette('councils-grey', {
      '50': 'f8f8f8',
      '100': 'f8f8f8',
      '200': 'f8f8f8',
      '300': 'f8f8f8',
      '400': 'f8f8f8',
      '500': 'ffffff',
      '600': 'f8f8f8',
      '700': 'f8f8f8',
      '800': 'f8f8f8',
      '900': 'f8f8f8',
      'A100': '414141',
      'A200': '414141',
      'A400': '414141',
      'A700': '414141',
      'contrastDefaultColor': 'dark',
      'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700', '500', '600', '700', '800', '900']
    });

    $mdThemingProvider.theme('green')
      .primaryPalette('councils-green');

    $mdThemingProvider.theme('default')
      //.backgroundPalette('councils-green')
      .primaryPalette('councils-white')
      .accentPalette('councils-grey');
  })

  .run(function ($log, $rootScope, $ionicBackdrop, $timeout, User) {

    $log.debug('app module - run');

    $rootScope.$on('$stateChangeStart',
      function (event, toState) {
        $log.debug('$stateChangeStart - name:', toState.name);
      });

    $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams) {
        $rootScope.title = toParams.council ? toParams.council : toState.title;
        $log.debug('$stateChangeSuccess - name:', toState.name);
      });

    $rootScope.$on('$stateNotFound',
      function (event, unfoundState, fromState, fromParams) {
        $log.warn('$stateNotFound', {
          event        : event,
          unfoundState : unfoundState,
          fromState    : fromState,
          fromParams   : fromParams
        });
      });

    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        $log.error('$stateChangeError', {
          event      : event,
          toState    : toState,
          toParams   : toParams,
          fromState  : fromState,
          fromParams : fromParams,
          error      : error
        });
        if (error) {
          throw error;
        }
      });

    User.set('simplelogin:6')
      .then(user => user.$bindTo($rootScope, 'user'));

    $ionicBackdrop.retain();

    $timeout(function() {
      $ionicBackdrop.release();
    }, 600);
  });

// Add the styles to the page
require('./index.scss');


