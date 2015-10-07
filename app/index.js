'use strict';

/**
 * Module dependencies
 */
var angular = require('angular');
require('common/services/ios9-shim.js');
require('ng-cordova');
var core = require('ionic-service-core');
var push = require('ionic-service-push');
var analytics = require('../node_modules/ionic-service-analytics/ionic-analytics.js');
/**
 * Setup App Module
 */
var appModule = module.exports = angular

  .module('councils', [
    'ngIOS9UIWebViewPatch',
    'ngTouch',
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'ionic',
    'firebase',
    'angularMoment',
    'ionic.service.core',
    'ionic.service.push',
    // 'ionic.service.deploy',
    'ionic.service.analytics',
    'ngCordova',
    require('./common/services')(angular).name,
    require('./common/modal')(angular).name,
    require('./layout')(angular).name,
    require('./home')(angular).name,
    require('./councils')(angular).name,
    require('./detail')(angular).name,
    require('./create')(angular).name,
    require('./feedback')(angular).name,
    require('./settings')(angular).name,
    require('./login')(angular).name
  ])

  .constant('version', require('../package.json').version)
  .constant('_', require('lodash'))
  .constant('PLATFORM', window.device ? device.platform : 'dev')

  .config(function ($compileProvider, $urlRouterProvider, $mdThemingProvider, $ionicAppProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    $urlRouterProvider.otherwise('/home');

    // Identify app
    $ionicAppProvider.identify({
      app_id: '683c86a8',
      api_key: '8ebc80d1b1963f30e61726eddcbb6af20a8fbaa07051d7dc',
      dev_push: false
    });

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
      'A100': 'C63D53',
      'A200': 'C63D53',
      'A400': 'C63D53',
      'A700': 'C63D53',
      'contrastDefaultColor': 'light',
      'contrastLightColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700', '500', '600', '700', '800', '900']
    });

    $mdThemingProvider.definePalette('councils-grey', {
      '50': 'f2f2f2',
      '100': 'f2f2f2',
      '200': 'f2f2f2',
      '300': 'f2f2f2',
      '400': 'f2f2f2',
      '500': 'f2f2f2',
      '600': 'f2f2f2',
      '700': 'f2f2f2',
      '800': 'f2f2f2',
      '900': 'f2f2f2',
      'A100': '414141',
      'A200': '414141',
      'A400': '414141',
      'A700': '414141',
      'contrastDefaultColor': 'dark',
      'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A200', 'A400', 'A700', '500', '600', '700', '800', '900']
    });

    $mdThemingProvider.theme('green')
      .primaryPalette('councils-green');

    $mdThemingProvider.theme('white')
      .primaryPalette('councils-white');

    $mdThemingProvider.theme('default')
      .primaryPalette('councils-green')
      .accentPalette('councils-grey');
  })

  .run(
  (
    $log,
    $rootScope,
    $ionicBackdrop,
    $timeout,
    User,
    $window,
    $mdUtil,
    $mdSidenav,
    $state,
    Auth,
    $mdDialog,
    $ionicUser,
    $ionicPush,
    $cordovaTouchID,
    $ionicAnalytics
  ) => {
    var isAuthenticated = false;

    $ionicAnalytics.register();
    $log.debug('app module - run');

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    // $cordovaTouchID.checkSupport().then(function() {
    //   // success, TouchID supported
    //   $cordovaTouchID.authenticate('message').then(function() {
    //     // success
    //     var isAuthenticated = true;
    //   }, function () {
    //     // error
    //     var isAuthenticated = false;
    //     $state.go('login');
    //   });
    // }, function (error) {
    //   // TouchID not supported
    //   $log.debug('no touchID support');
    //   var isAuthenticated = true;
    // });


    $rootScope.logout = function (ev) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure you want to logout?')
        //.content('You will have to login again to access the app.')
        .ariaLabel('Logout confirm')
        .targetEvent(ev)
        .ok('Logout')
        .cancel('Stay here');

      $mdDialog.show(confirm)
        .then(function() {
          Auth.$unauth();
          return $state.go('login');
        }, function() {
          // do nothing.
        });
    };

    $rootScope.$on('$stateChangeStart',
      function (event, toState) {
        $log.debug('$stateChangeStart - name:', toState.name);
      });

    $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams) {
        $rootScope.title = toParams.council ? toParams.council : toState.title;
        $rootScope.navIcon = toState.navType === 'back' ? 'arrow_back' : 'menu';
        $rootScope.toggleLeft = toState.navType === 'back' ? back : buildToggler('left');
        $log.debug('$stateChangeSuccess - name:', toState.name);
      });

    function back () {
      $window.history.back();
    }

    function buildToggler(navID) {
      return $mdUtil.debounce(() => {
        console.log('toggle!');
        $mdSidenav(navID).toggle()
      }, 200);
    }


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
        if (error === "AUTH_REQUIRED") {
          return $state.go('login');
        }
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

    // Handles incoming device tokens
    // $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    //   User.get()
    //     .then((me) => {
    //       return me.$ref().parent().child('tokens').child(ionic.Platform.device().uuid).set(data);
    //     });
    // });

    Auth.$onAuth(function(authData) {
      if (authData) {
        console.log("Logged in as:", authData.uid);
        User.set(authData.uid)
          .then(function (me) {

            me.$bindTo($rootScope, 'user');
            var user = $ionicUser.get();

            if(!user.user_id) {
              user.user_id = me.uid
            };

            // Add some metadata to your user object.
            angular.extend(user, {
              fname: me.fname,
              lname: me.lname,
              homeUnitNbr: me.homeUnitNbr,
              individualId: me.individualId,
              image: me.profileImage,
              email: me.email
            });

            // Identify your user with the Ionic User Service
            $ionicUser
              .identify(user)
              .then(function(){
                if (window.plugins && window.plugins.pushNotification) {
                  registerForNotifications();
                }
              });
          });
      } else {
        console.log("Logged out");
      }
    });

    function registerForNotifications() {
      setTimeout(function () {
        $ionicPush.register({
          canShowAlert: true, // Can pushes show an alert on your screen?
          canSetBadge: true, // Can pushes update app icon badges?
          canPlaySound: true, // Can notifications play a sound?
          canRunActionsOnWake: true, // Can run actions outside the app,
          onNotification: function(notification) {
            // Handle new push notifications here
            console.log(notification);
            return true;
          }
        });
      }, 1000);
    }

    $ionicBackdrop.retain();

    $timeout(function() {
      $ionicBackdrop.release();
    }, 600);
  });

// Add the styles to the page
require('./index.scss');


