(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("lodash")) : factory(root["angular"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_64__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	/**
	 * Module dependencies
	 */
	;
	var angular = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	var core = __webpack_require__(4);
	var push = __webpack_require__(5);
	var analytics = __webpack_require__(6);
	/**
	 * Setup App Module
	 */
	var appModule = module.exports = angular.module('councils', ['ngIOS9UIWebViewPatch', 'ngTouch', 'ngAnimate', 'ngMaterial', 'ui.router', 'ionic', 'firebase', 'angularMoment', 'ionic.service.core', 'ionic.service.push',
	// 'ionic.service.deploy',
	'ionic.service.analytics', 'ngCordova', __webpack_require__(7)(angular).name, __webpack_require__(11)(angular).name, __webpack_require__(18)(angular).name, __webpack_require__(23)(angular).name, __webpack_require__(28)(angular).name, __webpack_require__(33)(angular).name, __webpack_require__(38)(angular).name, __webpack_require__(45)(angular).name, __webpack_require__(50)(angular).name, __webpack_require__(55)(angular).name]).constant('version', __webpack_require__(63).version).constant('_', __webpack_require__(64)).constant('PLATFORM', window.device ? device.platform : 'dev').config(["$compileProvider", "$urlRouterProvider", "$mdThemingProvider", "$ionicAppProvider", function ($compileProvider, $urlRouterProvider, $mdThemingProvider, $ionicAppProvider) {
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

	  $mdThemingProvider.theme('green').primaryPalette('councils-green');

	  $mdThemingProvider.theme('white').primaryPalette('councils-white');

	  $mdThemingProvider.theme('default').primaryPalette('councils-green').accentPalette('councils-grey');
	}]).run(["$log", "$rootScope", "$ionicBackdrop", "$timeout", "User", "$window", "$mdUtil", "$mdSidenav", "$state", "Auth", "$mdDialog", "$ionicUser", "$ionicPush", "$cordovaTouchID", "$ionicAnalytics", function ($log, $rootScope, $ionicBackdrop, $timeout, User, $window, $mdUtil, $mdSidenav, $state, Auth, $mdDialog, $ionicUser, $ionicPush, $cordovaTouchID, $ionicAnalytics) {
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
	    var confirm = $mdDialog.confirm().title('Are you sure you want to logout?')
	    //.content('You will have to login again to access the app.')
	    .ariaLabel('Logout confirm').targetEvent(ev).ok('Logout').cancel('Stay here');

	    $mdDialog.show(confirm).then(function () {
	      Auth.$unauth();
	      return $state.go('login');
	    }, function () {
	      // do nothing.
	    });
	  };

	  $rootScope.$on('$stateChangeStart', function (event, toState) {
	    $log.debug('$stateChangeStart - name:', toState.name);
	  });

	  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
	    $rootScope.title = toParams.council ? toParams.council : toState.title;
	    $rootScope.navIcon = toState.navType === 'back' ? 'arrow_back' : 'menu';
	    $rootScope.toggleLeft = toState.navType === 'back' ? back : buildToggler('left');
	    $log.debug('$stateChangeSuccess - name:', toState.name);
	  });

	  function back() {
	    $window.history.back();
	  }

	  function buildToggler(navID) {
	    return $mdUtil.debounce(function () {
	      console.log('toggle!');
	      $mdSidenav(navID).toggle();
	    }, 200);
	  }

	  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
	    $log.warn('$stateNotFound', {
	      event: event,
	      unfoundState: unfoundState,
	      fromState: fromState,
	      fromParams: fromParams
	    });
	  });

	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	    if (error === "AUTH_REQUIRED") {
	      return $state.go('login');
	    }
	    $log.error('$stateChangeError', {
	      event: event,
	      toState: toState,
	      toParams: toParams,
	      fromState: fromState,
	      fromParams: fromParams,
	      error: error
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

	  Auth.$onAuth(function (authData) {
	    if (authData) {
	      console.log("Logged in as:", authData.uid);
	      User.set(authData.uid).then(function (me) {

	        me.$bindTo($rootScope, 'user');
	        var user = $ionicUser.get();

	        if (!user.user_id) {
	          user.user_id = me.uid;
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
	        $ionicUser.identify(user).then(function () {
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
	        onNotification: function onNotification(notification) {
	          // Handle new push notifications here
	          console.log(notification);
	          return true;
	        }
	      });
	    }, 1000);
	  }

	  $ionicBackdrop.retain();

	  $timeout(function () {
	    $ionicBackdrop.release();
	  }, 600);
	}]);

	// Add the styles to the page
	__webpack_require__(65);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * ==================  angular-ios9-uiwebview.patch.js v1.1.1 ==================
	 *
	 * This patch works around iOS9 UIWebView regression that causes infinite digest
	 * errors in Angular.
	 *
	 * The patch can be applied to Angular 1.2.0 – 1.4.5. Newer versions of Angular
	 * have the workaround baked in.
	 *
	 * To apply this patch load/bundle this file with your application and add a
	 * dependency on the "ngIOS9UIWebViewPatch" module to your main app module.
	 *
	 * For example:
	 *
	 * ```
	 * angular.module('myApp', ['ngRoute'])`
	 * ```
	 *
	 * becomes
	 *
	 * ```
	 * angular.module('myApp', ['ngRoute', 'ngIOS9UIWebViewPatch'])
	 * ```
	 *
	 *
	 * More info:
	 * - https://openradar.appspot.com/22186109
	 * - https://github.com/angular/angular.js/issues/12241
	 * - https://github.com/driftyco/ionic/issues/4082
	 *
	 *
	 * @license AngularJS
	 * (c) 2010-2015 Google, Inc. http://angularjs.org
	 * License: MIT
	 */

	angular.module('ngIOS9UIWebViewPatch', ['ng']).config(['$provide', function ($provide) {
	  'use strict';

	  $provide.decorator('$browser', ['$delegate', '$window', function ($delegate, $window) {

	    if (isIOS9UIWebView($window.navigator.userAgent)) {
	      return applyIOS9Shim($delegate);
	    }

	    return $delegate;

	    function isIOS9UIWebView(userAgent) {
	      return (/(iPhone|iPad|iPod).* OS 9_\d/.test(userAgent) && !/Version\/9\./.test(userAgent)
	      );
	    }

	    function applyIOS9Shim(browser) {
	      var pendingLocationUrl = null;
	      var originalUrlFn = browser.url;

	      browser.url = function () {
	        if (arguments.length) {
	          pendingLocationUrl = arguments[0];
	          return originalUrlFn.apply(browser, arguments);
	        }

	        return pendingLocationUrl || originalUrlFn.apply(browser, arguments);
	      };

	      window.addEventListener('popstate', clearPendingLocationUrl, false);
	      window.addEventListener('hashchange', clearPendingLocationUrl, false);

	      function clearPendingLocationUrl() {
	        pendingLocationUrl = null;
	      }

	      return browser;
	    }
	  }]);
	}]);

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*!
	 * ngCordova
	 * v0.1.23-alpha
	 * Copyright 2015 Drifty Co. http://drifty.com/
	 * See LICENSE in this repository for license information
	 */
	(function(){

	angular.module('ngCordova', [
	  'ngCordova.plugins'
	]);

	// install  :     cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git
	// link     :     https://github.com/EddyVerbruggen/cordova-plugin-actionsheet

	angular.module('ngCordova.plugins.actionSheet', [])

	  .factory('$cordovaActionSheet', ['$q', '$window', function ($q, $window) {

	    return {
	      show: function (options) {
	        var q = $q.defer();

	        $window.plugins.actionsheet.show(options, function (result) {
	          q.resolve(result);
	        });

	        return q.promise;
	      },

	      hide: function () {
	        return $window.plugins.actionsheet.hide();
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-admob.git
	// link     :     https://github.com/floatinghotpot/cordova-plugin-admob

	angular.module('ngCordova.plugins.adMob', [])

	  .factory('$cordovaAdMob', ['$q', '$window', function ($q, $window) {

	    return {
	      createBannerView: function (options) {
	        var d = $q.defer();

	        $window.plugins.AdMob.createBannerView(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createInterstitialView: function (options) {
	        var d = $q.defer();

	        $window.plugins.AdMob.createInterstitialView(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      requestAd: function (options) {
	        var d = $q.defer();

	        $window.plugins.AdMob.requestAd(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showAd: function (options) {
	        var d = $q.defer();

	        $window.plugins.AdMob.showAd(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      requestInterstitialAd: function (options) {
	        var d = $q.defer();

	        $window.plugins.AdMob.requestInterstitialAd(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
	// link     :     https://github.com/ohh2ahh/AppAvailability

	/* globals appAvailability: true */
	angular.module('ngCordova.plugins.appAvailability', [])

	  .factory('$cordovaAppAvailability', ['$q', function ($q) {

	    return {
	      check: function (urlScheme) {
	        var q = $q.defer();

	        appAvailability.check(urlScheme, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
	// link     :     https://github.com/pushandplay/cordova-plugin-apprate

	/* globals AppRate: true */
	angular.module('ngCordova.plugins.appRate', [])

	  .provider('$cordovaAppRate', [function () {

	    /**
	      * Set defaults settings to AppRate
	      *
	      * @param {Object} defaults - AppRate default settings
	      * @param {string} defaults.language
	      * @param {string} defaults.appName
	      * @param {boolean} defaults.promptForNewVersion
	      * @param {boolean} defaults.openStoreInApp
	      * @param {number} defaults.usesUntilPrompt
	      * @param {boolean} defaults.useCustomRateDialog
	      * @param {string} defaults.iosURL
	      * @param {string} defaults.androidURL
	      * @param {string} defaults.blackberryURL
	      * @param {string} defaults.windowsURL
	      */
	    this.setPreferences = function (defaults) {
	      if (!defaults || !angular.isObject(defaults)) {
	        return;
	      }

	      AppRate.preferences.useLanguage = defaults.language || null;
	      AppRate.preferences.displayAppName = defaults.appName || '';
	      AppRate.preferences.promptAgainForEachNewVersion = defaults.promptForNewVersion || true;
	      AppRate.preferences.openStoreInApp = defaults.openStoreInApp || false;
	      AppRate.preferences.usesUntilPrompt = defaults.usesUntilPrompt || 3;
	      AppRate.preferences.useCustomRateDialog = defaults.useCustomRateDialog || false;
	      AppRate.preferences.storeAppURL.ios = defaults.iosURL || null;
	      AppRate.preferences.storeAppURL.android = defaults.androidURL || null;
	      AppRate.preferences.storeAppURL.blackberry = defaults.blackberryURL || null;
	      AppRate.preferences.storeAppURL.windows8 = defaults.windowsURL || null;
	    };

	    /**
	      * Set custom locale
	      *
	      * @param {Object} customObj
	      * @param {string} customObj.title
	      * @param {string} customObj.cancelButtonLabel
	      * @param {string} customObj.laterButtonLabel
	      * @param {string} customObj.rateButtonLabel
	      */
	    this.setCustomLocale = function (customObj) {
	      var strings = {
	        title: 'Rate %@',
	        message: 'If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!',
	        cancelButtonLabel: 'No, Thanks',
	        laterButtonLabel: 'Remind Me Later',
	        rateButtonLabel: 'Rate It Now'
	      };

	      strings = angular.extend(strings, customObj);

	      AppRate.preferences.customLocale = strings;
	    };

	    this.$get = ['$q', function ($q) {
	      return {
	        promptForRating: function (immediate) {
	          var q = $q.defer();
	          var prompt = AppRate.promptForRating(immediate);
	          q.resolve(prompt);

	          return q.promise;
	        },

	        navigateToAppStore: function () {
	          var q = $q.defer();
	          var navigate = AppRate.navigateToAppStore();
	          q.resolve(navigate);

	          return q.promise;
	        },

	        onButtonClicked: function (cb) {
	          AppRate.onButtonClicked = function (buttonIndex) {
	            cb.call(this, buttonIndex);
	          };
	        },

	        onRateDialogShow: function (cb) {
	          AppRate.onRateDialogShow = cb();
	        }
	      };
	    }];
	  }]);

	// install   :     cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
	// link      :     https://github.com/whiteoctober/cordova-plugin-app-version

	angular.module('ngCordova.plugins.appVersion', [])

	  .factory('$cordovaAppVersion', ['$q', function ($q) {

	    return {
	      getVersionNumber: function () {
	        var q = $q.defer();
	        cordova.getAppVersion.getVersionNumber(function (version) {
	          q.resolve(version);
	        });

	        return q.promise;
	      },

	      getVersionCode: function () {
	        var q = $q.defer();
	        cordova.getAppVersion.getVersionCode(function (code) {
	          q.resolve(code);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add https://github.com/christocracy/cordova-plugin-background-geolocation.git
	// link      :     https://github.com/christocracy/cordova-plugin-background-geolocation

	angular.module('ngCordova.plugins.backgroundGeolocation', [])

	  .factory('$cordovaBackgroundGeolocation', ['$q', '$window', function ($q, $window) {

	    return {

	      init: function () {
	        $window.navigator.geolocation.getCurrentPosition(function (location) {
	          return location;
	        });
	      },

	      configure: function (options) {

	        this.init();
	        var q = $q.defer();

	        $window.plugins.backgroundGeoLocation.configure(
	          function (result) {
	            q.notify(result);
	            $window.plugins.backgroundGeoLocation.finish();
	          },
	          function (err) {
	            q.reject(err);
	          }, options);

	        this.start();

	        return q.promise;
	      },

	      start: function () {
	        var q = $q.defer();

	        $window.plugins.backgroundGeoLocation.start(
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });

	        return q.promise;
	      },

	      stop: function () {
	        var q = $q.defer();

	        $window.plugins.backgroundGeoLocation.stop(
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });

	        return q.promise;
	      }
	    };
	  }

	  ]);

	// install  :     cordova plugin add https://github.com/katzer/cordova-plugin-badge.git
	// link     :     https://github.com/katzer/cordova-plugin-badge

	angular.module('ngCordova.plugins.badge', [])

	  .factory('$cordovaBadge', ['$q', function ($q) {

	    return {
	      hasPermission: function () {
	        var q = $q.defer();
	        cordova.plugins.notification.badge.hasPermission(function (permission) {
	          if (permission) {
	            q.resolve(true);
	          } else {
	            q.reject('You do not have permission');
	          }
	        });

	        return q.promise;
	      },

	      promptForPermission: function () {
	        return cordova.plugins.notification.badge.promptForPermission();
	      },

	      set: function (badge, callback, scope) {
	        var q = $q.defer();

	        cordova.plugins.notification.badge.hasPermission(function (permission) {
	          if (permission) {
	            q.resolve(
	              cordova.plugins.notification.badge.set(badge, callback, scope)
	            );
	          } else {
	            q.reject('You do not have permission to set Badge');
	          }
	        });
	        return q.promise;
	      },

	      get: function () {
	        var q = $q.defer();
	        cordova.plugins.notification.badge.hasPermission(function (permission) {
	          if (permission) {
	            cordova.plugins.notification.badge.get(function (badge) {
	              q.resolve(badge);
	            });
	          } else {
	            q.reject('You do not have permission to get Badge');
	          }
	        });

	        return q.promise;
	      },

	      clear: function (callback, scope) {
	        var q = $q.defer();

	        cordova.plugins.notification.badge.hasPermission(function (permission) {
	          if (permission) {
	            q.resolve(cordova.plugins.notification.badge.clear(callback, scope));
	          } else {
	            q.reject('You do not have permission to clear Badge');
	          }
	        });
	        return q.promise;
	      },

	      increase: function (count, callback, scope) {
	        var q = $q.defer();

	        this.hasPermission().then(function (){
	          q.resolve(
	            cordova.plugins.notification.badge.increase(count, callback, scope)
	          );
	        }, function (){
	          q.reject('You do not have permission to increase Badge');
	        }) ;

	        return q.promise;
	      },

	      decrease: function (count, callback, scope) {
	        var q = $q.defer();

	        this.hasPermission().then(function (){
	          q.resolve(
	            cordova.plugins.notification.badge.decrease(count, callback, scope)
	          );
	        }, function (){
	          q.reject('You do not have permission to decrease Badge');
	        }) ;

	        return q.promise;
	      },

	      configure: function (config) {
	        return cordova.plugins.notification.badge.configure(config);
	      }
	    };
	  }]);

	// install  :    cordova plugin add https://github.com/wildabeast/BarcodeScanner.git
	// link     :    https://github.com/wildabeast/BarcodeScanner

	angular.module('ngCordova.plugins.barcodeScanner', [])

	  .factory('$cordovaBarcodeScanner', ['$q', function ($q) {

	    return {
	      scan: function (config) {
	        var q = $q.defer();

	        cordova.plugins.barcodeScanner.scan(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        }, config);

	        return q.promise;
	      },

	      encode: function (type, data) {
	        var q = $q.defer();
	        type = type || 'TEXT_TYPE';

	        cordova.plugins.barcodeScanner.encode(type, data, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	//  install   :   cordova plugin add cordova-plugin-battery-status
	//  link      :   https://github.com/apache/cordova-plugin-battery-status

	angular.module('ngCordova.plugins.batteryStatus', [])

	  .factory('$cordovaBatteryStatus', ['$rootScope', '$window', '$timeout', function ($rootScope, $window, $timeout) {

	    /**
	      * @param {string} status
	      */
	    var batteryStatus = function (status) {
	      $timeout(function () {
	        $rootScope.$broadcast('$cordovaBatteryStatus:status', status);
	      });
	    };

	    /**
	      * @param {string} status
	      */
	    var batteryCritical = function (status) {
	      $timeout(function () {
	        $rootScope.$broadcast('$cordovaBatteryStatus:critical', status);
	      });
	    };

	    /**
	      * @param {string} status
	      */
	    var batteryLow = function (status) {
	      $timeout(function () {
	        $rootScope.$broadcast('$cordovaBatteryStatus:low', status);
	      });
	    };

	    document.addEventListener('deviceready', function () {
	      if (navigator.battery) {
	        $window.addEventListener('batterystatus', batteryStatus, false);
	        $window.addEventListener('batterycritical', batteryCritical, false);
	        $window.addEventListener('batterylow', batteryLow, false);

	      }
	    }, false);
	    return true;
	  }])
	  .run(['$injector', function ($injector) {
	    $injector.get('$cordovaBatteryStatus'); //ensure the factory and subsequent event listeners get initialised
	  }]);

	// install   :  cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon.git
	// link      :  https://github.com/petermetz/cordova-plugin-ibeacon

	angular.module('ngCordova.plugins.beacon', [])

	  .factory('$cordovaBeacon', ['$window', '$rootScope', '$timeout', '$q', function ($window, $rootScope, $timeout, $q) {
	    var callbackDidDetermineStateForRegion = null;
	    var callbackDidStartMonitoringForRegion = null;
	    var callbackDidExitRegion = null;
	    var callbackDidEnterRegion = null;
	    var callbackDidRangeBeaconsInRegion = null;
	    var callbackPeripheralManagerDidStartAdvertising = null;
	    var callbackPeripheralManagerDidUpdateState = null;
	    var callbackDidChangeAuthorizationStatus = null;

	    document.addEventListener('deviceready', function () {
	      if ($window.cordova &&
	          $window.cordova.plugins &&
	          $window.cordova.plugins.locationManager) {
	        var delegate = new $window.cordova.plugins.locationManager.Delegate();

	        delegate.didDetermineStateForRegion = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:didDetermineStateForRegion', pluginResult);
	          });

	          if (callbackDidDetermineStateForRegion) {
	            callbackDidDetermineStateForRegion(pluginResult);
	          }
	        };

	        delegate.didStartMonitoringForRegion = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:didStartMonitoringForRegion', pluginResult);
	          });

	          if (callbackDidStartMonitoringForRegion) {
	            callbackDidStartMonitoringForRegion(pluginResult);
	          }
	        };

	        delegate.didExitRegion = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:didExitRegion', pluginResult);
	          });

	          if (callbackDidExitRegion) {
	            callbackDidExitRegion(pluginResult);
	          }
	        };

	        delegate.didEnterRegion = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:didEnterRegion', pluginResult);
	          });

	          if (callbackDidEnterRegion) {
	            callbackDidEnterRegion(pluginResult);
	          }
	        };

	        delegate.didRangeBeaconsInRegion = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:didRangeBeaconsInRegion', pluginResult);
	          });

	          if (callbackDidRangeBeaconsInRegion) {
	            callbackDidRangeBeaconsInRegion(pluginResult);
	          }
	        };

	        delegate.peripheralManagerDidStartAdvertising = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:peripheralManagerDidStartAdvertising', pluginResult);
	          });

	          if (callbackPeripheralManagerDidStartAdvertising) {
	            callbackPeripheralManagerDidStartAdvertising(pluginResult);
	          }
	        };

	        delegate.peripheralManagerDidUpdateState = function (pluginResult) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:peripheralManagerDidUpdateState', pluginResult);
	          });

	          if (callbackPeripheralManagerDidUpdateState) {
	            callbackPeripheralManagerDidUpdateState(pluginResult);
	          }
	        };

	        delegate.didChangeAuthorizationStatus = function (status) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaBeacon:didChangeAuthorizationStatus', status);
	          });

	          if (callbackDidChangeAuthorizationStatus) {
	            callbackDidChangeAuthorizationStatus(status);
	          }
	        };

	        $window.cordova.plugins.locationManager.setDelegate(delegate);
	      }
	    }, false);

	    return {
	      setCallbackDidDetermineStateForRegion: function (callback) {
	        callbackDidDetermineStateForRegion = callback;
	      },
	      setCallbackDidStartMonitoringForRegion: function (callback) {
	        callbackDidStartMonitoringForRegion = callback;
	      },
	      setCallbackDidExitRegion: function (callback) {
	        callbackDidExitRegion = callback;
	      },
	      setCallbackDidEnterRegion: function (callback) {
	        callbackDidEnterRegion = callback;
	      },
	      setCallbackDidRangeBeaconsInRegion: function (callback) {
	        callbackDidRangeBeaconsInRegion = callback;
	      },
	      setCallbackPeripheralManagerDidStartAdvertising: function (callback) {
	        callbackPeripheralManagerDidStartAdvertising = callback;
	      },
	      setCallbackPeripheralManagerDidUpdateState: function (callback) {
	        callbackPeripheralManagerDidUpdateState = callback;
	      },
	      setCallbackDidChangeAuthorizationStatus: function (callback) {
	        callbackDidChangeAuthorizationStatus = callback;
	      },
	      createBeaconRegion: function (identifier, uuid, major, minor, notifyEntryStateOnDisplay) {
	        major = major || undefined;
	        minor = minor || undefined;

	        return new $window.cordova.plugins.locationManager.BeaconRegion(
	          identifier,
	          uuid,
	          major,
	          minor,
	          notifyEntryStateOnDisplay
	        );
	      },
	      isBluetoothEnabled: function () {
	        return $q.when($window.cordova.plugins.locationManager.isBluetoothEnabled());
	      },
	      enableBluetooth: function () {
	        return $q.when($window.cordova.plugins.locationManager.enableBluetooth());
	      },
	      disableBluetooth: function () {
	        return $q.when($window.cordova.plugins.locationManager.disableBluetooth());
	      },
	      startMonitoringForRegion: function (region) {
	        return $q.when($window.cordova.plugins.locationManager.startMonitoringForRegion(region));
	      },
	      stopMonitoringForRegion: function (region) {
	        return $q.when($window.cordova.plugins.locationManager.stopMonitoringForRegion(region));
	      },
	      requestStateForRegion: function (region) {
	        return $q.when($window.cordova.plugins.locationManager.requestStateForRegion(region));
	      },
	      startRangingBeaconsInRegion: function (region) {
	        return $q.when($window.cordova.plugins.locationManager.startRangingBeaconsInRegion(region));
	      },
	      stopRangingBeaconsInRegion: function (region) {
	        return $q.when($window.cordova.plugins.locationManager.stopRangingBeaconsInRegion(region));
	      },
	      getAuthorizationStatus: function () {
	        return $q.when($window.cordova.plugins.locationManager.getAuthorizationStatus());
	      },
	      requestWhenInUseAuthorization: function () {
	        return $q.when($window.cordova.plugins.locationManager.requestWhenInUseAuthorization());
	      },
	      requestAlwaysAuthorization: function () {
	        return $q.when($window.cordova.plugins.locationManager.requestAlwaysAuthorization());
	      },
	      getMonitoredRegions: function () {
	        return $q.when($window.cordova.plugins.locationManager.getMonitoredRegions());
	      },
	      getRangedRegions: function () {
	        return $q.when($window.cordova.plugins.locationManager.getRangedRegions());
	      },
	      isRangingAvailable: function () {
	        return $q.when($window.cordova.plugins.locationManager.isRangingAvailable());
	      },
	      isMonitoringAvailableForClass: function (region) {
	        return $q.when($window.cordova.plugins.locationManager.isMonitoringAvailableForClass(region));
	      },
	      startAdvertising: function (region, measuredPower) {
	        return $q.when($window.cordova.plugins.locationManager.startAdvertising(region, measuredPower));
	      },
	      stopAdvertising: function () {
	        return $q.when($window.cordova.plugins.locationManager.stopAdvertising());
	      },
	      isAdvertisingAvailable: function () {
	        return $q.when($window.cordova.plugins.locationManager.isAdvertisingAvailable());
	      },
	      isAdvertising: function () {
	        return $q.when($window.cordova.plugins.locationManager.isAdvertising());
	      },
	      disableDebugLogs: function () {
	        return $q.when($window.cordova.plugins.locationManager.disableDebugLogs());
	      },
	      enableDebugNotifications: function () {
	        return $q.when($window.cordova.plugins.locationManager.enableDebugNotifications());
	      },
	      disableDebugNotifications: function () {
	        return $q.when($window.cordova.plugins.locationManager.disableDebugNotifications());
	      },
	      enableDebugLogs: function () {
	        return $q.when($window.cordova.plugins.locationManager.enableDebugLogs());
	      },
	      appendToDeviceLog: function (message) {
	        return $q.when($window.cordova.plugins.locationManager.appendToDeviceLog(message));
	      }
	    };
	  }]);

	//  install   :   cordova plugin add https://github.com/don/cordova-plugin-ble-central.git
	//  link      :   https://github.com/don/cordova-plugin-ble-central

	/* globals ble: true */
	angular.module('ngCordova.plugins.ble', [])

	  .factory('$cordovaBLE', ['$q', '$timeout', function ($q, $timeout) {

	    return {
	      scan: function (services, seconds) {
	        var q = $q.defer();

	        ble.startScan(services, function (result) {
	          q.notify(result);
	        }, function (error) {
	          q.reject(error);
	        });

	        $timeout(function () {
	            ble.stopScan(function () {
	              q.resolve();
	            }, function (error) {
	              q.reject(error);
	            });
	        }, seconds*1000);

	        return q.promise;
	      },

	      connect: function (deviceID) {
	        var q = $q.defer();
	        ble.connect(deviceID, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      disconnect: function (deviceID) {
	        var q = $q.defer();
	        ble.disconnect(deviceID, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      read: function (deviceID, serviceUUID, characteristicUUID) {
	        var q = $q.defer();
	        ble.read(deviceID, serviceUUID, characteristicUUID, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      write: function (deviceID, serviceUUID, characteristicUUID, data) {
	        var q = $q.defer();
	        ble.write(deviceID, serviceUUID, characteristicUUID, data, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      writeCommand: function (deviceID, serviceUUID, characteristicUUID, data) {
	        var q = $q.defer();
	        ble.writeCommand(deviceID, serviceUUID, characteristicUUID, data, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      startNotification: function (deviceID, serviceUUID, characteristicUUID) {
	        var q = $q.defer();
	        ble.startNotification(deviceID, serviceUUID, characteristicUUID, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      stopNotification: function (deviceID, serviceUUID, characteristicUUID) {
	        var q = $q.defer();
	        ble.stopNotification(deviceID, serviceUUID, characteristicUUID, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      isConnected: function (deviceID) {
	        var q = $q.defer();
	        ble.isConnected(deviceID, function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      isEnabled: function () {
	        var q = $q.defer();
	        ble.isEnabled(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add https://github.com/don/BluetoothSerial.git
	// link      :     https://github.com/don/BluetoothSerial

	angular.module('ngCordova.plugins.bluetoothSerial', [])

	  .factory('$cordovaBluetoothSerial', ['$q', '$window', function ($q, $window) {

	    return {
	      connect: function (address) {
	        var q = $q.defer();
	        var disconnectionPromise = $q.defer();
	        var isConnected = false;
	        $window.bluetoothSerial.connect(address, function () {
	          isConnected = true;
	          q.resolve(disconnectionPromise);
	        }, function (error) {
	          if(isConnected === false) {
	            disconnectionPromise.reject(error);
	          }
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      // not supported on iOS
	      connectInsecure: function (address) {
	        var q = $q.defer();
	        $window.bluetoothSerial.connectInsecure(address, function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      disconnect: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.disconnect(function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      list: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.list(function (data) {
	          q.resolve(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      discoverUnpaired: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.discoverUnpaired(function (data) {
	          q.resolve(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      setDeviceDiscoveredListener: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.setDeviceDiscoveredListener(function (data) {
	          q.notify(data);
	        });
	        return q.promise;
	      },

	      clearDeviceDiscoveredListener: function () {
	        $window.bluetoothSerial.clearDeviceDiscoveredListener();
	      },

	      showBluetoothSettings: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.showBluetoothSettings(function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      isEnabled: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.isEnabled(function () {
	          q.resolve();
	        }, function () {
	          q.reject();
	        });
	        return q.promise;
	      },

	      enable: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.enable(function () {
	          q.resolve();
	        }, function () {
	          q.reject();
	        });
	        return q.promise;
	      },

	      isConnected: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.isConnected(function () {
	          q.resolve();
	        }, function () {
	          q.reject();
	        });
	        return q.promise;
	      },

	      available: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.available(function (data) {
	          q.resolve(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      read: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.read(function (data) {
	          q.resolve(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      readUntil: function (delimiter) {
	        var q = $q.defer();
	        $window.bluetoothSerial.readUntil(delimiter, function (data) {
	          q.resolve(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      write: function (data) {
	        var q = $q.defer();
	        $window.bluetoothSerial.write(data, function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      subscribe: function (delimiter) {
	        var q = $q.defer();
	        $window.bluetoothSerial.subscribe(delimiter, function (data) {
	          q.notify(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      subscribeRawData: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.subscribeRawData(function (data) {
	          q.notify(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      unsubscribe: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.unsubscribe(function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      unsubscribeRawData: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.unsubscribeRawData(function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      clear: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.clear(function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      readRSSI: function () {
	        var q = $q.defer();
	        $window.bluetoothSerial.readRSSI(function (data) {
	          q.resolve(data);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      }
	    };
	  }]);

	// install  :    cordova plugin add https://github.com/fiscal-cliff/phonegap-plugin-brightness.git
	// link     :    https://github.com/fiscal-cliff/phonegap-plugin-brightness

	angular.module('ngCordova.plugins.brightness', [])

	  .factory('$cordovaBrightness', ['$q', '$window', function ($q, $window) {

	    return {
	      get: function () {
	        var q = $q.defer();

	        if (!$window.cordova) {
	          q.reject('Not supported without cordova.js');
	        } else {
	          $window.cordova.plugins.brightness.getBrightness(function (result) {
	            q.resolve(result);
	          }, function (err) {
	            q.reject(err);
	          });
	        }

	        return q.promise;
	      },

	      set: function (data) {
	        var q = $q.defer();

	        if (!$window.cordova) {
	          q.reject('Not supported without cordova.js');
	        } else {
	          $window.cordova.plugins.brightness.setBrightness(data, function (result) {
	            q.resolve(result);
	          }, function (err) {
	            q.reject(err);
	          });
	        }

	        return q.promise;
	      },

	      setKeepScreenOn: function (bool) {
	        var q = $q.defer();

	        if (!$window.cordova) {
	          q.reject('Not supported without cordova.js');
	        } else {
	          $window.cordova.plugins.brightness.setKeepScreenOn(bool, function (result) {
	            q.resolve(result);
	          }, function (err) {
	            q.reject(err);
	          });
	        }

	        return q.promise;
	      }
	    };
	  }]);


	// install  :     cordova plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git
	// link     :     https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin

	angular.module('ngCordova.plugins.calendar', [])

	  .factory('$cordovaCalendar', ['$q', '$window', function ($q, $window) {
	    
	    return {
	      createCalendar: function (options) {
	        var d = $q.defer(),
	          createCalOptions = $window.plugins.calendar.getCreateCalendarOptions();

	        if (typeof options === 'string') {
	          createCalOptions.calendarName = options;
	        } else {
	          createCalOptions = angular.extend(createCalOptions, options);
	        }

	        $window.plugins.calendar.createCalendar(createCalOptions, function (message) {
	          d.resolve(message);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      deleteCalendar: function (calendarName) {
	        var d = $q.defer();

	        $window.plugins.calendar.deleteCalendar(calendarName, function (message) {
	          d.resolve(message);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      createEvent: function (options) {
	        var d = $q.defer(),
	          defaultOptions = {
	            title: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null
	          };

	        defaultOptions = angular.extend(defaultOptions, options);

	        $window.plugins.calendar.createEvent(
	          defaultOptions.title,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          function (message) {
	            d.resolve(message);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      },

	      createEventWithOptions: function (options) {
	        var d = $q.defer(),
	          defaultOptionKeys = [],
	          calOptions = window.plugins.calendar.getCalendarOptions(),
	          defaultOptions = {
	            title: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null
	          };

	        defaultOptionKeys = Object.keys(defaultOptions);

	        for (var key in options) {
	          if (defaultOptionKeys.indexOf(key) === -1) {
	            calOptions[key] = options[key];
	          } else {
	            defaultOptions[key] = options[key];
	          }
	        }

	        $window.plugins.calendar.createEventWithOptions(
	          defaultOptions.title,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          calOptions,
	          function (message) {
	            d.resolve(message);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      },

	      createEventInteractively: function (options) {
	        var d = $q.defer(),
	          defaultOptions = {
	            title: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null
	          };

	        defaultOptions = angular.extend(defaultOptions, options);

	        $window.plugins.calendar.createEventInteractively(
	          defaultOptions.title,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          function (message) {
	            d.resolve(message);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      },

	      createEventInNamedCalendar: function (options) {
	        var d = $q.defer(),
	          defaultOptions = {
	            title: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null,
	            calendarName: null
	          };

	        defaultOptions = angular.extend(defaultOptions, options);

	        $window.plugins.calendar.createEventInNamedCalendar(
	          defaultOptions.title,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          defaultOptions.calendarName,
	          function (message) {
	            d.resolve(message);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      },

	      findEvent: function (options) {
	        var d = $q.defer(),
	          defaultOptions = {
	            title: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null
	          };

	        defaultOptions = angular.extend(defaultOptions, options);

	        $window.plugins.calendar.findEvent(
	          defaultOptions.title,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          function (foundEvent) {
	            d.resolve(foundEvent);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      },

	      listEventsInRange: function (startDate, endDate) {
	        var d = $q.defer();

	        $window.plugins.calendar.listEventsInRange(startDate, endDate, function (events) {
	          d.resolve(events);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      listCalendars: function () {
	        var d = $q.defer();

	        $window.plugins.calendar.listCalendars(function (calendars) {
	          d.resolve(calendars);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      findAllEventsInNamedCalendar: function (calendarName) {
	        var d = $q.defer();

	        $window.plugins.calendar.findAllEventsInNamedCalendar(calendarName, function (events) {
	          d.resolve(events);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      modifyEvent: function (options) {
	        var d = $q.defer(),
	          defaultOptions = {
	            title: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null,
	            newTitle: null,
	            newLocation: null,
	            newNotes: null,
	            newStartDate: null,
	            newEndDate: null
	          };

	        defaultOptions = angular.extend(defaultOptions, options);

	        $window.plugins.calendar.modifyEvent(
	          defaultOptions.title,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          defaultOptions.newTitle,
	          defaultOptions.newLocation,
	          defaultOptions.newNotes,
	          new Date(defaultOptions.newStartDate),
	          new Date(defaultOptions.newEndDate),
	          function (message) {
	            d.resolve(message);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      },

	      deleteEvent: function (options) {
	        var d = $q.defer(),
	          defaultOptions = {
	            newTitle: null,
	            location: null,
	            notes: null,
	            startDate: null,
	            endDate: null
	          };

	        defaultOptions = angular.extend(defaultOptions, options);

	        $window.plugins.calendar.deleteEvent(
	          defaultOptions.newTitle,
	          defaultOptions.location,
	          defaultOptions.notes,
	          new Date(defaultOptions.startDate),
	          new Date(defaultOptions.endDate),
	          function (message) {
	            d.resolve(message);
	          }, function (error) {
	            d.reject(error);
	          }
	        );

	        return d.promise;
	      }
	    };
	  }]);

	// install   :   cordova plugin add cordova-plugin-camera
	// link      :   https://github.com/apache/cordova-plugin-camera

	angular.module('ngCordova.plugins.camera', [])

	  .factory('$cordovaCamera', ['$q', function ($q) {

	    return {
	      getPicture: function (options) {
	        var q = $q.defer();

	        if (!navigator.camera) {
	          q.resolve(null);
	          return q.promise;
	        }

	        navigator.camera.getPicture(function (imageData) {
	          q.resolve(imageData);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        return q.promise;
	      },

	      cleanup: function () {
	        var q = $q.defer();

	        navigator.camera.cleanup(function () {
	          q.resolve();
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	// install   :    cordova plugin add cordova-plugin-media-capture
	// link      :    https://github.com/apache/cordova-plugin-media-capture

	angular.module('ngCordova.plugins.capture', [])

	  .factory('$cordovaCapture', ['$q', function ($q) {

	    return {
	      captureAudio: function (options) {
	        var q = $q.defer();

	        if (!navigator.device.capture) {
	          q.resolve(null);
	          return q.promise;
	        }

	        navigator.device.capture.captureAudio(function (audioData) {
	          q.resolve(audioData);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        return q.promise;
	      },
	      captureImage: function (options) {
	        var q = $q.defer();

	        if (!navigator.device.capture) {
	          q.resolve(null);
	          return q.promise;
	        }

	        navigator.device.capture.captureImage(function (imageData) {
	          q.resolve(imageData);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        return q.promise;
	      },
	      captureVideo: function (options) {
	        var q = $q.defer();

	        if (!navigator.device.capture) {
	          q.resolve(null);
	          return q.promise;
	        }

	        navigator.device.capture.captureVideo(function (videoData) {
	          q.resolve(videoData);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        return q.promise;
	      }
	    };
	  }]);

	// install : cordova plugin add https://github.com/vkeepe/card.io.git
	// link    : https://github.com/vkeepe/card.io.git

	/* globals CardIO: true */
	angular.module('ngCordova.plugins.cardIO', [])

	  .provider(
	  '$cordovaNgCardIO', [function () {

	    /**
	     * Default array of response data from cardIO scan card
	     */
	    var defaultRespFields = [
	      'card_type',
	      'redacted_card_number',
	      'card_number',
	      'expiry_month',
	      'expiry_year',
	      'short_expiry_year',
	      'cvv',
	      'zip'
	    ];

	    /**
	     * Default config for cardIO scan function
	     */
	    var defaultScanConfig = {
	      'expiry': true,
	      'cvv': true,
	      'zip': false,
	      'suppressManual': false,
	      'suppressConfirm': false,
	      'hideLogo': true
	    };

	    /**
	     * Configuring defaultRespFields using $cordovaNgCardIOProvider
	     *
	     */
	    this.setCardIOResponseFields = function (filelds) {
	      if (!filelds || !angular.isArray(filelds)) {
	        return;
	      }
	      defaultRespFields = filelds;
	    };

	    /**
	     *
	     * Configuring defaultScanConfig using $cordovaNgCardIOProvider
	     */
	    this.setScanerConfig = function (config) {
	      if (!config || !angular.isObject(config)) {
	        return;
	      }

	      defaultScanConfig.expiry = config.expiry || true;
	      defaultScanConfig.cvv = config.cvv || true;
	      defaultScanConfig.zip = config.zip || false;
	      defaultScanConfig.suppressManual = config.suppressManual || false;
	      defaultScanConfig.suppressConfirm = config.suppressConfirm || false;
	      defaultScanConfig.hideLogo = config.hideLogo || true;
	    };

	    /**
	     * Function scanCard for $cordovaNgCardIO service to make scan of card
	     *
	     */
	    this.$get = ['$q', function ($q) {
	      return {
	        scanCard: function () {

	          var deferred = $q.defer();
	          CardIO.scan(
	            defaultScanConfig,
	            function (response) {

	              if (response === null) {
	                deferred.reject(null);
	              } else {

	                var respData = {};
	                for (
	                  var i = 0, len = defaultRespFields.length; i < len; i++) {
	                  var field = defaultRespFields[i];

	                  if (field === 'short_expiry_year') {
	                    respData[field] = String(response.expiry_year).substr( // jshint ignore:line
	                      2, 2
	                    ) || '';
	                  } else {
	                    respData[field] = response[field] || '';
	                  }
	                }
	                deferred.resolve(respData);
	              }
	            },
	            function () {
	              deferred.reject(null);
	            }
	          );
	          return deferred.promise;
	        }
	      };
	    }];
	  }]
	);

	// install   :     cordova plugin add https://github.com/VersoSolutions/CordovaClipboard.git
	// link      :     https://github.com/VersoSolutions/CordovaClipboard

	angular.module('ngCordova.plugins.clipboard', [])

	  .factory('$cordovaClipboard', ['$q', '$window', function ($q, $window) {

	    return {
	      copy: function (text) {
	        var q = $q.defer();

	        $window.cordova.plugins.clipboard.copy(text,
	          function () {
	            q.resolve();
	          }, function () {
	            q.reject();
	          });

	        return q.promise;
	      },

	      paste: function () {
	        var q = $q.defer();

	        $window.cordova.plugins.clipboard.paste(function (text) {
	          q.resolve(text);
	        }, function () {
	          q.reject();
	        });

	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-contacts
	// link      :     https://github.com/apache/cordova-plugin-contacts

	angular.module('ngCordova.plugins.contacts', [])

	  .factory('$cordovaContacts', ['$q', function ($q) {

	    return {
	      save: function (contact) {
	        var q = $q.defer();
	        var deviceContact = navigator.contacts.create(contact);

	        deviceContact.save(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });
	        return q.promise;
	      },

	      remove: function (contact) {
	        var q = $q.defer();
	        var deviceContact = navigator.contacts.create(contact);

	        deviceContact.remove(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });
	        return q.promise;
	      },

	      clone: function (contact) {
	        var deviceContact = navigator.contacts.create(contact);
	        return deviceContact.clone(contact);
	      },

	      find: function (options) {
	        var q = $q.defer();
	        var fields = options.fields || ['id', 'displayName'];
	        delete options.fields;
	        if (Object.keys(options).length === 0) {
	          navigator.contacts.find(fields, function (results) {
	            q.resolve(results);
	          },function (err) {
	            q.reject(err);
	          });
	        }
	        else {
	          navigator.contacts.find(fields, function (results) {
	            q.resolve(results);
	          }, function (err) {
	            q.reject(err);
	          }, options);
	        }
	        return q.promise;
	      },

	      pickContact: function () {
	        var q = $q.defer();

	        navigator.contacts.pickContact(function (contact) {
	          q.resolve(contact);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      }

	      // TODO: method to set / get ContactAddress
	      // TODO: method to set / get ContactError
	      // TODO: method to set / get ContactField
	      // TODO: method to set / get ContactName
	      // TODO: method to set / get ContactOrganization
	    };
	  }]);

	// install   :      cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
	// link      :      https://github.com/VitaliiBlagodir/cordova-plugin-datepicker

	angular.module('ngCordova.plugins.datePicker', [])

	  .factory('$cordovaDatePicker', ['$window', '$q', function ($window, $q) {
	    
	    return {
	      show: function (options) {
	        var q = $q.defer();
	        options = options || {date: new Date(), mode: 'date'};
	        $window.datePicker.show(options, function (date) {
	          q.resolve(date);
	        });
	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-device
	// link      :     https://github.com/apache/cordova-plugin-device

	/* globals device: true */
	angular.module('ngCordova.plugins.device', [])

	  .factory('$cordovaDevice', [function () {

	    return {
	      /**
	       * Returns the whole device object.
	       * @see https://github.com/apache/cordova-plugin-device
	       * @returns {Object} The device object.
	       */
	      getDevice: function () {
	        return device;
	      },

	      /**
	       * Returns the Cordova version.
	       * @see https://github.com/apache/cordova-plugin-device#devicecordova
	       * @returns {String} The Cordova version.
	       */
	      getCordova: function () {
	        return device.cordova;
	      },

	      /**
	       * Returns the name of the device's model or product.
	       * @see https://github.com/apache/cordova-plugin-device#devicemodel
	       * @returns {String} The name of the device's model or product.
	       */
	      getModel: function () {
	        return device.model;
	      },

	      /**
	       * @deprecated device.name is deprecated as of version 2.3.0. Use device.model instead.
	       * @returns {String}
	       */
	      getName: function () {
	        return device.name;
	      },

	      /**
	       * Returns the device's operating system name.
	       * @see https://github.com/apache/cordova-plugin-device#deviceplatform
	       * @returns {String} The device's operating system name.
	       */
	      getPlatform: function () {
	        return device.platform;
	      },

	      /**
	       * Returns the device's Universally Unique Identifier.
	       * @see https://github.com/apache/cordova-plugin-device#deviceuuid
	       * @returns {String} The device's Universally Unique Identifier
	       */
	      getUUID: function () {
	        return device.uuid;
	      },

	      /**
	       * Returns the operating system version.
	       * @see https://github.com/apache/cordova-plugin-device#deviceversion
	       * @returns {String}
	       */
	      getVersion: function () {
	        return device.version;
	      },

	      /**
	       * Returns the device manufacturer.
	       * @returns {String}
	       */
	      getManufacturer: function () {
	        return device.manufacturer;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-device-motion
	// link      :     https://github.com/apache/cordova-plugin-device-motion

	angular.module('ngCordova.plugins.deviceMotion', [])

	  .factory('$cordovaDeviceMotion', ['$q', function ($q) {

	    return {
	      getCurrentAcceleration: function () {
	        var q = $q.defer();

	        if (angular.isUndefined(navigator.accelerometer) ||
	        !angular.isFunction(navigator.accelerometer.getCurrentAcceleration)) {
	          q.reject('Device do not support watchAcceleration');
	        }

	        navigator.accelerometer.getCurrentAcceleration(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      watchAcceleration: function (options) {
	        var q = $q.defer();

	        if (angular.isUndefined(navigator.accelerometer) ||
	        !angular.isFunction(navigator.accelerometer.watchAcceleration)) {
	          q.reject('Device do not support watchAcceleration');
	        }

	        var watchID = navigator.accelerometer.watchAcceleration(function (result) {
	          q.notify(result);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        q.promise.cancel = function () {
	          navigator.accelerometer.clearWatch(watchID);
	        };

	        q.promise.clearWatch = function (id) {
	          navigator.accelerometer.clearWatch(id || watchID);
	        };

	        q.promise.watchID = watchID;

	        return q.promise;
	      },

	      clearWatch: function (watchID) {
	        return navigator.accelerometer.clearWatch(watchID);
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-device-orientation
	// link      :     https://github.com/apache/cordova-plugin-device-orientation

	angular.module('ngCordova.plugins.deviceOrientation', [])

	  .factory('$cordovaDeviceOrientation', ['$q', function ($q) {

	    var defaultOptions = {
	      frequency: 3000 // every 3s
	    };
	    
	    return {
	      getCurrentHeading: function () {
	        var q = $q.defer();

	        if(!navigator.compass) {
	            q.reject('No compass on Device');
	            return q.promise;
	        }

	        navigator.compass.getCurrentHeading(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      watchHeading: function (options) {
	        var q = $q.defer();

	        if(!navigator.compass) {
	            q.reject('No compass on Device');
	            return q.promise;
	        }

	        var _options = angular.extend(defaultOptions, options);
	        var watchID = navigator.compass.watchHeading(function (result) {
	          q.notify(result);
	        }, function (err) {
	          q.reject(err);
	        }, _options);

	        q.promise.cancel = function () {
	          navigator.compass.clearWatch(watchID);
	        };

	        q.promise.clearWatch = function (id) {
	          navigator.compass.clearWatch(id || watchID);
	        };

	        q.promise.watchID = watchID;

	        return q.promise;
	      },

	      clearWatch: function (watchID) {
	        return navigator.compass.clearWatch(watchID);
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-dialogs
	// link      :     https://github.com/apache/cordova-plugin-dialogs

	angular.module('ngCordova.plugins.dialogs', [])

	  .factory('$cordovaDialogs', ['$q', '$window', function ($q, $window) {

	    return {
	      alert: function (message, title, buttonName) {
	        var q = $q.defer();

	        if (!$window.navigator.notification) {
	          $window.alert(message);
	          q.resolve();
	        } else {
	          navigator.notification.alert(message, function () {
	            q.resolve();
	          }, title, buttonName);
	        }

	        return q.promise;
	      },

	      confirm: function (message, title, buttonLabels) {
	        var q = $q.defer();

	        if (!$window.navigator.notification) {
	          if ($window.confirm(message)) {
	            q.resolve(1);
	          } else {
	            q.resolve(2);
	          }
	        } else {
	          navigator.notification.confirm(message, function (buttonIndex) {
	            q.resolve(buttonIndex);
	          }, title, buttonLabels);
	        }

	        return q.promise;
	      },

	      prompt: function (message, title, buttonLabels, defaultText) {
	        var q = $q.defer();

	        if (!$window.navigator.notification) {
	          var res = $window.prompt(message, defaultText);
	          if (res !== null) {
	            q.resolve({input1: res, buttonIndex: 1});
	          } else {
	            q.resolve({input1: res, buttonIndex: 2});
	          }
	        } else {
	          navigator.notification.prompt(message, function (result) {
	            q.resolve(result);
	          }, title, buttonLabels, defaultText);
	        }
	        return q.promise;
	      },

	      beep: function (times) {
	        return navigator.notification.beep(times);
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git
	// link     :     https://github.com/katzer/cordova-plugin-email-composer

	angular.module('ngCordova.plugins.emailComposer', [])

	  .factory('$cordovaEmailComposer', ['$q', function ($q) {

	    return {
	      isAvailable: function () {
	        var q = $q.defer();

	        cordova.plugins.email.isAvailable(function (isAvailable) {
	          if (isAvailable) {
	            q.resolve();
	          } else {
	            q.reject();
	          }
	        });

	        return q.promise;
	      },

	      open: function (properties) {
	        var q = $q.defer();

	        cordova.plugins.email.open(properties, function () {
	          q.reject(); // user closed email composer
	        });

	        return q.promise;
	      },

	      addAlias: function (app, schema) {
	        cordova.plugins.email.addAlias(app, schema);
	      }
	    };
	  }]);

	// install   :   cordova -d plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"
	// link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

	/* globals facebookConnectPlugin: true */
	angular.module('ngCordova.plugins.facebook', [])

	  .provider('$cordovaFacebook', [function () {

	    /**
	      * Init browser settings for Facebook plugin
	      *
	      * @param {number} id
	      * @param {string} version
	      */
	    this.browserInit = function (id, version) {
	      this.appID = id;
	      this.appVersion = version || 'v2.0';
	      facebookConnectPlugin.browserInit(this.appID, this.appVersion);
	    };

	    this.$get = ['$q', function ($q) {
	      return {
	        login: function (permissions) {
	          var q = $q.defer();
	          facebookConnectPlugin.login(permissions, function (res) {
	            q.resolve(res);
	          }, function (res) {
	            q.reject(res);
	          });

	          return q.promise;
	        },

	        showDialog: function (options) {
	          var q = $q.defer();
	          facebookConnectPlugin.showDialog(options, function (res) {
	            q.resolve(res);
	          }, function (err) {
	            q.reject(err);
	          });
	          return q.promise;
	        },

	        api: function (path, permissions) {
	          var q = $q.defer();
	          facebookConnectPlugin.api(path, permissions, function (res) {
	            q.resolve(res);
	          }, function (err) {
	            q.reject(err);
	          });
	          return q.promise;
	        },

	        getAccessToken: function () {
	          var q = $q.defer();
	          facebookConnectPlugin.getAccessToken(function (res) {
	            q.resolve(res);
	          }, function (err) {
	            q.reject(err);
	          });
	          return q.promise;
	        },

	        getLoginStatus: function () {
	          var q = $q.defer();
	          facebookConnectPlugin.getLoginStatus(function (res) {
	            q.resolve(res);
	          }, function (err) {
	            q.reject(err);
	          });
	          return q.promise;
	        },

	        logout: function () {
	          var q = $q.defer();
	          facebookConnectPlugin.logout(function (res) {
	            q.resolve(res);
	          }, function (err) {
	            q.reject(err);
	          });
	          return q.promise;
	        }
	      };
	    }];
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-facebookads.git
	// link     :     https://github.com/floatinghotpot/cordova-plugin-facebookads

	angular.module('ngCordova.plugins.facebookAds', [])

	  .factory('$cordovaFacebookAds', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.FacebookAds.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.FacebookAds.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.FacebookAds.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.FacebookAds.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.FacebookAds.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.FacebookAds.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.FacebookAds.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.FacebookAds.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-file
	// link      :     https://github.com/apache/cordova-plugin-file

	angular.module('ngCordova.plugins.file', [])

	  .constant('$cordovaFileError', {
	    1: 'NOT_FOUND_ERR',
	    2: 'SECURITY_ERR',
	    3: 'ABORT_ERR',
	    4: 'NOT_READABLE_ERR',
	    5: 'ENCODING_ERR',
	    6: 'NO_MODIFICATION_ALLOWED_ERR',
	    7: 'INVALID_STATE_ERR',
	    8: 'SYNTAX_ERR',
	    9: 'INVALID_MODIFICATION_ERR',
	    10: 'QUOTA_EXCEEDED_ERR',
	    11: 'TYPE_MISMATCH_ERR',
	    12: 'PATH_EXISTS_ERR'
	  })

	  .provider('$cordovaFile', [function () {

	    this.$get = ['$q', '$window', '$cordovaFileError', function ($q, $window, $cordovaFileError) {

	      return {

	        getFreeDiskSpace: function () {
	          var q = $q.defer();
	          cordova.exec(function (result) {
	            q.resolve(result);
	          }, function (error) {
	            q.reject(error);
	          }, 'File', 'getFreeDiskSpace', []);
	          return q.promise;
	        },

	        checkDir: function (path, dir) {
	          var q = $q.defer();

	          if ((/^\//.test(dir))) {
	            q.reject('directory cannot start with \/');
	          }

	          try {
	            var directory = path + dir;
	            $window.resolveLocalFileSystemURL(directory, function (fileSystem) {
	              if (fileSystem.isDirectory === true) {
	                q.resolve(fileSystem);
	              } else {
	                q.reject({code: 13, message: 'input is not a directory'});
	              }
	            }, function (error) {
	              error.message = $cordovaFileError[error.code];
	              q.reject(error);
	            });
	          } catch (err) {
	            err.message = $cordovaFileError[err.code];
	            q.reject(err);
	          }

	          return q.promise;
	        },

	        checkFile: function (path, file) {
	          var q = $q.defer();

	          if ((/^\//.test(file))) {
	            q.reject('directory cannot start with \/');
	          }

	          try {
	            var directory = path + file;
	            $window.resolveLocalFileSystemURL(directory, function (fileSystem) {
	              if (fileSystem.isFile === true) {
	                q.resolve(fileSystem);
	              } else {
	                q.reject({code: 13, message: 'input is not a file'});
	              }
	            }, function (error) {
	              error.message = $cordovaFileError[error.code];
	              q.reject(error);
	            });
	          } catch (err) {
	            err.message = $cordovaFileError[err.code];
	            q.reject(err);
	          }

	          return q.promise;
	        },

	        createDir: function (path, dirName, replaceBool) {
	          var q = $q.defer();

	          if ((/^\//.test(dirName))) {
	            q.reject('directory cannot start with \/');
	          }

	          replaceBool = replaceBool ? false : true;

	          var options = {
	            create: true,
	            exclusive: replaceBool
	          };

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, options, function (result) {
	                q.resolve(result);
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        createFile: function (path, fileName, replaceBool) {
	          var q = $q.defer();

	          if ((/^\//.test(fileName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          replaceBool = replaceBool ? false : true;

	          var options = {
	            create: true,
	            exclusive: replaceBool
	          };

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, options, function (result) {
	                q.resolve(result);
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        removeDir: function (path, dirName) {
	          var q = $q.defer();

	          if ((/^\//.test(dirName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
	                dirEntry.remove(function () {
	                  q.resolve({success: true, fileRemoved: dirEntry});
	                }, function (error) {
	                  error.message = $cordovaFileError[error.code];
	                  q.reject(error);
	                });
	              }, function (err) {
	                err.message = $cordovaFileError[err.code];
	                q.reject(err);
	              });
	            }, function (er) {
	              er.message = $cordovaFileError[er.code];
	              q.reject(er);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        removeFile: function (path, fileName) {
	          var q = $q.defer();

	          if ((/^\//.test(fileName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
	                fileEntry.remove(function () {
	                  q.resolve({success: true, fileRemoved: fileEntry});
	                }, function (error) {
	                  error.message = $cordovaFileError[error.code];
	                  q.reject(error);
	                });
	              }, function (err) {
	                err.message = $cordovaFileError[err.code];
	                q.reject(err);
	              });
	            }, function (er) {
	              er.message = $cordovaFileError[er.code];
	              q.reject(er);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        removeRecursively: function (path, dirName) {
	          var q = $q.defer();

	          if ((/^\//.test(dirName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
	                dirEntry.removeRecursively(function () {
	                  q.resolve({success: true, fileRemoved: dirEntry});
	                }, function (error) {
	                  error.message = $cordovaFileError[error.code];
	                  q.reject(error);
	                });
	              }, function (err) {
	                err.message = $cordovaFileError[err.code];
	                q.reject(err);
	              });
	            }, function (er) {
	              er.message = $cordovaFileError[er.code];
	              q.reject(er);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        writeFile: function (path, fileName, text, replaceBool) {
	          var q = $q.defer();

	          if ((/^\//.test(fileName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          replaceBool = replaceBool ? false : true;

	          var options = {
	            create: true,
	            exclusive: replaceBool
	          };

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, options, function (fileEntry) {
	                fileEntry.createWriter(function (writer) {
	                  if (options.append === true) {
	                    writer.seek(writer.length);
	                  }

	                  if (options.truncate) {
	                    writer.truncate(options.truncate);
	                  }

	                  writer.onwriteend = function (evt) {
	                    if (this.error) {
	                      q.reject(this.error);
	                    } else {
	                      q.resolve(evt);
	                    }
	                  };

	                  writer.write(text);

	                  q.promise.abort = function () {
	                    writer.abort();
	                  };
	                });
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        writeExistingFile: function (path, fileName, text) {
	          var q = $q.defer();

	          if ((/^\//.test(fileName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
	                fileEntry.createWriter(function (writer) {
	                  writer.seek(writer.length);

	                  writer.onwriteend = function (evt) {
	                    if (this.error) {
	                      q.reject(this.error);
	                    } else {
	                      q.resolve(evt);
	                    }
	                  };

	                  writer.write(text);

	                  q.promise.abort = function () {
	                    writer.abort();
	                  };
	                });
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        readAsText: function (path, file) {
	          var q = $q.defer();

	          if ((/^\//.test(file))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, {create: false}, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();

	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({code: null, message: 'READER_ONLOADEND_ERR'});
	                    }
	                  };

	                  reader.readAsText(fileData);
	                });
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        readAsDataURL: function (path, file) {
	          var q = $q.defer();

	          if ((/^\//.test(file))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, {create: false}, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();
	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({code: null, message: 'READER_ONLOADEND_ERR'});
	                    }
	                  };
	                  reader.readAsDataURL(fileData);
	                });
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        readAsBinaryString: function (path, file) {
	          var q = $q.defer();

	          if ((/^\//.test(file))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, {create: false}, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();
	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({code: null, message: 'READER_ONLOADEND_ERR'});
	                    }
	                  };
	                  reader.readAsBinaryString(fileData);
	                });
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        readAsArrayBuffer: function (path, file) {
	          var q = $q.defer();

	          if ((/^\//.test(file))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, {create: false}, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();
	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({code: null, message: 'READER_ONLOADEND_ERR'});
	                    }
	                  };
	                  reader.readAsArrayBuffer(fileData);
	                });
	              }, function (error) {
	                error.message = $cordovaFileError[error.code];
	                q.reject(error);
	              });
	            }, function (err) {
	              err.message = $cordovaFileError[err.code];
	              q.reject(err);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }

	          return q.promise;
	        },

	        moveFile: function (path, fileName, newPath, newFileName) {
	          var q = $q.defer();

	          newFileName = newFileName || fileName;

	          if ((/^\//.test(fileName)) || (/^\//.test(newFileName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
	                $window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
	                  fileEntry.moveTo(newFileEntry, newFileName, function (result) {
	                    q.resolve(result);
	                  }, function (error) {
	                    q.reject(error);
	                  });
	                }, function (err) {
	                  q.reject(err);
	                });
	              }, function (err) {
	                q.reject(err);
	              });
	            }, function (er) {
	              q.reject(er);
	            });
	          } catch (e) {
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        moveDir: function (path, dirName, newPath, newDirName) {
	          var q = $q.defer();

	          newDirName = newDirName || dirName;

	          if (/^\//.test(dirName) || (/^\//.test(newDirName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
	                $window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
	                  dirEntry.moveTo(newDirEntry, newDirName, function (result) {
	                    q.resolve(result);
	                  }, function (error) {
	                    q.reject(error);
	                  });
	                }, function (erro) {
	                  q.reject(erro);
	                });
	              }, function (err) {
	                q.reject(err);
	              });
	            }, function (er) {
	              q.reject(er);
	            });
	          } catch (e) {
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        copyDir: function (path, dirName, newPath, newDirName) {
	          var q = $q.defer();

	          newDirName = newDirName || dirName;

	          if (/^\//.test(dirName) || (/^\//.test(newDirName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, {create: false, exclusive: false}, function (dirEntry) {

	                $window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
	                  dirEntry.copyTo(newDirEntry, newDirName, function (result) {
	                    q.resolve(result);
	                  }, function (error) {
	                    error.message = $cordovaFileError[error.code];
	                    q.reject(error);
	                  });
	                }, function (erro) {
	                  erro.message = $cordovaFileError[erro.code];
	                  q.reject(erro);
	                });
	              }, function (err) {
	                err.message = $cordovaFileError[err.code];
	                q.reject(err);
	              });
	            }, function (er) {
	              er.message = $cordovaFileError[er.code];
	              q.reject(er);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }
	          return q.promise;
	        },

	        copyFile: function (path, fileName, newPath, newFileName) {
	          var q = $q.defer();

	          newFileName = newFileName || fileName;

	          if ((/^\//.test(fileName))) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, {create: false, exclusive: false}, function (fileEntry) {

	                $window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
	                  fileEntry.copyTo(newFileEntry, newFileName, function (result) {
	                    q.resolve(result);
	                  }, function (error) {
	                    error.message = $cordovaFileError[error.code];
	                    q.reject(error);
	                  });
	                }, function (erro) {
	                  erro.message = $cordovaFileError[erro.code];
	                  q.reject(erro);
	                });
	              }, function (err) {
	                err.message = $cordovaFileError[err.code];
	                q.reject(err);
	              });
	            }, function (er) {
	              er.message = $cordovaFileError[er.code];
	              q.reject(er);
	            });
	          } catch (e) {
	            e.message = $cordovaFileError[e.code];
	            q.reject(e);
	          }
	          return q.promise;
	        }

	        /*
	         listFiles: function (path, dir) {

	         },

	         listDir: function (path, dirName) {
	         var q = $q.defer();

	         try {
	         $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	         fileSystem.getDirectory(dirName, options, function (parent) {
	         var reader = parent.createReader();
	         reader.readEntries(function (entries) {
	         q.resolve(entries);
	         }, function () {
	         q.reject('DIR_READ_ERROR : ' + path + dirName);
	         });
	         }, function (error) {
	         error.message = $cordovaFileError[error.code];
	         q.reject(error);
	         });
	         }, function (err) {
	         err.message = $cordovaFileError[err.code];
	         q.reject(err);
	         });
	         } catch (e) {
	         e.message = $cordovaFileError[e.code];
	         q.reject(e);
	         }

	         return q.promise;
	         },

	         readFileMetadata: function (filePath) {
	         //return getFile(filePath, {create: false});
	         }
	         */
	      };

	    }];
	  }]);

	// install   :      cordova plugin add https://github.com/pwlin/cordova-plugin-file-opener2.git
	// link      :      https://github.com/pwlin/cordova-plugin-file-opener2

	angular.module('ngCordova.plugins.fileOpener2', [])

	  .factory('$cordovaFileOpener2', ['$q', function ($q) {

	    return {
	      open: function (file, type) {
	        var q = $q.defer();
	        cordova.plugins.fileOpener2.open(file, type, {
	          error: function (e) {
	            q.reject(e);
	          }, success: function () {
	            q.resolve();
	          }
	        });
	        return q.promise;
	      },

	      uninstall: function (pack) {
	        var q = $q.defer();
	        cordova.plugins.fileOpener2.uninstall(pack, {
	          error: function (e) {
	            q.reject(e);
	          }, success: function () {
	            q.resolve();
	          }
	        });
	        return q.promise;
	      },

	      appIsInstalled: function (pack) {
	        var q = $q.defer();
	        cordova.plugins.fileOpener2.appIsInstalled(pack, {
	          success: function (res) {
	            q.resolve(res);
	          }
	        });
	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-file-transfer
	// link      :     https://github.com/apache/cordova-plugin-file-transfer

	/* globals FileTransfer: true */
	angular.module('ngCordova.plugins.fileTransfer', [])

	  .factory('$cordovaFileTransfer', ['$q', '$timeout', function ($q, $timeout) {
	    return {
	      download: function (source, filePath, options, trustAllHosts) {
	        var q = $q.defer();
	        var ft = new FileTransfer();
	        var uri = (options && options.encodeURI === false) ? source : encodeURI(source);

	        if (options && options.timeout !== undefined && options.timeout !== null) {
	          $timeout(function () {
	            ft.abort();
	          }, options.timeout);
	          options.timeout = null;
	        }

	        ft.onprogress = function (progress) {
	          q.notify(progress);
	        };

	        q.promise.abort = function () {
	          ft.abort();
	        };

	        ft.download(uri, filePath, q.resolve, q.reject, trustAllHosts, options);
	        return q.promise;
	      },

	      upload: function (server, filePath, options, trustAllHosts) {
	        var q = $q.defer();
	        var ft = new FileTransfer();
	        var uri = (options && options.encodeURI === false) ? server : encodeURI(server);

	        if (options && options.timeout !== undefined && options.timeout !== null) {
	          $timeout(function () {
	            ft.abort();
	          }, options.timeout);
	          options.timeout = null;
	        }

	        ft.onprogress = function (progress) {
	          q.notify(progress);
	        };

	        q.promise.abort = function () {
	          ft.abort();
	        };

	        ft.upload(filePath, uri, q.resolve, q.reject, options, trustAllHosts);
	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
	// link      :     https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin

	angular.module('ngCordova.plugins.flashlight', [])

	  .factory('$cordovaFlashlight', ['$q', '$window', function ($q, $window) {

	    return {
	      available: function () {
	        var q = $q.defer();
	        $window.plugins.flashlight.available(function (isAvailable) {
	          q.resolve(isAvailable);
	        });
	        return q.promise;
	      },

	      switchOn: function () {
	        var q = $q.defer();
	        $window.plugins.flashlight.switchOn(function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      switchOff: function () {
	        var q = $q.defer();
	        $window.plugins.flashlight.switchOff(function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      toggle: function () {
	        var q = $q.defer();
	        $window.plugins.flashlight.toggle(function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-flurry.git
	// link     :     https://github.com/floatinghotpot/cordova-plugin-flurry

	angular.module('ngCordova.plugins.flurryAds', [])
	  .factory('$cordovaFlurryAds', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.FlurryAds.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.FlurryAds.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.FlurryAds.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.FlurryAds.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.FlurryAds.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.FlurryAds.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.FlurryAds.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.FlurryAds.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add https://github.com/phonegap-build/GAPlugin.git
	// link      :     https://github.com/phonegap-build/GAPlugin

	angular.module('ngCordova.plugins.ga', [])

	  .factory('$cordovaGA', ['$q', '$window', function ($q, $window) {

	    return {
	      init: function (id, mingap) {
	        var q = $q.defer();
	        mingap = (mingap >= 0) ? mingap : 10;
	        $window.plugins.gaPlugin.init(function (result) {
	            q.resolve(result);
	          },
	          function (error) {
	            q.reject(error);
	          },
	          id, mingap);
	        return q.promise;
	      },

	      trackEvent: function (success, fail, category, eventAction, eventLabel, eventValue) {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.trackEvent(function (result) {
	            q.resolve(result);
	          },
	          function (error) {
	            q.reject(error);
	          },
	          category, eventAction, eventLabel, eventValue);
	        return q.promise;
	      },

	      trackPage: function (success, fail, pageURL) {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.trackPage(function (result) {
	            q.resolve(result);
	          },
	          function (error) {
	            q.reject(error);
	          },
	          pageURL);
	        return q.promise;
	      },

	      setVariable: function (success, fail, index, value) {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.setVariable(function (result) {
	            q.resolve(result);
	          },
	          function (error) {
	            q.reject(error);
	          },
	          index, value);
	        return q.promise;
	      },

	      exit: function () {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.exit(function (result) {
	            q.resolve(result);
	          },
	          function (error) {
	            q.reject(error);
	          });
	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-geolocation
	// link      :     https://github.com/apache/cordova-plugin-geolocation

	angular.module('ngCordova.plugins.geolocation', [])

	  .factory('$cordovaGeolocation', ['$q', function ($q) {

	    return {
	      getCurrentPosition: function (options) {
	        var q = $q.defer();

	        navigator.geolocation.getCurrentPosition(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        return q.promise;
	      },

	      watchPosition: function (options) {
	        var q = $q.defer();

	        var watchID = navigator.geolocation.watchPosition(function (result) {
	          q.notify(result);
	        }, function (err) {
	          q.reject(err);
	        }, options);

	        q.promise.cancel = function () {
	          navigator.geolocation.clearWatch(watchID);
	        };

	        q.promise.clearWatch = function (id) {
	          navigator.geolocation.clearWatch(id || watchID);
	        };

	        q.promise.watchID = watchID;

	        return q.promise;
	      },

	      clearWatch: function (watchID) {
	        return navigator.geolocation.clearWatch(watchID);
	      }
	    };
	  }]);

	// install   :      cordova plugin add cordova-plugin-globalization
	// link      :      https://github.com/apache/cordova-plugin-globalization

	angular.module('ngCordova.plugins.globalization', [])

	  .factory('$cordovaGlobalization', ['$q', function ($q) {

	    return {
	      getPreferredLanguage: function () {
	        var q = $q.defer();

	        navigator.globalization.getPreferredLanguage(function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });
	        return q.promise;
	      },

	      getLocaleName: function () {
	        var q = $q.defer();

	        navigator.globalization.getLocaleName(function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });
	        return q.promise;
	      },

	      getFirstDayOfWeek: function () {
	        var q = $q.defer();

	        navigator.globalization.getFirstDayOfWeek(function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });
	        return q.promise;
	      },

	      // "date" parameter must be a JavaScript Date Object.
	      dateToString: function (date, options) {
	        var q = $q.defer();

	        navigator.globalization.dateToString(
	          date,
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      stringToDate: function (dateString, options) {
	        var q = $q.defer();

	        navigator.globalization.stringToDate(
	          dateString,
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      getDatePattern: function (options) {
	        var q = $q.defer();

	        navigator.globalization.getDatePattern(
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      getDateNames: function (options) {
	        var q = $q.defer();

	        navigator.globalization.getDateNames(
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      // "date" parameter must be a JavaScript Date Object.
	      isDayLightSavingsTime: function (date) {
	        var q = $q.defer();

	        navigator.globalization.isDayLightSavingsTime(
	          date,
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });
	        return q.promise;
	      },

	      numberToString: function (number, options) {
	        var q = $q.defer();

	        navigator.globalization.numberToString(
	          number,
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      stringToNumber: function (numberString, options) {
	        var q = $q.defer();

	        navigator.globalization.stringToNumber(
	          numberString,
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      getNumberPattern: function (options) {
	        var q = $q.defer();

	        navigator.globalization.getNumberPattern(
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          },
	          options);
	        return q.promise;
	      },

	      getCurrencyPattern: function (currencyCode) {
	        var q = $q.defer();

	        navigator.globalization.getCurrencyPattern(
	          currencyCode,
	          function (result) {
	            q.resolve(result);
	          },
	          function (err) {
	            q.reject(err);
	          });
	        return q.promise;
	      }

	    };
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-admob-pro.git
	// link     :     https://github.com/floatinghotpot/cordova-admob-pro

	angular.module('ngCordova.plugins.googleAds', [])

	  .factory('$cordovaGoogleAds', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.AdMob.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.AdMob.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.AdMob.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.AdMob.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.AdMob.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.AdMob.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.AdMob.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.AdMob.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
	// link      :     https://github.com/danwilson/google-analytics-plugin

	angular.module('ngCordova.plugins.googleAnalytics', [])

	  .factory('$cordovaGoogleAnalytics', ['$q', '$window', function ($q, $window) {

	    return {
	      startTrackerWithId: function (id) {
	        var d = $q.defer();

	        $window.analytics.startTrackerWithId(id, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      setUserId: function (id) {
	        var d = $q.defer();

	        $window.analytics.setUserId(id, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      debugMode: function () {
	        var d = $q.defer();

	        $window.analytics.debugMode(function (response) {
	          d.resolve(response);
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      trackView: function (screenName) {
	        var d = $q.defer();

	        $window.analytics.trackView(screenName, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      addCustomDimension: function (key, value) {
	        var d = $q.defer();

	        $window.analytics.addCustomDimension(key, value, function () {
	          d.resolve();
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      trackEvent: function (category, action, label, value) {
	        var d = $q.defer();

	        $window.analytics.trackEvent(category, action, label, value, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      trackException: function (description, fatal) {
	        var d = $q.defer();

	        $window.analytics.trackException(description, fatal, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      trackTiming: function (category, milliseconds, variable, label) {
	        var d = $q.defer();

	        $window.analytics.trackTiming(category, milliseconds, variable, label, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      addTransaction: function (transactionId, affiliation, revenue, tax, shipping, currencyCode) {
	        var d = $q.defer();

	        $window.analytics.addTransaction(transactionId, affiliation, revenue, tax, shipping, currencyCode, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      addTransactionItem: function (transactionId, name, sku, category, price, quantity, currencyCode) {
	        var d = $q.defer();

	        $window.analytics.addTransactionItem(transactionId, name, sku, category, price, quantity, currencyCode, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install   :
	// link      :

	// Google Maps needs ALOT of work!
	// Not for production use

	angular.module('ngCordova.plugins.googleMap', [])

	  .factory('$cordovaGoogleMap', ['$q', '$window', function ($q, $window) {

	    var map = null;

	    return {
	      getMap: function (options) {
	        var q = $q.defer();

	        if (!$window.plugin.google.maps) {
	          q.reject(null);
	        } else {
	          var div = document.getElementById('map_canvas');
	          map = $window.plugin.google.maps.Map.getMap(options);
	          map.setDiv(div);
	          q.resolve(map);
	        }
	        return q.promise;
	      },

	      isMapLoaded: function () { // check if an instance of the map exists
	        return !!map;
	      },
	      addMarker: function (markerOptions) { // add a marker to the map with given markerOptions
	        var q = $q.defer();
	        map.addMarker(markerOptions, function (marker) {
	          q.resolve(marker);
	        });

	        return q.promise;
	      },
	      getMapTypeIds: function () {
	        return $window.plugin.google.maps.mapTypeId;
	      },
	      setVisible: function (isVisible) {
	        var q = $q.defer();
	        map.setVisible(isVisible);
	        return q.promise;
	      },
	      // I don't know how to deallocate te map and the google map plugin.
	      cleanup: function () {
	        map = null;
	        // delete map;
	      }
	    };
	  }]);

	// install   :   cordova plugin add https://github.com/ptgamr/cordova-google-play-game.git --variable APP_ID=123456789
	// link      :   https://github.com/ptgamr/cordova-google-play-game

	/* globals googleplaygame: true */
	angular.module('ngCordova.plugins.googlePlayGame', [])

	  .factory('$cordovaGooglePlayGame', ['$q', function ($q) {

	    return {
	      auth: function () {
	        var q = $q.defer();

	        googleplaygame.auth(function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      signout: function () {
	        var q = $q.defer();

	        googleplaygame.signout(function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      isSignedIn: function () {
	        var q = $q.defer();

	        googleplaygame.isSignedIn(function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      showPlayer: function () {
	        var q = $q.defer();

	        googleplaygame.showPlayer(function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      submitScore: function (data) {
	        var q = $q.defer();

	        googleplaygame.submitScore(data, function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      showAllLeaderboards: function () {
	        var q = $q.defer();

	        googleplaygame.showAllLeaderboards(function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      showLeaderboard: function (data) {
	        var q = $q.defer();

	        googleplaygame.showLeaderboard(data, function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      unlockAchievement: function (data) {
	        var q = $q.defer();

	        googleplaygame.unlockAchievement(data, function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      incrementAchievement: function (data) {
	        var q = $q.defer();

	        googleplaygame.incrementAchievement(data, function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      },
	      showAchievements: function () {
	        var q = $q.defer();

	        googleplaygame.showAchievements(function (success) {
	          return q.resolve(success);
	        }, function (err) {
	          return q.reject(err);
	        });

	        return q.promise;
	      }
	    };

	  }]);

	// install  :     cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-googleplus.git
	// link     :     https://github.com/EddyVerbruggen/cordova-plugin-googleplus

	angular.module('ngCordova.plugins.googlePlus', [])

	  .factory('$cordovaGooglePlus', ['$q', '$window', function ($q, $window) {

	    return {
	      login: function (iosKey) {
	        var q = $q.defer();

	        if (iosKey === undefined) {
	          iosKey = {};
	        }
	        $window.plugins.googleplus.login({'iOSApiKey': iosKey}, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });

	        return q.promise;
	      },

	      silentLogin: function (iosKey) {
	        var q = $q.defer();

	        if (iosKey === undefined) {
	          iosKey = {};
	        }
	        $window.plugins.googleplus.trySilentLogin({'iOSApiKey': iosKey}, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });

	        return q.promise;
	      },

	      logout: function () {
	        var q = $q.defer();
	        $window.plugins.googleplus.logout(function (response) {
	          q.resolve(response);
	        });
	      },

	      disconnect: function () {
	        var q = $q.defer();
	        $window.plugins.googleplus.disconnect(function (response) {
	          q.resolve(response);
	        });
	      },

	      isAvailable: function () {
	        var q = $q.defer();
	        $window.plugins.googleplus.isAvailable(function (available) {
	          if (available) {
	            q.resolve(available);
	          } else {
	            q.reject(available);
	          }
	        });
	        
	        return q.promise;
	      }
	    };

	  }]);

	// install   :      cordova plugin add https://github.com/Telerik-Verified-Plugins/HealthKit.git
	// link      :      https://github.com/Telerik-Verified-Plugins/HealthKit

	angular.module('ngCordova.plugins.healthKit', [])

	  .factory('$cordovaHealthKit', ['$q', '$window', function ($q, $window) {

	    return {
	      isAvailable: function () {
	        var q = $q.defer();

	        $window.plugins.healthkit.available(function (success) {
	          q.resolve(success);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      /**
	       * Check whether or not the user granted your app access to a specific HealthKit type.
	       * Reference for possible types:
	       * https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/
	       */
	      checkAuthStatus: function (type) {
	        var q = $q.defer();

	        type = type || 'HKQuantityTypeIdentifierHeight';

	        $window.plugins.healthkit.checkAuthStatus({
	          'type': type
	        }, function (success) {
	          q.resolve(success);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      /**
	       * Request authorization to access HealthKit data. See the full HealthKit constants
	       * reference for possible read and write types:
	       * https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Constants/
	       */
	      requestAuthorization: function (readTypes, writeTypes) {
	        var q = $q.defer();

	        readTypes = readTypes || [
	          'HKCharacteristicTypeIdentifierDateOfBirth', 'HKQuantityTypeIdentifierActiveEnergyBurned', 'HKQuantityTypeIdentifierHeight'
	        ];
	        writeTypes = writeTypes || [
	          'HKQuantityTypeIdentifierActiveEnergyBurned', 'HKQuantityTypeIdentifierHeight', 'HKQuantityTypeIdentifierDistanceCycling'
	        ];

	        $window.plugins.healthkit.requestAuthorization({
	          'readTypes': readTypes,
	          'writeTypes': writeTypes
	        }, function (success) {
	          q.resolve(success);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      readDateOfBirth: function () {
	        var q = $q.defer();
	        $window.plugins.healthkit.readDateOfBirth(
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );

	        return q.promise;
	      },

	      readGender: function () {
	        var q = $q.defer();
	        $window.plugins.healthkit.readGender(
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );

	        return q.promise;
	      },

	      saveWeight: function (value, units, date) {
	        var q = $q.defer();
	        $window.plugins.healthkit.saveWeight({
	            'unit': units || 'lb',
	            'amount': value,
	            'date': date || new Date()
	          },
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );
	        return q.promise;
	      },

	      readWeight: function (units) {
	        var q = $q.defer();
	        $window.plugins.healthkit.readWeight({
	            'unit': units || 'lb'
	          },
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );

	        return q.promise;
	      },
	      saveHeight: function (value, units, date) {
	        var q = $q.defer();
	        $window.plugins.healthkit.saveHeight({
	            'unit': units || 'in',
	            'amount': value,
	            'date': date || new Date()
	          },
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );
	        return q.promise;
	      },
	      readHeight: function (units) {
	        var q = $q.defer();
	        $window.plugins.healthkit.readHeight({
	            'unit': units || 'in'
	          },
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );

	        return q.promise;
	      },

	      findWorkouts: function () {
	        var q = $q.defer();
	        $window.plugins.healthkit.findWorkouts({},
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );
	        return q.promise;
	      },

	      /**
	       * Save a workout.
	       *
	       * Workout param should be of the format:
	       {
	         'activityType': 'HKWorkoutActivityTypeCycling', // HKWorkoutActivityType constant (https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HKWorkout_Class/#//apple_ref/c/tdef/HKWorkoutActivityType)
	         'quantityType': 'HKQuantityTypeIdentifierDistanceCycling',
	         'startDate': new Date(), // mandatory
	         'endDate': null, // optional, use either this or duration
	         'duration': 3600, // in seconds, optional, use either this or endDate
	         'energy': 300, //
	         'energyUnit': 'kcal', // J|cal|kcal
	         'distance': 11, // optional
	         'distanceUnit': 'km' // probably useful with the former param
	         // 'extraData': "", // Not sure how necessary this is
	       },
	       */
	      saveWorkout: function (workout) {
	        var q = $q.defer();
	        $window.plugins.healthkit.saveWorkout(workout,
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );
	        return q.promise;
	      },

	      /**
	       * Sample any kind of health data through a given date range.
	       * sampleQuery of the format:
	       {
										'startDate': yesterday, // mandatory
										'endDate': tomorrow, // mandatory
										'sampleType': 'HKQuantityTypeIdentifierHeight',
										'unit' : 'cm'
								},
	       */
	      querySampleType: function (sampleQuery) {
	        var q = $q.defer();
	        $window.plugins.healthkit.querySampleType(sampleQuery,
	          function (success) {
	            q.resolve(success);
	          },
	          function (err) {
	            q.resolve(err);
	          }
	        );
	        return q.promise;
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-httpd.git
	// link     :     https://github.com/floatinghotpot/cordova-httpd

	angular.module('ngCordova.plugins.httpd', [])

	  .factory('$cordovaHttpd', ['$q', function ($q) {

	    return {
	      startServer: function (options) {
	        var d = $q.defer();

	        cordova.plugins.CorHttpd.startServer(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      stopServer: function () {
	        var d = $q.defer();

	        cordova.plugins.CorHttpd.stopServer(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      getURL: function () {
	        var d = $q.defer();

	        cordova.plugins.CorHttpd.getURL(function (url) {
	          d.resolve(url);
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      getLocalPath: function () {
	        var d = $q.defer();

	        cordova.plugins.CorHttpd.getLocalPath(function (path) {
	          d.resolve(path);
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }

	    };
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-iad.git
	// link     :     https://github.com/floatinghotpot/cordova-plugin-iad

	angular.module('ngCordova.plugins.iAd', [])
	  .factory('$cordovaiAd', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.iAd.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.iAd.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.iAd.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.iAd.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.iAd.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.iAd.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.iAd.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.iAd.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/wymsee/cordova-imagePicker.git
	// link     :     https://github.com/wymsee/cordova-imagePicker

	angular.module('ngCordova.plugins.imagePicker', [])

	  .factory('$cordovaImagePicker', ['$q', '$window', function ($q, $window) {

	    return {
	      getPictures: function (options) {
	        var q = $q.defer();

	        $window.imagePicker.getPictures(function (results) {
	          q.resolve(results);
	        }, function (error) {
	          q.reject(error);
	        }, options);

	        return q.promise;
	      }
	    };
	  }]);

	// install   :     cordova plugin add cordova-plugin-inappbrowser
	// link      :     https://github.com/apache/cordova-plugin-inappbrowser

	angular.module('ngCordova.plugins.inAppBrowser', [])

	  .provider('$cordovaInAppBrowser', [function () {

	    var ref;
	    var defaultOptions = this.defaultOptions = {};

	    this.setDefaultOptions = function (config) {
	      defaultOptions = angular.extend(defaultOptions, config);
	    };

	    this.$get = ['$rootScope', '$q', '$window', '$timeout', function ($rootScope, $q, $window, $timeout) {
	      return {
	        open: function (url, target, requestOptions) {
	          var q = $q.defer();

	          if (requestOptions && !angular.isObject(requestOptions)) {
	            q.reject('options must be an object');
	            return q.promise;
	          }

	          var options = angular.extend({}, defaultOptions, requestOptions);

	          var opt = [];
	          angular.forEach(options, function (value, key) {
	            opt.push(key + '=' + value);
	          });
	          var optionsString = opt.join();

	          ref = $window.open(url, target, optionsString);

	          ref.addEventListener('loadstart', function (event) {
	            $timeout(function () {
	              $rootScope.$broadcast('$cordovaInAppBrowser:loadstart', event);
	            });
	          }, false);

	          ref.addEventListener('loadstop', function (event) {
	            q.resolve(event);
	            $timeout(function () {
	              $rootScope.$broadcast('$cordovaInAppBrowser:loadstop', event);
	            });
	          }, false);

	          ref.addEventListener('loaderror', function (event) {
	            q.reject(event);
	            $timeout(function () {
	              $rootScope.$broadcast('$cordovaInAppBrowser:loaderror', event);
	            });
	          }, false);

	          ref.addEventListener('exit', function (event) {
	            $timeout(function () {
	              $rootScope.$broadcast('$cordovaInAppBrowser:exit', event);
	            });
	          }, false);

	          return q.promise;
	        },

	        close: function () {
	          ref.close();
	          ref = null;
	        },

	        show: function () {
	          ref.show();
	        },

	        executeScript: function (details) {
	          var q = $q.defer();

	          ref.executeScript(details, function (result) {
	            q.resolve(result);
	          });

	          return q.promise;
	        },

	        insertCSS: function (details) {
	          var q = $q.defer();

	          ref.insertCSS(details, function (result) {
	            q.resolve(result);
	          });

	          return q.promise;
	        }
	      };
	    }];
	  }]);

	// install  :     cordova plugin add https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git
	// link     :     https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin
	angular.module('ngCordova.plugins.insomnia', [])

	  .factory('$cordovaInsomnia', ['$window', function ($window) {

	    return {
	      keepAwake: function () {
	        return $window.plugins.insomnia.keepAwake();
	      },
	      allowSleepAgain: function () {
	        return $window.plugins.insomnia.allowSleepAgain();
	      }
	    };

	  }]);

	// install   :   cordova plugins add https://github.com/vstirbu/InstagramPlugin.git
	// link      :   https://github.com/vstirbu/InstagramPlugin

	/* globals Instagram: true */
	angular.module('ngCordova.plugins.instagram', [])

	.factory('$cordovaInstagram', ['$q', function ($q) {

	  return {
	    share: function (options) {
	      var q = $q.defer();

	      if (!window.Instagram) {
	        console.error('Tried to call Instagram.share but the Instagram plugin isn\'t installed!');
	        q.resolve(null);
	        return q.promise;
	      }

	      Instagram.share(options.image, options.caption, function (err) {
	        if(err) {
	          q.reject(err);
	        } else {
	          q.resolve(true);
	        }
	      });
	      return q.promise;
	    },
	    isInstalled: function () {
	      var q = $q.defer();

	      if (!window.Instagram) {
	        console.error('Tried to call Instagram.isInstalled but the Instagram plugin isn\'t installed!');
	        q.resolve(null);
	        return q.promise;
	      }

	      Instagram.isInstalled(function (err, installed) {
	        if (err) {
	          q.reject(err);
	        } else {
	          q.resolve(installed);
	        }
	      });
	      return q.promise;
	    }
	  };
	}]);

	// install   :      cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
	// link      :      https://github.com/driftyco/ionic-plugins-keyboard

	angular.module('ngCordova.plugins.keyboard', [])

	  .factory('$cordovaKeyboard', ['$rootScope', function ($rootScope) {

	    var keyboardShowEvent = function () {
	      $rootScope.$evalAsync(function () {
	        $rootScope.$broadcast('$cordovaKeyboard:show');
	      });
	    };

	    var keyboardHideEvent = function () {
	      $rootScope.$evalAsync(function () {
	        $rootScope.$broadcast('$cordovaKeyboard:hide');
	      });
	    };

	    document.addEventListener('deviceready', function () {
	      if (cordova.plugins.Keyboard) {
	        window.addEventListener('native.keyboardshow', keyboardShowEvent, false);
	        window.addEventListener('native.keyboardhide', keyboardHideEvent, false);
	      }
	    });

	    return {
	      hideAccessoryBar: function (bool) {
	        return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(bool);
	      },

	      close: function () {
	        return cordova.plugins.Keyboard.close();
	      },

	      show: function () {
	        return cordova.plugins.Keyboard.show();
	      },

	      disableScroll: function (bool) {
	        return cordova.plugins.Keyboard.disableScroll(bool);
	      },

	      isVisible: function () {
	        return cordova.plugins.Keyboard.isVisible;
	      },

	      clearShowWatch: function () {
	        document.removeEventListener('native.keyboardshow', keyboardShowEvent);
	        $rootScope.$$listeners['$cordovaKeyboard:show'] = [];
	      },

	      clearHideWatch: function () {
	        document.removeEventListener('native.keyboardhide', keyboardHideEvent);
	        $rootScope.$$listeners['$cordovaKeyboard:hide'] = [];
	      }
	    };
	  }]);

	// install   :      cordova plugin add https://github.com/shazron/KeychainPlugin.git
	// link      :      https://github.com/shazron/KeychainPlugin

	/* globals Keychain: true */
	angular.module('ngCordova.plugins.keychain', [])

	  .factory('$cordovaKeychain', ['$q', function ($q) {

	    return {
	      getForKey: function (key, serviceName) {
	        var defer = $q.defer(),
	            kc = new Keychain();

	        kc.getForKey(defer.resolve, defer.reject, key, serviceName);

	        return defer.promise;
	      },

	      setForKey: function (key, serviceName, value) {
	        var defer = $q.defer(),
	            kc = new Keychain();

	        kc.setForKey(defer.resolve, defer.reject, key, serviceName, value);

	        return defer.promise;
	      },

	      removeForKey: function (key, serviceName) {
	        var defer = $q.defer(),
	            kc = new Keychain();

	        kc.removeForKey(defer.resolve, defer.reject, key, serviceName);

	        return defer.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
	// link      :      https://github.com/dpa99c/phonegap-launch-navigator

	/* globals launchnavigator: true */
	angular.module('ngCordova.plugins.launchNavigator', [])

	  .factory('$cordovaLaunchNavigator', ['$q', function ($q) {

	    return {
	      navigate: function (destination, start, options) {
	        var q = $q.defer();
	        launchnavigator.navigate(
	          destination,
	          start,
	          function (){
	            q.resolve();
	          },
	          function (error){
	            q.reject(error);
	          },
			  options);
	        return q.promise;
	      }
	    };

	  }]);

	// install   :  cordova plugin add https://github.com/katzer/cordova-plugin-local-notifications.git
	// link      :  https://github.com/katzer/cordova-plugin-local-notifications

	angular.module('ngCordova.plugins.localNotification', [])

	  .factory('$cordovaLocalNotification', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {
	    document.addEventListener('deviceready', function () {
	      if ($window.cordova &&
	        $window.cordova.plugins &&
	        $window.cordova.plugins.notification &&
	        $window.cordova.plugins.notification.local) {
	        // ----- "Scheduling" events

	        // A local notification was scheduled
	        $window.cordova.plugins.notification.local.on('schedule', function (notification, state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:schedule', notification, state);
	          });
	        });

	        // A local notification was triggered
	        $window.cordova.plugins.notification.local.on('trigger', function (notification, state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:trigger', notification, state);
	          });
	        });

	        // ----- "Update" events

	        // A local notification was updated
	        $window.cordova.plugins.notification.local.on('update', function (notification, state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:update', notification, state);
	          });
	        });

	        // ----- "Clear" events

	        // A local notification was cleared from the notification center
	        $window.cordova.plugins.notification.local.on('clear', function (notification, state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:clear', notification, state);
	          });
	        });

	        // All local notifications were cleared from the notification center
	        $window.cordova.plugins.notification.local.on('clearall', function (state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:clearall', state);
	          });
	        });

	        // ----- "Cancel" events

	        // A local notification was cancelled
	        $window.cordova.plugins.notification.local.on('cancel', function (notification, state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:cancel', notification, state);
	          });
	        });

	        // All local notifications were cancelled
	        $window.cordova.plugins.notification.local.on('cancelall', function (state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:cancelall', state);
	          });
	        });

	        // ----- Other events

	        // A local notification was clicked
	        $window.cordova.plugins.notification.local.on('click', function (notification, state) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaLocalNotification:click', notification, state);
	          });
	        });
	      }
	    }, false);
	    return {
	      schedule: function (options, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.schedule(options, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      add: function (options, scope) {
	        console.warn('Deprecated: use "schedule" instead.');

	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.schedule(options, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      update: function (options, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.update(options, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      clear: function (ids, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.clear(ids, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      clearAll: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.clearAll(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      cancel: function (ids, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.cancel(ids, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      cancelAll: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.cancelAll(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      isPresent: function (id, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.isPresent(id, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      isScheduled: function (id, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.isScheduled(id, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      isTriggered: function (id, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.isTriggered(id, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      hasPermission: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.hasPermission(function (result) {
	          if (result) {
	            q.resolve(result);
	          } else {
	            q.reject(result);
	          }
	        }, scope);

	        return q.promise;
	      },

	      registerPermission: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.registerPermission(function (result) {
	          if (result) {
	            q.resolve(result);
	          } else {
	            q.reject(result);
	          }
	        }, scope);

	        return q.promise;
	      },

	      promptForPermission: function (scope) {
	        console.warn('Deprecated: use "registerPermission" instead.');

	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.registerPermission(function (result) {
	          if (result) {
	            q.resolve(result);
	          } else {
	            q.reject(result);
	          }
	        }, scope);

	        return q.promise;
	      },

	      getAllIds: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getAllIds(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getIds: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getIds(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getScheduledIds: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getScheduledIds(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getTriggeredIds: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getTriggeredIds(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      get: function (ids, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.get(ids, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getAll: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getAll(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getScheduled: function (ids, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getScheduled(ids, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getAllScheduled: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getAllScheduled(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getTriggered: function (ids, scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getTriggered(ids, function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getAllTriggered: function (scope) {
	        var q = $q.defer();
	        scope = scope || null;

	        $window.cordova.plugins.notification.local.getAllTriggered(function (result) {
	          q.resolve(result);
	        }, scope);

	        return q.promise;
	      },

	      getDefaults: function () {
	        return $window.cordova.plugins.notification.local.getDefaults();
	      },

	      setDefaults: function (Object) {
	        $window.cordova.plugins.notification.local.setDefaults(Object);
	      }
	    };
	  }]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-mmedia.git
	// link     :     https://github.com/floatinghotpot/cordova-plugin-mmedia

	angular.module('ngCordova.plugins.mMediaAds', [])

	  .factory('$cordovaMMediaAds', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.mMedia.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.mMedia.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.mMedia.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.mMedia.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.mMedia.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.mMedia.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.mMedia.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.mMedia.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add cordova-plugin-media
	// link      :      https://github.com/apache/cordova-plugin-media

	/* globals Media: true */
	angular.module('ngCordova.plugins.media', [])

	.service('NewMedia', ['$q', '$interval', function ($q, $interval) {
	  var q, q2, q3, mediaStatus = null, mediaPosition = -1, mediaTimer, mediaDuration = -1;

	  function setTimer(media) {
	      if (angular.isDefined(mediaTimer)) {
	        return;
	      }

	      mediaTimer = $interval(function () {
	          if (mediaDuration < 0) {
	              mediaDuration = media.getDuration();
	              if (q && mediaDuration > 0) {
	                q.notify({duration: mediaDuration});
	              }
	          }

	          media.getCurrentPosition(
	            // success callback
	            function (position) {
	                if (position > -1) {
	                    mediaPosition = position;
	                }
	            },
	            // error callback
	            function (e) {
	                console.log('Error getting pos=' + e);
	            });

	          if (q) {
	            q.notify({position: mediaPosition});
	          }

	      }, 1000);
	  }

	  function clearTimer() {
	      if (angular.isDefined(mediaTimer)) {
	          $interval.cancel(mediaTimer);
	          mediaTimer = undefined;
	      }
	  }

	  function resetValues() {
	      mediaPosition = -1;
	      mediaDuration = -1;
	  }

	  function NewMedia(src) {
	      this.media = new Media(src,
	        function (success) {
	            clearTimer();
	            resetValues();
	            q.resolve(success);
	        }, function (error) {
	            clearTimer();
	            resetValues();
	            q.reject(error);
	        }, function (status) {
	            mediaStatus = status;
	            q.notify({status: mediaStatus});
	        });
	  }

	  // iOS quirks :
	  // -  myMedia.play({ numberOfLoops: 2 }) -> looping
	  // -  myMedia.play({ playAudioWhenScreenIsLocked : false })
	  NewMedia.prototype.play = function (options) {
	      q = $q.defer();

	      if (typeof options !== 'object') {
	          options = {};
	      }

	      this.media.play(options);

	      setTimer(this.media);

	      return q.promise;
	  };

	  NewMedia.prototype.pause = function () {
	      clearTimer();
	      this.media.pause();
	  };

	  NewMedia.prototype.stop  = function () {
	      this.media.stop();
	  };

	  NewMedia.prototype.release  = function () {
	      this.media.release();
	      this.media = undefined;
	  };

	  NewMedia.prototype.seekTo  = function (timing) {
	      this.media.seekTo(timing);
	  };

	  NewMedia.prototype.setVolume = function (volume) {
	      this.media.setVolume(volume);
	  };

	  NewMedia.prototype.startRecord = function () {
	      this.media.startRecord();
	  };

	  NewMedia.prototype.stopRecord  = function () {
	      this.media.stopRecord();
	  };

	  NewMedia.prototype.currentTime = function () {
	      q2 = $q.defer();
	      this.media.getCurrentPosition(function (position){
	      q2.resolve(position);
	      });
	      return q2.promise;
	  };

	  NewMedia.prototype.getDuration = function () {
	    q3 = $q.defer();
	    this.media.getDuration(function (duration){
	    q3.resolve(duration);
	    });
	    return q3.promise;
	  };

	  return NewMedia;

	}])
	.factory('$cordovaMedia', ['NewMedia', function (NewMedia) {
	  return {
	      newMedia: function (src) {
	          return new NewMedia(src);
	      }
	  };
	}]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-mobfox-pro.git
	// link     :     https://github.com/floatinghotpot/cordova-mobfox-pro

	angular.module('ngCordova.plugins.mobfoxAds', [])

	  .factory('$cordovaMobFoxAds', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.MobFox.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.MobFox.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.MobFox.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.MobFox.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.MobFox.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.MobFox.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.MobFox.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.MobFox.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	angular.module('ngCordova.plugins', [
	  'ngCordova.plugins.actionSheet',
	  'ngCordova.plugins.adMob',
	  'ngCordova.plugins.appAvailability',
	  'ngCordova.plugins.appRate',
	  'ngCordova.plugins.appVersion',
	  'ngCordova.plugins.backgroundGeolocation',
	  'ngCordova.plugins.badge',
	  'ngCordova.plugins.barcodeScanner',
	  'ngCordova.plugins.batteryStatus',
	  'ngCordova.plugins.beacon',
	  'ngCordova.plugins.ble',
	  'ngCordova.plugins.bluetoothSerial',
	  'ngCordova.plugins.brightness',
	  'ngCordova.plugins.calendar',
	  'ngCordova.plugins.camera',
	  'ngCordova.plugins.capture',
	  'ngCordova.plugins.clipboard',
	  'ngCordova.plugins.contacts',
	  'ngCordova.plugins.datePicker',
	  'ngCordova.plugins.device',
	  'ngCordova.plugins.deviceMotion',
	  'ngCordova.plugins.deviceOrientation',
	  'ngCordova.plugins.dialogs',
	  'ngCordova.plugins.emailComposer',
	  'ngCordova.plugins.facebook',
	  'ngCordova.plugins.facebookAds',
	  'ngCordova.plugins.file',
	  'ngCordova.plugins.fileTransfer',
	  'ngCordova.plugins.fileOpener2',
	  'ngCordova.plugins.flashlight',
	  'ngCordova.plugins.flurryAds',
	  'ngCordova.plugins.ga',
	  'ngCordova.plugins.geolocation',
	  'ngCordova.plugins.globalization',
	  'ngCordova.plugins.googleAds',
	  'ngCordova.plugins.googleAnalytics',
	  'ngCordova.plugins.googleMap',
	  'ngCordova.plugins.googlePlayGame',
	  'ngCordova.plugins.googlePlus',
	  'ngCordova.plugins.healthKit',
	  'ngCordova.plugins.httpd',
	  'ngCordova.plugins.iAd',
	  'ngCordova.plugins.imagePicker',
	  'ngCordova.plugins.inAppBrowser',
	  'ngCordova.plugins.instagram',
	  'ngCordova.plugins.keyboard',
	  'ngCordova.plugins.keychain',
	  'ngCordova.plugins.launchNavigator',
	  'ngCordova.plugins.localNotification',
	  'ngCordova.plugins.media',
	  'ngCordova.plugins.mMediaAds',
	  'ngCordova.plugins.mobfoxAds',
	  'ngCordova.plugins.mopubAds',
	  'ngCordova.plugins.nativeAudio',
	  'ngCordova.plugins.network',
	  'ngCordovaOauth',
	  'ngCordova.plugins.pinDialog',
	  'ngCordova.plugins.preferences',
	  'ngCordova.plugins.printer',
	  'ngCordova.plugins.progressIndicator',
	  'ngCordova.plugins.push',
	  'ngCordova.plugins.push_v5',
	  'ngCordova.plugins.sms',
	  'ngCordova.plugins.socialSharing',
	  'ngCordova.plugins.spinnerDialog',
	  'ngCordova.plugins.splashscreen',
	  'ngCordova.plugins.sqlite',
	  'ngCordova.plugins.statusbar',
	  'ngCordova.plugins.toast',
	  'ngCordova.plugins.touchid',
	  'ngCordova.plugins.vibration',
	  'ngCordova.plugins.videoCapturePlus',
	  'ngCordova.plugins.zip',
	  'ngCordova.plugins.insomnia'
	]);

	// install  :     cordova plugin add https://github.com/floatinghotpot/cordova-plugin-mopub.git
	// link     :     https://github.com/floatinghotpot/cordova-plugin-mopub

	angular.module('ngCordova.plugins.mopubAds', [])
	  .factory('$cordovaMoPubAds', ['$q', '$window', function ($q, $window) {

	    return {
	      setOptions: function (options) {
	        var d = $q.defer();

	        $window.MoPub.setOptions(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      createBanner: function (options) {
	        var d = $q.defer();

	        $window.MoPub.createBanner(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      removeBanner: function () {
	        var d = $q.defer();

	        $window.MoPub.removeBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBanner: function (position) {
	        var d = $q.defer();

	        $window.MoPub.showBanner(position, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showBannerAtXY: function (x, y) {
	        var d = $q.defer();

	        $window.MoPub.showBannerAtXY(x, y, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      hideBanner: function () {
	        var d = $q.defer();

	        $window.MoPub.hideBanner(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      prepareInterstitial: function (options) {
	        var d = $q.defer();

	        $window.MoPub.prepareInterstitial(options, function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      showInterstitial: function () {
	        var d = $q.defer();

	        $window.MoPub.showInterstitial(function () {
	          d.resolve();
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      }
	    };
	  }]);

	// install   : cordova plugin add https://github.com/sidneys/cordova-plugin-nativeaudio.git
	// link      : https://github.com/sidneys/cordova-plugin-nativeaudio

	angular.module('ngCordova.plugins.nativeAudio', [])

	  .factory('$cordovaNativeAudio', ['$q', '$window', function ($q, $window) {

	    return {
	      preloadSimple: function (id, assetPath) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.preloadSimple(id, assetPath, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      preloadComplex: function (id, assetPath, volume, voices) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.preloadComplex(id, assetPath, volume, voices, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      play: function (id, completeCallback) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.play(id, completeCallback, function (err) {
	          q.reject(err);
	        }, function (result) {
	          q.resolve(result);
	        });

	        return q.promise;
	      },

	      stop: function (id) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.stop(id, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });
	        return q.promise;
	      },

	      loop: function (id) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.loop(id, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      unload: function (id) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.unload(id, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      },

	      setVolumeForComplexAsset: function (id, volume) {
	        var q = $q.defer();
	        $window.plugins.NativeAudio.setVolumeForComplexAsset(id, volume, function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add cordova-plugin-network-information
	// link      :      https://github.com/apache/cordova-plugin-network-information

	/* globals Connection: true */
	angular.module('ngCordova.plugins.network', [])

	  .factory('$cordovaNetwork', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

	    /**
	      * Fires offline a event
	      */
	    var offlineEvent = function () {
	      var networkState = navigator.connection.type;
	      $timeout(function () {
	        $rootScope.$broadcast('$cordovaNetwork:offline', networkState);
	      });
	    };

	    /**
	      * Fires online a event
	      */
	    var onlineEvent = function () {
	      var networkState = navigator.connection.type;
	      $timeout(function () {
	        $rootScope.$broadcast('$cordovaNetwork:online', networkState);
	      });
	    };

	    document.addEventListener('deviceready', function () {
	      if (navigator.connection) {
	        document.addEventListener('offline', offlineEvent, false);
	        document.addEventListener('online', onlineEvent, false);
	      }
	    });

	    return {
	      getNetwork: function () {
	        return navigator.connection.type;
	      },

	      isOnline: function () {
	        var networkState = navigator.connection.type;
	        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
	      },

	      isOffline: function () {
	        var networkState = navigator.connection.type;
	        return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
	      },

	      clearOfflineWatch: function () {
	        document.removeEventListener('offline', offlineEvent);
	        $rootScope.$$listeners['$cordovaNetwork:offline'] = [];
	      },

	      clearOnlineWatch: function () {
	        document.removeEventListener('online', onlineEvent);
	        $rootScope.$$listeners['$cordovaNetwork:online'] = [];
	      }
	    };
	  }])
	  .run(['$injector', function ($injector) {
	    $injector.get('$cordovaNetwork'); //ensure the factory always gets initialised
	  }]);

	// install   :      cordova plugin add https://github.com/Paldom/PinDialog.git
	// link      :      https://github.com/Paldom/PinDialog

	angular.module('ngCordova.plugins.pinDialog', [])

	  .factory('$cordovaPinDialog', ['$q', '$window', function ($q, $window) {

	    return {
	      prompt: function (message, title, buttons) {
	        var q = $q.defer();

	        $window.plugins.pinDialog.prompt(message, function (res) {
	          q.resolve(res);
	        }, title, buttons);

	        return q.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add cordova-plugin-app-preferences
	// link      :      https://github.com/apla/me.apla.cordova.app-preferences

	angular.module('ngCordova.plugins.preferences', [])

	  .factory('$cordovaPreferences', ['$window', '$q', function ($window, $q) {

	     return {
	         
	         pluginNotEnabledMessage: 'Plugin not enabled',
	    	
	    	/**
	    	 * Decorate the promise object.
	    	 * @param promise The promise object.
	    	 */
	    	decoratePromise: function(promise){
	    		promise.success = function(fn) {
		            promise.then(fn);
		            return promise;
		        };

		        promise.error = function(fn) {
		            promise.then(null, fn);
		            return promise;
		        };
	    	},
	    	
	    	/**
	    	 * Store the value of the given dictionary and key.
	    	 * @param key The key of the preference.
	    	 * @param value The value to set.
	         * @param dict The dictionary. It's optional.
	         * @returns Returns a promise.
	    	 */
		    store: function(key, value, dict) {
		    	var deferred = $q.defer();
		    	var promise = deferred.promise;
	            
	            function ok(value){
	                deferred.resolve(value);
	            }
	            
	            function errorCallback(error){
	                deferred.reject(new Error(error));
	            }
	            
	            if($window.plugins){
	                var storeResult;
	                if(arguments.length === 3){
	                    storeResult = $window.plugins.appPreferences.store(dict, key, value);
	                } else {
	                    storeResult = $window.plugins.appPreferences.store(key, value);
	                }
	                
	                storeResult.then(ok, errorCallback);
	            } else {
	                deferred.reject(new Error(this.pluginNotEnabledMessage));
	            }
	            
		    	this.decoratePromise(promise);
		    	return promise;
		    },
		    
		    /**
		     * Fetch the value by the given dictionary and key.
		     * @param key The key of the preference to retrieve.
	         * @param dict The dictionary. It's optional.
	         * @returns Returns a promise.
		     */
		    fetch: function(key, dict) {
		    	var deferred = $q.defer();
		    	var promise = deferred.promise;
	            
	            function ok(value){
	                deferred.resolve(value);
	            }
	            
	            function errorCallback(error){
	                deferred.reject(new Error(error));
	            }
	            
	            if($window.plugins){
	                var fetchResult;
	                if(arguments.length === 2){
	                    fetchResult = $window.plugins.appPreferences.fetch(dict, key);
	                } else {
	                    fetchResult = $window.plugins.appPreferences.fetch(key);
	                }
	                fetchResult.then(ok, errorCallback);
	            } else {
	                deferred.reject(new Error(this.pluginNotEnabledMessage));
	            }
	            
		    	this.decoratePromise(promise);
		    	return promise;
		    },
	        
	        /**
		     * Remove the value by the given key.
		     * @param key The key of the preference to retrieve.
	         * @param dict The dictionary. It's optional.
	         * @returns Returns a promise.
		     */
		    remove: function(key, dict) {
		    	var deferred = $q.defer();
		    	var promise = deferred.promise;
	            
	            function ok(value){
	                deferred.resolve(value);
	            }
	            
	            function errorCallback(error){
	                deferred.reject(new Error(error));
	            }
	            
	            if($window.plugins){
	                var removeResult;
	                if(arguments.length === 2){
	                    removeResult = $window.plugins.appPreferences.remove(dict, key);
	                } else {
	                    removeResult = $window.plugins.appPreferences.remove(key);
	                }
	                removeResult.then(ok, errorCallback);
	            } else {
	                deferred.reject(new Error(this.pluginNotEnabledMessage));
	            }
		    	
		    	this.decoratePromise(promise);
		    	return promise;
		    },
	        
	        /**
		     * Show the application preferences.
	         * @returns Returns a promise.
		     */
		    show: function() {
		    	var deferred = $q.defer();
		    	var promise = deferred.promise;
	            
	            function ok(value){
	                deferred.resolve(value);
	            }
	            
	            function errorCallback(error){
	                deferred.reject(new Error(error));
	            }
	            
	            if($window.plugins){
	                $window.plugins.appPreferences.show()
	                    .then(ok, errorCallback);
	            } else {
	                deferred.reject(new Error(this.pluginNotEnabledMessage));
	            }
		    	
		    	this.decoratePromise(promise);
		    	return promise;
		    }
	    };

	  }]);

	// install   : cordova plugin add https://github.com/katzer/cordova-plugin-printer.git
	// link      : https://github.com/katzer/cordova-plugin-printer

	angular.module('ngCordova.plugins.printer', [])

	  .factory('$cordovaPrinter', ['$q', '$window', function ($q, $window) {

	    return {
	      isAvailable: function () {
	        var q = $q.defer();

	        $window.plugin.printer.isAvailable(function (isAvailable) {
	          q.resolve(isAvailable);
	        });

	        return q.promise;
	      },

	      print: function (doc, options) {
	        var q = $q.defer();
	        $window.plugin.printer.print(doc, options, function () {
	          q.resolve();
	        });
	        return q.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add https://github.com/pbernasconi/cordova-progressIndicator.git
	// link      :      http://pbernasconi.github.io/cordova-progressIndicator/

	/* globals ProgressIndicator: true */
	angular.module('ngCordova.plugins.progressIndicator', [])

	  .factory('$cordovaProgress', [function () {

	    return {
	      show: function (_message) {
	        var message = _message || 'Please wait...';
	        return ProgressIndicator.show(message);
	      },

	      showSimple: function (_dim) {
	        var dim = _dim || false;
	        return ProgressIndicator.showSimple(dim);
	      },

	      showSimpleWithLabel: function (_dim, _label) {
	        var dim = _dim || false;
	        var label = _label || 'Loading...';
	        return ProgressIndicator.showSimpleWithLabel(dim, label);
	      },

	      showSimpleWithLabelDetail: function (_dim, _label, _detail) {
	        var dim = _dim || false;
	        var label = _label || 'Loading...';
	        var detail = _detail || 'Please wait';
	        return ProgressIndicator.showSimpleWithLabelDetail(dim, label, detail);
	      },

	      showDeterminate: function (_dim, _timeout) {
	        var dim = _dim || false;
	        var timeout = _timeout || 50000;
	        return ProgressIndicator.showDeterminate(dim, timeout);
	      },

	      showDeterminateWithLabel: function (_dim, _timeout, _label) {
	        var dim = _dim || false;
	        var timeout = _timeout || 50000;
	        var label = _label || 'Loading...';

	        return ProgressIndicator.showDeterminateWithLabel(dim, timeout, label);
	      },

	      showAnnular: function (_dim, _timeout) {
	        var dim = _dim || false;
	        var timeout = _timeout || 50000;
	        return ProgressIndicator.showAnnular(dim, timeout);
	      },

	      showAnnularWithLabel: function (_dim, _timeout, _label) {
	        var dim = _dim || false;
	        var timeout = _timeout || 50000;
	        var label = _label || 'Loading...';
	        return ProgressIndicator.showAnnularWithLabel(dim, timeout, label);
	      },

	      showBar: function (_dim, _timeout) {
	        var dim = _dim || false;
	        var timeout = _timeout || 50000;
	        return ProgressIndicator.showBar(dim, timeout);
	      },

	      showBarWithLabel: function (_dim, _timeout, _label) {
	        var dim = _dim || false;
	        var timeout = _timeout || 50000;
	        var label = _label || 'Loading...';
	        return ProgressIndicator.showBarWithLabel(dim, timeout, label);
	      },

	      showSuccess: function (_dim, _label) {
	        var dim = _dim || false;
	        var label = _label || 'Success';
	        return ProgressIndicator.showSuccess(dim, label);
	      },

	      showText: function (_dim, _text, _position) {
	        var dim = _dim || false;
	        var text = _text || 'Warning';
	        var position = _position || 'center';
	        return ProgressIndicator.showText(dim, text, position);
	      },

	      hide: function () {
	        return ProgressIndicator.hide();
	      }
	    };

	  }]);

	// install   :      cordova plugin add https://github.com/phonegap-build/PushPlugin.git
	// link      :      https://github.com/phonegap-build/PushPlugin

	angular.module('ngCordova.plugins.push', [])

	  .factory('$cordovaPush', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {

	    return {
	      onNotification: function (notification) {
	        $timeout(function () {
	          $rootScope.$broadcast('$cordovaPush:notificationReceived', notification);
	        });
	      },

	      register: function (config) {
	        var q = $q.defer();
	        var injector;
	        if (config !== undefined && config.ecb === undefined) {
	          if (document.querySelector('[ng-app]') === null) {
	            injector = 'document.body';
	          }
	          else {
	            injector = 'document.querySelector(\'[ng-app]\')';
	          }
	          config.ecb = 'angular.element(' + injector + ').injector().get(\'$cordovaPush\').onNotification';
	        }

	        $window.plugins.pushNotification.register(function (token) {
	          q.resolve(token);
	        }, function (error) {
	          q.reject(error);
	        }, config);

	        return q.promise;
	      },

	      unregister: function (options) {
	        var q = $q.defer();
	        $window.plugins.pushNotification.unregister(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        }, options);

	        return q.promise;
	      },

	      // iOS only
	      setBadgeNumber: function (number) {
	        var q = $q.defer();
	        $window.plugins.pushNotification.setApplicationIconBadgeNumber(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        }, number);
	        return q.promise;
	      }
	    };
	  }]);


	// install   :      cordova plugin add phonegap-plugin-push
	// link      :      https://github.com/phonegap/phonegap-plugin-push

	angular.module('ngCordova.plugins.push_v5', [])
	  .factory('$cordovaPushV5',['$q', '$rootScope', '$timeout', function ($q, $rootScope, $timeout) {
	   /*global PushNotification*/

	    var push;
	    return {
	      initialize : function (options) {
	        var q = $q.defer();
	        push = PushNotification.init(options);
	        q.resolve(push);
	        return q.promise;
	      },
	      onNotification : function () {
	        $timeout(function () {
	          push.on('notification', function (notification) {
	            $rootScope.$emit('$cordovaPushV5:notificationReceived', notification);
	          });
	        });
	      },
	      onError : function () {
	        $timeout(function () {
	          push.on('error', function (error) { $rootScope.$emit('$cordovaPushV5:errorOccurred', error);});
	        });
	      },
	      register : function () {
	        var q = $q.defer();
	        if (push === undefined) {
	          q.reject(new Error('init must be called before any other operation'));
	        } else {
	          push.on('registration', function (data) {
	            q.resolve(data.registrationId);
	          });
	        }
	        return q.promise;
	      },
	      unregister : function () {
	        var q = $q.defer();
	        if (push === undefined) {
	          q.reject(new Error('init must be called before any other operation'));
	        } else {
	          push.unregister(function (success) {
	            q.resolve(success);
	          },function (error) {
	            q.reject(error);
	          });
	        }
	        return q.promise;
	      },
	      setBadgeNumber : function (number) {
	        var q = $q.defer();
	        if (push === undefined) {
	          q.reject(new Error('init must be called before any other operation'));
	        } else {
	          push.setApplicationIconBadgeNumber(function (success) {
	            q.resolve(success);
	          }, function (error) {
	            q.reject(error);
	          }, number);
	        }
	        return q.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add https://github.com/cordova-sms/cordova-sms-plugin.git
	// link      :      https://github.com/cordova-sms/cordova-sms-plugin

	/* globals sms: true */
	angular.module('ngCordova.plugins.sms', [])

	  .factory('$cordovaSms', ['$q', function ($q) {

	    return {
	      send: function (number, message, options) {
	        var q = $q.defer();
	        sms.send(number, message, options, function (res) {
	          q.resolve(res);
	        }, function (err) {
	          q.reject(err);
	        });
	        return q.promise;
	      }
	    };

	  }]);

	// install   :      cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
	// link      :      https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin

	// NOTE: shareViaEmail -> if user cancels sharing email, success is still called
	// TODO: add support for iPad

	angular.module('ngCordova.plugins.socialSharing', [])

	  .factory('$cordovaSocialSharing', ['$q', '$window', function ($q, $window) {

	    return {
	      share: function (message, subject, file, link) {
	        var q = $q.defer();
	        subject = subject || null;
	        file = file || null;
	        link = link || null;
	        $window.plugins.socialsharing.share(message, subject, file, link, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareViaTwitter: function (message, file, link) {
	        var q = $q.defer();
	        file = file || null;
	        link = link || null;
	        $window.plugins.socialsharing.shareViaTwitter(message, file, link, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareViaWhatsApp: function (message, file, link) {
	        var q = $q.defer();
	        file = file || null;
	        link = link || null;
	        $window.plugins.socialsharing.shareViaWhatsApp(message, file, link, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareViaFacebook: function (message, file, link) {
	        var q = $q.defer();
	        message = message || null;
	        file = file || null;
	        link = link || null;
	        $window.plugins.socialsharing.shareViaFacebook(message, file, link, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareViaFacebookWithPasteMessageHint: function (message, file, link, pasteMessageHint) {
	        var q = $q.defer();
	        file = file || null;
	        link = link || null;
	        $window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareViaSMS: function (message, commaSeparatedPhoneNumbers) {
	        var q = $q.defer();
	        $window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareViaEmail: function (message, subject, toArr, ccArr, bccArr, fileArr) {
	        var q = $q.defer();
	        toArr = toArr || null;
	        ccArr = ccArr || null;
	        bccArr = bccArr || null;
	        fileArr = fileArr || null;
	        $window.plugins.socialsharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      shareVia: function (via, message, subject, file, link) {
	        var q = $q.defer();
	        message = message || null;
	        subject = subject || null;
	        file = file || null;
	        link = link || null;
	        $window.plugins.socialsharing.shareVia(via, message, subject, file, link, function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      canShareViaEmail: function () {
	        var q = $q.defer();
	        $window.plugins.socialsharing.canShareViaEmail(function () {
	          q.resolve(true);
	        }, function () {
	          q.reject(false);
	        });
	        return q.promise;
	      },

	      canShareVia: function (via, message, subject, file, link) {
	        var q = $q.defer();
	        $window.plugins.socialsharing.canShareVia(via, message, subject, file, link, function (success) {
	          q.resolve(success);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      available: function () {
	        var q = $q.defer();
	        window.plugins.socialsharing.available(function (isAvailable) {
	          if (isAvailable) {
	            q.resolve();
	          }
	          else {
	            q.reject();
	          }
	        });
	      }
	    };
	  }]);

	// install   :       cordova plugin add https://github.com/Paldom/SpinnerDialog.git
	// link      :       https://github.com/Paldom/SpinnerDialog

	angular.module('ngCordova.plugins.spinnerDialog', [])

	  .factory('$cordovaSpinnerDialog', ['$window', function ($window) {

	    return {
	      show: function (title, message, fixed) {
	        fixed = fixed || false;
	        return $window.plugins.spinnerDialog.show(title, message, fixed);
	      },
	      hide: function () {
	        return $window.plugins.spinnerDialog.hide();
	      }
	    };

	  }]);

	// install   :      cordova plugin add cordova-plugin-splashscreen
	// link      :      https://github.com/apache/cordova-plugin-splashscreen

	angular.module('ngCordova.plugins.splashscreen', [])

	  .factory('$cordovaSplashscreen', [function () {

	    return {
	      hide: function () {
	        return navigator.splashscreen.hide();
	      },

	      show: function () {
	        return navigator.splashscreen.show();
	      }
	    };

	  }]);

	// install   :      cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
	// link      :      https://github.com/litehelpers/Cordova-sqlite-storage

	angular.module('ngCordova.plugins.sqlite', [])

	  .factory('$cordovaSQLite', ['$q', '$window', function ($q, $window) {

	    return {
	      openDB: function (options, background) {

	        if (angular.isObject(options) && !angular.isString(options)) {
	          if (typeof background !== 'undefined') {
	            options.bgType = background;
	          }
	          return $window.sqlitePlugin.openDatabase(options);
	        }

	        return $window.sqlitePlugin.openDatabase({
	          name: options,
	          bgType: background
	        });
	      },

	      execute: function (db, query, binding) {
	        var q = $q.defer();
	        db.transaction(function (tx) {
	          tx.executeSql(query, binding, function (tx, result) {
	              q.resolve(result);
	            },
	            function (transaction, error) {
	              q.reject(error);
	            });
	        });
	        return q.promise;
	      },

	      insertCollection: function (db, query, bindings) {
	        var q = $q.defer();
	        var coll = bindings.slice(0); // clone collection

	        db.transaction(function (tx) {
	          (function insertOne() {
	            var record = coll.splice(0, 1)[0]; // get the first record of coll and reduce coll by one
	            try {
	              tx.executeSql(query, record, function (tx, result) {
	                if (coll.length === 0) {
	                  q.resolve(result);
	                } else {
	                  insertOne();
	                }
	              }, function (transaction, error) {
	                q.reject(error);
	                return;
	              });
	            } catch (exception) {
	              q.reject(exception);
	            }
	          })();
	        });
	        return q.promise;
	      },

	      nestedExecute: function (db, query1, query2, binding1, binding2) {
	        var q = $q.defer();

	        db.transaction(function (tx) {
	            tx.executeSql(query1, binding1, function (tx, result) {
	              q.resolve(result);
	              tx.executeSql(query2, binding2, function (tx, res) {
	                q.resolve(res);
	              });
	            });
	          },
	          function (transaction, error) {
	            q.reject(error);
	          });

	        return q.promise;
	      },

	      deleteDB: function (dbName) {
	        var q = $q.defer();

	        $window.sqlitePlugin.deleteDatabase(dbName, function (success) {
	          q.resolve(success);
	        }, function (error) {
	          q.reject(error);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add cordova-plugin-statusbar
	// link      :      https://github.com/apache/cordova-plugin-statusbar

	/* globals StatusBar: true */
	angular.module('ngCordova.plugins.statusbar', [])

	.factory('$cordovaStatusbar', [function () {

	  return {

	    /**
	      * @param {boolean} bool
	      */
	    overlaysWebView: function (bool) {
	      return StatusBar.overlaysWebView(!!bool);
	    },

	    STYLES: {
	      DEFAULT: 0,
	      LIGHT_CONTENT: 1,
	      BLACK_TRANSLUCENT: 2,
	      BLACK_OPAQUE: 3
	    },

	    /**
	      * @param {number} style
	      */
	    style: function (style) {
	      switch (style) {
	        // Default
	        case 0:
	        return StatusBar.styleDefault();

	        // LightContent
	        case 1:
	        return StatusBar.styleLightContent();

	        // BlackTranslucent
	        case 2:
	        return StatusBar.styleBlackTranslucent();

	        // BlackOpaque
	        case 3:
	        return StatusBar.styleBlackOpaque();

	        default:
	        return StatusBar.styleDefault();
	      }
	    },

	    // supported names:
	    // black, darkGray, lightGray, white, gray, red, green,
	    // blue, cyan, yellow, magenta, orange, purple, brown
	    styleColor: function (color) {
	      return StatusBar.backgroundColorByName(color);
	    },

	    styleHex: function (colorHex) {
	      return StatusBar.backgroundColorByHexString(colorHex);
	    },

	    hide: function () {
	      return StatusBar.hide();
	    },

	    show: function () {
	      return StatusBar.show();
	    },

	    isVisible: function () {
	      return StatusBar.isVisible;
	    }
	  };
	}]);

	// install   :      cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
	// link      :      https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

	angular.module('ngCordova.plugins.toast', [])

	  .factory('$cordovaToast', ['$q', '$window', function ($q, $window) {

	    return {
	      showShortTop: function (message) {
	        var q = $q.defer();
	        $window.plugins.toast.showShortTop(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showShortCenter: function (message) {
	        var q = $q.defer();
	        $window.plugins.toast.showShortCenter(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showShortBottom: function (message) {
	        var q = $q.defer();
	        $window.plugins.toast.showShortBottom(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showLongTop: function (message) {
	        var q = $q.defer();
	        $window.plugins.toast.showLongTop(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showLongCenter: function (message) {
	        var q = $q.defer();
	        $window.plugins.toast.showLongCenter(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showLongBottom: function (message) {
	        var q = $q.defer();
	        $window.plugins.toast.showLongBottom(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },


	      show: function (message, duration, position) {
	        var q = $q.defer();
	        $window.plugins.toast.show(message, duration, position, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      }
	    };

	  }]);

	// install   :      cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git
	// link      :      https://github.com/leecrossley/cordova-plugin-touchid

	/* globals touchid: true */
	angular.module('ngCordova.plugins.touchid', [])

	  .factory('$cordovaTouchID', ['$q', function ($q) {

	    return {
	      checkSupport: function () {
	        var defer = $q.defer();
	        if (!window.cordova) {
	          defer.reject('Not supported without cordova.js');
	        } else {
	          touchid.checkSupport(function (value) {
	            defer.resolve(value);
	          }, function (err) {
	            defer.reject(err);
	          });
	        }

	        return defer.promise;
	      },

	      authenticate: function (authReasonText) {
	        var defer = $q.defer();
	        if (!window.cordova) {
	          defer.reject('Not supported without cordova.js');
	        } else {
	          touchid.authenticate(function (value) {
	            defer.resolve(value);
	          }, function (err) {
	            defer.reject(err);
	          }, authReasonText);
	        }

	        return defer.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add https://github.com/aerogear/aerogear-cordova-push.git
	// link      :      https://github.com/aerogear/aerogear-cordova-push

	angular.module('ngCordova.plugins.upsPush', [])

	  .factory('$cordovaUpsPush', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {
	    return {
	      register: function (config) {
	        var q = $q.defer();

	        $window.push.register(function (notification) {
	          $timeout(function () {
	            $rootScope.$broadcast('$cordovaUpsPush:notificationReceived', notification);
	          });
	        }, function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        }, config);

	        return q.promise;
	      },

	      unregister: function (options) {
	        var q = $q.defer();
	        $window.push.unregister(function () {
	          q.resolve();
	        }, function (error) {
	          q.reject(error);
	        }, options);

	        return q.promise;
	      },

	      // iOS only
	      setBadgeNumber: function (number) {
	        var q = $q.defer();
	        $window.push.setApplicationIconBadgeNumber(function () {
	          q.resolve();
	        }, number);
	        return q.promise;
	      }
	    };
	  }]);

	// install   :      cordova plugin add cordova-plugin-vibration
	// link      :      https://github.com/apache/cordova-plugin-vibration

	angular.module('ngCordova.plugins.vibration', [])

	  .factory('$cordovaVibration', [function () {

	    return {
	      vibrate: function (times) {
	        return navigator.notification.vibrate(times);
	      },
	      vibrateWithPattern: function (pattern, repeat) {
	        return navigator.notification.vibrateWithPattern(pattern, repeat);
	      },
	      cancelVibration: function () {
	        return navigator.notification.cancelVibration();
	      }
	    };
	  }]);

	// install   :    cordova plugin add https://github.com/EddyVerbruggen/VideoCapturePlus-PhoneGap-Plugin.git
	// link      :    https://github.com/EddyVerbruggen/VideoCapturePlus-PhoneGap-Plugin

	angular.module('ngCordova.plugins.videoCapturePlus', [])

	  .provider('$cordovaVideoCapturePlus', [function () {

	    var defaultOptions = {};


	    /**
	     * the nr of videos to record, default 1 (on iOS always 1)
	     *
	     * @param limit
	     */
	    this.setLimit = function setLimit(limit) {
	      defaultOptions.limit = limit;
	    };


	    /**
	     * max duration in seconds, default 0, which is 'forever'
	     *
	     * @param seconds
	     */
	    this.setMaxDuration = function setMaxDuration(seconds) {
	      defaultOptions.duration = seconds;
	    };


	    /**
	     * set to true to override the default low quality setting
	     *
	     * @param {Boolean} highquality
	     */
	    this.setHighQuality = function setHighQuality(highquality) {
	      defaultOptions.highquality = highquality;
	    };

	    /**
	     * you'll want to sniff the user-Agent/device and pass the best overlay based on that..
	     * set to true to override the default backfacing camera setting. iOS: works fine, Android: YMMV (#18)
	     *
	     * @param {Boolean} frontcamera
	     */
	    this.useFrontCamera = function useFrontCamera(frontcamera) {
	      defaultOptions.frontcamera = frontcamera;
	    };


	    /**
	     * put the png in your www folder
	     *
	     * @param {String} imageUrl
	     */
	    this.setPortraitOverlay = function setPortraitOverlay(imageUrl) {
	      defaultOptions.portraitOverlay = imageUrl;
	    };


	    /**
	     *
	     * @param {String} imageUrl
	     */
	    this.setLandscapeOverlay = function setLandscapeOverlay(imageUrl) {
	      defaultOptions.landscapeOverlay = imageUrl;
	    };


	    /**
	     * iOS only
	     *
	     * @param text
	     */
	    this.setOverlayText = function setOverlayText(text) {
	      defaultOptions.overlayText = text;
	    };


	    this.$get = ['$q', '$window', function ($q, $window) {
	      return {
	        captureVideo: function (options) {
	          var q = $q.defer();

	          if (!$window.plugins.videocaptureplus) {
	            q.resolve(null);
	            return q.promise;
	          }

	          $window.plugins.videocaptureplus.captureVideo(q.resolve, q.reject,
	            angular.extend({}, defaultOptions, options));

	          return q.promise;
	        }
	      };
	    }];
	  }]);

	// install  :     cordova plugin add https://github.com/MobileChromeApps/zip.git
	// link     :     https://github.com/MobileChromeApps/zip

	angular.module('ngCordova.plugins.zip', [])

	  .factory('$cordovaZip', ['$q', '$window', function ($q, $window) {

	    return {
	      unzip: function (source, destination) {
	        var q = $q.defer();

	        $window.zip.unzip(source, destination, function (isError) {
	          if (isError === 0) {
	            q.resolve();
	          } else {
	            q.reject();
	          }
	        }, function (progressEvent) {
	          q.notify(progressEvent);
	        });

	        return q.promise;
	      }
	    };
	  }]);

	angular.module("oauth.providers", ["oauth.utils"])
	    .factory("$cordovaOauth", ["$q", '$http', "$cordovaOauthUtility", function($q, $http, $cordovaOauthUtility) {

	        return {

	            /*
	             * Sign into the Azure AD Authentication Library
	             *
	             * @param    string clientId (client registered in ADFS, with redirect_uri configured to: http://localhost/callback)
	             * @param    string tenantId (the tenants UUID, can be found in oauth endpoint)
	             * @param    string resourceURL (This is your APP ID URI in Azure Config)
	             * @return   promise
	             */
	            azureAD: function(clientId, tenantId, resourceURL) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {

	                        var browserRef = window.open('https://login.microsoftonline.com/' + tenantId + '/oauth2/authorize?response_type=code&client_id=' + clientId + '&redirect_uri=http://localhost/callback', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener("loadstart", function(event) {
	                            if((event.url).indexOf('http://localhost/callback') === 0) {
	                                var requestToken = (event.url).split("code=")[1];
	                                console.log(requestToken);
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

	                                $http({method: "post", url: "https://login.microsoftonline.com/" + tenantId + "/oauth2/token", data: 
	                                    "client_id=" + clientId + 
	                                    "&code=" + requestToken + 
	                                    "&redirect_uri=http://localhost/callback&" +
	                                    "grant_type=authorization_code&" +
	                                    "resource=" + resourceURL})
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the ADFS service (ADFS 3.0 onwards)
				 *
	             * @param    string clientId (client registered in ADFS, with redirect_uri configured to: http://localhost/callback)
	             * @param	 string adfsServer (url of the ADFS Server)
	             * @param	 string relyingPartyId (url of the Relying Party (resource relying on ADFS for authentication) configured in ADFS)
	             * @return   promise
	             */
	            adfs: function(clientId, adfsServer, relyingPartyId) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var browserRef = window.open(adfsServer + '/adfs/oauth2/authorize?response_type=code&client_id=' + clientId +'&redirect_uri=http://localhost/callback&resource=' + relyingPartyId, '_blank', 'location=no');

	                        browserRef.addEventListener("loadstart", function(event) {
	                            if((event.url).indexOf('http://localhost/callback') === 0) {
	                                var requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: adfsServer + "/adfs/oauth2/token", data: "client_id=" + clientId + "&code=" + requestToken + "&redirect_uri=http://localhost/callback&grant_type=authorization_code"  })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Dropbox service
	             *
	             * @param    string appKey
	             * @param    object options
	             * @return   promise
	             */
	            dropbox: function(appKey, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open("https://www.dropbox.com/1/oauth2/authorize?client_id=" + appKey + "&redirect_uri=" + redirect_uri + "&response_type=token", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
	                        browserRef.addEventListener("loadstart", function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, token_type: parameterMap.token_type, uid: parameterMap.uid });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Digital Ocean service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    object options
	             * @return   promise
	             */
	            digitalOcean: function(clientId, clientSecret, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open("https://cloud.digitalocean.com/v1/oauth/authorize?client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&response_type=code&scope=read%20write", "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
	                        browserRef.addEventListener("loadstart", function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                var requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://cloud.digitalocean.com/v1/oauth/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Google service
	             *
	             * @param    string clientId
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            google: function(clientId, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope.join(" ") + '&approval_prompt=force&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener("loadstart", function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                           		browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, token_type: parameterMap.token_type, expires_in: parameterMap.expires_in });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the GitHub service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            github: function(clientId, clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://github.com/login/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope.join(","), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http.defaults.headers.post.accept = 'application/json';
	                                $http({method: "post", url: "https://github.com/login/oauth/access_token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Facebook service
	             *
	             * @param    string clientId
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            facebook: function(clientId, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var flowUrl = "https://www.facebook.com/v2.0/dialog/oauth?client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&response_type=token&scope=" + appScope.join(",");
	                        if(options !== undefined && options.hasOwnProperty("auth_type")) {
	                            flowUrl += "&auth_type=" + options.auth_type;
	                        }
	                        var browserRef = window.open(flowUrl, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
	                                } else {
	                                  if ((event.url).indexOf("error_code=100") !== 0)
	                                    deferred.reject("Facebook returned error_code=100: Invalid permissions");
	                                  else
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the LinkedIn service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    array appScope
	             * @param    string state
	             * @param    object options
	             * @return   promise
	             */
	            linkedin: function(clientId, clientSecret, appScope, state, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }

	                        var browserRef = window.open('https://www.linkedin.com/uas/oauth2/authorization?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope.join(" ") + '&response_type=code&state=' + state, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1].split("&")[0];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://www.linkedin.com/uas/oauth2/accessToken", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Instagram service
	             *
	             * @param    string clientId
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            instagram: function(clientId, appScope, options) {
	                var deferred = $q.defer();

	                var split_tokens = {
	                    'code':'?',
	                    'token':'#'
	                };

	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        var response_type = "token";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                            if(options.hasOwnProperty("response_type")) {
	                                response_type = options.response_type;
	                            }
	                        }

	                        var scope = '';
	                        if (appScope && appScope.length > 0) {
	                            scope = '&scope' + appScope.join('+');
	                        }

	                        var browserRef = window.open('https://api.instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=' + redirect_uri + scope + '&response_type='+response_type, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                browserRef.removeEventListener("exit",function(event){});
	                                browserRef.close();
	                                var callbackResponse = (event.url).split(split_tokens[response_type])[1];
	                                var parameterMap = $cordovaOauthUtility.parseResponseParameters(callbackResponse);
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token });
	                                } else if(parameterMap.code !== undefined && parameterMap.code !== null) {
	                                    deferred.resolve({ code: parameterMap.code });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Box service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    string appState
	             * @param    object options
	             * @return   promise
	             */
	            box: function(clientId, clientSecret, appState, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://app.box.com/api/oauth2/authorize/?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&state=' + appState + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://app.box.com/api/oauth2/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Reddit service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            reddit: function(clientId, clientSecret, appScope, compact, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://ssl.reddit.com/api/v1/authorize' + (compact ? '.compact' : '') + '?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&duration=permanent&state=ngcordovaoauth&scope=' + appScope.join(",") + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http.defaults.headers.post.Authorization = 'Basic ' + btoa(clientId + ":" + clientSecret);
	                                $http({method: "post", url: "https://ssl.reddit.com/api/v1/access_token", data: "redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Slack service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            slack: function(clientId, clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }

	                        var browserRef = window.open('https://slack.com/oauth/authorize' + '?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&state=ngcordovaoauth&scope=' + appScope.join(","), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                console.log("Request token is " + requestToken);
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://slack.com/api/oauth.access", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Twitter service
	             * Note that this service requires jsSHA for generating HMAC-SHA1 Oauth 1.0 signatures
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @return   promise
	             */
	            twitter: function(clientId, clientSecret, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }

	                        if(typeof jsSHA !== "undefined") {
	                            var oauthObject = {
	                                oauth_consumer_key: clientId,
	                                oauth_nonce: $cordovaOauthUtility.createNonce(10),
	                                oauth_signature_method: "HMAC-SHA1",
	                                oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
	                                oauth_version: "1.0"
	                            };
	                            var signatureObj = $cordovaOauthUtility.createSignature("POST", "https://api.twitter.com/oauth/request_token", oauthObject,  { oauth_callback: redirect_uri }, clientSecret);
	                            $http({
	                                method: "post",
	                                url: "https://api.twitter.com/oauth/request_token",
	                                headers: {
	                                    "Authorization": signatureObj.authorization_header,
	                                    "Content-Type": "application/x-www-form-urlencoded"
	                                },
	                                data: "oauth_callback=" + encodeURIComponent(redirect_uri)
	                            })
	                                .success(function(requestTokenResult) {
	                                    var requestTokenParameters = (requestTokenResult).split("&");
	                                    var parameterMap = {};
	                                    for(var i = 0; i < requestTokenParameters.length; i++) {
	                                        parameterMap[requestTokenParameters[i].split("=")[0]] = requestTokenParameters[i].split("=")[1];
	                                    }
	                                    if(parameterMap.hasOwnProperty("oauth_token") === false) {
	                                        deferred.reject("Oauth request token was not received");
	                                    }
	                                    var browserRef = window.open('https://api.twitter.com/oauth/authenticate?oauth_token=' + parameterMap.oauth_token, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                                    browserRef.addEventListener('loadstart', function(event) {
	                                        if((event.url).indexOf(redirect_uri) === 0) {
	                                            var callbackResponse = (event.url).split("?")[1];
	                                            var responseParameters = (callbackResponse).split("&");
	                                            var parameterMap = {};
	                                            for(var i = 0; i < responseParameters.length; i++) {
	                                                parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                            }
	                                            if(parameterMap.hasOwnProperty("oauth_verifier") === false) {
	                                                deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
	                                            }
	                                            delete oauthObject.oauth_signature;
	                                            oauthObject.oauth_token = parameterMap.oauth_token;
	                                            var signatureObj = $cordovaOauthUtility.createSignature("POST", "https://api.twitter.com/oauth/access_token", oauthObject,  { oauth_verifier: parameterMap.oauth_verifier }, clientSecret);
	                                            $http({
	                                                method: "post",
	                                                url: "https://api.twitter.com/oauth/access_token",
	                                                headers: {
	                                                    "Authorization": signatureObj.authorization_header
	                                                },
	                                                params: {
	                                                    "oauth_verifier": parameterMap.oauth_verifier
	                                                }
	                                            })
	                                                .success(function(result) {
	                                                    var accessTokenParameters = result.split("&");
	                                                    var parameterMap = {};
	                                                    for(var i = 0; i < accessTokenParameters.length; i++) {
	                                                        parameterMap[accessTokenParameters[i].split("=")[0]] = accessTokenParameters[i].split("=")[1];
	                                                    }
	                                                    if(parameterMap.hasOwnProperty("oauth_token_secret") === false) {
	                                                        deferred.reject("Oauth access token was not received");
	                                                    }
	                                                    deferred.resolve(parameterMap);
	                                                })
	                                                .error(function(error) {
	                                                    deferred.reject(error);
	                                                })
	                                                .finally(function() {
	                                                    setTimeout(function() {
	                                                        browserRef.close();
	                                                    }, 10);
	                                                });
	                                        }
	                                    });
	                                    browserRef.addEventListener('exit', function(event) {
	                                        deferred.reject("The sign in flow was canceled");
	                                    });
	                                })
	                                .error(function(error) {
	                                    deferred.reject(error);
	                                });
	                        } else {
	                            deferred.reject("Missing jsSHA JavaScript library");
	                        }
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	            * Sign into the Meetup service
	            *
	            * @param    string clientId
	            * @param    object options
	            * @return   promise
	            */
	            meetup: function(clientId, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://secure.meetup.com/oauth2/authorize/?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = {};
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve(parameterMap);
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Salesforce service
	             *
	             * Suggestion: use salesforce oauth with forcetk.js(as SDK)
	             *
	             * @param    string loginUrl (such as: https://login.salesforce.com ; please notice community login)
	             * @param    string clientId (copy from connection app info)
	             * @param    string redirectUri (callback url in connection app info)
	             * @return   promise
	             */
	            salesforce: function (loginUrl, clientId) {
	                var redirectUri = 'http://localhost/callback';
	                var getAuthorizeUrl = function (loginUrl, clientId, redirectUri) {
	                    return loginUrl+'services/oauth2/authorize?display=touch'+
	                        '&response_type=token&client_id='+escape(clientId)+
	                        '&redirect_uri='+escape(redirectUri);
	                };
	                var startWith = function(string, str) {
	                    return (string.substr(0, str.length) === str);
	                };
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var browserRef = window.open(getAuthorizeUrl(loginUrl, clientId, redirectUri), "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
	                        browserRef.addEventListener("loadstart", function(event) {
	                            if(startWith(event.url, redirectUri)) {
	                                var oauthResponse = {};

	                                var fragment = (event.url).split('#')[1];

	                                if (fragment) {
	                                    var nvps = fragment.split('&');
	                                    for (var nvp in nvps) {
	                                          var parts = nvps[nvp].split('=');
	                                          oauthResponse[parts[0]] = unescape(parts[1]);
	                                    }
	                                }

	                                if (typeof oauthResponse === 'undefined' ||
	                                    typeof oauthResponse.access_token === 'undefined') {
	                                    deferred.reject("Problem authenticating");
	                                } else {
	                                    deferred.resolve(oauthResponse);
	                                }
	                                setTimeout(function() {
	                                    browserRef.close();
	                                }, 10);
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	            * Sign into the Strava service
	            *
	            * @param    string clientId
	            * @param    string clientSecret
	            * @param    array appScope
	            * @param    object options
	            * @return   promise
	            */
	            strava: function(clientId, clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://www.strava.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope.join(",") + '&response_type=code&approval_prompt=force', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://www.strava.com/oauth/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + requestToken })
	                                .success(function(data) {
	                                    deferred.resolve(data);
	                                })
	                                .error(function(data, status) {
	                                    deferred.reject("Problem authenticating");
	                                })
	                                .finally(function() {
	                                    setTimeout(function() {
	                                        browserRef.close();
	                                    }, 10);
	                                });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Withings service
	             * Note that this service requires jsSHA for generating HMAC-SHA1 Oauth 1.0 signatures
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @return   promise
	             */
	            withings: function(clientId, clientSecret) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        if(typeof jsSHA !== "undefined") {

	                            // Step 1 : get a oAuth "request token"
	                            var oauthObject = $cordovaOauthUtility.generateOauthParametersInstance(clientId);
	                            oauthObject.oauth_callback = 'http://localhost/callback';

	                            var requestTokenUrlBase = "https://oauth.withings.com/account/request_token";
	                            var signatureObj = $cordovaOauthUtility.createSignature("GET", requestTokenUrlBase, {}, oauthObject, clientSecret);
	                            oauthObject.oauth_signature = signatureObj.signature;

	                            var requestTokenParameters = $cordovaOauthUtility.generateUrlParameters(oauthObject);

	                            $http({method: "get", url: requestTokenUrlBase + "?" + requestTokenParameters })
	                                .success(function(requestTokenResult) {

	                                    // Step 2 : End-user authorization
	                                    var parameterMap = $cordovaOauthUtility.parseResponseParameters(requestTokenResult);
	                                    if(parameterMap.hasOwnProperty("oauth_token") === false) {
	                                        deferred.reject("Oauth request token was not received");
	                                    }
	                                    var oauthObject = $cordovaOauthUtility.generateOauthParametersInstance(clientId);
	                                    oauthObject.oauth_token = parameterMap.oauth_token;

	                                    // used in step 3
	                                    var oauthTokenSecret = parameterMap.oauth_token_secret;

	                                    var authorizeUrlBase = "https://oauth.withings.com/account/authorize";
	                                    var signatureObj = $cordovaOauthUtility.createSignature("GET", authorizeUrlBase, {}, oauthObject, clientSecret);
	                                    oauthObject.oauth_signature = signatureObj.signature;

	                                    var authorizeParameters = $cordovaOauthUtility.generateUrlParameters(oauthObject);
	                                    var browserRef = window.open(authorizeUrlBase + '?' + authorizeParameters, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');

	                                    // STEP 3: User Data Access token
	                                    browserRef.addEventListener('loadstart', function(event) {
	                                        if((event.url).indexOf("http://localhost/callback") === 0) {
	                                            var callbackResponse = (event.url).split("?")[1];
	                                            parameterMap = $cordovaOauthUtility.parseResponseParameters(callbackResponse);
	                                            if(parameterMap.hasOwnProperty("oauth_verifier") === false) {
	                                                deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
	                                            }

	                                            var oauthObject = $cordovaOauthUtility.generateOauthParametersInstance(clientId);
	                                            oauthObject.oauth_token = parameterMap.oauth_token;

	                                            var accessTokenUrlBase = "https://oauth.withings.com/account/access_token";
	                                            var signatureObj = $cordovaOauthUtility.createSignature("GET", accessTokenUrlBase, {}, oauthObject, clientSecret, oauthTokenSecret);
	                                            oauthObject.oauth_signature = signatureObj.signature;

	                                            var accessTokenParameters = $cordovaOauthUtility.generateUrlParameters(oauthObject);

	                                            $http({method: "get", url: accessTokenUrlBase + '?' + accessTokenParameters})
	                                                .success(function(result) {
	                                                    var parameterMap = $cordovaOauthUtility.parseResponseParameters(result);
	                                                    if(parameterMap.hasOwnProperty("oauth_token_secret") === false) {
	                                                        deferred.reject("Oauth access token was not received");
	                                                    }
	                                                    deferred.resolve(parameterMap);
	                                                })
	                                                .error(function(error) {
	                                                    deferred.reject(error);
	                                                })
	                                                .finally(function() {
	                                                    setTimeout(function() {
	                                                        browserRef.close();
	                                                    }, 10);
	                                                });
	                                        }
	                                    });
	                                    browserRef.addEventListener('exit', function(event) {
	                                        deferred.reject("The sign in flow was canceled");
	                                    });
	                                })
	                                .error(function(error) {
	                                    deferred.reject(error);
	                                });
	                        } else {
	                            deferred.reject("Missing jsSHA JavaScript library");
	                        }
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	            * Sign into the Foursquare service
	            *
	            * @param    string clientId
	            * @param    object options
	            * @return   promise
	            */
	            foursquare: function(clientId, options) {
	                var deferred = $q.defer();
	                if (window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if ($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://foursquare.com/oauth2/authenticate?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function (event) {
	                            if ((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for (var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    var promiseResponse = {
	                                        access_token: parameterMap.access_token,
	                                        expires_in: parameterMap.expires_in
	                                    };
	                                    deferred.resolve(promiseResponse);
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	            * Sign into the Magento service
	            * Note that this service requires jsSHA for generating HMAC-SHA1 Oauth 1.0 signatures
	            *
	            * @param    string baseUrl
	            * @param    string clientId
	            * @param    string clientSecret
	            * @return   promise
	            */
	            magento: function(baseUrl, clientId, clientSecret) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        if(typeof jsSHA !== "undefined") {
	                            var oauthObject = {
	                                oauth_callback: "http://localhost/callback",
	                                oauth_consumer_key: clientId,
	                                oauth_nonce: $cordovaOauthUtility.createNonce(5),
	                                oauth_signature_method: "HMAC-SHA1",
	                                oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
	                                oauth_version: "1.0"
	                            };
	                            var signatureObj = $cordovaOauthUtility.createSignature("POST", baseUrl + "/oauth/initiate", oauthObject,  { oauth_callback: "http://localhost/callback" }, clientSecret);
	                            $http.defaults.headers.post.Authorization = signatureObj.authorization_header;
	                            $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                            $http({method: "post", url: baseUrl + "/oauth/initiate", data: "oauth_callback=http://localhost/callback" })
	                            .success(function(requestTokenResult) {
	                                var requestTokenParameters = (requestTokenResult).split("&");
	                                var parameterMap = {};
	                                for(var i = 0; i < requestTokenParameters.length; i++) {
	                                    parameterMap[requestTokenParameters[i].split("=")[0]] = requestTokenParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.hasOwnProperty("oauth_token") === false) {
	                                    deferred.reject("Oauth request token was not received");
	                                }
	                                var tokenSecret = parameterMap.oauth_token_secret;
	                                var browserRef = window.open(baseUrl + '/oauth/authorize?oauth_token=' + parameterMap.oauth_token, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                                browserRef.addEventListener('loadstart', function(event) {
	                                    if((event.url).indexOf("http://localhost/callback") === 0) {
	                                        var callbackResponse = (event.url).split("?")[1];
	                                        var responseParameters = (callbackResponse).split("&");
	                                        var parameterMap = {};
	                                        for(var i = 0; i < responseParameters.length; i++) {
	                                            parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                        }
	                                        if(parameterMap.hasOwnProperty("oauth_verifier") === false) {
	                                            deferred.reject("Browser authentication failed to complete.  No oauth_verifier was returned");
	                                        }
	                                        delete oauthObject.oauth_signature;
	                                        delete oauthObject.oauth_callback;
	                                        oauthObject.oauth_token = parameterMap.oauth_token;
	                                        oauthObject.oauth_nonce = $cordovaOauthUtility.createNonce(5);
	                                        oauthObject.oauth_verifier = parameterMap.oauth_verifier;
	                                        var signatureObj = $cordovaOauthUtility.createSignature("POST", baseUrl + "/oauth/token", oauthObject,  {}, clientSecret, tokenSecret);
	                                        $http.defaults.headers.post.Authorization = signatureObj.authorization_header;
	                                        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                        $http({method: "post", url: baseUrl + "/oauth/token" })
	                                        .success(function(result) {
	                                            var accessTokenParameters = result.split("&");
	                                            var parameterMap = {};
	                                            for(var i = 0; i < accessTokenParameters.length; i++) {
	                                                parameterMap[accessTokenParameters[i].split("=")[0]] = accessTokenParameters[i].split("=")[1];
	                                            }
	                                            if(parameterMap.hasOwnProperty("oauth_token_secret") === false) {
	                                                deferred.reject("Oauth access token was not received");
	                                            }
	                                            deferred.resolve(parameterMap);
	                                        })
	                                        .error(function(error) {
	                                            deferred.reject(error);
	                                        })
	                                        .finally(function() {
	                                            setTimeout(function() {
	                                                browserRef.close();
	                                            }, 10);
	                                        });
	                                    }
	                                });
	                                browserRef.addEventListener('exit', function(event) {
	                                    deferred.reject("The sign in flow was canceled");
	                                });
	                            })
	                            .error(function(error) {
	                                deferred.reject(error);
	                            });
	                        } else {
	                            deferred.reject("Missing jsSHA JavaScript library");
	                        }
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Vkontakte service
	             *
	             * @param    string clientId
	             * @param    array appScope (for example: "friends,wall,photos,messages")
	             * @return   promise
	             */
	            vkontakte: function(clientId, appScope) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var browserRef = window.open('https://oauth.vk.com/authorize?client_id=' + clientId + '&redirect_uri=http://oauth.vk.com/blank.html&response_type=token&scope=' + appScope.join(",") + '&display=touch&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            var tmp = (event.url).split("#");
	                            if (tmp[0] == 'https://oauth.vk.com/blank.html' || tmp[0] == 'http://oauth.vk.com/blank.html') {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    var output = { access_token: parameterMap.access_token, expires_in: parameterMap.expires_in };
	                                    if(parameterMap.email !== undefined && parameterMap.email !== null){
	                                        output.email = parameterMap.email;
	                                    }
	                                    deferred.resolve(output);
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

				/*
	            * Sign into the Odnoklassniki service
	            *
	            * @param    string clientId
	            * @param    array appScope (for example: "VALUABLE_ACCESS ,GROUP_CONTENT,VIDEO_CONTENT")
	            * @return   promise
	            */
	            odnoklassniki: function (clientId, appScope)
	            {
	                var deferred = $q.defer();
	                if (window.cordova)
	                {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if ($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true)
	                    {
	                        var browserRef = window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id=' + clientId + '&scope=' + appScope.join(",") + '&response_type=token&redirect_uri=http://localhost/callback' + '&layout=m', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function (event)
	                        {
	                            if ((event.url).indexOf("http://localhost/callback") === 0)
	                            {
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for (var i = 0; i < responseParameters.length; i++)
	                                {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if (parameterMap.access_token !== undefined && parameterMap.access_token !== null)
	                                {
	                                    deferred.resolve({ access_token: parameterMap.access_token, session_secret_key: parameterMap.session_secret_key });
	                                } else
	                                {
	                                    deferred.reject("Problem authenticating");
	                                }
	                                setTimeout(function ()
	                                {
	                                    browserRef.close();
	                                }, 10);
	                            }
	                        });
	                        browserRef.addEventListener('exit', function (event)
	                        {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else
	                    {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else
	                {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },


	            /*
	             * Sign into the Imgur service
	             *
	             * @param    string clientId
	             * @param    object options
	             * @return   promise
	             */
	            imgur: function(clientId, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://api.imgur.com/oauth2/authorize?client_id=' + clientId + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in, account_username: parameterMap.account_username });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Spotify service
	             *
	             * @param    string clientId
	             * @param    object options
	             * @return   promise
	             */
	            spotify: function(clientId, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://accounts.spotify.com/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in, account_username: parameterMap.account_username });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Uber service
	             *
	             * @param    string clientId
	             * @param    appScope array
	             * @param    object options
	             * @return   promise
	             */
	            uber: function(clientId, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://login.uber.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                browserRef.removeEventListener("exit",function(event){});
	                                browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, token_type: parameterMap.token_type, expires_in: parameterMap.expires_in, scope: parameterMap.scope });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Windows Live Connect service
	             *
	             * @param    string clientId
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	            */
	            windowsLive: function (clientId, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "https://login.live.com/oauth20_desktop.srf";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://login.live.com/oauth20_authorize.srf?client_id=' + clientId + "&scope=" + appScope.join(",") + '&response_type=token&display=touch' + '&redirect_uri=' + redirect_uri, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function (event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                browserRef.removeEventListener("exit", function (event) { });
	                                browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for (var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function (event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Yammer service
	             *
	             * @param    string clientId
	             * @param    object options
	             * @return   promise
	             */
	            yammer: function(clientId, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://www.yammer.com/dialog/oauth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Venmo service
	             *
	             * @param    string clientId
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            venmo: function(clientId, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://api.venmo.com/v1/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Stripe service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    string appScope
	             * @param    object options
	             * @return   promise
	             */
	            stripe: function(clientId, clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://connect.stripe.com/oauth/authorize?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf("http://localhost/callback") === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://connect.stripe.com/oauth/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Rally service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    string appScope
	             * @param    object options
	             * @return   promise
	             */
	            rally: function(clientId, clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://rally1.rallydev.com/login/oauth2/auth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&scope=' + appScope + '&response_type=code', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf("http://localhost/callback") === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://rally1.rallydev.com/login/oauth2/auth", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code" + "&code=" + requestToken })
	                                    .success(function(data) {
	                                        deferred.resolve(data);
	                                    })
	                                    .error(function(data, status) {
	                                        deferred.reject("Problem authenticating");
	                                    })
	                                    .finally(function() {
	                                        setTimeout(function() {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the FamilySearch service
	             *
	             * @param    string clientId
	             * @param    object options
	             * @return   promise
	             */
	            familySearch: function(clientId, state, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if(cordovaMetadata.hasOwnProperty("cordova-plugin-inappbrowser") === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open("https://ident.familysearch.org/cis-web/oauth2/v3/authorization?client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&response_type=code&state=" + state, "_blank", "location=no,clearsessioncache=yes,clearcache=yes");
	                        browserRef.addEventListener("loadstart", function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                var requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://ident.familysearch.org/cis-web/oauth2/v3/token", data: "client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&grant_type=authorization_code&code=" + requestToken })
	                                  .success(function(data) {
	                                      deferred.resolve(data);
	                                  })
	                                  .error(function(data, status) {
	                                      deferred.reject("Problem authenticating");
	                                  })
	                                  .finally(function() {
	                                      setTimeout(function() {
	                                          browserRef.close();
	                                      }, 10);
	                                  });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Envato service
	             *
	             * @param    string clientId
	             * @param    object options
	             * @return   promise
	             */
	            envato: function(clientId, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://api.envato.com/authorization?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                            	browserRef.removeEventListener("exit",function(event){});
	                            	browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for(var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    deferred.resolve({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Weibo service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    array appScope
	             * @param    object options
	             * @return   promise
	             */
	            weibo: function(clientId, clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var flowUrl = "https://open.weibo.cn/oauth2/authorize?display=mobile&client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&scope=" + appScope.join(",");
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("language")) {
	                                flowUrl += "&language=" + options.language;
	                            }
	                            if(options.hasOwnProperty("forcelogin")) {
	                                flowUrl += "&forcelogin=" + options.forcelogin;
	                            }

	                        }
	                        var browserRef = window.open(flowUrl, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                                requestToken = (event.url).split("code=")[1];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http({method: "post", url: "https://api.weibo.com/oauth2/access_token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&grant_type=authorization_code&code=" + requestToken + "&redirect_uri=" + redirect_uri})
	                                .success(function(data) {
	                                    deferred.resolve(data);
	                                })
	                                .error(function(data, status) {
	                                    deferred.reject("Problem authenticating");
	                                })
	                                .finally(function() {
	                                    setTimeout(function() {
	                                        browserRef.close();
	                                    }, 10);
	                                });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Jawbone service
	             *
	             * @param    string clientId
	             * @param    string clientSecret
	             * @param    string appScope
	             * @param    object options
	             * @return   promise
	             */
	            jawbone: function(clientId,clientSecret, appScope, options) {
	                var deferred = $q.defer();
	                if(window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        var browserRef = window.open('https://jawbone.com/auth/oauth2/auth?client_id=' + clientId + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=' + appScope.join(" "), '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');

	                        browserRef.addEventListener('loadstart', function(event) {
	                            if((event.url).indexOf(redirect_uri) === 0) {
	                              var requestToken = (event.url).split("code=")[1];

	                              $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                              $http({method: "post", url: "https://jawbone.com/auth/oauth2/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&grant_type=authorization_code&code=" + requestToken })
	                                .success(function(data) {
	                                    deferred.resolve(data);
	                                })
	                                .error(function(data, status) {
	                                    deferred.reject("Problem authenticating");
	                                })
	                                .finally(function() {
	                                    setTimeout(function() {
	                                        browserRef.close();
	                                    }, 10);
	                                });

	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	            * Sign into the Untappd service
	            *
	            * @param    string clientId
	            * @param    object options
	            * @return   promise
	            */
	            untappd: function(clientId, options) {
	                var deferred = $q.defer();
	                if (window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if ($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_url = "http://localhost/callback";
	                        if(options !== undefined) {
	                            if(options.hasOwnProperty("redirect_url")) {
	                                redirect_url = options.redirect_url;
	                            }
	                        }
	                        var browserRef = window.open('https://untappd.com/oauth/authenticate/?client_id=' + clientId + '&redirect_url=' + redirect_url + '&response_type=token', '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function (event) {
	                            if ((event.url).indexOf(redirect_url) === 0) {
	                                browserRef.removeEventListener("exit",function(event){});
	                                browserRef.close();
	                                var callbackResponse = (event.url).split("#")[1];
	                                var responseParameters = (callbackResponse).split("&");
	                                var parameterMap = [];
	                                for (var i = 0; i < responseParameters.length; i++) {
	                                    parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
	                                }
	                                if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
	                                    var promiseResponse = {
	                                        access_token: parameterMap.access_token
	                                    };
	                                    deferred.resolve(promiseResponse);
	                                } else {
	                                    deferred.reject("Problem authenticating");
	                                }
	                            }
	                        });
	                        browserRef.addEventListener('exit', function(event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            },

	            /*
	             * Sign into the Dribble service
	             *
	             * @param    string clientId                  REQUIRED
	             * @param    string clientSecret              REQUIRED
	             * @param    object Array appScope            REQUIRED
	             * @param    object options (redirect_uri)    OPTIONAL
	             * @param    state  string                    OPTIONAL
	             * @return   promise
	             */

	            dribble: function (clientId, clientSecret, appScope, options, state) {
	                var deferred = $q.defer();
	                if (window.cordova) {
	                    var cordovaMetadata = cordova.require("cordova/plugin_list").metadata;
	                    if ($cordovaOauthUtility.isInAppBrowserInstalled(cordovaMetadata) === true) {
	                        var redirect_uri = "http://localhost/callback";
	                        var OAUTH_URL = 'https://dribbble.com/oauth/authorize';
	                        var ACCESS_TOKEN_URL = 'https://dribbble.com/oauth/token';
	                        if (options !== undefined) {
	                            if (options.hasOwnProperty("redirect_uri")) {
	                                redirect_uri = options.redirect_uri;
	                            }
	                        }
	                        if (state === undefined) {
	                            state = $cordovaOauthUtility.createNonce(5);
	                        }
	                        var scope = appScope.join(",").replace(/,/g, '+');  //dribble scopes are passed with +
	                        var browserRef = window.open(OAUTH_URL + '?client_id=' + clientId + '&redirect_uri=' + redirect_uri +
	                        '&scope=' + scope + '&state=' + state, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
	                        browserRef.addEventListener('loadstart', function (event) {
	                            if ((event.url).indexOf(redirect_uri) === 0) {
	                                var callBackCode = (event.url).split("code=")[1];
	                                var code = callBackCode.split("&")[0];
	                                $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	                                $http(
	                                    {   method: "post",
	                                        url: ACCESS_TOKEN_URL,
	                                        data: "client_id=" + clientId + "&redirect_uri=" + redirect_uri + "&client_secret=" + clientSecret + "&code=" + code
	                                    })
	                                    .success(function (res) {
	                                        deferred.resolve(res);
	                                    }).error(function (data, status) {
	                                        deferred.reject("Problem authenticating " );
	                                    }).finally(function () {
	                                        setTimeout(function () {
	                                            browserRef.close();
	                                        }, 10);
	                                    });
	                            }
	                        });
	                        browserRef.addEventListener('exit', function (event) {
	                            deferred.reject("The sign in flow was canceled");
	                        });
	                    } else {
	                        deferred.reject("Could not find InAppBrowser plugin");
	                    }
	                } else {
	                    deferred.reject("Cannot authenticate via a web browser");
	                }
	                return deferred.promise;
	            }

	        };

	    }]);

	/*
	 * Cordova AngularJS Oauth
	 *
	 * Created by Nic Raboy
	 * http://www.nraboy.com
	 *
	 *
	 *
	 * DESCRIPTION:
	 *
	 * Use Oauth sign in for various web services.
	 *
	 *
	 * REQUIRES:
	 *
	 *    Apache Cordova 3.5+
	 *    Apache InAppBrowser Plugin
	 *    Apache Cordova Whitelist Plugin
	 *
	 *
	 * SUPPORTS:
	 *
	 *    Dropbox
	 *    Digital Ocean
	 *    Google
	 *    GitHub
	 *    Facebook
	 *    LinkedIn
	 *    Instagram
	 *    Box
	 *    Reddit
	 *    Twitter
	 *    Meetup
	 *    Salesforce
	 *    Strava
	 *    Withings
	 *    Foursquare
	 *    Magento
	 *    vkontakte
	 *    Odnoklassniki
	 *    ADFS
	 *    Imgur
	 *    Spotify
	 *    Uber
	 *    Windows Live Connect
	 *    Yammer
	 *    Venmo
	 *    Stripe
	 *    Rally
	 *    Family Search
	 *    Envato
	 *    Slack
	 *    Jawbone
	 *    Untappd
	 */

	angular.module("ngCordovaOauth", [
	    "oauth.providers",
	    "oauth.utils"
	]);

	angular.module("oauth.utils", [])

	    .factory("$cordovaOauthUtility", ["$q", function($q) {

	        return {

	            /*
	             * Check to see if the mandatory InAppBrowser plugin is installed
	             *
	             * @param
	             * @return   boolean
	             */
	            isInAppBrowserInstalled: function(cordovaMetadata) {
	                var inAppBrowserNames = ["cordova-plugin-inappbrowser", "org.apache.cordova.inappbrowser"];

	                return inAppBrowserNames.some(function(name) {
	                    return cordovaMetadata.hasOwnProperty(name);
	                });
	            },

	            /*
	             * Sign an Oauth 1.0 request
	             *
	             * @param    string method
	             * @param    string endPoint
	             * @param    object headerParameters
	             * @param    object bodyParameters
	             * @param    string secretKey
	             * @param    string tokenSecret (optional)
	             * @return   object
	             */
	            createSignature: function(method, endPoint, headerParameters, bodyParameters, secretKey, tokenSecret) {
	                if(typeof jsSHA !== "undefined") {
	                    var headerAndBodyParameters = angular.copy(headerParameters);
	                    var bodyParameterKeys = Object.keys(bodyParameters);
	                    for(var i = 0; i < bodyParameterKeys.length; i++) {
	                        headerAndBodyParameters[bodyParameterKeys[i]] = encodeURIComponent(bodyParameters[bodyParameterKeys[i]]);
	                    }
	                    var signatureBaseString = method + "&" + encodeURIComponent(endPoint) + "&";
	                    var headerAndBodyParameterKeys = (Object.keys(headerAndBodyParameters)).sort();
	                    for(i = 0; i < headerAndBodyParameterKeys.length; i++) {
	                        if(i == headerAndBodyParameterKeys.length - 1) {
	                            signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]]);
	                        } else {
	                            signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]] + "&");
	                        }
	                    }
	                    var oauthSignatureObject = new jsSHA(signatureBaseString, "TEXT");

	                    var encodedTokenSecret = '';
	                    if (tokenSecret) {
	                        encodedTokenSecret = encodeURIComponent(tokenSecret);
	                    }

	                    headerParameters.oauth_signature = encodeURIComponent(oauthSignatureObject.getHMAC(encodeURIComponent(secretKey) + "&" + encodedTokenSecret, "TEXT", "SHA-1", "B64"));
	                    var headerParameterKeys = Object.keys(headerParameters);
	                    var authorizationHeader = 'OAuth ';
	                    for(i = 0; i < headerParameterKeys.length; i++) {
	                        if(i == headerParameterKeys.length - 1) {
	                            authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '"';
	                        } else {
	                            authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '",';
	                        }
	                    }
	                    return { signature_base_string: signatureBaseString, authorization_header: authorizationHeader, signature: headerParameters.oauth_signature };
	                } else {
	                    return "Missing jsSHA JavaScript library";
	                }
	            },

	            /*
	            * Create Random String Nonce
	            *
	            * @param    integer length
	            * @return   string
	            */
	            createNonce: function(length) {
	                var text = "";
	                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	                for(var i = 0; i < length; i++) {
	                    text += possible.charAt(Math.floor(Math.random() * possible.length));
	                }
	                return text;
	            },

	            generateUrlParameters: function (parameters) {
	                var sortedKeys = Object.keys(parameters);
	                sortedKeys.sort();

	                var params = "";
	                var amp = "";

	                for (var i = 0 ; i < sortedKeys.length; i++) {
	                    params += amp + sortedKeys[i] + "=" + parameters[sortedKeys[i]];
	                    amp = "&";
	                }

	                return params;
	            },

	            parseResponseParameters: function (response) {
	                if (response.split) {
	                    var parameters = response.split("&");
	                    var parameterMap = {};
	                    for(var i = 0; i < parameters.length; i++) {
	                        parameterMap[parameters[i].split("=")[0]] = parameters[i].split("=")[1];
	                    }
	                    return parameterMap;
	                }
	                else {
	                    return {};
	                }
	            },

	            generateOauthParametersInstance: function(consumerKey) {
	                var nonceObj = new jsSHA(Math.round((new Date()).getTime() / 1000.0), "TEXT");
	                var oauthObject = {
	                    oauth_consumer_key: consumerKey,
	                    oauth_nonce: nonceObj.getHash("SHA-1", "HEX"),
	                    oauth_signature_method: "HMAC-SHA1",
	                    oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
	                    oauth_version: "1.0"
	                };
	                return oauthObject;
	            }

	        };

	    }]);

	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module('ionic.service.core', [])
	/**
	 * @private
	 * Provides a safe interface to store objects in persistent memory
	 */
	.provider('persistentStorage', function() {
	  return {
	    $get: ['$q', '$window', function($q, $window) {
	      var objectCache = {};
	      var memoryLocks = {};

	      var persistenceStrategy = {
	        get: function(key) {
	          return $window.localStorage.getItem(key);
	        },
	        remove: function(key) {
	          return $window.localStorage.removeItem(key);
	        },
	        set: function(key, value) {
	          return $window.localStorage.setItem(key, value);
	        }
	      };

	      return {
	        /**
	         * Stores an object in local storage under the given key
	        */
	        storeObject: function(key, object) {

	          // Convert object to JSON and store in localStorage
	          var json = JSON.stringify(object);
	          persistenceStrategy.set(key, json);

	          // Then store it in the object cache
	          objectCache[key] = object;
	        },

	        /**
	         * Either retrieves the cached copy of an object,
	         * or the object itself from localStorage.
	         * Returns null if the object couldn't be found.
	        */
	        retrieveObject: function(key) {

	          // First check to see if it's the object cache
	          var cached = objectCache[key];
	          if (cached) {
	            return cached;
	          }

	          // Deserialize the object from JSON
	          var json = persistenceStrategy.get(key);

	          // null or undefined --> return null.
	          if (json == null) {
	            return null;
	          }

	          try {
	            return JSON.parse(json);
	          } catch (err) {
	            return null;
	          }
	        },

	        /**
	         * Locks the async call represented by the given promise and lock key.
	         * Only one asyncFunction given by the lockKey can be running at any time.
	         *
	         * @param lockKey should be a string representing the name of this async call.
	         *        This is required for persistence.
	         * @param asyncFunction Returns a promise of the async call.
	         * @returns A new promise, identical to the one returned by asyncFunction,
	         *          but with two new errors: 'in_progress', and 'last_call_interrupted'.
	        */
	        lockedAsyncCall: function(lockKey, asyncFunction) {

	          var deferred = $q.defer();

	          // If the memory lock is set, error out.
	          if (memoryLocks[lockKey]) {
	            deferred.reject('in_progress');
	            return deferred.promise;
	          }

	          // If there is a stored lock but no memory lock, flag a persistence error
	          if (persistenceStrategy.get(lockKey) === 'locked') {
	            deferred.reject('last_call_interrupted');
	            deferred.promise.then(null, function() {
	              persistenceStrategy.remove(lockKey);
	            });
	            return deferred.promise;
	          }

	          // Set stored and memory locks
	          memoryLocks[lockKey] = true;
	          persistenceStrategy.set(lockKey, 'locked');

	          // Perform the async operation
	          asyncFunction().then(function(successData) {
	            deferred.resolve(successData);

	            // Remove stored and memory locks
	            delete memoryLocks[lockKey];
	            persistenceStrategy.remove(lockKey);
	          }, function(errorData) {
	            deferred.reject(errorData);

	            // Remove stored and memory locks
	            delete memoryLocks[lockKey];
	            persistenceStrategy.remove(lockKey);
	          }, function(notifyData) {
	            deferred.notify(notifyData);
	          });

	          return deferred.promise;
	        }
	      };
	    }]
	  };
	})

	/**
	 * A core Ionic account identity provider.
	 *
	 * Usage:
	 * angular.module('myApp', ['ionic', 'ionic.service.core'])
	 * .config(['$ionicAppProvider', function($ionicAccountProvider) {
	 *   $ionicAppProvider.identify({
	 *     app_id: 'x34dfxjydi23dx'
	 *   });
	 * }]);
	 */
	.provider('$ionicApp', ['$httpProvider', function($httpProvider) {
	  var app = {};

	  var settings = {
	    'api_server': 'https://apps.ionic.io',
	    'push_api_server': 'https://push.ionic.io',
	    'analytics_api_server': 'https://analytics.ionic.io'
	  };

	  var _is_cordova_available = function() {

	    console.log('Ionic Core: searching for cordova.js');

	    try {
	      if (window.cordova || cordova) {
	        console.log('Ionic Core: cordova.js has already been loaded');
	        return true;
	      }
	    } catch(e) {}

	    var scripts = document.getElementsByTagName('script');
	    var len = scripts.length;
	    for(var i = 0; i < len; i++) {
	      var script = scripts[i].getAttribute('src');
	      if(script) {
	        var parts = script.split('/');
	        var partsLength = 0;
	        try {
	          partsLength = parts.length;
	          if (parts[partsLength-1] === 'cordova.js') {
	            console.log('Ionic Core: cordova.js has previously been included.');
	            return true;
	          }
	        } catch(e) {}
	      }
	    }

	    return false;
	  };

	  this.identify = function(opts) {
	  if (!opts.gcm_id){
	    opts.gcm_id = 'None';
	  }
	    app = opts;
	  };

	  /**
	   * Set a config property.
	   */
	  this.set = function(k, v) {
	    settings[k] = v;
	  };

	  this.setApiServer = function(server) {
	    settings.api_server = server;
	  };

	  this.$get = [function() {
	    return {
	      getId: function() {
	        return app.app_id;
	      },
	      getGcmId: function(){
	        return app.gcm_id;
	      },
	      getValue: function(k) {
	        return settings[k];
	      },
	      getApiUrl: function() {
	        return this.getValue('api_server');
	      },
	      getApiKey: function() {
	        return app.api_key;
	      },
	      getApiEndpoint: function(service) {
	        var app = this.getApp();
	        if(!app) return null;

	        return this.getApiUrl() + '/api/v1/' + app.app_id + '/' + service;
	      },

	      /**
	       * Get the registered app for all commands.
	       */
	      getApp: function() {
	        return app;
	      },

	      getDeviceTypeByNavigator: function() {
	        return (navigator.userAgent.match(/iPad/i))  == "iPad" ? "ipad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iphone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "blackberry" : "unknown";
	      },

	      loadCordova: function() {
	        if(!_is_cordova_available()) {
	          var cordova_script = document.createElement('script');
	          var cordova_src = 'cordova.js';
	          switch(this.getDeviceTypeByNavigator()) {
	            case 'android':
	              if (window.location.href.substring(0, 4) === "file") {
	                cordova_src = 'file:///android_asset/www/cordova.js';
	              }
	              break;

	            case 'ipad':
	            case 'iphone':
	              try {
	                var resource = window.location.search.match(/cordova_js_bootstrap_resource=(.*?)(&|#|$)/i);
	                if (resource) {
	                  cordova_src = decodeURI(resource[1]);
	                }
	              } catch(e) {
	                console.log('Could not find cordova_js_bootstrap_resource query param');
	                console.log(e);
	              }
	              break;

	            case 'unknown':
	              return false;

	            default:
	              break;
	          }
	          cordova_script.setAttribute('src', cordova_src);
	          document.head.appendChild(cordova_script);
	          console.log('Ionic Core: injecting cordova.js');
	        }
	      },

	      bootstrap: function() {
	        this.loadCordova();
	      }
	    }
	  }];
	}])

	/**
	* @ngdoc service
	* @name $ionicUser
	* @module ionic.service.core
	* @description
	*
	* An interface for storing data to a user object which will be sent with many ionic services
	*
	* Add tracking data to the user by passing objects in to the identify function.
	* The _id property identifies the user on this device and cannot be overwritten.
	*
	* @usage
	* ```javascript
	* $ionicUser.get();
	*
	* // Add info to user object
	* $ionicUser.identify({
	*   username: "Timmy"
	* });
	*
	* ```
	*/
	.factory('$ionicUser', [
	  '$q',
	  '$ionicCoreSettings',
	  '$timeout',
	  '$http',
	  'persistentStorage',
	  '$ionicApp',
	function($q, $ionicCoreSettings, $timeout, $http, persistentStorage, $ionicApp) {
	      // User object we'll use to store all our user info


	  var storageKeyName = 'ionic_analytics_user_' + $ionicApp.getApp().app_id,
	      user = persistentStorage.retrieveObject(storageKeyName) || {},
	      deviceCordova = ionic.Platform.device(),
	      device = {
	          screen_width: window.innerWidth * (window.devicePixelRatio || 1),
	          screen_height: window.innerHeight * (window.devicePixelRatio || 1)
	      };

	  if (deviceCordova.model) device.model = deviceCordova.model;
	  if (deviceCordova.platform) device.platform = deviceCordova.platform;
	  if (deviceCordova.version) device.version = deviceCordova.version;
	  if (deviceCordova.uuid) device.uuid = deviceCordova.uuid;

	  // Flag if we've changed anything on our user
	  var dirty = false;
	  dirty = storeOrDirty('is_on_device', ionic.Platform.isWebView());
	  dirty = storeOrDirty('device', device);
	  if (!user._id) {
	    user._id = generateGuid();
	    dirty = true;
	  }

	  if (dirty) {
	      persistentStorage.storeObject(storageKeyName, user);
	  }

	  function generateGuid() {
	    // Some crazy bit-twiddling to generate a random guid
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	      return v.toString(16);
	    });
	  }

	  function storeOrDirty(key, value) {
	    // Store the key on the user object and return whether something changed
	    if (!angular.equals(user[key], value)) {
	      user[key] = value;
	      return true;
	    }
	    return false;
	  }

	  return {
	    /**
	     * Push a value to the array with the given key.
	     * @param key the key
	     * @param value the value
	     * @param isUnique whether to only push if it doesn't exist in the set
	     *
	     */

	    _op: function(key, value, type) {
	      var u = user.user_id;
	      var appId = '';
	      if ($ionicCoreSettings.get('app_id')) {
	        appId = $ionicCoreSettings.get('app_id')
	      } else {
	        appId = $ionicApp.getId();
	      }
	      if(!u) {
	        throw new Error("Please call identify with a user_id before calling push");
	      }
	      var o = {};
	      o['user_id'] = u;
	      o[key] = value;

	      return $http.post($ionicApp.getApiUrl() + '/api/v1/app/' + appId + '/users/' + type, o);
	    },
	    /**
	     * Push the given value into the array field identified by the key.
	     * Pass true to isUnique to only push the value if the value does not
	     * already exist in the array.
	     */
	    push: function(key, value, isUnique) {
	      if(isUnique) {
	        return this._op(key, value, 'pushUnique');
	      } else {
	        return this._op(key, value, 'push');
	      }
	    },
	    /**
	     * Pull a given value out of the array identified by key.
	     */
	    pull: function(key, value) {
	      return this._op(key, value, 'pull');
	    },
	    /**
	     * Set the given value under the key in the user. This overwrites
	     * any other data under that field. To append data to list, use push above.
	     */
	    set: function(key, value) {
	      return this._op(key, value, 'set');
	    },
	    /**
	     * Remove the field for the given key.
	     */
	    unset: function(key) {
	      return this._op(key, '', 'unset');
	    },
	    generateGUID: function() {
	      return generateGuid();
	    },
	    identify: function(userData) {
	      var appId = '';
	      if ($ionicCoreSettings.get('app_id')) {
	        appId = $ionicCoreSettings.get('app_id')
	      } else {
	        appId = $ionicApp.getId();
	      }
	      if (!userData.user_id) {
	        var msg = 'You must supply a unique user_id field.';
	        throw new Error(msg)
	      }

	      // Copy all the data into our user object
	      angular.extend(user, userData);

	      // Write the user object to our local storage
	      persistentStorage.storeObject(storageKeyName, user);

	      return $http.post($ionicApp.getApiUrl() + '/api/v1/app/' + appId + '/users/identify', userData);
	    },
	    identifyAnonymous: function() {
	      var appId = '';
	      if ($ionicCoreSettings.get('app_id')) {
	        appId = $ionicCoreSettings.get('app_id')
	      } else {
	        appId = $ionicApp.getId();
	      }
	      userData = {};
	      userData['user_id'] = generateGuid();
	      userData['isAnonymous'] = true;

	      // Copy all the data into our user object
	      angular.extend(user, userData);

	      // Write the user object to our local storage
	      persistentStorage.storeObject(storageKeyName, user);

	      return $http.post($ionicApp.getApiUrl() + '/api/v1/app/' + appId + '/users/identify', userData);
	    },
	    get: function() {
	      return user;
	    }
	  }
	}])

	// Auto-generated configuration factory
	.factory('$ionicCoreSettings', function() {
	  var settings = {"app_id":"683c86a8","api_key":"8ebc80d1b1963f30e61726eddcbb6af20a8fbaa07051d7dc","dev_push":false, "gcm_key": "740291760693"};
	  return {
	    get: function(setting) {
	      if (settings[setting]) {
	        return settings[setting];
	      }
	      return null;
	    }
	  }
	})
	// Auto-generated configuration factory

	.run(['$ionicApp', function($ionicApp) {
	  console.log('Ionic Core: init');
	  $ionicApp.bootstrap();
	}]);


/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('ionic.service.push', ['ngCordova', 'ionic.service.core'])

	/**
	 * The Ionic Push service client wrapper.
	 *
	 * Example:
	 *
	 * angular.controller(['$scope', '$ionicPush', function($scope, $ionicPush) {
	 * }])
	 *
	 */
	.factory('$ionicPush', ['$http', '$cordovaPush','$cordovaLocalNotification', '$ionicApp', '$ionicPushActions', '$ionicUser', '$ionicCoreSettings', '$rootScope', '$log', '$q',

	function($http, $cordovaPush, $cordovaLocalNotification, $ionicApp, $ionicPushActions, $ionicUser, $ionicCoreSettings, $rootScope, $log, $q) {

	  // Grab the current app
	  var app = {}
	  var oldApp = $ionicApp.getApp();
	  if ($ionicCoreSettings.get('app_id') && $ionicCoreSettings.get('api_key')) {
	    // Get needed values form core settings
	    app.app_id = $ionicCoreSettings.get('app_id');
	    app.api_key = $ionicCoreSettings.get('api_key');
	    app.gcm_key = $ionicCoreSettings.get('gcm_key');
	    app.dev_push = $ionicCoreSettings.get('dev_push');

	    // Make sure we don't overwrite their old dev_push
	    if (oldApp.dev_push === false) {
	      app.dev_push = false;
	    }

	    if (!app.gcm_key) {
	      console.warn('PUSH: Unable to get GCM project number, run "ionic config set gcm_key your-gcm-id"');
	    }
	  } else {
	    console.warn('CORE: Unable to load app ID or API key, falling back to $ionicApp.getApp()...');
	    app = oldApp;
	    app.gcm_key = $ionicApp.getGcmId();
	  }

	  //Check for required credentials
	  if(!app || !app.app_id) {
	    console.error('PUSH: Unable to initialize, you must call $ionicAppProvider.identify() first');
	  }

	  function generateDevGuid() {
	    // Some crazy bit-twiddling to generate a random guid
	    return 'DEV-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	      return v.toString(16);
	    });
	  }

	  function init(options) {
	    var defer = $q.defer();

	    // TODO: This should be part of a config not a direct method
	    var gcmKey = app.gcm_key;
	    var api = $ionicApp.getValue('push_api_server');

	    //Default configuration
	    var config = {
	      "senderID": gcmKey,
	      "badge": true,
	      "sound": true,
	      "alert": true
	    };

	    /**
	     * For testing push notifications, set the dev_push flag in your config to true.
	     **/
	    if (app.dev_push) {
	      var localNotifications = false;
	      // If they have the local notification plugin, let them receive notifications with it, otherwise just do alerts
	      if (window.cordova && window.cordova.plugins && window.cordova.plugins.notification && window.cordova.plugins.notification.local) {
	        localNotifications = true;
	      }

	      var devToken = generateDevGuid();
	      var devHost = api + '/dev/push';

	      var req = {
	        method: 'POST',
	        url: devHost,
	        data: {
	          "dev_token": devToken
	        }
	      };

	      $http(req).success(function(resp){
	          console.log('$ionicPush:REGISTERED_DEV_MODE', devToken);
	          $rootScope.$emit('$cordovaPush:tokenReceived', {
	            token: devToken,
	            platform: 'none'
	          });
	          defer.resolve(devToken);
	        }).error(function(error){
	          console.log("$ionicPush: Error connecting dev_push service ", error);
	        });

	      var checkReq = {
	        method: 'GET',
	        url: devHost + '/check',
	        headers: {
	          'Content-Type': 'application/json',
	          'X-Ionic-Dev-Token': devToken
	        }
	      };

	      // Check for new dev pushes every 5 seconds
	      var checkPushes = setInterval(function(){
	        $http(checkReq).success(function(resp){
	          if (resp.messages.length > 0) {
	            var notification = {};
	            notification.alert = resp.messages[0];
	            console.warn("Calling onNotification() for a development push.  Payload will NOT be available");
	            var callbackRet = options.onNotification && options.onNotification(notification);
	            // If the custom handler returns false, don't handle this at all in our code
	            if(callbackRet === false) {
	              return;
	            }

	            if (localNotifications) {
	              console.log('$ionicPush: Attempting to send local notification.');
	              window.cordova.plugins.notification.local.registerPermission(function (granted) {
	                if (granted) {
	                  window.cordova.plugins.notification.local.schedule({
	                    title: 'DEVELOPMENT PUSH',
	                    text: resp.messages[0]
	                  });
	                }
	              });
	            } else {
	              console.log('$ionicPush: No device, sending alert instead.');
	              alert(resp.messages[0]);
	            }
	          }
	        }).error(function(error){
	          console.log("$ionicPush: Error checking for dev pushes ", error);
	        });
	      }, 5000);

	    /**
	     * It's a notmal push, do normal push things
	     */
	    } else {
	      $cordovaPush.register(config).then(function(token) {
	        console.log('$ionicPush:REGISTERED', token);

	        defer.resolve(token);

	        if(token !== 'OK') {

	          $rootScope.$emit('$cordovaPush:tokenReceived', {
	            token: token,
	            platform: 'ios'
	          });

	          // Push the token into the user data
	          try {
	            $ionicUser.push('_push.ios_tokens', token, true);
	          } catch(e) {
	            console.warn('Received push token before user was identified and will not be synced with ionic.io. Make sure to call $ionicUser.identify() before calling $ionicPush.register.');
	          }
	        }
	      }, function(err) {
	        console.error('$ionicPush:REGISTER_ERROR', err);
	      });
	    }

	    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
	      console.log('$ionicPush:RECEIVED', JSON.stringify(notification));

	      var callbackRet = options.onNotification && options.onNotification(notification);

	      if (ionic.Platform.isAndroid() && notification.event == "registered") {
	        /**
	         * Android handles push notification registration in a callback from the GCM service (whereas
	         * iOS can be handled in a single call), so we need to check for a special notification type
	         * here.
	         */
	        console.log('$ionicPush:REGISTERED', notification.regid);
	        $rootScope.$emit('$cordovaPush:tokenReceived', {
	          token: notification.regid,
	          platform: 'android'
	        });
	        androidInit(notification.regid);
	      }

	      // If the custom handler returns false, don't handle this at all in
	      // our code
	      if(callbackRet === false) {
	        return;
	      }

	      // If we have the notification plugin, show this
	      if(options.canShowAlert && notification.alert) {
	        if (navigator.notification) {
	          navigator.notification.alert(notification.alert);
	        } else {
	          // Browser version
	          alert(notification.alert);
	        }
	      }

	      if(options.canPlaySound) {
	        if (notification.sound && window.Media) {
	          var snd = new Media(notification.sound);
	          snd.play();
	        }
	      }

	      if(options.canSetBadge) {
	        if (notification.badge) {
	          $cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
	            // Success!
	          }, function(err) {
	            console.log('Could not set badge!', err);
	            // An error occurred. Show a message to the user
	          });
	        }
	      }

	      // Run any custom notification actions
	      if(options.canRunActionsOnWake) {
	        if(notification.foreground == "0" || notification.foreground === false) {
	          $ionicPushActions.run(notification);
	        }
	      }
	    });


	    return defer.promise;
	  }

	  function androidInit(token) {
	    // Push the token into the user data
	    try {
	      $ionicUser.push('_push.android_tokens', token, true);
	    } catch(e) {
	      console.warn('Received push token before user was identified and will not be synced with ionic.io. Make sure to call $ionicUser.identify() before calling $ionicPush.register.');
	    }
	  }

	  return {
	    /**
	     * Register for push notifications.
	     *
	     * Configure the default notification behavior by using the options param:
	     *
	     * {
	     *   // Whether to allow notifications to pop up an alert while in the app.
	     *   // Setting this to false lets you control the push behavior more closely.
	     *   allowAlert: true/false (default: true)
	     *
	     *   // Whether to allow notifications to update the badge
	     *   allowBadge: true/false (default: true)
	     *
	     *   // Whether to allow notifications to play a sound
	     *   allowSound: true/false (default: true)
	     *
	     *   // Whether to run auto actions, like navigating to a state, when a push
	     *   // is opened outside of the app (foreground is false)
	     *   canRunActionsOnWake: true/false (default: true)
	     *
	     *   // A callback to do some custom task on notification
	     *   onNotification: true/false (default: true)
	     * }
	     */
	    register: function(options, userdata){
	      return $q(function(resolve) {
	        if (!app) {
	          return;
	        }

	        options = angular.extend({
	          canShowAlert: true,
	          canSetBadge: true,
	          canPlaySound: true,
	          canRunActionsOnWake: true,
	          onNotification: function () {
	            return true;
	          },
	          onTokenRecieved: function (token) { }
	        }, options);

	        var user = {};

	        if (userdata) {
	          if (!userdata.user_id) {
	            // Set your user_id here, or generate a random one
	            console.warn("No user ID specified in userdata or existing model, generating generic user ID.");
	            user.user_id = $ionicUser.generateGUID();
	          };

	          angular.extend(user, userdata);

	          console.log('$ionicPush: Identifying user', user.user_id);
	          $ionicUser.identify(user).then(function () {
	            resolve(init(options));
	          });
	        } else {
	          user = $ionicUser.get();
	          if (!user.user_id){
	            console.log('$ionicPush: Registering anonymous user.');
	            $ionicUser.identifyAnonymous().then(function() {
	              resolve(init(options));
	            });
	          } else {
	            resolve(init(options));
	          }
	        }
	      });
	    },
	    unregister: function(options) {
	      return $cordovaPush.unregister(options);
	    }
	  }
	}])

	.factory('$ionicPushActions', [
	    '$rootElement',
	    '$injector',
	function($rootElement, $injector) {
	  return {
	    run: function(notification) {
	      var state = false;
	      var stateParams = {};
	      if (ionic.Platform.isAndroid()) {
	        if (notification.payload.payload.$state) {
	          state = notification.payload.payload.$state;
	        }
	        if (notification.payload.payload.$stateParams) {
	          try {
	            stateParams = JSON.parse(notification.payload.payload.$stateParams);
	          } catch(e) {}
	        }
	      } else if (ionic.Platform.isIOS()) {
	        if (notification.$state) {
	          state = notification.$state;
	        }
	        if (notification.$stateParams) {
	          try {
	            stateParams = JSON.parse(notification.$stateParams);
	          } catch(e) {}
	        }
	      }

	      if (state) {
	        // Auto navigate to state
	        var injector = $rootElement.injector();
	        $state = injector.get('$state');
	        $state.go(state, stateParams);
	      }
	    }
	  }
	}]);


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*!
	 * Ionic Analytics Client
	 * Copyright 2014 Drifty Co. http://drifty.com/
	 * See LICENSE in this repository for license information
	 */
	(function(){
	angular.module('ionic.service.analytics', ['ionic.service.core'])

	.value('IONIC_ANALYTICS_VERSION', '0.2.5')

	/**
	 * @ngdoc service
	 * @name $ionicAnalytics
	 * @module ionic.services.analytics
	 * @description
	 *
	 * Ionic Analytics' main service. See http://docs.ionic.io/docs/analytics-auto-tracking for details.
	 *
	 * @usage
	 * ```javascript
	 * $ionicAnalytics.track('order', {
	 *   price: 39.99,
	 *   item: 'Time Machine'
	 * });
	 *
	 */
	.provider('$ionicAnalytics', function() {

	  this.$get = [
	    '$q',
	    '$timeout',
	    '$rootScope',
	    '$ionicApp',
	    '$ionicCoreSettings',
	    '$ionicUser',
	    '$interval',
	    '$http',
	    'bucketStorage',
	    'persistentStorage',
	  function($q, $timeout, $rootScope, $ionicApp, $ionicCoreSettings, $ionicUser, $interval, $http, bucketStorage, persistentStorage) {

	    var options = {};

	    function maybeLog() {
	      if (!options.silent) {
	        console.log.apply(console, arguments);
	      }
	    }

	    var get_ionic_app_id = function() {
	      if ($ionicCoreSettings.get('app_id')) {
	        return $ionicCoreSettings.get('app_id')
	      } else if ($ionicApp.getApp().app_id) {
	        return $ionicApp.getApp().app_id
	      } else {
	        return null;
	      }
	    };


	    var api = {
	      getAppId: function() {
	        return get_ionic_app_id();
	      },
	      getApiKey: function() {
	        if($ionicCoreSettings.get('api_key')) {
	          return $ionicCoreSettings.get('api_key');
	        } else {
	          return $ionicApp.getApiKey();
	        }
	      },
	      getApiServer: function() {
	        var server = false;
	        if($ionicCoreSettings.get('analytics_api_server')) {
	          server = $ionicCoreSettings.get('analytics_api_server');
	        } else {
	          server = $ionicApp.getValue('analytics_api_server');
	        }

	        if (!server) {
	          var msg = 'Ionic Analytics: You are using an old version of ionic-service-core. Update by running:\n    ' +
	                    'ionic rm ionic-service-core\n    ' +
	                    'ionic add ionic-service-core';
	          throw Error(msg);
	        }
	        return server;
	      },
	      getAnalyticsKey: function() {
	        return this.analyticsKey;
	      },
	      setAnalyticsKey: function(v) {
	        this.analyticsKey = v;
	      },
	      hasAnalyticsKey: function() {
	        return !!this.analyticsKey;
	      },
	      requestAnalyticsKey: function() {
	        var host = '';
	        if($ionicCoreSettings.get('api_server')) {
	          host = $ionicCoreSettings.get('api_server');
	        } else {
	          host = $ionicApp.getApiUrl();
	        }
	        var req = {
	          method: 'GET',
	          url: host + '/api/v1/app/' + this.getAppId() + '/keys/write',
	          headers: {
	            'Authorization': "basic " + btoa(this.getAppId() + ':' + this.getApiKey())
	          },
	          withCredentials: false
	        };
	        return $http(req);
	      },
	      postEvent: function(name, data) {
	        var payload = {
	          name: [data]
	        };

	        var analyticsKey = this.getAnalyticsKey();
	        if (!analyticsKey) {
	          throw Error('Cannot send events to the analytics server without an Analytics key.')
	        }

	        var req = {
	          method: 'POST',
	          url: this.getApiServer() + '/api/v1/events/' + this.getAppId(),
	          data: payload,
	          headers: {
	            "Authorization": analyticsKey,
	            "Content-Type": "application/json"
	          },
			      withCredentials: false
	        }

	        return $http(req);
	      },
	      postEvents: function(events) {
	        var analyticsKey = this.getAnalyticsKey();
	        if (!analyticsKey) {
	          throw Error('Cannot send events to the analytics server without an Analytics key.')
	        }

	        var req = {
	          method: 'POST',
	          url: this.getApiServer() + '/api/v1/events/' + this.getAppId(),
	          data: events,
	          headers: {
	            "Authorization": analyticsKey,
	            "Content-Type": "application/json"
	          },
			      withCredentials: false
	        }

	        return $http(req);
	      }
	    }

	    var cache = bucketStorage.bucket('ionic_analytics');

	    var useEventCaching = true,
	        dispatchInterval,
	        dispatchIntervalTime;

	    function connectedToNetwork() {
	      // Can't access navigator stuff? Just assume connected.
	      if (typeof navigator.connection === 'undefined' ||
	          typeof navigator.connection.type === 'undefined' ||
	          typeof Connection === 'undefined') {
	        return true;
	      }

	      // Otherwise use the PhoneGap Connection plugin to determine the network state
	      var networkState = navigator.connection.type;
	      return networkState == Connection.ETHERNET ||
	             networkState == Connection.WIFI ||
	             networkState == Connection.CELL_2G ||
	             networkState == Connection.CELL_3G ||
	             networkState == Connection.CELL_4G ||
	             networkState == Connection.CELL;
	    }

	    function dispatchQueue() {
	      var eventQueue = cache.get('event_queue') || {};

	      if (Object.keys(eventQueue).length === 0) return;
	      if (!connectedToNetwork()) return;



	      persistentStorage.lockedAsyncCall(cache.scopeKey('event_dispatch'), function() {

	        // Send the analytics data to the proxy server
	        return api.postEvents(eventQueue);
	      }).then(function(data) {

	        // Success from proxy server. Erase event queue.
	        maybeLog('Ionic Analytics: sent events', eventQueue);
	        cache.set('event_queue', {});

	      }, function(err) {

	        if (err === 'in_progress') {
	        } else if (err === 'last_call_interrupted') {
	          cache.set('event_queue', {});
	        } else {

	          // If we didn't connect to the server at all -> keep events
	          if (!err.status) {
	            console.error('Error sending analytics data: Failed to connect to analytics server.');
	          }

	          // If we connected to the server but our events were rejected -> erase events
	          else {
	            console.error('Error sending analytics data: Server responded with error', eventQueue, {
	              'status': err.status,
	              'error': err.data
	            });
	            cache.set('event_queue', {});
	          }
	        }
	      });
	    }

	    function enqueueEvent(collectionName, eventData) {
	      if (options.dryRun) {
	        maybeLog('Ionic Analytics: event recieved but not sent (dryRun active):', collectionName, eventData);
	        return;
	      }

	      maybeLog('Ionic Analytics: enqueuing event to send later:', collectionName, eventData);

	      // Add timestamp property to the data
	      if (!eventData.keen) {
	        eventData.keen = {};
	      }
	      eventData.keen.timestamp = new Date().toISOString();

	      // Add the data to the queue
	      var eventQueue = cache.get('event_queue') || {};
	      if (!eventQueue[collectionName]) {
	        eventQueue[collectionName] = [];
	      }
	      eventQueue[collectionName].push(eventData);

	      // Write the queue to disk
	      cache.set('event_queue', eventQueue);
	    }

	    function setDispatchInterval(value) {
	      // Set how often we should send batch events to Keen, in seconds.
	      // Set this to 0 to disable event caching
	      dispatchIntervalTime = value;

	      // Clear the existing interval and set a new one.
	      if (dispatchInterval) {
	        $interval.cancel(dispatchInterval);
	      }

	      if (value > 0) {
	        dispatchInterval = $interval(function() { dispatchQueue(); }, value * 1000);
	        useEventCaching = true;
	      } else {
	        useEventCaching = false;
	      }
	    }

	    function getDispatchInterval() {
	      return dispatchIntervalTime;
	    }

	    var globalProperties = {};
	    var globalPropertiesFns = [];

	    return {

	      // Register to get an analytics key
	      register: function(optionsParam) {

	        if (!api.getAppId() || !api.getApiKey()) {
	          var msg = 'You need to provide an app id and api key before calling $ionicAnalytics.register().\n    ' +
	                    'See http://docs.ionic.io/v1.0/docs/io-quick-start';
	          throw new Error(msg);
	        }

	        options = optionsParam || {};
	        if (options.dryRun) {
	          maybeLog('Ionic Analytics: dryRun mode is active. Analytics will not send any events.')
	        }

	        // Request Analytics key from server.
	        var promise = api.requestAnalyticsKey().then(function(resp) {

	          var key = resp.data.write_key;
	          api.setAnalyticsKey(key);
	          return resp;

	        }, function(err) {

	          if (err.status == 401) {
	            var msg = 'The api key and app id you provided did not register on the server.\n    ' +
	                      'See http://docs.ionic.io/v1.0/docs/io-quick-start';
	            console.error(msg)
	          } else if (err.status == 404) {
	            var msg = 'The app id you provided ("' + api.getAppId() + '") was not found on the server.\n    ' +
	                      'See http://docs.ionic.io/v1.0/docs/io-quick-start';
	            console.error(msg);
	          } else {
	            console.error('Error registering your api key with the server.', err);
	          }

	          return $q.reject(err);
	        });

	        var self = this;
	        promise.then(function() {
	          maybeLog('Ionic Analytics: successfully registered analytics key');

	          setDispatchInterval(30);
	          $timeout(function() {
	            dispatchQueue();
	          });
	        });

	        return promise;
	      },
	      unsetGlobalProperty: function(prop) {
	        if (typeof prop === 'string') {
	          delete globalProperties[prop];
	        }
	        else if (typeof prop === 'function') {
	          var i = globalPropertiesFns.indexOf(prop);
	          if (i == -1) {
	            throw Error('Ionic Analytics: The function passed to unsetGlobalProperty was not a global property.');
	          }
	          globalPropertiesFns.splice(i, 1);
	        }
	        else {
	          throw Error('Ionic Analytics: unsetGlobalProperty parameter must be a string or function.');
	        }
	      },
	      setGlobalProperties: function(prop) {
	        if (typeof prop === 'object') {
	          for (var key in prop) {
	            if (!prop.hasOwnProperty(key)) {
	              continue;
	            }

	            globalProperties[key] = prop[key];
	          }
	        }
	        else if (typeof prop === 'function') {
	          globalPropertiesFns.push(prop);
	        }
	        else {
	          throw Error('Ionic Analytics: setGlobalProperties parameter must be an object or function.');
	        }
	      },
	      setDispatchInterval: function(v) {
	        return setDispatchInterval(v);
	      },
	      getDispatchInterval: function() {
	        return getDispatchInterval();
	      },
	      track: function(eventCollection, eventData) {

	        if (!api.getAppId() || !api.getApiKey()) {
	          var msg = 'You must provide an app id and api key to identify your app before tracking analytics data.\n    ' +
	                    'See http://docs.ionic.io/v1.0/docs/io-quick-start'
	          throw new Error(msg)
	        }

	        if (!eventData) eventData = {};

	        for (var key in globalProperties) {
	          if (!globalProperties.hasOwnProperty(key)) {
	            continue;
	          }

	          if (eventData[key] === void 0) {
	            eventData[key] = globalProperties[key];
	          }
	        };

	        for (var i = 0; i < globalPropertiesFns.length; i++) {
	          var fn = globalPropertiesFns[i];
	          fn.call($rootScope, eventCollection, eventData);
	        };

	        if (useEventCaching) {
	          $timeout(function() {
	            enqueueEvent(eventCollection, eventData);
	          })
	        } else {
	          $timeout(function() {
	            if (options.dryRun) {
	              maybeLog('Ionic Analytics: dryRun active, will not send event: ', eventCollection, eventData);
	            } else {
	              api.postEvent(eventCollection, eventData);
	            }
	          })
	        }
	      },
	    };
	  }];
	})

	//=============================================================================
	// Global events
	//=============================================================================

	.run([
	  '$ionicAnalytics',
	  '$ionicApp',
	  '$ionicCoreSettings',
	  '$ionicUser',
	  'IONIC_ANALYTICS_VERSION',
	function($ionicAnalytics, $ionicApp, $ionicCoreSettings, $ionicUser, IONIC_ANALYTICS_VERSION) {

	  var get_ionic_app_id = function() {
	    if ($ionicCoreSettings.get('app_id')) {
	      return $ionicCoreSettings.get('app_id')
	    } else if ($ionicApp.getApp().app_id) {
	      return $ionicApp.getApp().app_id
	    } else {
	      return null;
	    }
	  };

	  $ionicAnalytics.setGlobalProperties(function(eventCollection, eventData) {

	    eventData._user = angular.copy($ionicUser.get());
	    eventData._app = {
	      app_id: get_ionic_app_id(),
	      analytics_version: IONIC_ANALYTICS_VERSION
	    };

	  })
	}])

	.run(['$ionicAnalytics', '$state', function($ionicAnalytics, $state) {
	  $ionicAnalytics.setGlobalProperties(function(eventCollection, eventData) {

	    if (!eventData._ui) eventData._ui = {};
	    eventData._ui.active_state = $state.current.name;

	  });
	}])


	//=============================================================================
	// Utils
	//=============================================================================

	.factory('domSerializer', function() {

	  function elementFullCssPath(element) {
	    // iterate up the dom
	    var selectors = [];
	    while (element.tagName !== 'HTML') {
	      var selector = element.tagName.toLowerCase();

	      var id = element.getAttribute('id');
	      if (id) {
	        selector += "#" + id;
	      }

	      var className = element.className;
	      if (className) {
	        var classes = className.split(' ');
	        for (var i = 0; i < classes.length; i++) {
	          var c = classes[i];
	          if (c) {
	            selector += '.' + c;
	          }
	        };
	      }

	      if (!element.parentNode) {
	        return null;
	      }
	      var childIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
	      selector += ':nth-child(' + (childIndex + 1) + ')';

	      element = element.parentNode;
	      selectors.push(selector);
	    }

	    return selectors.reverse().join('>');
	  }

	  function elementIdentifierOrId(element) {
	    // 1. ion-track-name directive
	    var name = element.getAttribute('ion-track-name');
	    if (name) {
	      return name;
	    }

	    // 2. id
	    var id = element.getAttribute('id');
	    if (id) {
	      return id;
	    }

	    // 3. no unique identifier --> return null
	    return null;
	  }

	  return {
	    elementSelector: function(element) {
	      return elementFullCssPath(element);
	    },
	    elementName: function(element) {
	      return elementIdentifierOrId(element);
	    }
	  }
	})


	//=============================================================================
	// Each bucket gets its own namespace in localStorage.
	//=============================================================================

	angular.module('ionic.service.analytics')

	.factory('bucketStorage', [
	  'persistentStorage',
	  '$ionicCoreSettings',
	  '$ionicApp',
	function(persistentStorage, $ionicCoreSettings, $ionicApp) {

	  function Bucket(name) {
	    this.name = name;
	  }

	  Bucket.prototype.get = function(key) {
	    key = this.scopeKey(key);
	    return persistentStorage.retrieveObject(key);
	  }

	  Bucket.prototype.set = function(key, value) {
	    key = this.scopeKey(key);
	    return persistentStorage.storeObject(key, value);
	  }

	  Bucket.prototype.scopeKey = function(key) {
	    return this.name + '_' + key + '_' + appId();
	  }

	  function appId() {
	    if ($ionicCoreSettings.get('app_id')) {
	      return $ionicCoreSettings.get('app_id')
	    } else if ($ionicApp.getApp().app_id) {
	      return $ionicApp.getApp().app_id
	    } else {
	      return null;
	    }
	  }

	  return {
	    bucket: function(name) {
	      return new Bucket(name);
	    }
	  }
	}])

	angular.module('ionic.service.analytics')

	.provider('$ionicAutoTrack',[function(){

	  var trackersDisabled = {},
	      allTrackersDisabled = false;

	  this.disableTracking = function(tracker) {
	    if (tracker) {
	     trackersDisabled[tracker] = true;
	    } else {
	      allTrackersDisabled = true;
	    }
	  }

	  this.$get = [function() {
	    return {
	      isEnabled: function(tracker) {
	        return !allTrackersDisabled && !trackersDisabled[tracker];
	      }
	    }
	  }]
	}])


	//================================================================================
	// Auto trackers
	//================================================================================


	.run(['$ionicAutoTrack', '$ionicAnalytics', function($ionicAutoTrack, $ionicAnalytics) {
	  if (!$ionicAutoTrack.isEnabled('Load')) {
	    return;
	  }
	  $ionicAnalytics.track('Load');    
	}])

	.run([
	  '$ionicAutoTrack',
	  '$document',
	  '$ionicAnalytics',
	  'domSerializer',
	function($ionicAutoTrack, $document, $ionicAnalytics, domSerializer) {
	  if (!$ionicAutoTrack.isEnabled('Tap')) {
	    return;
	  }

	  $document.on('click', function(event) {
	    // want coordinates as a percentage relative to the target element
	    var box = event.target.getBoundingClientRect(),
	        width = box.right - box.left,
	        height = box.bottom - box.top,
	        normX = (event.pageX - box.left) / width,
	        normY = (event.pageY - box.top) / height;

	    var eventData = {
	      coordinates: {
	        x: event.pageX,
	        y: event.pageY
	      },
	      target: domSerializer.elementSelector(event.target),
	      target_identifier: domSerializer.elementName(event.target)
	    };

	    if (isFinite(normX) && isFinite(normY)) {
	      eventData.coordinates.x_norm = normX;
	      eventData.coordinates.y_norm = normY;
	    }

	    $ionicAnalytics.track('Tap', {
	      _ui: eventData
	    });

	  });
	}])

	.run([
	  '$ionicAutoTrack',
	  '$ionicAnalytics',
	  '$rootScope',
	function($ionicAutoTrack, $ionicAnalytics, $rootScope) {
	  if (!$ionicAutoTrack.isEnabled('State Change')) {
	    return;
	  }

	  $rootScope.$on('$stateChangeSuccess', 
	    function(event, toState, toParams, fromState, fromParams) 
	  {
	    $ionicAnalytics.track('State Change', {
	      from: fromState.name,
	      to: toState.name
	    })
	  });

	}])


	//================================================================================
	// ion-track-$EVENT
	//================================================================================

	/**
	 * @ngdoc directive
	 * @name ionTrackClick
	 * @module ionic.service.analytics
	 * @restrict A
	 * @parent ionic.directive:ionTrackClick
	 *
	 * @description
	 *
	 * A convenient directive to automatically track a click/tap on a button
	 * or other tappable element.
	 *
	 * @usage
	 * ```html
	 * <button class="button button-clear" ion-track-click ion-track-event="cta-tap">Try now!</button>
	 * ```
	 */

	.directive('ionTrackClick', ionTrackDirective('click'))
	.directive('ionTrackTap', ionTrackDirective('tap'))
	.directive('ionTrackDoubletap', ionTrackDirective('doubletap'))
	.directive('ionTrackHold', ionTrackDirective('hold'))
	.directive('ionTrackRelease', ionTrackDirective('release'))
	.directive('ionTrackDrag', ionTrackDirective('drag'))
	.directive('ionTrackDragLeft', ionTrackDirective('dragleft'))
	.directive('ionTrackDragRight', ionTrackDirective('dragright'))
	.directive('ionTrackDragUp', ionTrackDirective('dragup'))
	.directive('ionTrackDragDown', ionTrackDirective('dragdown'))
	.directive('ionTrackSwipeLeft', ionTrackDirective('swipeleft'))
	.directive('ionTrackSwipeRight', ionTrackDirective('swiperight'))
	.directive('ionTrackSwipeUp', ionTrackDirective('swipeup'))
	.directive('ionTrackSwipeDown', ionTrackDirective('swipedown'))
	.directive('ionTrackTransform', ionTrackDirective('hold'))
	.directive('ionTrackPinch', ionTrackDirective('pinch'))
	.directive('ionTrackPinchIn', ionTrackDirective('pinchin'))
	.directive('ionTrackPinchOut', ionTrackDirective('pinchout'))
	.directive('ionTrackRotate', ionTrackDirective('rotate'))


	/**
	 * Generic directive to create auto event handling analytics directives like:
	 *
	 * <button ion-track-click="eventName">Click Track</button>
	 * <button ion-track-hold="eventName">Hold Track</button>
	 * <button ion-track-tap="eventName">Tap Track</button>
	 * <button ion-track-doubletap="eventName">Double Tap Track</button>
	 */
	function ionTrackDirective(domEventName) {
	  return ['$ionicAnalytics', '$ionicGesture', function($ionicAnalytics, $ionicGesture) {

	    var gesture_driven = [
	      'drag', 'dragstart', 'dragend', 'dragleft', 'dragright', 'dragup', 'dragdown',
	      'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown',
	      'tap', 'doubletap', 'hold',
	      'transform', 'pinch', 'pinchin', 'pinchout', 'rotate'
	    ];
	    // Check if we need to use the gesture subsystem or the DOM system
	    var isGestureDriven = false;
	    for(var i = 0; i < gesture_driven.length; i++) {
	      if(gesture_driven[i] == domEventName.toLowerCase()) {
	        isGestureDriven = true;
	      }
	    }
	    return {
	      restrict: 'A',
	      link: function($scope, $element, $attr) {
	        var capitalized = domEventName[0].toUpperCase() + domEventName.slice(1);
	        // Grab event name we will send
	        var eventName = $attr['ionTrack' + capitalized];

	        if(isGestureDriven) {
	          var gesture = $ionicGesture.on(domEventName, handler, $element);
	          $scope.$on('$destroy', function() {
	            $ionicGesture.off(gesture, domEventName, handler);
	          });
	        } else {
	          $element.on(domEventName, handler);
	          $scope.$on('$destroy', function() {
	            $element.off(domEventName, handler);
	          });
	        }


	        function handler(e) {
	          var eventData = $scope.$eval($attr.ionTrackData) || {};
	          if(eventName) {
	            $ionicAnalytics.track(eventName, eventData);
	          } else {
	            $ionicAnalytics.trackClick(e.pageX, e.pageY, e.target, {
	              data: eventData
	            });
	          }
	        }
	      }
	    }
	  }];
	}

	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict'

	  // var ngCordova = require('./ng-cordova.js')(angular);

	  ;
	  var ngModule = angular.module('councils.services', ['firebase']);

	  // load module components

	  // ngCordova.name
	  // optionally inject dependencies for this feature.
	  __webpack_require__(8)(ngModule);
	  __webpack_require__(9)(ngModule);
	  __webpack_require__(10)(ngModule);

	  return ngModule;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function User($firebaseObject, $q) {
	    var user = {};
	    var unit = null;
	    var deferred = $q.defer();
	    var service = {
	      get: get,
	      set: set,
	      getUnit: getUnit
	    };
	    return service;

	    ////////////
	    function get() {
	      return deferred.promise.then(function () {
	        return user;
	      });
	    }

	    function set(uid) {
	      var ref = new Firebase('https://councilsapp.firebaseio.com/users/' + uid);
	      return $firebaseObject(ref).$loaded().then(function (home) {
	        unit = home.$value;
	        ngModule.value('UNITNUMBER', unit);
	        ngModule.value('UID', uid);
	        home.$destroy();
	        var ref2 = new Firebase('https://councilsapp.firebaseio.com/' + unit + '/users/' + uid + '/info');
	        return $firebaseObject(ref2).$loaded();
	      }).then(function (ref) {
	        user = ref;
	        deferred.resolve(user);
	        return user;
	      });
	    }

	    function getUnit() {
	      return unit;
	    }
	  }
	  User.$inject = ["$firebaseObject", "$q"];

	  ngModule.factory('User', User);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function Auth($firebaseAuth) {
	    var ref = new Firebase('https://councilsapp.firebaseio.com');
	    return $firebaseAuth(ref);
	  }
	  Auth.$inject = ["$firebaseAuth"];

	  ngModule.factory('Auth', Auth);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function Notify($http) {
	    var api = { send: send };
	    return api;
	    function send(title, message, uids) {
	      console.log('uids', uids);
	      return $http.post('https://councils-app.herokuapp.com/api/push', {
	        title: title,
	        message: message,
	        user_ids: uids
	      });
	    }
	  }
	  Notify.$inject = ["$http"];

	  ngModule.factory('Notify', Notify);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(12);

	  var ngModule = angular.module('councils.modal', []);

	  __webpack_require__(16)(ngModule);
	  //require('./modal.js')(ngModule);

	  return ngModule;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js?outputStyle=expanded!./_modal.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js?outputStyle=expanded!./_modal.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".chat-modal {\n  box-sizing: border-box;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #f8f8f8;\n  top: 0%;\n  z-index: 60;\n  -webkit-transform: translate3d(0, 150%, 0);\n          transform: translate3d(0, 150%, 0);\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n\n.chat-modal .white {\n  color: #fff;\n}\n\n.chat-modal .hidden {\n  visibility: hidden;\n}\n\n.chat-modal .title {\n  font-size: 18px;\n  color: #fff;\n  font-weight: 600;\n}\n\n.chat-modal.open {\n  -webkit-transform: translate3d(0, 0%, 0);\n          transform: translate3d(0, 0%, 0);\n}\n\n.chat-modal .time-bar {\n  position: fixed;\n  width: 50px;\n  height: 100%;\n  top: 0;\n  margin-left: 38px;\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  z-index: 0;\n}\n\n.chat-modal .face {\n  border: 2px solid #ddd;\n}\n\n.chat-modal .message-input-contianer {\n  position: absolute;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #f8f8f8;\n  color: #414141;\n  padding: 8px;\n}\n\n.chat-modal .send-button {\n  padding-left: 16px;\n}\n\n.chat-modal .message-input {\n  box-shadow: none;\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 2;\n  color: #414141;\n  padding: 8px;\n  margin-right: 8px;\n}\n\n.chat-modal ::-webkit-input-placeholder {\n  color: #b1b1b1;\n}\n\n.chats {\n  padding: 0 0 72px;\n}\n\n.whitespace {\n  white-space: pre-line;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function Modal($compile, $rootScope, $firebaseArray, User, _) {
	    var el;
	    var oldTopic;
	    var scope;

	    return {
	      open: open,
	      close: close,
	      destroy: destroy
	    };

	    function open(topic, council, title) {
	      if (topic !== oldTopic) {
	        destroy();
	        $rootScope.isLoading = true;
	        scope = $rootScope.$new();
	        scope.title = title;
	        User.get().then(function (user) {
	          scope.user = user;
	          var ref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/' + council + '/threads/' + topic);
	          $firebaseArray(ref.orderByChild('date')).$loaded().then(function (resp) {
	            scope.chats = resp;
	            $rootScope.isLoading = false;
	          });
	          el = $compile(__webpack_require__(17))(scope);
	          el.appendTo(document.body);
	          setTimeout(scroll, 250);
	          var target = el.find('.message-input-contianer');
	          el.find('.chats').scroll(_.throttle(function () {
	            if (this.scrollTop + $(this).innerHeight() >= this.scrollHeight) {
	              target.removeClass('md-whiteframe-z3');
	            } else {
	              target.addClass('md-whiteframe-z3');
	            }
	          }, 100));
	        });

	        scope.close = close;

	        scope.send = function (message) {
	          scope.chats.$add({
	            author: scope.user.uid,
	            authorName: scope.user.fname + ' ' + scope.user.lname,
	            date: new Date().getTime(),
	            message: message,
	            profileImage: scope.user.profileImage
	          });

	          scope.message = '';
	          scroll();
	        };
	      } else {
	        el.addClass('open');
	      }
	    }

	    function close() {
	      el.removeClass('open');
	    }

	    function destroy() {
	      scope && scope.$destroy();
	      el && el.remove();
	    }

	    function scroll() {
	      var chats = el.find('.chats');
	      chats.animate({ scrollTop: chats.get(0).scrollHeight }, '250', 'swing', angular.noop);
	    }
	  }
	  Modal.$inject = ["$compile", "$rootScope", "$firebaseArray", "User", "_"];

	  ngModule.factory('Modal', Modal);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"chat-modal open\" layout=\"column\">\n   <md-toolbar md-theme=\"green\" layout=\"row\" class=\"md-whiteframe-z2\">\n      <div class=\"md-toolbar-tools\">\n        <md-button class=\"md-icon-button\" aria-label=\"Exit Chat\" ng-click=\"close()\">\n          <md-icon>clear</md-icon>\n        </md-button>\n        <span flex class=\"title truncate\">{{title}}</span>\n      </div>\n  </md-toolbar>\n  <div class=\"time-bar\"></div>\n  <md-content class=\"chats transparent\">\n    <md-list class=\"list transparent\">\n      <md-list-item ng-repeat=\"chat in chats\" class=\"md-3-line transparent\">\n        <img ng-class=\"{hidden: chat.author === chats[$index-1].author}\" ng-src=\"{{chat.profileImage}}\" class=\"md-avatar face\" alt=\"{{chat.author}}\" />\n        <div class=\"md-list-item-text\" layout=\"column\">\n          <h4 class=\"mute\" ng-show=\"chat.author !== chats[$index-1].author\">{{chat.authorName}}</h4>\n          <p class=\"whitespace no-mute\">{{chat.message}}</p>\n        </div>\n      </md-list-item>\n    </md-list>\n  </md-content>\n  <div class=\"message-input-contianer\" md-theme=\"green\">\n    <form layout=\"row\">\n      <md-button class=\"md-fab md-mini md-primary\" flex-order=\"2\" aria-label=\"Send Message\" ng-click=\"send(message)\">\n        <md-icon cass=\"accent-icon\">send</md-icon>\n      </md-button>\n      <textarea class=\"message-input\" flex flex-order=\"1\" ng-model=\"message\" type=\"text\" placeholder=\"Message\"></textarea>\n    </form>\n  </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(19);

	  var ngModule = angular.module('councils.layout', ['ngMaterial']);

	  // load module components

	  // optionally inject dependencies for this feature.
	  __webpack_require__(21)(ngModule);

	  return ngModule;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_layout.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_layout.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".layout-container {\n  width: 100%;\n  height: 100%;\n}\n\n.layout-section {\n  overflow: auto;\n}\n\nmd-toolbar.glass {\n  background-color: white;\n  color: #414141;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n@supports (-webkit-backdrop-filter: none) {\n  md-toolbar.glass {\n    background-color: rgba(255, 255, 255, 0.8) !important;\n    -webkit-backdrop-filter: blur(8px) saturate(10) !important;\n  }\n}\n\nmd-toolbar.glass .md-button {\n  color: #414141;\n}\n\nmd-toolbar.glass md-icon {\n  color: #414141;\n}\n\n#primary-action {\n  background-color: white;\n  color: #414141;\n}\n\n@supports (-webkit-backdrop-filter: none) {\n  #primary-action {\n    background-color: rgba(255, 255, 255, 0.8) !important;\n    -webkit-backdrop-filter: blur(8px) saturate(10) !important;\n  }\n}\n\n.md-is-open #primary-action {\n  background-color: rgba(255, 255, 255, 0) !important;\n  box-shadow: none;\n}\n\n.truncate {\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.main-sidenav {\n  background-color: white;\n}\n\n@supports (-webkit-backdrop-filter: none) {\n  .main-sidenav {\n    background-color: rgba(255, 255, 255, 0.8) !important;\n    -webkit-backdrop-filter: blur(8px) saturate(10) !important;\n  }\n}\n\n.nav-header {\n  position: absolute;\n  background-color: white;\n  top: 0px;\n  width: 100%;\n  z-index: 2;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.nav-header.status-bar {\n  padding-top: 20px;\n}\n\n.user-info {\n  padding: 0;\n}\n\n.nametype {\n  font-size: 18px;\n  font-weight: 600;\n  color: #414141;\n  margin: 0px;\n  padding-left: 16px;\n}\n\n.menu-items {\n  margin-top: 136px;\n  background-color: #fff;\n}\n\n.img-round {\n  border-radius: 999px;\n}\n\n.menu-item-list {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.accent-icon {\n  color: #1ead8a;\n}\n\n.white-icon {\n  color: #fff;\n}\n\n.over-content {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n}\n\nmd-toolbar.white {\n  border-bottom: 1px solid #dededd;\n  background-color: #ffffff;\n}\n\nmd-toolbar.status-bar {\n  margin-top: 20px;\n}\n\nmd-toolbar.status-bar:before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 20px;\n  width: 100%;\n  background-color: white;\n}\n\n@supports (-webkit-backdrop-filter: none) {\n  md-toolbar.status-bar:before {\n    background-color: rgba(255, 255, 255, 0.8) !important;\n    -webkit-backdrop-filter: blur(8px) saturate(10) !important;\n  }\n}\n\n.profile-img {\n  margin: 16px 16px 0px;\n  max-width: 64px;\n  border: 1px solid #fff;\n}\n\n.status-bar.no-fill {\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.menu-item, .menu-item .md-list-item-inner {\n  min-height: 44px;\n}\n\n.menu-item-list .menu-item.active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\nmd-backdrop {\n  left: 0;\n}\n\nmd-backdrop.md-sidenav-backdrop {\n  transition: all 450ms;\n  left: 300px;\n}\n\n.main-content {\n  max-width: 1200px;\n  margin: auto;\n  background-color: #f8f8f8;\n}\n\n#main-sidenav {\n  background-color: white;\n}\n\n@supports (-webkit-backdrop-filter: none) {\n  #main-sidenav {\n    background-color: rgba(255, 255, 255, 0.8) !important;\n    -webkit-backdrop-filter: blur(8px) saturate(10) !important;\n  }\n}\n\n.content-area {\n  background-color: #f8f8f8;\n  overflow: auto;\n}\n\n.fixed-layer-1 {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.fixed-layer-2 {\n  position: fixed;\n  top: 72px;\n  width: 100%;\n}\n\n.scroll-layer-2 {\n  margin-top: 64px;\n  width: 100%;\n}\n\n.scroll-layer-3 {\n  margin-top: 120px;\n  width: 100%;\n}\n\n.small {\n  max-width: 32px;\n  max-height: 32px;\n}\n\n.status-bar .menu-items {\n  margin-top: 154px;\n}\n\n.status-bar .fixed-layer-2 {\n  position: fixed;\n  top: 92px;\n  width: 100%;\n}\n\n.status-bar .scroll-layer-2 {\n  margin-top: 84px;\n  width: 100%;\n}\n\n.status-bar .scroll-layer-3 {\n  margin-top: 140px;\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) and (min-width: 0) {\n  .fixed-layer-2 {\n    position: fixed;\n    top: 62px;\n    width: 100%;\n  }\n  .scroll-layer-2 {\n    margin-top: 54px;\n    width: 100%;\n  }\n  .scroll-layer-3 {\n    margin-top: 110px;\n    width: 100%;\n  }\n  .status-bar .fixed-layer-2 {\n    position: fixed;\n    top: 82px;\n    width: 100%;\n  }\n  .status-bar .scroll-layer-2 {\n    margin-top: 74px;\n    width: 100%;\n  }\n  .status-bar .scroll-layer-3 {\n    margin-top: 130px;\n    width: 100%;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  ngModule.directive('sideNavLayout', ["$rootScope", "$mdUtil", "$mdSidenav", "$state", "PLATFORM", function ($rootScope, $mdUtil, $mdSidenav, $state, PLATFORM) {
	    return {
	      restrict: 'E',
	      transclude: true,
	      template: __webpack_require__(22),
	      link: function link(scope, element, attrs) {

	        console.log(PLATFORM);
	        if (PLATFORM === 'iOS') {
	          angular.element('#councilsApp').addClass('status-bar');
	          angular.element('#topBar').addClass('status-bar');
	          angular.element('.nav-header').addClass('status-bar');
	        }

	        setMenuItems();

	        scope.close = function (state) {
	          $state.go(state).then(function () {
	            $mdSidenav('left').close();
	          });
	        };

	        function setMenuItems() {
	          // scope.$applyAsync(() => {
	          scope.navItems = [{
	            name: 'Home',
	            icon: 'home',
	            state: 'home'
	          }, {
	            name: 'Councils',
	            icon: 'people_outline',
	            state: 'councils'
	          }, {
	            name: 'Settings',
	            icon: 'settings',
	            state: 'settings'
	          }, {
	            name: 'Feeback',
	            icon: 'feedback',
	            state: 'feedback'
	          }, {
	            name: 'Sync',
	            icon: 'sync',
	            state: '#'
	          }];
	          // });
	        }
	      }
	    };
	  }]);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"loading-spinner\" ng-if=\"isLoading\" layout=\"column\" layout-align=\"center center\">\n  <div class=\"md-whiteframe-z2 round bg-white\">\n    <md-progress-circular md-mode=\"indeterminate\"></md-progress-circular>\n  </div>\n</div>\n<div id=\"councilsApp\" class=\"layout-container\" layout=\"column\">\n  <section class=\"layout-section\" layout=\"row\" flex>\n    <md-sidenav id=\"main-sidenav\" class=\"md-sidenav-left md-whiteframe-z1\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n      <header class=\"nav-header\">\n        <img class=\"profile-img img-round\" ng-src=\"{{user.profileImage}}\" alt=\"{{user.preferredName}}\">\n        <div class=\"user-info\" layout=\"row\" layout-align=\"space-between center\">\n          <h1 flex class=\"nametype md-heading\">{{user.fname}} {{user.lname}}</h1>\n          <md-button class=\"md-icon-button\" aria-label=\"Logout\" ng-click=\"logout()\">\n            <md-icon>power_settings_new</md-icon>\n          </md-button>\n        </div>\n      </header>\n      <md-content class=\"menu-items\">\n        <md-list class=\"menu-item-list\">\n          <md-list-item class=\"menu-item\" ng-repeat=\"item in navItems\" ui-sref=\"{{item.state}}\" ui-sref-active=\"active\" ng-click=\"close(item.state)\">\n            <md-icon class=\"accent-icon\">{{item.icon}}</md-icon>\n            <p>{{item.name}}</p>\n          </md-list-item>\n          <md-divider></md-divider>\n        </md-list>\n        <md-subheader>Private Chats</md-subheader>\n        <md-list class=\"menu-item-list\">\n          <md-list-item ng-click=\"openChat(chat)\">\n           <img src=\"https://res.cloudinary.com/hgzoysu4o/image/upload/c_thumb,g_face,h_250,w_250/v1439768192/councils_3744679520.png\" class=\"md-avatar small\" alt=\"Mckay Randall\" />\n            <p>Mckay Randall</p>\n          </md-list-item>\n          <md-divider></md-divider>\n        </md-list>\n      </md-content>\n    </md-sidenav>\n    <div class=\"content-area\" layout=\"column\" flex>\n      <md-toolbar id=\"topBar\" layout=\"row\" class=\"glass fixed-layer-1\">\n          <div class=\"md-toolbar-tools\">\n            <md-button class=\"md-icon-button hide-gt-lg\" aria-label=\"Menu\" ng-click=\"toggleLeft()\">\n              <md-icon>{{navIcon}}</md-icon>\n            </md-button>\n            <h2>\n              <span>{{title}}</span>\n            </h2>\n            <span flex></span>\n          </div>\n      </md-toolbar>\n      <div layout=\"column\" ng-transclude></div>\n      <md-fab-toolbar flex md-theme=\"white\" md-direction=\"left\" class=\"over-content\">\n        <md-fab-trigger>\n          <md-button id=\"primary-action\" aria-label=\"Create\" class=\"md-fab md-primary\">\n            <md-icon>add</md-icon>\n          </md-button>\n        </md-fab-trigger>\n        <md-toolbar layout=\"row\" class=\"md-fab-bottom-right\">\n          <md-fab-actions class=\"md-toolbar-tools\" layout=\"row\">\n            <md-button aria-label=\"Discussion\" class=\"md-icon-button\" ui-sref=\"create.discussion\">\n              <md-icon aria-label=\"Create New Discussion\">chat</md-icon>\n            </md-button>\n            <md-button aria-label=\"Assignment\" class=\"md-icon-button\" ui-sref=\"create.assignment\">\n              <md-icon aria-label=\"Create New Assignment\">assignment</md-icon>\n            </md-button>\n          </md-fab-actions>\n        </md-toolbar>\n      </md-fab-toolbar>\n    </div>\n  </section>\n</div>\n\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(24);

	  var ngModule = angular.module('councils.home', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('home', {
	      title: 'Home',
	      url: '/home',
	      views: {
	        'main': {
	          template: __webpack_require__(26),
	          controller: 'HomeCtrl',
	          controllerAs: 'home',
	          resolve: {
	            currentAuth: /* @ngInject */["Auth", function currentAuth(Auth) {
	              return Auth.$requireAuth();
	            }]
	          }
	        }
	      }
	    });
	  }]);

	  // load module components
	  __webpack_require__(27)(ngModule);

	  return ngModule;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_home.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".border-bottom md-tabs-wrapper {\n  border-bottom: 1px solid #dededd;\n}\n\n.seen {\n  padding-left: 8px;\n}\n\n.multiline {\n  line-height: 1.3em !important;\n}\n\n.material-icons.md-18 {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.material-icons.md-24 {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n.material-icons.md-36 {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n}\n\n.material-icons.md-48 {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n\n.chat-list md-list-item.md-no-proxy, .chat-list md-list-item .md-no-style {\n  padding: 0px 0 0 16px;\n}\n\nmd-list {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  background-color: #ffffff;\n}\n\nmd-list .md-subheader {\n  margin-right: 0;\n  border-bottom: 1px solid #dededd;\n  background-color: #f8f8f8;\n}\n\nmd-list .md-subheader .md-subheader-inner {\n  margin-right: 16px;\n}\n\n.transparent {\n  background-color: transparent;\n}\n\n.loading-spinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  background-color: rgba(33, 33, 33, 0.48);\n}\n\n.round {\n  border-radius: 99px;\n}\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<md-tabs id=\"home-tabs\" class=\"border-bottom\" md-dynamic-height md-swipe-content=\"true\" md-selected=\"home.tabs.selectedIndex\">\n  <md-tab id=\"assignments\">\n    <md-tab-label>My Assignments</md-tab-label>\n    <md-tab-body>\n      <div class=\"margin-on-md\">\n        <md-subheader class=\"transparent md-no-sticky\">My unfinished assignments</md-subheader>\n        <md-list class=\"chat-list\">\n          <md-list-item md-no-ink class=\"md-2-line\" ng-repeat=\"assignment in home.myAssignments | filter:{completed:false}\">\n            <md-checkbox ng-model=\"assignment._completed\" ng-change=\"home.update($event, assignment)\"></md-checkbox>\n            <div class=\"md-list-item-text\" layout=\"row\" layout-align=\"space-between center\">\n              <div flex class=\"left\">\n                <h3 class=\"multiline serif\">{{assignment.content}}</h3>\n                <p layout=\"row\">\n                  <span am-time-ago=\"assignment.dueDate\"></span>\n                  <span class=\"seen\" ng-if=\"assignment.hasBeenViewed\">\n                    <md-tooltip>Seen</md-tooltip>\n                    <md-icon class=\"material-icons md-light md-18\">remove_red_eye</md-icon>\n                  <span>\n                </p>\n              </div>\n              <md-button class=\"right md-icon-button\" aria-label=\"Chat\" ng-click=\"home.openChat($event, assignment)\">\n                <md-icon class=\"accent-icon\" >chat</md-icon>\n              </md-button>\n            </div>\n            <md-divider></md-divider>\n          </md-list-item>\n        </md-list>\n        <md-subheader class=\"transparent md-no-sticky\">My delagated assignments</md-subheader>\n        <md-list class=\"chat-list\">\n          <md-list-item md-no-ink class=\"md-2-line\" ng-repeat=\"assignment in home.delegatedAssignments | filter:{completed:false}\">\n            <md-checkbox ng-model=\"assignment._completed\" ng-change=\"home.update($event, assignment)\"></md-checkbox>\n            <div class=\"md-list-item-text\" layout=\"row\" layout-align=\"space-between center\">\n              <div flex class=\"left\">\n                <h3 class=\"multiline serif\">{{assignment.content}}</h3>\n                <p>\n                  <span am-time-ago=\"assignment.dueDate\"></span>\n                  <span class=\"seen\" ng-if=\"assignment.hasBeenViewed\">\n                    <md-tooltip>Seen</md-tooltip>\n                    <md-icon class=\"material-icons md-light md-18\">remove_red_eye</md-icon>\n                  <span>\n                </p>\n              </div>\n              <md-button class=\"right md-icon-button\" aria-label=\"Chat\" ng-click=\"home.openChat($event, assignment)\">\n                <md-icon class=\"accent-icon\" >chat</md-icon>\n              </md-button>\n            </div>\n            <md-divider></md-divider>\n          </md-list-item>\n        </md-list>\n      </div>\n    </md-tab-body>\n  </md-tab>\n  <md-tab id=\"discussions\">\n    <md-tab-label>My Discussions</md-tab-label>\n    <md-tab-body>\n      <div class=\"margin-on-md\">\n        <md-subheader class=\"transparent md-no-sticky\">Ordered by date created</md-subheader>\n        <md-list class=\"chat-list\">\n          <md-list-item class=\"md-3-line md-no-proxy\" ng-repeat=\"discussion in home.discussions\">\n            <img ng-src=\"{{discussion.userAvatar}}\" class=\"md-avatar\" alt=\"{{discussion.userName}}\" />\n            <div class=\"md-list-item-text\" layout=\"row\" layout-align=\"space-between center\">\n              <div flex>\n                <h3>{{discussion.userName}}</h3>\n                <h4 class=\"multiline serif\">{{discussion.content}}</h4>\n                <p am-time-ago=\"discussion.createdDate\"></p>\n              </div>\n              <div>\n                <md-button class=\"right md-icon-button\" aria-label=\"Chat\" ng-click=\"home.openChat($event, discussion)\">\n                  <md-icon class=\"accent-icon\" >chat</md-icon>\n                </md-button>\n              </div>\n            </div>\n            <md-divider></md-divider>\n          </md-list-item>\n        </md-list>\n      </div>\n    </md-tab-body>\n  </md-tab>\n</md-tabs>\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function HomeCtrl($scope, User, _, currentAuth, $firebaseObject, Modal, $window, $mdToast, $rootScope, $q) {
	    var home = this;
	    home.tabs = { selectedIndex: 0 };
	    home.myAssignments = [];
	    home.delegatedAssignments = [];
	    home.discussions = [];

	    home.openChat = function ($event, assignment) {
	      $event.stopPropagation();
	      Modal.open(assignment.$id, assignment.council, assignment.content);
	    };

	    $rootScope.isLoading = true;

	    home.update = function ($event, assignment) {
	      assignment.completed = assignment._completed;
	      if (assignment.completed) {
	        var toast = $mdToast.simple().content('You marked that assignment as completed.').action('undo').highlightAction(true).hideDelay(5000).position('bottom left');

	        $mdToast.show(toast).then(function (response) {
	          if (response === 'ok') {
	            assignment.completed = false;
	            assignment._completed = false;
	          }
	          return assignment.$save();
	        });
	      }
	    };

	    User.get().then(function (user) {
	      var ref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr);
	      var myAssignments = ref.child('users/' + user.uid + '/myAssignments');
	      var delagatedAssignments = ref.child('users/' + user.uid + '/delagatedAssignments');
	      var discussions = ref.child('users/' + user.uid + '/discussions');

	      var p = new Promise(function (resolve) {
	        ref.once('value', function () {
	          resolve();
	        });
	      });
	      var t = new Promise(function (resolve) {
	        setTimeout(resolve, 5000);
	      });

	      Promise.race([p, t]).then(function () {
	        $rootScope.isLoading = false;
	      });

	      myAssignments.on('child_added', function (snapshot) {
	        var assignment = snapshot.val();
	        var aref = ref.child(assignment.council + '/assignments/' + assignment.key);
	        $firebaseObject(aref).$loaded().then(function (assignmentData) {
	          assignmentData.hasBeenViewed = true;
	          assignmentData.$save();
	          home.myAssignments.push(assignmentData);
	        });
	      });

	      delagatedAssignments.on('child_added', function (snapshot) {
	        var assignment = snapshot.val();
	        var aref = ref.child(assignment.council + '/assignments/' + assignment.key);
	        home.delegatedAssignments.push($firebaseObject(aref));
	      });

	      discussions.on('child_added', function (snapshot) {
	        var discussion = snapshot.val();
	        var dref = ref.child(discussion.council + '/discussions/' + discussion.key);
	        home.discussions.push($firebaseObject(dref));
	      });
	    });
	  }
	  HomeCtrl.$inject = ["$scope", "User", "_", "currentAuth", "$firebaseObject", "Modal", "$window", "$mdToast", "$rootScope", "$q"];

	  ngModule.controller('HomeCtrl', HomeCtrl);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(29);

	  var ngModule = angular.module('councils.councils', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('councils', {
	      title: 'Councils',
	      url: '/councils',
	      views: {
	        'main': {
	          template: __webpack_require__(31),
	          controller: 'CouncilsCtrl',
	          controllerAs: 'councils',
	          resolve: {
	            currentAuth: /* @ngInject */["Auth", function currentAuth(Auth) {
	              return Auth.$requireAuth();
	            }]
	          }
	        }
	      }
	    });
	  }]);

	  // load module components
	  __webpack_require__(32)(ngModule);

	  return ngModule;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_councils.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_councils.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".list-item-title {\n  font-size: 18px;\n  font-weight: 300;\n  margin-left: 16px;\n}\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"margin-on-md\">\n  <md-subheader class=\"transparent md-no-sticky\">My councils</md-subheader>\n  <md-content class=\"bg-white md-whiteframe-z1\">\n    <md-list>\n      <div ng-repeat=\"council in councils.myCouncils\">\n        <md-list-item>\n          <p class=\"list-item-title serif\">{{council}}</p>\n          <div class=\"icon-button-secondary\">\n            <md-button ui-sref=\"detail({ council: council, tabIndex: 0 })\"\n                        title=\"Go to Agnendas\"\n                        aria-label=\"Agendas\"\n                        class=\"md-icon-button\" >\n              <md-icon>event_note</md-icon>\n            </md-button>\n            <md-button ui-sref=\"detail({ council: council, tabIndex: 1 })\"\n                        title=\"Go to Assignments\"\n                        aria-label=\"Assignments\"\n                        class=\"md-icon-button\" >\n              <md-icon>assignment</md-icon>\n            </md-button>\n            <md-button ui-sref=\"detail({ council: council, tabIndex: 2 })\"\n                        title=\"Go to Discussions\"\n                        aria-label=\"Discussions\"\n                        class=\"md-icon-button\" >\n              <md-icon>chat</md-icon>\n            </md-button>\n          </div>\n        </md-list-item>\n        <md-divider></md-divider>\n      </div>\n    </md-list>\n  </md-content>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function CouncilsCtrl($stateParams) {
	    var councils = this;
	    councils.myCouncils = ['Bishopric', 'Ward Council'];
	  }
	  CouncilsCtrl.$inject = ["$stateParams"];

	  ngModule.controller('CouncilsCtrl', CouncilsCtrl);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(34);

	  var ngModule = angular.module('councils.detail', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('detail', {
	      title: 'Details',
	      url: '/detail/:council?tabIndex',
	      navType: 'back',
	      views: {
	        'main': {
	          template: __webpack_require__(36),
	          controller: 'DetailCtrl',
	          controllerAs: 'detail',
	          resolve: {
	            currentAuth: /* @ngInject */["Auth", function currentAuth(Auth) {
	              return Auth.$requireAuth();
	            }]
	          }
	        }
	      }
	    });
	  }]);

	  // load module components
	  __webpack_require__(37)(ngModule);

	  return ngModule;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_detail.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_detail.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".no-border md-tabs-wrapper {\n  border: none;\n}\n\n#detail-tabs md-next-button.md-disabled, #detail-tabs md-prev-button.md-disabled {\n  opacity: 0;\n  width: 0px;\n}\n\nmd-tab-item.md-tab {\n  line-height: 15px;\n  font-size: 12px;\n  padding: 19px 16px 16px;\n}\n\n.paper {\n  padding: 32px;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<md-tabs id=\"detail-tabs\" class=\"border-bottom\" md-no-pagination md-tab-scroll md-dynamic-height md-swipe-content=\"true\" md-selected=\"detail.tabs.selectedIndex\">\n  <md-tab id=\"agendas\">\n    <md-tab-label>Agendas</md-tab-label>\n    <md-tab-body>\n      <md-tabs md-swipe-content md-no-disconnect md-no-ink-bar md-center-tabs class=\"no-border\" md-selected=\"detail.weekIndex\">\n        <md-tab ng-repeat=\"week in detail.weeks\" label=\"{{week.title}}\"></md-tab>\n      </md-tabs>\n      <div class=\"paper bg-white margin-on-md md-whiteframe-z1\">\n        <div layout=\"row\">\n          <md-autocomplete flex\n              md-input-name=\"hymn\"\n              md-selected-item=\"agenda.openingHymn\"\n              md-search-text=\"detail.searchText\"\n              md-items=\"hymn in detail.querySearch(detail.searchText)\"\n              md-item-text=\"hymn.name + ' - ' + hymn.number\"\n              md-floating-label=\"Opening Hymn\">\n            <md-item-template>\n              <span md-highlight-text=\"detail.searchText\">{{item.name + ' - ' + item.number}}</span>\n            </md-item-template>\n          </md-autocomplete>\n          <md-button ng-disabled=\"!agenda.openingHymn\" class=\"md-icon-button\" ng-click=\"detail.openHymn(agenda.openingHymn)\">\n            <md-icon>queue_music</md-icon>\n          </md-button>\n        </div>\n        <md-input-container>\n          <label>Opening prayer</label>\n          <input ng-model=\"agenda.openingPrayer\" />\n        </md-input-container>\n        <md-input-container>\n          <label>Spiritual thought</label>\n          <input ng-model=\"agenda.spiritualThought\" />\n        </md-input-container>\n         <md-input-container>\n          <label>High councilor remarks from...</label>\n          <textarea ng-model=\"agenda.highCouncil\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Review assignments</label>\n          <textarea ng-model=\"agenda.assignments\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Spiritual welfare</label>\n          <textarea ng-model=\"agenda.spiritualWelfare\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Temporal Welfare</label>\n          <textarea ng-model=\"agenda.temporalWelfare\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Fellowship</label>\n          <textarea ng-model=\"agenda.fellowship\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Missionary</label>\n          <textarea ng-model=\"agenda.missionary\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Events</label>\n          <textarea ng-model=\"agenda.events\"></textarea>\n        </md-input-container>\n        <md-input-container>\n          <label>Closing prayer</label>\n          <input ng-model=\"agenda.closingPrayer\" />\n        </md-input-container>\n      </div>\n    </md-tab-body>\n  </md-tab>\n  <md-tab id=\"assignments\">\n    <md-tab-label>Assignments</md-tab-label>\n    <md-tab-body>\n      <div class=\"margin-on-md\">\n        <md-subheader class=\"transparent md-no-sticky\">Ordered by date created</md-subheader>\n        <md-list class=\"chat-list md-whiteframe-z1\">\n          <md-list-item md-no-ink class=\"md-2-line\" ng-repeat=\"assignment in detail.assignments | filter:{completed:false}\">\n            <md-checkbox ng-model=\"assignment._completed\" ng-change=\"detail.update($event, assignment)\"></md-checkbox>\n            <div class=\"md-list-item-text\" layout=\"row\" layout-align=\"space-between center\">\n              <div flex class=\"left\">\n                <h3 class=\"multiline serif\">{{assignment.content}}</h3>\n                <p am-time-ago=\"assignment.dueDate\"></p>\n              </div>\n              <md-button class=\"right md-icon-button\" aria-label=\"Chat\" ng-click=\"detail.openChat($event, assignment)\">\n                <md-icon class=\"accent-icon\" >chat</md-icon>\n              </md-button>\n            </div>\n            <md-divider></md-divider>\n          </md-list-item>\n        </md-list>\n      </div>\n    </md-tab-body>\n  </md-tab>\n  <md-tab id=\"discussions\">\n    <md-tab-label>Discussions</md-tab-label>\n    <md-tab-body>\n      <div class=\"margin-on-md\">\n        <md-subheader class=\"transparent md-no-sticky\">Ordered by date created</md-subheader>\n        <md-list class=\"chat-list md-whiteframe-z1\">\n          <md-list-item md-no-ink class=\"md-3-line md-no-proxy\" ng-repeat=\"discussion in detail.discussions\">\n            <img ng-src=\"{{discussion.userAvatar}}\" class=\"md-avatar\" alt=\"{{discussion.userName}}\" />\n            <div class=\"md-list-item-text\" layout=\"row\" layout-align=\"space-between center\">\n              <div flex>\n                <h3>{{discussion.userName}}</h3>\n                <h4 class=\"multiline serif\">{{discussion.content}}</h4>\n                <p am-time-ago=\"discussion.createdDate\"></p>\n              </div>\n              <div>\n                <md-button class=\"right md-icon-button\" aria-label=\"Chat\" ng-click=\"detail.openChat($event, discussion)\">\n                  <md-icon class=\"accent-icon\" >chat</md-icon>\n                </md-button>\n              </div>\n            </div>\n            <md-divider></md-divider>\n          </md-list-item>\n        </md-list>\n      </div>\n    </md-tab-body>\n  </md-tab>\n</md-tabs>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function DetailCtrl($stateParams, User, $firebaseArray, $firebaseObject, $http, $rootScope, $scope, $timeout, Modal, $mdToast) {
	    var detail = this;
	    detail.hymns = [];
	    detail.tabs = { selectedIndex: +$stateParams.tabIndex };
	    detail.council = $stateParams.council || 'Bishopric';
	    detail.querySearch = querySearch;
	    detail.openHymn = openHymn;
	    $rootScope.isLoading = true;

	    detail.openChat = function ($event, assignment) {
	      $event.stopPropagation();
	      Modal.open(assignment.$id, assignment.council, assignment.content);
	    };

	    detail.update = function ($event, assignment) {
	      assignment.completed = assignment._completed;
	      if (assignment.completed) {
	        var toast = $mdToast.simple().content('You marked that assignment as completed.').action('undo').highlightAction(true).hideDelay(5000).position('bottom left');

	        $mdToast.show(toast).then(function (response) {
	          if (response === 'ok') {
	            assignment.completed = false;
	            assignment._completed = false;
	          }
	          return assignment.$save();
	        });
	      }
	    };

	    var user;
	    User.get().then(function (me) {
	      user = me;
	      var aRef = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/' + detail.council + '/assignments');
	      var dRef = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/' + detail.council + '/discussions');
	      detail.assignments = $firebaseArray(aRef);
	      detail.discussions = $firebaseArray(dRef);
	    });

	    loadAll();

	    detail.weekIndex = 1;
	    var destroy = angular.noop;
	    $scope.$watch('detail.weekIndex', function (_new, _old) {
	      destroy();
	      var weekNumber = detail.weeks[_new].weekNumber;
	      var year = detail.weeks[_new].year;
	      User.get().then(function (user) {
	        var agendaRef = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/' + detail.council + '/agendas/Week-' + weekNumber + ' ' + year);
	        $firebaseObject(agendaRef).$bindTo($scope, 'agenda').then(function (unbind) {
	          destroy = unbind;
	          $timeout(function () {
	            $rootScope.isLoading = false;
	          }, 250);
	        });
	      });
	    });

	    var lastWeek = moment().subtract(7, 'days');
	    var thisWeek = moment();
	    var nextWeek = moment().add(7, 'days');

	    detail.weeks = [{
	      weekNumber: lastWeek.week(),
	      year: lastWeek.year(),
	      title: lastWeek.startOf('week').format('MMM D')
	    }, {
	      weekNumber: thisWeek.week(),
	      year: thisWeek.year(),
	      title: thisWeek.startOf('week').format('MMM D')
	    }, {
	      weekNumber: nextWeek.week(),
	      year: nextWeek.year(),
	      title: nextWeek.startOf('week').format('MMM D')
	    }];

	    function querySearch(query) {
	      var results = query ? detail.hymns.filter(createFilterFor(query)) : [];
	      return results;
	    }

	    function loadAll() {
	      $http.get('https://councils-app.herokuapp.com/api/hymns').then(function (resp) {
	        detail.hymns = resp.data;
	      });
	    }

	    function createFilterFor(query) {
	      var lowercaseQuery = query.toLowerCase();
	      return function filterFn(hymn) {
	        return hymn.searchTerm.indexOf(lowercaseQuery) >= 0;
	      };
	    }

	    function openHymn(hymn) {
	      cordova.InAppBrowser.open('https://docs.google.com/viewer?url=' + hymn.pdf + '&embedded=true', '_blank', 'location=yes');
	    }
	  }
	  DetailCtrl.$inject = ["$stateParams", "User", "$firebaseArray", "$firebaseObject", "$http", "$rootScope", "$scope", "$timeout", "Modal", "$mdToast"];

	  ngModule.controller('DetailCtrl', DetailCtrl);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(39);

	  var ngModule = angular.module('councils.create', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('create', {
	      abtract: true,
	      url: '/create',
	      views: {
	        'main': {
	          template: __webpack_require__(41),
	          controller: 'CreateCtrl',
	          controllerAs: 'create',
	          resolve: {
	            currentAuth: /* @ngInject */["Auth", function currentAuth(Auth) {
	              return Auth.$requireAuth();
	            }]
	          }
	        }
	      }
	    }).state('create.assignment', {
	      title: 'Create Assignment',
	      url: '/assignment',
	      navType: 'back',
	      views: {
	        'sub': {
	          template: __webpack_require__(42)
	        }
	      }
	    }).state('create.discussion', {
	      title: 'Create Discussion',
	      url: '/discussion',
	      navType: 'back',
	      views: {
	        'sub': {
	          template: __webpack_require__(43)
	        }
	      }
	    });
	  }]);

	  // load module components
	  __webpack_require__(44)(ngModule);

	  return ngModule;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_create.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_create.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".user-avatar {\n  margin: 8px;\n  max-width: 32px;\n  max-height: 32px;\n  border-radius: 32px;\n  vertical-align: middle;\n}\n\n.user-name {\n  margin-left: 8px;\n  font-size: 16px;\n}\n", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div ui-view=\"sub\"></div>\n";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"margin-on-md\">\n  <md-subheader class=\"transparent md-no-sticky\">Create a new assignment</md-subheader>\n  <div class=\"paper bg-white md-whiteframe-z1\">\n    <form>\n      <md-input-container>\n        <label>Assignment</label>\n        <textarea ng-model=\"create.assignment.content\"></textarea>\n      </md-input-container>\n      <md-autocomplete\n          md-input-name=\"Select a person\"\n          md-selected-item=\"create.assignment.assignedTo\"\n          md-search-text=\"create.searchText\"\n          md-items=\"person in create.querySearch(create.searchText)\"\n          md-item-text=\"person.info.fname + ' ' + person.info.lname\"\n          md-floating-label=\"Select a person\">\n        <md-item-template>\n          <img ng-src=\"{{item.info.profileImage}}\" class=\"user-avatar\" alt=\"{{item.info.preferredName}}\" />\n          <span class=\"user-name\" md-highlight-text=\"create.searchText\">{{item.info.fname + ' ' + item.info.lname}}</span>\n        </md-item-template>\n      </md-autocomplete>\n      <md-input-container>\n        <label>Select a council</label>\n        <md-select ng-model=\"create.assignment.council\">\n          <md-option ng-repeat=\"council in create.councils\" value=\"{{council}}\">{{council}}</md-option>\n        </md-select>\n      </md-input-container>\n      <md-input-container>\n        <label>Due date</label>\n        <input type=\"date\" ng-model=\"create.assignment.dueDate\" />\n      </md-input-container>\n      <md-button md-theme=\"green\" class=\"md-primary md-raised\" ng-click=\"create.createAssignment(create.assignment)\">Create</md-button>\n    </form>\n  </div>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"margin-on-md\">\n  <md-subheader class=\"transparent md-no-sticky\">Create a new discussion</md-subheader>\n  <div class=\"paper bg-white md-whiteframe-z1\">\n    <form>\n      <md-input-container>\n        <label>Discussion Topic</label>\n        <textarea ng-model=\"create.discussion.topic\"></textarea>\n      </md-input-container>\n      <md-input-container>\n        <label>Select a council</label>\n        <md-select ng-model=\"create.discussion.council\">\n          <md-option ng-repeat=\"council in create.councils\" value=\"{{council}}\">{{council}}</md-option>\n        </md-select>\n      </md-input-container>\n      <md-button md-theme=\"green\" class=\"md-primary md-raised\" ng-click=\"create.createDiscussion(create.discussion)\">Create</md-button>\n    </form>\n  </div>\n</div>\n";

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function CreateCtrl(User, $firebaseArray, $window, Notify) {
	    var create = this;
	    create.people = [];
	    create.assignment = {};
	    create.discussion = {};
	    create.querySearch = querySearch;
	    create.councils = ['Bishopric', 'Ward Council'];

	    var user, assignments, discussions;
	    User.get().then(function (me) {
	      user = me;
	      var ref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/users');
	      create.people = $firebaseArray(ref);
	    });

	    create.createAssignment = function (assignment) {
	      var def = {
	        assignedBy: user.uid,
	        council: assignment.council,
	        assignedByName: user.fname + ' ' + user.lname,
	        assignedTo: assignment.assignedTo.$id,
	        assignedToName: assignment.assignedTo.info.fname + ' ' + assignment.assignedTo.info.lname,
	        completed: false,
	        hasBeenViewed: false,
	        content: assignment.content,
	        dueDate: assignment.dueDate.getTime()
	      };

	      var ref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/' + assignment.council + '/assignments');
	      var mref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/users/' + user.uid + '/delagatedAssignments');
	      var tref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/users/' + assignment.assignedTo.$id + '/myAssignments');
	      var newRef = ref.push(def);

	      mref.push({
	        council: assignment.council,
	        key: newRef.key()
	      });

	      tref.push({
	        council: assignment.council,
	        key: newRef.key()
	      });

	      Notify.send(false, user.fname + ' ' + user.lname + ' just assigned you a task for the ' + assignment.council, [assignment.assignedTo.$id]);
	      $window.history.back();
	    };

	    create.createDiscussion = function (discussion) {
	      var def = {
	        content: discussion.topic,
	        createdBy: user.uid,
	        council: discussion.council,
	        createdDate: new Date().getTime(),
	        userAvatar: user.profileImage,
	        userName: user.fname + ' ' + user.lname
	      };
	      var ref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/' + discussion.council + '/discussions');
	      var mref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/users/' + user.uid + '/discussions');
	      var newRef = ref.push(def);
	      mref.push({
	        council: discussion.council,
	        key: newRef.key()
	      });
	      $window.history.back();
	    };

	    function querySearch(query) {
	      var results = query ? create.people.filter(createFilterFor(query)) : [];
	      return results;
	    }

	    function createFilterFor(query) {
	      var lowercaseQuery = query.toLowerCase();
	      return function filterFn(person) {
	        return person.info.preferredName.toLowerCase().indexOf(lowercaseQuery) >= 0;
	      };
	    }
	  }
	  CreateCtrl.$inject = ["User", "$firebaseArray", "$window", "Notify"];

	  ngModule.controller('CreateCtrl', CreateCtrl);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(46);

	  var ngModule = angular.module('councils.feedback', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('feedback', {
	      url: '/feedback',
	      title: 'Feedback',
	      views: {
	        'main': {
	          template: __webpack_require__(48),
	          controller: 'FeedbackCtrl',
	          controllerAs: 'feedback'
	        }
	      }
	    });
	  }]);

	  // load module components
	  __webpack_require__(49)(ngModule);

	  return ngModule;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_feedback.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_feedback.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".center {\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"margin-on-md\">\n<md-subheader class=\"transparent md-no-sticky\">How Can we make this app Better?</md-subheader>\n<md-content class=\"paper bg-white md-whiteframe-z1\">\n  <form>\n    <p>Please take a moment to tell us how we can improve this app. Thank you.</p>\n    <md-input-container>\n      <label>Type your feedback here</label>\n      <textarea ng-model=\"create.discussion.topic\"></textarea>\n    </md-input-container>\n    <md-button md-theme=\"green\" class=\"md-primary md-raised\">Submit</md-button>\n  </form>\n</md-content>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function FeedbackCtrl() {
	    var create = this;
	  }

	  ngModule.controller('FeedbackCtrl', FeedbackCtrl);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(51);

	  var ngModule = angular.module('councils.settings', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('settings', {
	      url: '/settings',
	      title: 'Settings',
	      views: {
	        'main': {
	          template: __webpack_require__(53),
	          controller: 'SettingsCtrl',
	          controllerAs: 'settings'
	        }
	      }
	    });
	  }]);

	  // load module components
	  __webpack_require__(54)(ngModule);

	  return ngModule;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_settings.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_settings.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
47,
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"margin-on-md\">\n  <md-subheader class=\"transparent md-no-sticky\">User specific Settings?</md-subheader>\n  <md-content class=\"bg-white md-whiteframe-z1\">\n    <md-list>\n      <md-list-item>\n        <md-icon>security</md-icon>\n        <p>Enable TouchID (iOS)</p>\n        <md-switch class=\"md-primary\" ng-model=\"settings.touchID.$value\" ng-change=\"settings.updateTouchID()\"></md-switch>\n      </md-list-item>\n    </md-list>\n  </md-content>\n</div>\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function SettingsCtrl(User, $firebaseObject) {
	    var settings = this;

	    User.get().then(function (user) {
	      var ref = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/users/' + user.uid + '/info/touchID');
	      settings.touchID = $firebaseObject(ref);
	    });

	    settings.updateTouchID = function () {
	      console.log(settings.touchID);
	      settings.touchID.$save();
	    };
	  }
	  SettingsCtrl.$inject = ["User", "$firebaseObject"];

	  ngModule.controller('SettingsCtrl', SettingsCtrl);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  __webpack_require__(56);

	  var ngModule = angular.module('councils.login', []).config(["$stateProvider", function ($stateProvider) {
	    $stateProvider.state('login', {
	      url: '/login',
	      title: 'Login',
	      views: {
	        'main': {
	          template: __webpack_require__(58),
	          controller: 'LoginCtrl',
	          controllerAs: 'login'
	        }
	      }
	    });
	  }]).run(["$templateCache", function ($templateCache) {
	    $templateCache.put('ldsLogin.html', __webpack_require__(59));
	    $templateCache.put('signup.html', __webpack_require__(60));
	  }]);

	  // load module components
	  __webpack_require__(61)(ngModule);

	  return ngModule;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_login.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./_login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, ".full-screen {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  background-color: #1ead8a;\n  color: #fff;\n}\n\n.border-top md-tabs-wrapper {\n  background-color: #f8f8f8;\n}\n\n.form-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n}\n\n.form-content {\n  width: 100%;\n  padding: 32px 32px;\n  box-sizing: border-box;\n  color: #414141;\n  max-width: 500px;\n}\n\n.form-content md-input-container {\n  width: 100%;\n}\n\n#login-tabs {\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.login-logo {\n  max-width: 48px;\n  max-height: 48px;\n}\n\n.logo-name {\n  font-size: 36px;\n}\n\n.logo-tagline {\n  max-width: 200px;\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.login-instructions {\n  margin: 8px 16px;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.mini-loading-spinner {\n  margin: -32px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n\n.slide-animate.ng-enter, .slide-animate.ng-leave {\n  transition: -webkit-transform cubic-bezier(0.35, 0, 0.25, 1) 1s;\n  transition: transform cubic-bezier(0.35, 0, 0.25, 1) 1s;\n  transition: transform cubic-bezier(0.35, 0, 0.25, 1) 1s, -webkit-transform cubic-bezier(0.35, 0, 0.25, 1) 1s;\n}\n\n.slide-animate.ng-enter {\n  float: left;\n  width: 100%;\n  -webkit-transform: translate3d(200%, 0, 0);\n          transform: translate3d(200%, 0, 0);\n}\n\n.slide-animate.ng-enter.ng-enter-active {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.slide-animate.ng-leave {\n  float: right;\n  position: absolute;\n  width: inherit;\n  box-sizing: border-box;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.slide-animate.ng-leave.ng-leave-active {\n  -webkit-transform: translate3d(-200%, 0, 0);\n          transform: translate3d(-200%, 0, 0);\n}\n\n@media screen and (max-height: 479px) {\n  .login-logo {\n    display: none;\n  }\n  .logo-name {\n    display: none;\n  }\n  .logo-tagline {\n    display: none;\n  }\n}\n\n@media screen and (min-height: 480px) and (max-height: 567px) {\n  .login-logo {\n    display: none;\n  }\n  .logo-name {\n    margin-bottom: 16px;\n  }\n  .logo-tagline {\n    display: none;\n  }\n}\n\n@media screen and (min-height: 568px) and (max-height: 626px) {\n  .login-logo {\n    display: none;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"full-screen\">\n  <md-tabs id=\"login-tabs\" md-center-tabs class=\"border-top\" md-selected=\"login.tabs.selectedIndex\" md-align-tabs=\"bottom\">\n    <md-tab id=\"signup\">\n      <md-tab-label>Sign up</md-tab-label>\n      <md-tab-body>\n        <div class=\"form-container\" layout=\"column\" layout-align=\"center center\">\n          <img class=\"login-logo\" ng-src=\"{{login.logoURL}}\" />\n          <span class=\"logo-name\">Councils</span>\n          <span class=\"logo-tagline\">Stake & Ward productivity on a simple intuitive app</span>\n          <md-content class=\"form-content bg-white md-whiteframe-z1\">\n            <div class=\"mini-loading-spinner\" ng-if=\"login.loading\" layout=\"column\" layout-align=\"center center\">\n              <div class=\"md-whiteframe-z2 round bg-white\">\n                <md-progress-circular md-mode=\"indeterminate\"></md-progress-circular>\n              </div>\n            </div>\n            <div class=\"slide-animate\" ng-include=\"login.template\"></div>\n          </md-content>\n        </div>\n      </md-tab-body>\n    </md-tab>\n    <md-tab id=\"login\">\n      <md-tab-label>Login</md-tab-label>\n      <md-tab-body>\n        <div class=\"form-container\" layout=\"column\" layout-align=\"center center\">\n          <img class=\"login-logo\" ng-src=\"{{login.logoURL}}\" />\n          <span class=\"logo-name\">Councils</span>\n          <span class=\"logo-tagline\">Stake & Ward productivity on a simple intuitive app</span>\n          <md-content class=\"form-content bg-white md-whiteframe-z1\" >\n            <p class=\"login-instructions\">Login using Councils Account</p>\n            <form ng-submit=\"login.login()\">\n              <md-input-container>\n                <label>Email</label>\n                <input type=\"email\" ng-model=\"login.credentials.email\" />\n              </md-input-container>\n              <md-input-container>\n                <label>Password</label>\n                <input type=\"password\" ng-model=\"login.credentials.password\" />\n              </md-input-container>\n              <md-button md-theme=\"green\" class=\"md-primary md-raised\">Login to Councils</md-button>\n            </form>\n          </md-content>\n        </div>\n      </md-tab-body>\n    </md-tab>\n  </md-tabs>\n</div>\n";

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<p class=\"login-instructions\">Login with LDS.org account to sign up</p>\n<form ng-submit=\"login.signup()\">\n  <md-input-container>\n    <label>Username</label>\n    <input type=\"text\" ng-model=\"login.lds.name\" />\n  </md-input-container>\n  <md-input-container>\n    <label>Password</label>\n    <input type=\"password\" ng-model=\"login.lds.pass\" />\n  </md-input-container>\n  <md-button md-theme=\"green\" class=\"md-primary md-raised\">Login to LDS.org</md-button>\n</form>\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<p class=\"login-instructions\">Create a Council's account.</p>\n<form ng-submit=\"login.create()\">\n  <md-input-container>\n    <label>Email</label>\n    <input type=\"email\" ng-model=\"login.signup.email\" />\n  </md-input-container>\n  <md-input-container>\n    <label>Create password</label>\n    <input type=\"password\" ng-model=\"login.signup.pass\" />\n  </md-input-container>\n  <md-button md-theme=\"green\" class=\"md-primary md-raised\">Create Account</md-button>\n</form>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict'

	  // @ngInject
	  ;
	  function LoginCtrl($log, $state, Auth, $http, $firebaseObject) {
	    var login = this;
	    login.logoURL = __webpack_require__(62);
	    login.credentials = {};
	    login.lds = {};
	    login.template = 'ldsLogin.html';

	    login.login = function () {
	      Auth.$authWithPassword({
	        email: login.credentials.email,
	        password: login.credentials.password
	      }).then(function (authData) {
	        $state.go('home');
	      }).catch(function (error) {
	        $log.error('Authentication failed:', error);
	      });
	    };

	    login.signup = function () {
	      login.loading = true;
	      $http.post('https://councils-app.herokuapp.com/api/me', login.lds).then(function (response) {
	        login.me = response.data;
	        login.signup.email = login.me.email;
	        login.me.fname = login.me.preferredName.split(', ')[1];
	        login.me.lname = login.me.surname;
	        login.loading = false;
	        login.template = 'signup.html';
	      }).catch(function () {
	        login.loading = false;
	        // TODO: display message that login failed.
	      });
	    };

	    login.create = function () {
	      console.log('create!');
	      Auth.$createUser({
	        email: login.signup.email,
	        password: login.signup.pass
	      }).then(function (userData) {
	        console.log('u', userData);
	        login.me.uid = userData.uid;
	        var ref = new Firebase('https://councilsapp.firebaseio.com/users');
	        return $firebaseObject(ref).$loaded().then(function (users) {
	          console.log('users', users);
	          users[login.me.uid] = login.me.homeUnitNbr;
	          return users.$save();
	        });
	      }).then(function () {
	        console.log('auth');
	        return Auth.$authWithPassword({
	          email: login.signup.email,
	          password: login.signup.pass
	        });
	      }).then(function () {
	        console.log('ward');
	        var ref = new Firebase('https://councilsapp.firebaseio.com/' + login.me.homeUnitNbr + '/users');
	        var members = $firebaseObject(ref);
	        members[login.me.uid] = {};
	        members[login.me.uid].info = login.me;
	        return members.$save();
	      }).then(function (authData) {
	        console.log('home');
	        $state.go('home');
	      });
	    };
	  }
	  LoginCtrl.$inject = ["$log", "$state", "Auth", "$http", "$firebaseObject"];

	  ngModule.controller('LoginCtrl', LoginCtrl);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9db81941fedc8fce9b4ed12f2748adaa.png"

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = {
		"name": "councils",
		"version": "1.0.0",
		"description": "An church calling productivity tool",
		"scripts": {
			"install": "./node_modules/.bin/bower install && ./node_modules/.bin/gulp"
		},
		"devDependencies": {
			"autoprefixer": "^6.0.2",
			"autoprefixer-loader": "^3.1.0",
			"babel-core": "^6.1.2",
			"babel-loader": "^6.0.1",
			"bower": "^1.3.12",
			"css-loader": "^0.23.0",
			"del": "^2.0.2",
			"exports-loader": "^0.6.2",
			"file-loader": "^0.8.4",
			"gulp": "^3.8.8",
			"gulp-util": "^3.0.1",
			"html-loader": "^0.3.0",
			"html-webpack-plugin": "^1.1.0",
			"image-webpack-loader": "^1.6.1",
			"imagemin": "^4.0.0",
			"json-loader": "^0.5.1",
			"lodash": "^3.10.1",
			"ng-annotate-webpack-plugin": "^0.1.2",
			"open": "0.0.5",
			"portscanner": "^1.0.0",
			"postcss-loader": "^0.8.0",
			"sass-loader": "^3.1.1",
			"style-loader": "^0.13.0",
			"url-loader": "^0.5.5",
			"webpack": "^1.4.5",
			"webpack-dev-server": "^1.6.5"
		},
		"cordovaPlugins": [
			"cordova-plugin-device",
			"cordova-plugin-console",
			"cordova-plugin-whitelist",
			"cordova-plugin-splashscreen",
			"com.ionic.keyboard",
			{
				"locator": "https://github.com/phonegap-build/PushPlugin.git",
				"id": "com.phonegap.plugins.PushPlugin"
			}
		],
		"cordovaPlatforms": [
			"ios",
			"android"
		],
		"dependencies": {
			"angular": "^1.5.0-beta.2",
			"angular-animate": "^1.5.0-beta.2",
			"angular-aria": "^1.5.0-beta.2",
			"angular-elastic": "^2.5.0",
			"angular-material": "^0.11.0",
			"angular-moment": "^1.0.0-beta.3",
			"angularfire": "^1.1.2",
			"babel-runtime": "^6.0.14",
			"conventional-changelog": "^0.5.1",
			"del": "^2.0.2",
			"firebase": "^2.2.9",
			"firebase-util": "^0.2.5",
			"gulp-bump": "^1.0.0",
			"gulp-filter": "^3.0.1",
			"gulp-git": "^1.4.0",
			"gulp-jshint": "^1.11.2",
			"gulp-load-plugins": "^1.0.0-rc.1",
			"gulp-minify-css": "^1.2.1",
			"gulp-rename": "^1.2.2",
			"gulp-sourcemaps": "^1.5.2",
			"gulp-tag-version": "^1.3.0",
			"gulp-uglify": "^1.4.1",
			"gulp-util": "^3.0.6",
			"ionic-service-analytics": "^0.2.5",
			"ionic-service-core": "^0.1.10",
			"ionic-service-push": "^0.1.13",
			"jquery": "^2.1.4",
			"lodash": "^3.10.1",
			"map-stream": "0.0.6",
			"material-design-icons": "^2.0.0",
			"moment": "^2.10.6",
			"ng-cordova": "^0.1.23-alpha"
		}
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded!./index.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports


	// module
	exports.push([module.id, "/*\nTo customize the look and feel of Ionic, you can override the variables\nin ionic's _variables.scss file.\n\nFor example, you might change some of the default colors:\n\n$light:                           #fff !default;\n$stable:                          #f8f8f8 !default;\n$positive:                        #4a87ee !default;\n$calm:                            #43cee6 !default;\n$balanced:                        #66cc33 !default;\n$energized:                       #f0b840 !default;\n$assertive:                       #ef4e3a !default;\n$royal:                           #8a6de9 !default;\n$dark:                            #444 !default;\n*/\n/* The path for our ionicons font files, relative to the built CSS in www/css */\n/* @import \"../bower_components/ionic/scss/ionic\"; */\nhtml, body {\n  height: 100%;\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n  position: relative;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n[tabindex='-1']:focus {\n  outline: none;\n}\n\n.inset {\n  padding: 10px;\n}\n\nbutton.md-no-style {\n  font-weight: normal;\n  background-color: inherit;\n  text-align: left;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\nselect,\nbutton,\ntextarea,\ninput {\n  vertical-align: baseline;\n}\n\ninput[type=\"reset\"],\ninput[type=\"submit\"],\nhtml input[type=\"button\"],\nbutton {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\ninput[type=\"reset\"][disabled],\ninput[type=\"submit\"][disabled],\nhtml input[type=\"button\"][disabled],\nbutton[disabled] {\n  cursor: default;\n}\n\ntextarea {\n  vertical-align: top;\n  overflow: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n.md-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px;\n}\n\n.md-shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: inherit;\n  pointer-events: none;\n}\n\n.md-shadow-bottom-z-1 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.md-shadow-bottom-z-2 {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.md-shadow-animated.md-shadow {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/*\n * A container inside of a rippling element (eg a button),\n * which contains all of the individual ripples\n */\n.md-ripple-container {\n  pointer-events: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-ripple {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  opacity: 0;\n  border-radius: 50%;\n}\n\n.md-ripple.md-ripple-placed {\n  transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-ripple.md-ripple-scaled {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n}\n\n.md-ripple.md-ripple-active, .md-ripple.md-ripple-full, .md-ripple.md-ripple-visible {\n  opacity: 0.20;\n}\n\n.md-padding {\n  padding: 8px;\n}\n\n.md-margin {\n  margin: 8px;\n}\n\n.md-scroll-mask {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.md-scroll-mask > .md-scroll-mask-bar {\n  display: block;\n  position: absolute;\n  background-color: #fafafa;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 65;\n  box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.3);\n}\n\n@media (min-width: 600px) {\n  .md-padding {\n    padding: 16px;\n  }\n}\n\nhtml, body {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  min-height: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/************\n * Headings\n ************/\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  letter-spacing: -0.010em;\n  line-height: 112px;\n}\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  letter-spacing: -0.005em;\n  line-height: 56px;\n}\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 64px;\n}\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n}\n\n.md-headline {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n}\n\n.md-title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n}\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  line-height: 24px;\n}\n\n/************\n * Body Copy\n ************/\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  line-height: 20px;\n}\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  line-height: 24px;\n}\n\n.md-caption {\n  font-size: 12px;\n  letter-spacing: 0.020em;\n}\n\n.md-button {\n  letter-spacing: 0.010em;\n}\n\n/************\n * Defaults\n ************/\nbutton,\nselect,\nhtml,\ntextarea,\ninput {\n  font-family: bernina, Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nselect,\nbutton,\ntextarea,\ninput {\n  font-size: 100%;\n}\n\n/*\n*\n*  Responsive attributes\n*\n*  References:\n*  1) https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties#flex\n*  2) https://css-tricks.com/almanac/properties/f/flex/\n*  3) https://github.com/philipwalton/flexbugs#3-min-height-on-a-flex-container-wont-apply-to-its-flex-items\n*  4) http://godban.com.ua/projects/flexgrid\n*\n*/\n@-moz-document url-prefix() {\n  .layout-fill {\n    margin: 0;\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n  }\n}\n\n/*\n *  Apply Mixins to create Layout/Flexbox styles\n *\n */\n.flex-order {\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.flex-order-0 {\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.flex-order-1 {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.flex-order-2 {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.flex-order-3 {\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n}\n\n.flex-order-4 {\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4;\n}\n\n.flex-order-5 {\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5;\n}\n\n.flex-order-6 {\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6;\n}\n\n.flex-order-7 {\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7;\n}\n\n.flex-order-8 {\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8;\n}\n\n.flex-order-9 {\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9;\n}\n\n.flex-order-10 {\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10;\n}\n\n.flex-order-11 {\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11;\n}\n\n.flex-order-12 {\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12;\n}\n\n.flex-order-13 {\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13;\n}\n\n.flex-order-14 {\n  -webkit-order: 14;\n      -ms-flex-order: 14;\n          order: 14;\n}\n\n.flex-order-15 {\n  -webkit-order: 15;\n      -ms-flex-order: 15;\n          order: 15;\n}\n\n.flex-order-16 {\n  -webkit-order: 16;\n      -ms-flex-order: 16;\n          order: 16;\n}\n\n.flex-order-17 {\n  -webkit-order: 17;\n      -ms-flex-order: 17;\n          order: 17;\n}\n\n.flex-order-18 {\n  -webkit-order: 18;\n      -ms-flex-order: 18;\n          order: 18;\n}\n\n.flex-order-19 {\n  -webkit-order: 19;\n      -ms-flex-order: 19;\n          order: 19;\n}\n\n.offset-0, .flex-offset-0 {\n  margin-left: 0%;\n}\n\n.offset-5, .flex-offset-5 {\n  margin-left: 5%;\n}\n\n.offset-10, .flex-offset-10 {\n  margin-left: 10%;\n}\n\n.offset-15, .flex-offset-15 {\n  margin-left: 15%;\n}\n\n.offset-20, .flex-offset-20 {\n  margin-left: 20%;\n}\n\n.offset-25, .flex-offset-25 {\n  margin-left: 25%;\n}\n\n.offset-30, .flex-offset-30 {\n  margin-left: 30%;\n}\n\n.offset-35, .flex-offset-35 {\n  margin-left: 35%;\n}\n\n.offset-40, .flex-offset-40 {\n  margin-left: 40%;\n}\n\n.offset-45, .flex-offset-45 {\n  margin-left: 45%;\n}\n\n.offset-50, .flex-offset-50 {\n  margin-left: 50%;\n}\n\n.offset-55, .flex-offset-55 {\n  margin-left: 55%;\n}\n\n.offset-60, .flex-offset-60 {\n  margin-left: 60%;\n}\n\n.offset-65, .flex-offset-65 {\n  margin-left: 65%;\n}\n\n.offset-70, .flex-offset-70 {\n  margin-left: 70%;\n}\n\n.offset-75, .flex-offset-75 {\n  margin-left: 75%;\n}\n\n.offset-80, .flex-offset-80 {\n  margin-left: 80%;\n}\n\n.offset-85, .flex-offset-85 {\n  margin-left: 85%;\n}\n\n.offset-90, .flex-offset-90 {\n  margin-left: 90%;\n}\n\n.offset-95, .flex-offset-95 {\n  margin-left: 95%;\n}\n\n.offset-33, .flex-offset-33 {\n  margin-left: 33%;\n}\n\n.offset-34, .flex-offset-34 {\n  margin-left: 34%;\n}\n\n.offset-66, .flex-offset-66 {\n  margin-left: 66%;\n}\n\n.offset-67, .flex-offset-67 {\n  margin-left: 67%;\n}\n\n.layout-align-center, .layout-align-center-center,\n.layout-align-center-start,\n.layout-align-center-end {\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.layout-align-end, .layout-align-end-center,\n.layout-align-end-start,\n.layout-align-end-end {\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.layout-align-space-around, .layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end {\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n\n.layout-align-space-between, .layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end {\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.layout-align-center-start,\n.layout-align-start-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.layout-align-center-center,\n.layout-align-start-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 100%;\n}\n\n.layout-align-center-center > *,\n.layout-align-start-center > *,\n.layout-align-end-center > *,\n.layout-align-space-between-center > *,\n.layout-align-space-around-center > * {\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.layout-align-center-end,\n.layout-align-start-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.flex {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  box-sizing: border-box;\n}\n\n.flex-grow {\n  -webkit-flex: 1 1 100%;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  box-sizing: border-box;\n}\n\n.flex-initial {\n  -webkit-flex: 0 1 auto;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  box-sizing: border-box;\n}\n\n.flex-auto {\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  box-sizing: border-box;\n}\n\n.flex-none {\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  box-sizing: border-box;\n}\n\n.flex-0 {\n  -webkit-flex: 0 0 0%;\n      -ms-flex: 0 0 0%;\n          flex: 0 0 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-0,\n.layout-row > .flex-0 {\n  -webkit-flex: 0 0 0%;\n      -ms-flex: 0 0 0%;\n          flex: 0 0 0%;\n  max-width: 0%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-0,\n.layout-column > .flex-0 {\n  -webkit-flex: 0 0 0%;\n      -ms-flex: 0 0 0%;\n          flex: 0 0 0%;\n  max-width: 100%;\n  max-height: 0%;\n  box-sizing: border-box;\n}\n\n.flex-5 {\n  -webkit-flex: 0 0 5%;\n      -ms-flex: 0 0 5%;\n          flex: 0 0 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-5,\n.layout-row > .flex-5 {\n  -webkit-flex: 0 0 5%;\n      -ms-flex: 0 0 5%;\n          flex: 0 0 5%;\n  max-width: 5%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-5,\n.layout-column > .flex-5 {\n  -webkit-flex: 0 0 5%;\n      -ms-flex: 0 0 5%;\n          flex: 0 0 5%;\n  max-width: 100%;\n  max-height: 5%;\n  box-sizing: border-box;\n}\n\n.flex-10 {\n  -webkit-flex: 0 0 10%;\n      -ms-flex: 0 0 10%;\n          flex: 0 0 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-10,\n.layout-row > .flex-10 {\n  -webkit-flex: 0 0 10%;\n      -ms-flex: 0 0 10%;\n          flex: 0 0 10%;\n  max-width: 10%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-10,\n.layout-column > .flex-10 {\n  -webkit-flex: 0 0 10%;\n      -ms-flex: 0 0 10%;\n          flex: 0 0 10%;\n  max-width: 100%;\n  max-height: 10%;\n  box-sizing: border-box;\n}\n\n.flex-15 {\n  -webkit-flex: 0 0 15%;\n      -ms-flex: 0 0 15%;\n          flex: 0 0 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-15,\n.layout-row > .flex-15 {\n  -webkit-flex: 0 0 15%;\n      -ms-flex: 0 0 15%;\n          flex: 0 0 15%;\n  max-width: 15%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-15,\n.layout-column > .flex-15 {\n  -webkit-flex: 0 0 15%;\n      -ms-flex: 0 0 15%;\n          flex: 0 0 15%;\n  max-width: 100%;\n  max-height: 15%;\n  box-sizing: border-box;\n}\n\n.flex-20 {\n  -webkit-flex: 0 0 20%;\n      -ms-flex: 0 0 20%;\n          flex: 0 0 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-20,\n.layout-row > .flex-20 {\n  -webkit-flex: 0 0 20%;\n      -ms-flex: 0 0 20%;\n          flex: 0 0 20%;\n  max-width: 20%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-20,\n.layout-column > .flex-20 {\n  -webkit-flex: 0 0 20%;\n      -ms-flex: 0 0 20%;\n          flex: 0 0 20%;\n  max-width: 100%;\n  max-height: 20%;\n  box-sizing: border-box;\n}\n\n.flex-25 {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-25,\n.layout-row > .flex-25 {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-25,\n.layout-column > .flex-25 {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 100%;\n  max-height: 25%;\n  box-sizing: border-box;\n}\n\n.flex-30 {\n  -webkit-flex: 0 0 30%;\n      -ms-flex: 0 0 30%;\n          flex: 0 0 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-30,\n.layout-row > .flex-30 {\n  -webkit-flex: 0 0 30%;\n      -ms-flex: 0 0 30%;\n          flex: 0 0 30%;\n  max-width: 30%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-30,\n.layout-column > .flex-30 {\n  -webkit-flex: 0 0 30%;\n      -ms-flex: 0 0 30%;\n          flex: 0 0 30%;\n  max-width: 100%;\n  max-height: 30%;\n  box-sizing: border-box;\n}\n\n.flex-35 {\n  -webkit-flex: 0 0 35%;\n      -ms-flex: 0 0 35%;\n          flex: 0 0 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-35,\n.layout-row > .flex-35 {\n  -webkit-flex: 0 0 35%;\n      -ms-flex: 0 0 35%;\n          flex: 0 0 35%;\n  max-width: 35%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-35,\n.layout-column > .flex-35 {\n  -webkit-flex: 0 0 35%;\n      -ms-flex: 0 0 35%;\n          flex: 0 0 35%;\n  max-width: 100%;\n  max-height: 35%;\n  box-sizing: border-box;\n}\n\n.flex-40 {\n  -webkit-flex: 0 0 40%;\n      -ms-flex: 0 0 40%;\n          flex: 0 0 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-40,\n.layout-row > .flex-40 {\n  -webkit-flex: 0 0 40%;\n      -ms-flex: 0 0 40%;\n          flex: 0 0 40%;\n  max-width: 40%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-40,\n.layout-column > .flex-40 {\n  -webkit-flex: 0 0 40%;\n      -ms-flex: 0 0 40%;\n          flex: 0 0 40%;\n  max-width: 100%;\n  max-height: 40%;\n  box-sizing: border-box;\n}\n\n.flex-45 {\n  -webkit-flex: 0 0 45%;\n      -ms-flex: 0 0 45%;\n          flex: 0 0 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-45,\n.layout-row > .flex-45 {\n  -webkit-flex: 0 0 45%;\n      -ms-flex: 0 0 45%;\n          flex: 0 0 45%;\n  max-width: 45%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-45,\n.layout-column > .flex-45 {\n  -webkit-flex: 0 0 45%;\n      -ms-flex: 0 0 45%;\n          flex: 0 0 45%;\n  max-width: 100%;\n  max-height: 45%;\n  box-sizing: border-box;\n}\n\n.flex-50 {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-50,\n.layout-row > .flex-50 {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-50,\n.layout-column > .flex-50 {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 100%;\n  max-height: 50%;\n  box-sizing: border-box;\n}\n\n.flex-55 {\n  -webkit-flex: 0 0 55%;\n      -ms-flex: 0 0 55%;\n          flex: 0 0 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-55,\n.layout-row > .flex-55 {\n  -webkit-flex: 0 0 55%;\n      -ms-flex: 0 0 55%;\n          flex: 0 0 55%;\n  max-width: 55%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-55,\n.layout-column > .flex-55 {\n  -webkit-flex: 0 0 55%;\n      -ms-flex: 0 0 55%;\n          flex: 0 0 55%;\n  max-width: 100%;\n  max-height: 55%;\n  box-sizing: border-box;\n}\n\n.flex-60 {\n  -webkit-flex: 0 0 60%;\n      -ms-flex: 0 0 60%;\n          flex: 0 0 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-60,\n.layout-row > .flex-60 {\n  -webkit-flex: 0 0 60%;\n      -ms-flex: 0 0 60%;\n          flex: 0 0 60%;\n  max-width: 60%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-60,\n.layout-column > .flex-60 {\n  -webkit-flex: 0 0 60%;\n      -ms-flex: 0 0 60%;\n          flex: 0 0 60%;\n  max-width: 100%;\n  max-height: 60%;\n  box-sizing: border-box;\n}\n\n.flex-65 {\n  -webkit-flex: 0 0 65%;\n      -ms-flex: 0 0 65%;\n          flex: 0 0 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-65,\n.layout-row > .flex-65 {\n  -webkit-flex: 0 0 65%;\n      -ms-flex: 0 0 65%;\n          flex: 0 0 65%;\n  max-width: 65%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-65,\n.layout-column > .flex-65 {\n  -webkit-flex: 0 0 65%;\n      -ms-flex: 0 0 65%;\n          flex: 0 0 65%;\n  max-width: 100%;\n  max-height: 65%;\n  box-sizing: border-box;\n}\n\n.flex-70 {\n  -webkit-flex: 0 0 70%;\n      -ms-flex: 0 0 70%;\n          flex: 0 0 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-70,\n.layout-row > .flex-70 {\n  -webkit-flex: 0 0 70%;\n      -ms-flex: 0 0 70%;\n          flex: 0 0 70%;\n  max-width: 70%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-70,\n.layout-column > .flex-70 {\n  -webkit-flex: 0 0 70%;\n      -ms-flex: 0 0 70%;\n          flex: 0 0 70%;\n  max-width: 100%;\n  max-height: 70%;\n  box-sizing: border-box;\n}\n\n.flex-75 {\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-75,\n.layout-row > .flex-75 {\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-75,\n.layout-column > .flex-75 {\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 100%;\n  max-height: 75%;\n  box-sizing: border-box;\n}\n\n.flex-80 {\n  -webkit-flex: 0 0 80%;\n      -ms-flex: 0 0 80%;\n          flex: 0 0 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-80,\n.layout-row > .flex-80 {\n  -webkit-flex: 0 0 80%;\n      -ms-flex: 0 0 80%;\n          flex: 0 0 80%;\n  max-width: 80%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-80,\n.layout-column > .flex-80 {\n  -webkit-flex: 0 0 80%;\n      -ms-flex: 0 0 80%;\n          flex: 0 0 80%;\n  max-width: 100%;\n  max-height: 80%;\n  box-sizing: border-box;\n}\n\n.flex-85 {\n  -webkit-flex: 0 0 85%;\n      -ms-flex: 0 0 85%;\n          flex: 0 0 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-85,\n.layout-row > .flex-85 {\n  -webkit-flex: 0 0 85%;\n      -ms-flex: 0 0 85%;\n          flex: 0 0 85%;\n  max-width: 85%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-85,\n.layout-column > .flex-85 {\n  -webkit-flex: 0 0 85%;\n      -ms-flex: 0 0 85%;\n          flex: 0 0 85%;\n  max-width: 100%;\n  max-height: 85%;\n  box-sizing: border-box;\n}\n\n.flex-90 {\n  -webkit-flex: 0 0 90%;\n      -ms-flex: 0 0 90%;\n          flex: 0 0 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-90,\n.layout-row > .flex-90 {\n  -webkit-flex: 0 0 90%;\n      -ms-flex: 0 0 90%;\n          flex: 0 0 90%;\n  max-width: 90%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-90,\n.layout-column > .flex-90 {\n  -webkit-flex: 0 0 90%;\n      -ms-flex: 0 0 90%;\n          flex: 0 0 90%;\n  max-width: 100%;\n  max-height: 90%;\n  box-sizing: border-box;\n}\n\n.flex-95 {\n  -webkit-flex: 0 0 95%;\n      -ms-flex: 0 0 95%;\n          flex: 0 0 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-95,\n.layout-row > .flex-95 {\n  -webkit-flex: 0 0 95%;\n      -ms-flex: 0 0 95%;\n          flex: 0 0 95%;\n  max-width: 95%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-95,\n.layout-column > .flex-95 {\n  -webkit-flex: 0 0 95%;\n      -ms-flex: 0 0 95%;\n          flex: 0 0 95%;\n  max-width: 100%;\n  max-height: 95%;\n  box-sizing: border-box;\n}\n\n.flex-100 {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-100,\n.layout-row > .flex-100 {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-100,\n.layout-column > .flex-100 {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-33, .layout-row > .flex-33, .layout-row > .flex-33, .layout-row > .flex-33 {\n  -webkit-flex: 0 0 33%;\n      -ms-flex: 0 0 33%;\n          flex: 0 0 33%;\n  max-width: 33%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-34, .layout-row > .flex-34, .layout-row > .flex-34, .layout-row > .flex-34 {\n  -webkit-flex: 0 0 34%;\n      -ms-flex: 0 0 34%;\n          flex: 0 0 34%;\n  max-width: 34%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-66, .layout-row > .flex-66, .layout-row > .flex-66, .layout-row > .flex-66 {\n  -webkit-flex: 0 0 66%;\n      -ms-flex: 0 0 66%;\n          flex: 0 0 66%;\n  max-width: 66%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-row > .flex-67, .layout-row > .flex-67, .layout-row > .flex-67, .layout-row > .flex-67 {\n  -webkit-flex: 0 0 67%;\n      -ms-flex: 0 0 67%;\n          flex: 0 0 67%;\n  max-width: 67%;\n  max-height: 100%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-33, .layout-column > .flex-33, .layout-column > .flex-33, .layout-column > .flex-33 {\n  -webkit-flex: 0 0 33%;\n      -ms-flex: 0 0 33%;\n          flex: 0 0 33%;\n  max-width: 100%;\n  max-height: 33%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-34, .layout-column > .flex-34, .layout-column > .flex-34, .layout-column > .flex-34 {\n  -webkit-flex: 0 0 34%;\n      -ms-flex: 0 0 34%;\n          flex: 0 0 34%;\n  max-width: 100%;\n  max-height: 34%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-66, .layout-column > .flex-66, .layout-column > .flex-66, .layout-column > .flex-66 {\n  -webkit-flex: 0 0 66%;\n      -ms-flex: 0 0 66%;\n          flex: 0 0 66%;\n  max-width: 100%;\n  max-height: 66%;\n  box-sizing: border-box;\n}\n\n.layout-column > .flex-67, .layout-column > .flex-67, .layout-column > .flex-67, .layout-column > .flex-67 {\n  -webkit-flex: 0 0 67%;\n      -ms-flex: 0 0 67%;\n          flex: 0 0 67%;\n  max-width: 100%;\n  max-height: 67%;\n  box-sizing: border-box;\n}\n\n.layout, .layout-column, .layout-row {\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.layout-column {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.layout-row {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.layout-padding > .flex-sm, .layout-padding > .flex-lt-md {\n  padding: 4px;\n}\n\n.layout-padding,\n.layout-padding > .flex,\n.layout-padding > .flex-gt-sm,\n.layout-padding > .flex-md,\n.layout-padding > .flex-lt-lg {\n  padding: 8px;\n}\n\n.layout-padding > .flex-gt-md,\n.layout-padding > .flex-lg {\n  padding: 16px;\n}\n\n.layout-margin > .flex-sm,\n.layout-margin > .flex-lt-md {\n  margin: 4px;\n}\n\n.layout-margin,\n.layout-margin > .flex,\n.layout-margin > .flex-gt-sm,\n.layout-margin > .flex-md,\n.layout-margin > .flex-lt-lg {\n  margin: 8px;\n}\n\n.layout-margin > .flex-gt-md,\n.layout-margin > .flex-lg {\n  margin: 16px;\n}\n\n.layout-wrap {\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.layout-nowrap {\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n}\n\n.layout-fill {\n  margin: 0;\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n}\n\n/**\n * `hide-gt-sm show-gt-lg` should hide from 600px to 1200px\n * `show-md hide-gt-sm` should show from 0px to 960px and hide at >960px\n * `hide-gt-md show-gt-sm` should show everywhere (show overrides hide)`\n *\n *  hide means hide everywhere\n *  Sizes:\n *         0    <= size < 600  Phone\n *         600  <= size < 960  Tablet\n *         960  <= size < 1200 Tablet-Landscape\n */\n@media (max-width: 599px) {\n  .hide-sm:not(.show-sm):not(.show), .hide:not(.show-sm):not(.show) {\n    display: none;\n  }\n  .flex-order-sm-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-sm-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-sm-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-sm-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-sm-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-sm-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-sm-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-sm-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-sm-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-sm-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .flex-order-sm-10 {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .flex-order-sm-11 {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .flex-order-sm-12 {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .flex-order-sm-13 {\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .flex-order-sm-14 {\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .flex-order-sm-15 {\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .flex-order-sm-16 {\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .flex-order-sm-17 {\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .flex-order-sm-18 {\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .flex-order-sm-19 {\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .offset-sm-0, .flex-offset-sm-0 {\n    margin-left: 0%;\n  }\n  .offset-sm-5, .flex-offset-sm-5 {\n    margin-left: 5%;\n  }\n  .offset-sm-10, .flex-offset-sm-10 {\n    margin-left: 10%;\n  }\n  .offset-sm-15, .flex-offset-sm-15 {\n    margin-left: 15%;\n  }\n  .offset-sm-20, .flex-offset-sm-20 {\n    margin-left: 20%;\n  }\n  .offset-sm-25, .flex-offset-sm-25 {\n    margin-left: 25%;\n  }\n  .offset-sm-30, .flex-offset-sm-30 {\n    margin-left: 30%;\n  }\n  .offset-sm-35, .flex-offset-sm-35 {\n    margin-left: 35%;\n  }\n  .offset-sm-40, .flex-offset-sm-40 {\n    margin-left: 40%;\n  }\n  .offset-sm-45, .flex-offset-sm-45 {\n    margin-left: 45%;\n  }\n  .offset-sm-50, .flex-offset-sm-50 {\n    margin-left: 50%;\n  }\n  .offset-sm-55, .flex-offset-sm-55 {\n    margin-left: 55%;\n  }\n  .offset-sm-60, .flex-offset-sm-60 {\n    margin-left: 60%;\n  }\n  .offset-sm-65, .flex-offset-sm-65 {\n    margin-left: 65%;\n  }\n  .offset-sm-70, .flex-offset-sm-70 {\n    margin-left: 70%;\n  }\n  .offset-sm-75, .flex-offset-sm-75 {\n    margin-left: 75%;\n  }\n  .offset-sm-80, .flex-offset-sm-80 {\n    margin-left: 80%;\n  }\n  .offset-sm-85, .flex-offset-sm-85 {\n    margin-left: 85%;\n  }\n  .offset-sm-90, .flex-offset-sm-90 {\n    margin-left: 90%;\n  }\n  .offset-sm-95, .flex-offset-sm-95 {\n    margin-left: 95%;\n  }\n  .offset-sm-33, .flex-offset-sm-33 {\n    margin-left: 33%;\n  }\n  .offset-sm-34, .flex-offset-sm-34 {\n    margin-left: 34%;\n  }\n  .offset-sm-66, .flex-offset-sm-66 {\n    margin-left: 66%;\n  }\n  .offset-sm-67, .flex-offset-sm-67 {\n    margin-left: 67%;\n  }\n  .layout-align-sm-center, .layout-align-sm-center-center,\n  .layout-align-sm-center-start,\n  .layout-align-sm-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-sm-end, .layout-align-sm-end-center,\n  .layout-align-sm-end-start,\n  .layout-align-sm-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-sm-space-around, .layout-align-sm-space-around-center,\n  .layout-align-sm-space-around-start,\n  .layout-align-sm-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-sm-space-between, .layout-align-sm-space-between-center,\n  .layout-align-sm-space-between-start,\n  .layout-align-sm-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-sm-center-start,\n  .layout-align-sm-start-start,\n  .layout-align-sm-end-start,\n  .layout-align-sm-space-between-start,\n  .layout-align-sm-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-sm-center-center,\n  .layout-align-sm-start-center,\n  .layout-align-sm-end-center,\n  .layout-align-sm-space-between-center,\n  .layout-align-sm-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 100%;\n  }\n  .layout-align-sm-center-center > *,\n  .layout-align-sm-start-center > *,\n  .layout-align-sm-end-center > *,\n  .layout-align-sm-space-between-center > *,\n  .layout-align-sm-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .layout-align-sm-center-end,\n  .layout-align-sm-start-end,\n  .layout-align-sm-end-end,\n  .layout-align-sm-space-between-end,\n  .layout-align-sm-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .flex-sm {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    box-sizing: border-box;\n  }\n  .flex-sm-grow {\n    -webkit-flex: 1 1 100%;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    box-sizing: border-box;\n  }\n  .flex-sm-initial {\n    -webkit-flex: 0 1 auto;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-sm-auto {\n    -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-sm-none {\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .flex-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-0,\n  .layout-sm-row > .flex-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-0,\n  .layout-sm-column > .flex-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n  }\n  .flex-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-5,\n  .layout-sm-row > .flex-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-5,\n  .layout-sm-column > .flex-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box;\n  }\n  .flex-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-10,\n  .layout-sm-row > .flex-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-10,\n  .layout-sm-column > .flex-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box;\n  }\n  .flex-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-15,\n  .layout-sm-row > .flex-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-15,\n  .layout-sm-column > .flex-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box;\n  }\n  .flex-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-20,\n  .layout-sm-row > .flex-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-20,\n  .layout-sm-column > .flex-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box;\n  }\n  .flex-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-25,\n  .layout-sm-row > .flex-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-25,\n  .layout-sm-column > .flex-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box;\n  }\n  .flex-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-30,\n  .layout-sm-row > .flex-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-30,\n  .layout-sm-column > .flex-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box;\n  }\n  .flex-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-35,\n  .layout-sm-row > .flex-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-35,\n  .layout-sm-column > .flex-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box;\n  }\n  .flex-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-40,\n  .layout-sm-row > .flex-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-40,\n  .layout-sm-column > .flex-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box;\n  }\n  .flex-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-45,\n  .layout-sm-row > .flex-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-45,\n  .layout-sm-column > .flex-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box;\n  }\n  .flex-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-50,\n  .layout-sm-row > .flex-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-50,\n  .layout-sm-column > .flex-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box;\n  }\n  .flex-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-55,\n  .layout-sm-row > .flex-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-55,\n  .layout-sm-column > .flex-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box;\n  }\n  .flex-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-60,\n  .layout-sm-row > .flex-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-60,\n  .layout-sm-column > .flex-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box;\n  }\n  .flex-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-65,\n  .layout-sm-row > .flex-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-65,\n  .layout-sm-column > .flex-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box;\n  }\n  .flex-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-70,\n  .layout-sm-row > .flex-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-70,\n  .layout-sm-column > .flex-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box;\n  }\n  .flex-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-75,\n  .layout-sm-row > .flex-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-75,\n  .layout-sm-column > .flex-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box;\n  }\n  .flex-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-80,\n  .layout-sm-row > .flex-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-80,\n  .layout-sm-column > .flex-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box;\n  }\n  .flex-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-85,\n  .layout-sm-row > .flex-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-85,\n  .layout-sm-column > .flex-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box;\n  }\n  .flex-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-90,\n  .layout-sm-row > .flex-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-90,\n  .layout-sm-column > .flex-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box;\n  }\n  .flex-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-95,\n  .layout-sm-row > .flex-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-95,\n  .layout-sm-column > .flex-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box;\n  }\n  .flex-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-100,\n  .layout-sm-row > .flex-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-100,\n  .layout-sm-column > .flex-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-33, .layout-row > .flex-sm-33, .layout-sm-row > .flex-sm-33, .layout-sm-row > .flex-sm-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 33%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-34, .layout-row > .flex-sm-34, .layout-sm-row > .flex-sm-34, .layout-sm-row > .flex-sm-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 34%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-66, .layout-row > .flex-sm-66, .layout-sm-row > .flex-sm-66, .layout-sm-row > .flex-sm-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 66%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-sm-67, .layout-row > .flex-sm-67, .layout-sm-row > .flex-sm-67, .layout-sm-row > .flex-sm-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 67%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-33, .layout-column > .flex-sm-33, .layout-sm-column > .flex-sm-33, .layout-sm-column > .flex-sm-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 100%;\n    max-height: 33%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-34, .layout-column > .flex-sm-34, .layout-sm-column > .flex-sm-34, .layout-sm-column > .flex-sm-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 100%;\n    max-height: 34%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-66, .layout-column > .flex-sm-66, .layout-sm-column > .flex-sm-66, .layout-sm-column > .flex-sm-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 100%;\n    max-height: 66%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-sm-67, .layout-column > .flex-sm-67, .layout-sm-column > .flex-sm-67, .layout-sm-column > .flex-sm-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 100%;\n    max-height: 67%;\n    box-sizing: border-box;\n  }\n  .layout-sm, .layout-sm-column, .layout-sm-row {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-sm-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-sm-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n@media (min-width: 600px) {\n  .flex-order-gt-sm-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-gt-sm-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-gt-sm-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-gt-sm-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-gt-sm-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-gt-sm-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-gt-sm-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-gt-sm-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-gt-sm-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-gt-sm-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .flex-order-gt-sm-10 {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .flex-order-gt-sm-11 {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .flex-order-gt-sm-12 {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .flex-order-gt-sm-13 {\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .flex-order-gt-sm-14 {\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .flex-order-gt-sm-15 {\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .flex-order-gt-sm-16 {\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .flex-order-gt-sm-17 {\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .flex-order-gt-sm-18 {\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .flex-order-gt-sm-19 {\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .offset-gt-sm-0, .flex-offset-gt-sm-0 {\n    margin-left: 0%;\n  }\n  .offset-gt-sm-5, .flex-offset-gt-sm-5 {\n    margin-left: 5%;\n  }\n  .offset-gt-sm-10, .flex-offset-gt-sm-10 {\n    margin-left: 10%;\n  }\n  .offset-gt-sm-15, .flex-offset-gt-sm-15 {\n    margin-left: 15%;\n  }\n  .offset-gt-sm-20, .flex-offset-gt-sm-20 {\n    margin-left: 20%;\n  }\n  .offset-gt-sm-25, .flex-offset-gt-sm-25 {\n    margin-left: 25%;\n  }\n  .offset-gt-sm-30, .flex-offset-gt-sm-30 {\n    margin-left: 30%;\n  }\n  .offset-gt-sm-35, .flex-offset-gt-sm-35 {\n    margin-left: 35%;\n  }\n  .offset-gt-sm-40, .flex-offset-gt-sm-40 {\n    margin-left: 40%;\n  }\n  .offset-gt-sm-45, .flex-offset-gt-sm-45 {\n    margin-left: 45%;\n  }\n  .offset-gt-sm-50, .flex-offset-gt-sm-50 {\n    margin-left: 50%;\n  }\n  .offset-gt-sm-55, .flex-offset-gt-sm-55 {\n    margin-left: 55%;\n  }\n  .offset-gt-sm-60, .flex-offset-gt-sm-60 {\n    margin-left: 60%;\n  }\n  .offset-gt-sm-65, .flex-offset-gt-sm-65 {\n    margin-left: 65%;\n  }\n  .offset-gt-sm-70, .flex-offset-gt-sm-70 {\n    margin-left: 70%;\n  }\n  .offset-gt-sm-75, .flex-offset-gt-sm-75 {\n    margin-left: 75%;\n  }\n  .offset-gt-sm-80, .flex-offset-gt-sm-80 {\n    margin-left: 80%;\n  }\n  .offset-gt-sm-85, .flex-offset-gt-sm-85 {\n    margin-left: 85%;\n  }\n  .offset-gt-sm-90, .flex-offset-gt-sm-90 {\n    margin-left: 90%;\n  }\n  .offset-gt-sm-95, .flex-offset-gt-sm-95 {\n    margin-left: 95%;\n  }\n  .offset-gt-sm-33, .flex-offset-gt-sm-33 {\n    margin-left: 33%;\n  }\n  .offset-gt-sm-34, .flex-offset-gt-sm-34 {\n    margin-left: 34%;\n  }\n  .offset-gt-sm-66, .flex-offset-gt-sm-66 {\n    margin-left: 66%;\n  }\n  .offset-gt-sm-67, .flex-offset-gt-sm-67 {\n    margin-left: 67%;\n  }\n  .layout-align-gt-sm-center, .layout-align-gt-sm-center-center,\n  .layout-align-gt-sm-center-start,\n  .layout-align-gt-sm-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-gt-sm-end, .layout-align-gt-sm-end-center,\n  .layout-align-gt-sm-end-start,\n  .layout-align-gt-sm-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-gt-sm-space-around, .layout-align-gt-sm-space-around-center,\n  .layout-align-gt-sm-space-around-start,\n  .layout-align-gt-sm-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-gt-sm-space-between, .layout-align-gt-sm-space-between-center,\n  .layout-align-gt-sm-space-between-start,\n  .layout-align-gt-sm-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-gt-sm-center-start,\n  .layout-align-gt-sm-start-start,\n  .layout-align-gt-sm-end-start,\n  .layout-align-gt-sm-space-between-start,\n  .layout-align-gt-sm-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-gt-sm-center-center,\n  .layout-align-gt-sm-start-center,\n  .layout-align-gt-sm-end-center,\n  .layout-align-gt-sm-space-between-center,\n  .layout-align-gt-sm-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 100%;\n  }\n  .layout-align-gt-sm-center-center > *,\n  .layout-align-gt-sm-start-center > *,\n  .layout-align-gt-sm-end-center > *,\n  .layout-align-gt-sm-space-between-center > *,\n  .layout-align-gt-sm-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .layout-align-gt-sm-center-end,\n  .layout-align-gt-sm-start-end,\n  .layout-align-gt-sm-end-end,\n  .layout-align-gt-sm-space-between-end,\n  .layout-align-gt-sm-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .flex-gt-sm {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-grow {\n    -webkit-flex: 1 1 100%;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-initial {\n    -webkit-flex: 0 1 auto;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-auto {\n    -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-none {\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-0,\n  .layout-gt-sm-row > .flex-gt-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-0,\n  .layout-gt-sm-column > .flex-gt-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-5,\n  .layout-gt-sm-row > .flex-gt-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-5,\n  .layout-gt-sm-column > .flex-gt-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-10,\n  .layout-gt-sm-row > .flex-gt-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-10,\n  .layout-gt-sm-column > .flex-gt-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-15,\n  .layout-gt-sm-row > .flex-gt-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-15,\n  .layout-gt-sm-column > .flex-gt-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-20,\n  .layout-gt-sm-row > .flex-gt-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-20,\n  .layout-gt-sm-column > .flex-gt-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-25,\n  .layout-gt-sm-row > .flex-gt-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-25,\n  .layout-gt-sm-column > .flex-gt-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-30,\n  .layout-gt-sm-row > .flex-gt-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-30,\n  .layout-gt-sm-column > .flex-gt-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-35,\n  .layout-gt-sm-row > .flex-gt-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-35,\n  .layout-gt-sm-column > .flex-gt-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-40,\n  .layout-gt-sm-row > .flex-gt-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-40,\n  .layout-gt-sm-column > .flex-gt-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-45,\n  .layout-gt-sm-row > .flex-gt-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-45,\n  .layout-gt-sm-column > .flex-gt-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-50,\n  .layout-gt-sm-row > .flex-gt-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-50,\n  .layout-gt-sm-column > .flex-gt-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-55,\n  .layout-gt-sm-row > .flex-gt-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-55,\n  .layout-gt-sm-column > .flex-gt-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-60,\n  .layout-gt-sm-row > .flex-gt-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-60,\n  .layout-gt-sm-column > .flex-gt-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-65,\n  .layout-gt-sm-row > .flex-gt-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-65,\n  .layout-gt-sm-column > .flex-gt-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-70,\n  .layout-gt-sm-row > .flex-gt-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-70,\n  .layout-gt-sm-column > .flex-gt-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-75,\n  .layout-gt-sm-row > .flex-gt-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-75,\n  .layout-gt-sm-column > .flex-gt-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-80,\n  .layout-gt-sm-row > .flex-gt-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-80,\n  .layout-gt-sm-column > .flex-gt-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-85,\n  .layout-gt-sm-row > .flex-gt-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-85,\n  .layout-gt-sm-column > .flex-gt-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-90,\n  .layout-gt-sm-row > .flex-gt-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-90,\n  .layout-gt-sm-column > .flex-gt-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-95,\n  .layout-gt-sm-row > .flex-gt-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-95,\n  .layout-gt-sm-column > .flex-gt-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box;\n  }\n  .flex-gt-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-100,\n  .layout-gt-sm-row > .flex-gt-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-100,\n  .layout-gt-sm-column > .flex-gt-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-33, .layout-row > .flex-gt-sm-33, .layout-gt-sm-row > .flex-gt-sm-33, .layout-gt-sm-row > .flex-gt-sm-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 33%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-34, .layout-row > .flex-gt-sm-34, .layout-gt-sm-row > .flex-gt-sm-34, .layout-gt-sm-row > .flex-gt-sm-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 34%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-66, .layout-row > .flex-gt-sm-66, .layout-gt-sm-row > .flex-gt-sm-66, .layout-gt-sm-row > .flex-gt-sm-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 66%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-sm-67, .layout-row > .flex-gt-sm-67, .layout-gt-sm-row > .flex-gt-sm-67, .layout-gt-sm-row > .flex-gt-sm-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 67%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-33, .layout-column > .flex-gt-sm-33, .layout-gt-sm-column > .flex-gt-sm-33, .layout-gt-sm-column > .flex-gt-sm-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 100%;\n    max-height: 33%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-34, .layout-column > .flex-gt-sm-34, .layout-gt-sm-column > .flex-gt-sm-34, .layout-gt-sm-column > .flex-gt-sm-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 100%;\n    max-height: 34%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-66, .layout-column > .flex-gt-sm-66, .layout-gt-sm-column > .flex-gt-sm-66, .layout-gt-sm-column > .flex-gt-sm-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 100%;\n    max-height: 66%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-sm-67, .layout-column > .flex-gt-sm-67, .layout-gt-sm-column > .flex-gt-sm-67, .layout-gt-sm-column > .flex-gt-sm-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 100%;\n    max-height: 67%;\n    box-sizing: border-box;\n  }\n  .layout-gt-sm, .layout-gt-sm-column, .layout-gt-sm-row {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-gt-sm-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-gt-sm-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 959px) {\n  .hide:not(.show-gt-sm):not(.show-md):not(.show), .hide-gt-sm:not(.show-gt-sm):not(.show-md):not(.show) {\n    display: none;\n  }\n  .hide-md:not(.show-md):not(.show) {\n    display: none;\n  }\n  .flex-order-md-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-md-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-md-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-md-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-md-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-md-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-md-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-md-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-md-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-md-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .flex-order-md-10 {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .flex-order-md-11 {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .flex-order-md-12 {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .flex-order-md-13 {\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .flex-order-md-14 {\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .flex-order-md-15 {\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .flex-order-md-16 {\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .flex-order-md-17 {\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .flex-order-md-18 {\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .flex-order-md-19 {\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .offset-md-0, .flex-offset-md-0 {\n    margin-left: 0%;\n  }\n  .offset-md-5, .flex-offset-md-5 {\n    margin-left: 5%;\n  }\n  .offset-md-10, .flex-offset-md-10 {\n    margin-left: 10%;\n  }\n  .offset-md-15, .flex-offset-md-15 {\n    margin-left: 15%;\n  }\n  .offset-md-20, .flex-offset-md-20 {\n    margin-left: 20%;\n  }\n  .offset-md-25, .flex-offset-md-25 {\n    margin-left: 25%;\n  }\n  .offset-md-30, .flex-offset-md-30 {\n    margin-left: 30%;\n  }\n  .offset-md-35, .flex-offset-md-35 {\n    margin-left: 35%;\n  }\n  .offset-md-40, .flex-offset-md-40 {\n    margin-left: 40%;\n  }\n  .offset-md-45, .flex-offset-md-45 {\n    margin-left: 45%;\n  }\n  .offset-md-50, .flex-offset-md-50 {\n    margin-left: 50%;\n  }\n  .offset-md-55, .flex-offset-md-55 {\n    margin-left: 55%;\n  }\n  .offset-md-60, .flex-offset-md-60 {\n    margin-left: 60%;\n  }\n  .offset-md-65, .flex-offset-md-65 {\n    margin-left: 65%;\n  }\n  .offset-md-70, .flex-offset-md-70 {\n    margin-left: 70%;\n  }\n  .offset-md-75, .flex-offset-md-75 {\n    margin-left: 75%;\n  }\n  .offset-md-80, .flex-offset-md-80 {\n    margin-left: 80%;\n  }\n  .offset-md-85, .flex-offset-md-85 {\n    margin-left: 85%;\n  }\n  .offset-md-90, .flex-offset-md-90 {\n    margin-left: 90%;\n  }\n  .offset-md-95, .flex-offset-md-95 {\n    margin-left: 95%;\n  }\n  .offset-md-33, .flex-offset-md-33 {\n    margin-left: 33%;\n  }\n  .offset-md-34, .flex-offset-md-34 {\n    margin-left: 34%;\n  }\n  .offset-md-66, .flex-offset-md-66 {\n    margin-left: 66%;\n  }\n  .offset-md-67, .flex-offset-md-67 {\n    margin-left: 67%;\n  }\n  .layout-align-md-center, .layout-align-md-center-center,\n  .layout-align-md-center-start,\n  .layout-align-md-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-md-end, .layout-align-md-end-center,\n  .layout-align-md-end-start,\n  .layout-align-md-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-md-space-around, .layout-align-md-space-around-center,\n  .layout-align-md-space-around-start,\n  .layout-align-md-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-md-space-between, .layout-align-md-space-between-center,\n  .layout-align-md-space-between-start,\n  .layout-align-md-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-md-center-start,\n  .layout-align-md-start-start,\n  .layout-align-md-end-start,\n  .layout-align-md-space-between-start,\n  .layout-align-md-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-md-center-center,\n  .layout-align-md-start-center,\n  .layout-align-md-end-center,\n  .layout-align-md-space-between-center,\n  .layout-align-md-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 100%;\n  }\n  .layout-align-md-center-center > *,\n  .layout-align-md-start-center > *,\n  .layout-align-md-end-center > *,\n  .layout-align-md-space-between-center > *,\n  .layout-align-md-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .layout-align-md-center-end,\n  .layout-align-md-start-end,\n  .layout-align-md-end-end,\n  .layout-align-md-space-between-end,\n  .layout-align-md-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .flex-md {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    box-sizing: border-box;\n  }\n  .flex-md-grow {\n    -webkit-flex: 1 1 100%;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    box-sizing: border-box;\n  }\n  .flex-md-initial {\n    -webkit-flex: 0 1 auto;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-md-auto {\n    -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-md-none {\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .flex-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-0,\n  .layout-md-row > .flex-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-0,\n  .layout-md-column > .flex-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n  }\n  .flex-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-5,\n  .layout-md-row > .flex-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-5,\n  .layout-md-column > .flex-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box;\n  }\n  .flex-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-10,\n  .layout-md-row > .flex-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-10,\n  .layout-md-column > .flex-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box;\n  }\n  .flex-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-15,\n  .layout-md-row > .flex-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-15,\n  .layout-md-column > .flex-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box;\n  }\n  .flex-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-20,\n  .layout-md-row > .flex-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-20,\n  .layout-md-column > .flex-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box;\n  }\n  .flex-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-25,\n  .layout-md-row > .flex-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-25,\n  .layout-md-column > .flex-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box;\n  }\n  .flex-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-30,\n  .layout-md-row > .flex-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-30,\n  .layout-md-column > .flex-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box;\n  }\n  .flex-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-35,\n  .layout-md-row > .flex-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-35,\n  .layout-md-column > .flex-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box;\n  }\n  .flex-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-40,\n  .layout-md-row > .flex-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-40,\n  .layout-md-column > .flex-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box;\n  }\n  .flex-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-45,\n  .layout-md-row > .flex-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-45,\n  .layout-md-column > .flex-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box;\n  }\n  .flex-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-50,\n  .layout-md-row > .flex-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-50,\n  .layout-md-column > .flex-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box;\n  }\n  .flex-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-55,\n  .layout-md-row > .flex-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-55,\n  .layout-md-column > .flex-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box;\n  }\n  .flex-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-60,\n  .layout-md-row > .flex-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-60,\n  .layout-md-column > .flex-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box;\n  }\n  .flex-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-65,\n  .layout-md-row > .flex-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-65,\n  .layout-md-column > .flex-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box;\n  }\n  .flex-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-70,\n  .layout-md-row > .flex-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-70,\n  .layout-md-column > .flex-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box;\n  }\n  .flex-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-75,\n  .layout-md-row > .flex-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-75,\n  .layout-md-column > .flex-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box;\n  }\n  .flex-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-80,\n  .layout-md-row > .flex-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-80,\n  .layout-md-column > .flex-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box;\n  }\n  .flex-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-85,\n  .layout-md-row > .flex-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-85,\n  .layout-md-column > .flex-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box;\n  }\n  .flex-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-90,\n  .layout-md-row > .flex-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-90,\n  .layout-md-column > .flex-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box;\n  }\n  .flex-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-95,\n  .layout-md-row > .flex-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-95,\n  .layout-md-column > .flex-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box;\n  }\n  .flex-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-100,\n  .layout-md-row > .flex-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-100,\n  .layout-md-column > .flex-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-33, .layout-row > .flex-md-33, .layout-md-row > .flex-md-33, .layout-md-row > .flex-md-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 33%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-34, .layout-row > .flex-md-34, .layout-md-row > .flex-md-34, .layout-md-row > .flex-md-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 34%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-66, .layout-row > .flex-md-66, .layout-md-row > .flex-md-66, .layout-md-row > .flex-md-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 66%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-md-67, .layout-row > .flex-md-67, .layout-md-row > .flex-md-67, .layout-md-row > .flex-md-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 67%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-33, .layout-column > .flex-md-33, .layout-md-column > .flex-md-33, .layout-md-column > .flex-md-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 100%;\n    max-height: 33%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-34, .layout-column > .flex-md-34, .layout-md-column > .flex-md-34, .layout-md-column > .flex-md-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 100%;\n    max-height: 34%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-66, .layout-column > .flex-md-66, .layout-md-column > .flex-md-66, .layout-md-column > .flex-md-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 100%;\n    max-height: 66%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-md-67, .layout-column > .flex-md-67, .layout-md-column > .flex-md-67, .layout-md-column > .flex-md-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 100%;\n    max-height: 67%;\n    box-sizing: border-box;\n  }\n  .layout-md, .layout-md-column, .layout-md-row {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-md-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-md-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n@media (min-width: 960px) {\n  .flex-order-gt-md-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-gt-md-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-gt-md-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-gt-md-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-gt-md-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-gt-md-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-gt-md-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-gt-md-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-gt-md-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-gt-md-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .flex-order-gt-md-10 {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .flex-order-gt-md-11 {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .flex-order-gt-md-12 {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .flex-order-gt-md-13 {\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .flex-order-gt-md-14 {\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .flex-order-gt-md-15 {\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .flex-order-gt-md-16 {\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .flex-order-gt-md-17 {\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .flex-order-gt-md-18 {\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .flex-order-gt-md-19 {\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .offset-gt-md-0, .flex-offset-gt-md-0 {\n    margin-left: 0%;\n  }\n  .offset-gt-md-5, .flex-offset-gt-md-5 {\n    margin-left: 5%;\n  }\n  .offset-gt-md-10, .flex-offset-gt-md-10 {\n    margin-left: 10%;\n  }\n  .offset-gt-md-15, .flex-offset-gt-md-15 {\n    margin-left: 15%;\n  }\n  .offset-gt-md-20, .flex-offset-gt-md-20 {\n    margin-left: 20%;\n  }\n  .offset-gt-md-25, .flex-offset-gt-md-25 {\n    margin-left: 25%;\n  }\n  .offset-gt-md-30, .flex-offset-gt-md-30 {\n    margin-left: 30%;\n  }\n  .offset-gt-md-35, .flex-offset-gt-md-35 {\n    margin-left: 35%;\n  }\n  .offset-gt-md-40, .flex-offset-gt-md-40 {\n    margin-left: 40%;\n  }\n  .offset-gt-md-45, .flex-offset-gt-md-45 {\n    margin-left: 45%;\n  }\n  .offset-gt-md-50, .flex-offset-gt-md-50 {\n    margin-left: 50%;\n  }\n  .offset-gt-md-55, .flex-offset-gt-md-55 {\n    margin-left: 55%;\n  }\n  .offset-gt-md-60, .flex-offset-gt-md-60 {\n    margin-left: 60%;\n  }\n  .offset-gt-md-65, .flex-offset-gt-md-65 {\n    margin-left: 65%;\n  }\n  .offset-gt-md-70, .flex-offset-gt-md-70 {\n    margin-left: 70%;\n  }\n  .offset-gt-md-75, .flex-offset-gt-md-75 {\n    margin-left: 75%;\n  }\n  .offset-gt-md-80, .flex-offset-gt-md-80 {\n    margin-left: 80%;\n  }\n  .offset-gt-md-85, .flex-offset-gt-md-85 {\n    margin-left: 85%;\n  }\n  .offset-gt-md-90, .flex-offset-gt-md-90 {\n    margin-left: 90%;\n  }\n  .offset-gt-md-95, .flex-offset-gt-md-95 {\n    margin-left: 95%;\n  }\n  .offset-gt-md-33, .flex-offset-gt-md-33 {\n    margin-left: 33%;\n  }\n  .offset-gt-md-34, .flex-offset-gt-md-34 {\n    margin-left: 34%;\n  }\n  .offset-gt-md-66, .flex-offset-gt-md-66 {\n    margin-left: 66%;\n  }\n  .offset-gt-md-67, .flex-offset-gt-md-67 {\n    margin-left: 67%;\n  }\n  .layout-align-gt-md-center, .layout-align-gt-md-center-center,\n  .layout-align-gt-md-center-start,\n  .layout-align-gt-md-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-gt-md-end, .layout-align-gt-md-end-center,\n  .layout-align-gt-md-end-start,\n  .layout-align-gt-md-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-gt-md-space-around, .layout-align-gt-md-space-around-center,\n  .layout-align-gt-md-space-around-start,\n  .layout-align-gt-md-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-gt-md-space-between, .layout-align-gt-md-space-between-center,\n  .layout-align-gt-md-space-between-start,\n  .layout-align-gt-md-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-gt-md-center-start,\n  .layout-align-gt-md-start-start,\n  .layout-align-gt-md-end-start,\n  .layout-align-gt-md-space-between-start,\n  .layout-align-gt-md-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-gt-md-center-center,\n  .layout-align-gt-md-start-center,\n  .layout-align-gt-md-end-center,\n  .layout-align-gt-md-space-between-center,\n  .layout-align-gt-md-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 100%;\n  }\n  .layout-align-gt-md-center-center > *,\n  .layout-align-gt-md-start-center > *,\n  .layout-align-gt-md-end-center > *,\n  .layout-align-gt-md-space-between-center > *,\n  .layout-align-gt-md-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .layout-align-gt-md-center-end,\n  .layout-align-gt-md-start-end,\n  .layout-align-gt-md-end-end,\n  .layout-align-gt-md-space-between-end,\n  .layout-align-gt-md-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .flex-gt-md {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-grow {\n    -webkit-flex: 1 1 100%;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-initial {\n    -webkit-flex: 0 1 auto;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-auto {\n    -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-none {\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-0,\n  .layout-gt-md-row > .flex-gt-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-0,\n  .layout-gt-md-column > .flex-gt-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-5,\n  .layout-gt-md-row > .flex-gt-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-5,\n  .layout-gt-md-column > .flex-gt-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-10,\n  .layout-gt-md-row > .flex-gt-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-10,\n  .layout-gt-md-column > .flex-gt-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-15,\n  .layout-gt-md-row > .flex-gt-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-15,\n  .layout-gt-md-column > .flex-gt-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-20,\n  .layout-gt-md-row > .flex-gt-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-20,\n  .layout-gt-md-column > .flex-gt-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-25,\n  .layout-gt-md-row > .flex-gt-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-25,\n  .layout-gt-md-column > .flex-gt-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-30,\n  .layout-gt-md-row > .flex-gt-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-30,\n  .layout-gt-md-column > .flex-gt-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-35,\n  .layout-gt-md-row > .flex-gt-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-35,\n  .layout-gt-md-column > .flex-gt-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-40,\n  .layout-gt-md-row > .flex-gt-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-40,\n  .layout-gt-md-column > .flex-gt-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-45,\n  .layout-gt-md-row > .flex-gt-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-45,\n  .layout-gt-md-column > .flex-gt-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-50,\n  .layout-gt-md-row > .flex-gt-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-50,\n  .layout-gt-md-column > .flex-gt-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-55,\n  .layout-gt-md-row > .flex-gt-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-55,\n  .layout-gt-md-column > .flex-gt-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-60,\n  .layout-gt-md-row > .flex-gt-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-60,\n  .layout-gt-md-column > .flex-gt-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-65,\n  .layout-gt-md-row > .flex-gt-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-65,\n  .layout-gt-md-column > .flex-gt-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-70,\n  .layout-gt-md-row > .flex-gt-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-70,\n  .layout-gt-md-column > .flex-gt-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-75,\n  .layout-gt-md-row > .flex-gt-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-75,\n  .layout-gt-md-column > .flex-gt-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-80,\n  .layout-gt-md-row > .flex-gt-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-80,\n  .layout-gt-md-column > .flex-gt-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-85,\n  .layout-gt-md-row > .flex-gt-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-85,\n  .layout-gt-md-column > .flex-gt-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-90,\n  .layout-gt-md-row > .flex-gt-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-90,\n  .layout-gt-md-column > .flex-gt-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-95,\n  .layout-gt-md-row > .flex-gt-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-95,\n  .layout-gt-md-column > .flex-gt-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box;\n  }\n  .flex-gt-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-100,\n  .layout-gt-md-row > .flex-gt-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-100,\n  .layout-gt-md-column > .flex-gt-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-33, .layout-row > .flex-gt-md-33, .layout-gt-md-row > .flex-gt-md-33, .layout-gt-md-row > .flex-gt-md-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 33%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-34, .layout-row > .flex-gt-md-34, .layout-gt-md-row > .flex-gt-md-34, .layout-gt-md-row > .flex-gt-md-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 34%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-66, .layout-row > .flex-gt-md-66, .layout-gt-md-row > .flex-gt-md-66, .layout-gt-md-row > .flex-gt-md-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 66%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-md-67, .layout-row > .flex-gt-md-67, .layout-gt-md-row > .flex-gt-md-67, .layout-gt-md-row > .flex-gt-md-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 67%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-33, .layout-column > .flex-gt-md-33, .layout-gt-md-column > .flex-gt-md-33, .layout-gt-md-column > .flex-gt-md-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 100%;\n    max-height: 33%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-34, .layout-column > .flex-gt-md-34, .layout-gt-md-column > .flex-gt-md-34, .layout-gt-md-column > .flex-gt-md-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 100%;\n    max-height: 34%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-66, .layout-column > .flex-gt-md-66, .layout-gt-md-column > .flex-gt-md-66, .layout-gt-md-column > .flex-gt-md-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 100%;\n    max-height: 66%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-md-67, .layout-column > .flex-gt-md-67, .layout-gt-md-column > .flex-gt-md-67, .layout-gt-md-column > .flex-gt-md-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 100%;\n    max-height: 67%;\n    box-sizing: border-box;\n  }\n  .layout-gt-md, .layout-gt-md-column, .layout-gt-md-row {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-gt-md-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-gt-md-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1199px) {\n  .hide:not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-sm:not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-md:not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show) {\n    display: none;\n  }\n  .hide-lg:not(.show-lg):not(.show) {\n    display: none;\n  }\n  .flex-order-lg-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-lg-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-lg-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-lg-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-lg-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-lg-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-lg-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-lg-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-lg-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-lg-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .flex-order-lg-10 {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .flex-order-lg-11 {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .flex-order-lg-12 {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .flex-order-lg-13 {\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .flex-order-lg-14 {\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .flex-order-lg-15 {\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .flex-order-lg-16 {\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .flex-order-lg-17 {\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .flex-order-lg-18 {\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .flex-order-lg-19 {\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .offset-lg-0, .flex-offset-lg-0 {\n    margin-left: 0%;\n  }\n  .offset-lg-5, .flex-offset-lg-5 {\n    margin-left: 5%;\n  }\n  .offset-lg-10, .flex-offset-lg-10 {\n    margin-left: 10%;\n  }\n  .offset-lg-15, .flex-offset-lg-15 {\n    margin-left: 15%;\n  }\n  .offset-lg-20, .flex-offset-lg-20 {\n    margin-left: 20%;\n  }\n  .offset-lg-25, .flex-offset-lg-25 {\n    margin-left: 25%;\n  }\n  .offset-lg-30, .flex-offset-lg-30 {\n    margin-left: 30%;\n  }\n  .offset-lg-35, .flex-offset-lg-35 {\n    margin-left: 35%;\n  }\n  .offset-lg-40, .flex-offset-lg-40 {\n    margin-left: 40%;\n  }\n  .offset-lg-45, .flex-offset-lg-45 {\n    margin-left: 45%;\n  }\n  .offset-lg-50, .flex-offset-lg-50 {\n    margin-left: 50%;\n  }\n  .offset-lg-55, .flex-offset-lg-55 {\n    margin-left: 55%;\n  }\n  .offset-lg-60, .flex-offset-lg-60 {\n    margin-left: 60%;\n  }\n  .offset-lg-65, .flex-offset-lg-65 {\n    margin-left: 65%;\n  }\n  .offset-lg-70, .flex-offset-lg-70 {\n    margin-left: 70%;\n  }\n  .offset-lg-75, .flex-offset-lg-75 {\n    margin-left: 75%;\n  }\n  .offset-lg-80, .flex-offset-lg-80 {\n    margin-left: 80%;\n  }\n  .offset-lg-85, .flex-offset-lg-85 {\n    margin-left: 85%;\n  }\n  .offset-lg-90, .flex-offset-lg-90 {\n    margin-left: 90%;\n  }\n  .offset-lg-95, .flex-offset-lg-95 {\n    margin-left: 95%;\n  }\n  .offset-lg-33, .flex-offset-lg-33 {\n    margin-left: 33%;\n  }\n  .offset-lg-34, .flex-offset-lg-34 {\n    margin-left: 34%;\n  }\n  .offset-lg-66, .flex-offset-lg-66 {\n    margin-left: 66%;\n  }\n  .offset-lg-67, .flex-offset-lg-67 {\n    margin-left: 67%;\n  }\n  .layout-align-lg-center, .layout-align-lg-center-center,\n  .layout-align-lg-center-start,\n  .layout-align-lg-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-lg-end, .layout-align-lg-end-center,\n  .layout-align-lg-end-start,\n  .layout-align-lg-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-lg-space-around, .layout-align-lg-space-around-center,\n  .layout-align-lg-space-around-start,\n  .layout-align-lg-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-lg-space-between, .layout-align-lg-space-between-center,\n  .layout-align-lg-space-between-start,\n  .layout-align-lg-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-lg-center-start,\n  .layout-align-lg-start-start,\n  .layout-align-lg-end-start,\n  .layout-align-lg-space-between-start,\n  .layout-align-lg-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-lg-center-center,\n  .layout-align-lg-start-center,\n  .layout-align-lg-end-center,\n  .layout-align-lg-space-between-center,\n  .layout-align-lg-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 100%;\n  }\n  .layout-align-lg-center-center > *,\n  .layout-align-lg-start-center > *,\n  .layout-align-lg-end-center > *,\n  .layout-align-lg-space-between-center > *,\n  .layout-align-lg-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .layout-align-lg-center-end,\n  .layout-align-lg-start-end,\n  .layout-align-lg-end-end,\n  .layout-align-lg-space-between-end,\n  .layout-align-lg-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .flex-lg {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    box-sizing: border-box;\n  }\n  .flex-lg-grow {\n    -webkit-flex: 1 1 100%;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    box-sizing: border-box;\n  }\n  .flex-lg-initial {\n    -webkit-flex: 0 1 auto;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-lg-auto {\n    -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-lg-none {\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .flex-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-0,\n  .layout-lg-row > .flex-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-0,\n  .layout-lg-column > .flex-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n  }\n  .flex-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-5,\n  .layout-lg-row > .flex-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-5,\n  .layout-lg-column > .flex-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box;\n  }\n  .flex-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-10,\n  .layout-lg-row > .flex-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-10,\n  .layout-lg-column > .flex-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box;\n  }\n  .flex-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-15,\n  .layout-lg-row > .flex-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-15,\n  .layout-lg-column > .flex-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box;\n  }\n  .flex-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-20,\n  .layout-lg-row > .flex-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-20,\n  .layout-lg-column > .flex-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box;\n  }\n  .flex-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-25,\n  .layout-lg-row > .flex-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-25,\n  .layout-lg-column > .flex-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box;\n  }\n  .flex-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-30,\n  .layout-lg-row > .flex-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-30,\n  .layout-lg-column > .flex-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box;\n  }\n  .flex-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-35,\n  .layout-lg-row > .flex-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-35,\n  .layout-lg-column > .flex-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box;\n  }\n  .flex-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-40,\n  .layout-lg-row > .flex-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-40,\n  .layout-lg-column > .flex-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box;\n  }\n  .flex-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-45,\n  .layout-lg-row > .flex-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-45,\n  .layout-lg-column > .flex-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box;\n  }\n  .flex-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-50,\n  .layout-lg-row > .flex-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-50,\n  .layout-lg-column > .flex-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box;\n  }\n  .flex-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-55,\n  .layout-lg-row > .flex-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-55,\n  .layout-lg-column > .flex-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box;\n  }\n  .flex-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-60,\n  .layout-lg-row > .flex-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-60,\n  .layout-lg-column > .flex-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box;\n  }\n  .flex-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-65,\n  .layout-lg-row > .flex-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-65,\n  .layout-lg-column > .flex-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box;\n  }\n  .flex-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-70,\n  .layout-lg-row > .flex-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-70,\n  .layout-lg-column > .flex-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box;\n  }\n  .flex-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-75,\n  .layout-lg-row > .flex-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-75,\n  .layout-lg-column > .flex-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box;\n  }\n  .flex-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-80,\n  .layout-lg-row > .flex-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-80,\n  .layout-lg-column > .flex-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box;\n  }\n  .flex-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-85,\n  .layout-lg-row > .flex-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-85,\n  .layout-lg-column > .flex-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box;\n  }\n  .flex-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-90,\n  .layout-lg-row > .flex-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-90,\n  .layout-lg-column > .flex-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box;\n  }\n  .flex-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-95,\n  .layout-lg-row > .flex-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-95,\n  .layout-lg-column > .flex-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box;\n  }\n  .flex-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-100,\n  .layout-lg-row > .flex-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-100,\n  .layout-lg-column > .flex-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-33, .layout-row > .flex-lg-33, .layout-lg-row > .flex-lg-33, .layout-lg-row > .flex-lg-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 33%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-34, .layout-row > .flex-lg-34, .layout-lg-row > .flex-lg-34, .layout-lg-row > .flex-lg-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 34%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-66, .layout-row > .flex-lg-66, .layout-lg-row > .flex-lg-66, .layout-lg-row > .flex-lg-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 66%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-lg-67, .layout-row > .flex-lg-67, .layout-lg-row > .flex-lg-67, .layout-lg-row > .flex-lg-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 67%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-33, .layout-column > .flex-lg-33, .layout-lg-column > .flex-lg-33, .layout-lg-column > .flex-lg-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 100%;\n    max-height: 33%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-34, .layout-column > .flex-lg-34, .layout-lg-column > .flex-lg-34, .layout-lg-column > .flex-lg-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 100%;\n    max-height: 34%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-66, .layout-column > .flex-lg-66, .layout-lg-column > .flex-lg-66, .layout-lg-column > .flex-lg-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 100%;\n    max-height: 66%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-lg-67, .layout-column > .flex-lg-67, .layout-lg-column > .flex-lg-67, .layout-lg-column > .flex-lg-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 100%;\n    max-height: 67%;\n    box-sizing: border-box;\n  }\n  .layout-lg, .layout-lg-column, .layout-lg-row {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-lg-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-lg-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hide-gt-sm:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show), .hide-gt-md:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show), .hide-gt-lg:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show), .hide:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show) {\n    display: none;\n  }\n  .flex-order-gt-lg-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-gt-lg-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-gt-lg-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-gt-lg-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-gt-lg-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-gt-lg-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-gt-lg-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-gt-lg-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-gt-lg-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-gt-lg-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .flex-order-gt-lg-10 {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .flex-order-gt-lg-11 {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .flex-order-gt-lg-12 {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .flex-order-gt-lg-13 {\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .flex-order-gt-lg-14 {\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .flex-order-gt-lg-15 {\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .flex-order-gt-lg-16 {\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .flex-order-gt-lg-17 {\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .flex-order-gt-lg-18 {\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .flex-order-gt-lg-19 {\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .offset-gt-lg-0, .flex-offset-gt-lg-0 {\n    margin-left: 0%;\n  }\n  .offset-gt-lg-5, .flex-offset-gt-lg-5 {\n    margin-left: 5%;\n  }\n  .offset-gt-lg-10, .flex-offset-gt-lg-10 {\n    margin-left: 10%;\n  }\n  .offset-gt-lg-15, .flex-offset-gt-lg-15 {\n    margin-left: 15%;\n  }\n  .offset-gt-lg-20, .flex-offset-gt-lg-20 {\n    margin-left: 20%;\n  }\n  .offset-gt-lg-25, .flex-offset-gt-lg-25 {\n    margin-left: 25%;\n  }\n  .offset-gt-lg-30, .flex-offset-gt-lg-30 {\n    margin-left: 30%;\n  }\n  .offset-gt-lg-35, .flex-offset-gt-lg-35 {\n    margin-left: 35%;\n  }\n  .offset-gt-lg-40, .flex-offset-gt-lg-40 {\n    margin-left: 40%;\n  }\n  .offset-gt-lg-45, .flex-offset-gt-lg-45 {\n    margin-left: 45%;\n  }\n  .offset-gt-lg-50, .flex-offset-gt-lg-50 {\n    margin-left: 50%;\n  }\n  .offset-gt-lg-55, .flex-offset-gt-lg-55 {\n    margin-left: 55%;\n  }\n  .offset-gt-lg-60, .flex-offset-gt-lg-60 {\n    margin-left: 60%;\n  }\n  .offset-gt-lg-65, .flex-offset-gt-lg-65 {\n    margin-left: 65%;\n  }\n  .offset-gt-lg-70, .flex-offset-gt-lg-70 {\n    margin-left: 70%;\n  }\n  .offset-gt-lg-75, .flex-offset-gt-lg-75 {\n    margin-left: 75%;\n  }\n  .offset-gt-lg-80, .flex-offset-gt-lg-80 {\n    margin-left: 80%;\n  }\n  .offset-gt-lg-85, .flex-offset-gt-lg-85 {\n    margin-left: 85%;\n  }\n  .offset-gt-lg-90, .flex-offset-gt-lg-90 {\n    margin-left: 90%;\n  }\n  .offset-gt-lg-95, .flex-offset-gt-lg-95 {\n    margin-left: 95%;\n  }\n  .offset-gt-lg-33, .flex-offset-gt-lg-33 {\n    margin-left: 33%;\n  }\n  .offset-gt-lg-34, .flex-offset-gt-lg-34 {\n    margin-left: 34%;\n  }\n  .offset-gt-lg-66, .flex-offset-gt-lg-66 {\n    margin-left: 66%;\n  }\n  .offset-gt-lg-67, .flex-offset-gt-lg-67 {\n    margin-left: 67%;\n  }\n  .layout-align-gt-lg-center, .layout-align-gt-lg-center-center,\n  .layout-align-gt-lg-center-start,\n  .layout-align-gt-lg-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-gt-lg-end, .layout-align-gt-lg-end-center,\n  .layout-align-gt-lg-end-start,\n  .layout-align-gt-lg-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-gt-lg-space-around, .layout-align-gt-lg-space-around-center,\n  .layout-align-gt-lg-space-around-start,\n  .layout-align-gt-lg-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-gt-lg-space-between, .layout-align-gt-lg-space-between-center,\n  .layout-align-gt-lg-space-between-start,\n  .layout-align-gt-lg-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-gt-lg-center-start,\n  .layout-align-gt-lg-start-start,\n  .layout-align-gt-lg-end-start,\n  .layout-align-gt-lg-space-between-start,\n  .layout-align-gt-lg-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-gt-lg-center-center,\n  .layout-align-gt-lg-start-center,\n  .layout-align-gt-lg-end-center,\n  .layout-align-gt-lg-space-between-center,\n  .layout-align-gt-lg-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 100%;\n  }\n  .layout-align-gt-lg-center-center > *,\n  .layout-align-gt-lg-start-center > *,\n  .layout-align-gt-lg-end-center > *,\n  .layout-align-gt-lg-space-between-center > *,\n  .layout-align-gt-lg-space-around-center > * {\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .layout-align-gt-lg-center-end,\n  .layout-align-gt-lg-start-end,\n  .layout-align-gt-lg-end-end,\n  .layout-align-gt-lg-space-between-end,\n  .layout-align-gt-lg-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .flex-gt-lg {\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-grow {\n    -webkit-flex: 1 1 100%;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-initial {\n    -webkit-flex: 0 1 auto;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-auto {\n    -webkit-flex: 1 1 auto;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-none {\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-0,\n  .layout-gt-lg-row > .flex-gt-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 0%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-0,\n  .layout-gt-lg-column > .flex-gt-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n    max-width: 100%;\n    max-height: 0%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-5,\n  .layout-gt-lg-row > .flex-gt-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 5%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-5,\n  .layout-gt-lg-column > .flex-gt-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n    max-width: 100%;\n    max-height: 5%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-10,\n  .layout-gt-lg-row > .flex-gt-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 10%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-10,\n  .layout-gt-lg-column > .flex-gt-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n    max-width: 100%;\n    max-height: 10%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-15,\n  .layout-gt-lg-row > .flex-gt-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 15%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-15,\n  .layout-gt-lg-column > .flex-gt-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n    max-width: 100%;\n    max-height: 15%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-20,\n  .layout-gt-lg-row > .flex-gt-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 20%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-20,\n  .layout-gt-lg-column > .flex-gt-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n    max-width: 100%;\n    max-height: 20%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-25,\n  .layout-gt-lg-row > .flex-gt-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-25,\n  .layout-gt-lg-column > .flex-gt-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 100%;\n    max-height: 25%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-30,\n  .layout-gt-lg-row > .flex-gt-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 30%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-30,\n  .layout-gt-lg-column > .flex-gt-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n    max-width: 100%;\n    max-height: 30%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-35,\n  .layout-gt-lg-row > .flex-gt-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 35%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-35,\n  .layout-gt-lg-column > .flex-gt-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n    max-width: 100%;\n    max-height: 35%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-40,\n  .layout-gt-lg-row > .flex-gt-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 40%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-40,\n  .layout-gt-lg-column > .flex-gt-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n    max-width: 100%;\n    max-height: 40%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-45,\n  .layout-gt-lg-row > .flex-gt-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 45%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-45,\n  .layout-gt-lg-column > .flex-gt-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n    max-width: 100%;\n    max-height: 45%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-50,\n  .layout-gt-lg-row > .flex-gt-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-50,\n  .layout-gt-lg-column > .flex-gt-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 100%;\n    max-height: 50%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-55,\n  .layout-gt-lg-row > .flex-gt-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 55%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-55,\n  .layout-gt-lg-column > .flex-gt-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n    max-width: 100%;\n    max-height: 55%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-60,\n  .layout-gt-lg-row > .flex-gt-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 60%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-60,\n  .layout-gt-lg-column > .flex-gt-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n    max-width: 100%;\n    max-height: 60%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-65,\n  .layout-gt-lg-row > .flex-gt-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 65%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-65,\n  .layout-gt-lg-column > .flex-gt-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n    max-width: 100%;\n    max-height: 65%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-70,\n  .layout-gt-lg-row > .flex-gt-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 70%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-70,\n  .layout-gt-lg-column > .flex-gt-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n    max-width: 100%;\n    max-height: 70%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-75,\n  .layout-gt-lg-row > .flex-gt-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-75,\n  .layout-gt-lg-column > .flex-gt-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 100%;\n    max-height: 75%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-80,\n  .layout-gt-lg-row > .flex-gt-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 80%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-80,\n  .layout-gt-lg-column > .flex-gt-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n    max-width: 100%;\n    max-height: 80%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-85,\n  .layout-gt-lg-row > .flex-gt-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 85%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-85,\n  .layout-gt-lg-column > .flex-gt-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n    max-width: 100%;\n    max-height: 85%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-90,\n  .layout-gt-lg-row > .flex-gt-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 90%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-90,\n  .layout-gt-lg-column > .flex-gt-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n    max-width: 100%;\n    max-height: 90%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-95,\n  .layout-gt-lg-row > .flex-gt-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 95%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-95,\n  .layout-gt-lg-column > .flex-gt-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n    max-width: 100%;\n    max-height: 95%;\n    box-sizing: border-box;\n  }\n  .flex-gt-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-100,\n  .layout-gt-lg-row > .flex-gt-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-100,\n  .layout-gt-lg-column > .flex-gt-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-33, .layout-row > .flex-gt-lg-33, .layout-gt-lg-row > .flex-gt-lg-33, .layout-gt-lg-row > .flex-gt-lg-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 33%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-34, .layout-row > .flex-gt-lg-34, .layout-gt-lg-row > .flex-gt-lg-34, .layout-gt-lg-row > .flex-gt-lg-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 34%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-66, .layout-row > .flex-gt-lg-66, .layout-gt-lg-row > .flex-gt-lg-66, .layout-gt-lg-row > .flex-gt-lg-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 66%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-row > .flex-gt-lg-67, .layout-row > .flex-gt-lg-67, .layout-gt-lg-row > .flex-gt-lg-67, .layout-gt-lg-row > .flex-gt-lg-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 67%;\n    max-height: 100%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-33, .layout-column > .flex-gt-lg-33, .layout-gt-lg-column > .flex-gt-lg-33, .layout-gt-lg-column > .flex-gt-lg-33 {\n    -webkit-flex: 0 0 33%;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    max-width: 100%;\n    max-height: 33%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-34, .layout-column > .flex-gt-lg-34, .layout-gt-lg-column > .flex-gt-lg-34, .layout-gt-lg-column > .flex-gt-lg-34 {\n    -webkit-flex: 0 0 34%;\n        -ms-flex: 0 0 34%;\n            flex: 0 0 34%;\n    max-width: 100%;\n    max-height: 34%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-66, .layout-column > .flex-gt-lg-66, .layout-gt-lg-column > .flex-gt-lg-66, .layout-gt-lg-column > .flex-gt-lg-66 {\n    -webkit-flex: 0 0 66%;\n        -ms-flex: 0 0 66%;\n            flex: 0 0 66%;\n    max-width: 100%;\n    max-height: 66%;\n    box-sizing: border-box;\n  }\n  .layout-column > .flex-gt-lg-67, .layout-column > .flex-gt-lg-67, .layout-gt-lg-column > .flex-gt-lg-67, .layout-gt-lg-column > .flex-gt-lg-67 {\n    -webkit-flex: 0 0 67%;\n        -ms-flex: 0 0 67%;\n            flex: 0 0 67%;\n    max-width: 100%;\n    max-height: 67%;\n    box-sizing: border-box;\n  }\n  .layout-gt-lg, .layout-gt-lg-column, .layout-gt-lg-row {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-gt-lg-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-gt-lg-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\n@-webkit-keyframes md-autocomplete-list-out {\n  0% {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes md-autocomplete-list-out {\n  0% {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes md-autocomplete-list-in {\n  0% {\n    opacity: 0;\n    height: 0;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n  }\n  100% {\n    opacity: 1;\n    height: 40px;\n  }\n}\n\n@keyframes md-autocomplete-list-in {\n  0% {\n    opacity: 0;\n    height: 0;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n  }\n  100% {\n    opacity: 1;\n    height: 40px;\n  }\n}\n\nmd-autocomplete {\n  border-radius: 2px;\n  display: block;\n  height: 40px;\n  position: relative;\n  overflow: visible;\n  min-width: 190px;\n}\n\nmd-autocomplete[disabled] input {\n  cursor: not-allowed;\n}\n\nmd-autocomplete[md-floating-label] {\n  border-radius: 0;\n  background: transparent;\n  height: auto;\n}\n\nmd-autocomplete[md-floating-label] md-input-container {\n  padding-bottom: 26px;\n}\n\nmd-autocomplete[md-floating-label] md-input-container.md-input-has-messages {\n  padding-bottom: 2px;\n}\n\nmd-autocomplete[md-floating-label] md-autocomplete-wrap {\n  height: auto;\n}\n\nmd-autocomplete[md-floating-label] button {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n}\n\nmd-autocomplete md-autocomplete-wrap {\n  display: block;\n  position: relative;\n  overflow: visible;\n  height: 40px;\n}\n\nmd-autocomplete md-autocomplete-wrap.md-menu-showing {\n  z-index: 51;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear {\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  transition: none;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate .md-container {\n  transition: none;\n  height: 3px;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter {\n  transition: opacity 0.15s linear;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter.ng-enter-active {\n  opacity: 1;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave {\n  transition: opacity 0.15s linear;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave.ng-leave-active {\n  opacity: 0;\n}\n\nmd-autocomplete input:not(.md-input) {\n  font-size: 14px;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n  padding: 0 15px;\n  line-height: 40px;\n  height: 40px;\n}\n\nmd-autocomplete input:not(.md-input)::-ms-clear {\n  display: none;\n}\n\nmd-autocomplete button {\n  position: relative;\n  line-height: 20px;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  font-size: 12px;\n  background: transparent;\n  margin: auto 5px;\n}\n\nmd-autocomplete button:after {\n  content: '';\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  bottom: -6px;\n  left: -6px;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-autocomplete button:focus {\n  outline: none;\n}\n\nmd-autocomplete button:focus:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n\nmd-autocomplete button md-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(0.9);\n          transform: translate3d(-50%, -50%, 0) scale(0.9);\n}\n\nmd-autocomplete button md-icon path {\n  stroke-width: 0;\n}\n\nmd-autocomplete button.ng-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out;\n  transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;\n}\n\nmd-autocomplete button.ng-enter.ng-enter-active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-autocomplete button.ng-leave {\n  transition: -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out;\n  transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;\n}\n\nmd-autocomplete button.ng-leave.ng-leave-active {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-autocomplete input {\n    border: 1px solid #fff;\n  }\n  md-autocomplete li:focus {\n    color: #fff;\n  }\n}\n\n.md-virtual-repeat-container.md-autocomplete-suggestions-container {\n  position: absolute;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  height: 225.5px;\n  max-height: 225.5px;\n  z-index: 100;\n}\n\n.md-autocomplete-suggestions {\n  margin: 0;\n  list-style: none;\n  padding: 0;\n}\n\n.md-autocomplete-suggestions li {\n  font-size: 14px;\n  overflow: hidden;\n  padding: 0 15px;\n  line-height: 48px;\n  height: 48px;\n  transition: background 0.15s linear;\n  margin: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.md-autocomplete-suggestions li:focus {\n  outline: none;\n}\n\n.md-autocomplete-suggestions li:not(.md-not-found-wrapper) {\n  cursor: pointer;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-autocomplete,\n  .md-autocomplete-suggestions {\n    border: 1px solid #fff;\n  }\n}\n\nmd-backdrop {\n  transition: opacity 450ms;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n}\n\nmd-backdrop.md-menu-backdrop {\n  position: fixed !important;\n  z-index: 98;\n}\n\nmd-backdrop.md-select-backdrop {\n  z-index: 81;\n  transition-duration: 0;\n}\n\nmd-backdrop.md-dialog-backdrop {\n  z-index: 79;\n}\n\nmd-backdrop.md-bottom-sheet-backdrop {\n  z-index: 69;\n}\n\nmd-backdrop.md-sidenav-backdrop {\n  z-index: 59;\n}\n\nmd-backdrop.md-click-catcher {\n  position: absolute;\n}\n\nmd-backdrop.md-opaque {\n  opacity: .48;\n}\n\nmd-backdrop.md-opaque.ng-enter {\n  opacity: 0;\n}\n\nmd-backdrop.md-opaque.ng-enter.md-opaque.ng-enter-active {\n  opacity: .48;\n}\n\nmd-backdrop.md-opaque.ng-leave {\n  opacity: .48;\n  transition: opacity 400ms;\n}\n\nmd-backdrop.md-opaque.ng-leave.md-opaque.ng-leave-active {\n  opacity: 0;\n}\n\nmd-bottom-sheet {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 8px 16px 88px 16px;\n  z-index: 70;\n  border-top-width: 1px;\n  border-top-style: solid;\n  -webkit-transform: translate3d(0, 80px, 0);\n          transform: translate3d(0, 80px, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n\nmd-bottom-sheet.md-has-header {\n  padding-top: 0;\n}\n\nmd-bottom-sheet.ng-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n\nmd-bottom-sheet.ng-enter-active {\n  opacity: 1;\n  display: block;\n  -webkit-transform: translate3d(0, 80px, 0) !important;\n          transform: translate3d(0, 80px, 0) !important;\n}\n\nmd-bottom-sheet.ng-leave-active {\n  -webkit-transform: translate3d(0, 100%, 0) !important;\n          transform: translate3d(0, 100%, 0) !important;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-bottom-sheet .md-subheader {\n  background-color: transparent;\n  font-family: bernina, Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 56px;\n  padding: 0;\n  white-space: nowrap;\n}\n\nmd-bottom-sheet md-inline-icon {\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  fill: #444;\n}\n\nmd-bottom-sheet md-list-item {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n}\n\nmd-bottom-sheet md-list-item:hover {\n  cursor: pointer;\n}\n\nmd-bottom-sheet.md-list md-list-item {\n  padding: 0;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n}\n\nmd-bottom-sheet.md-list md-list-item div.md-icon-container {\n  display: inline-block;\n  height: 24px;\n  margin-right: 32px;\n}\n\nmd-bottom-sheet.md-grid {\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 0;\n}\n\nmd-bottom-sheet.md-grid md-list {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  transition: all 0.5s;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nmd-bottom-sheet.md-grid md-list-item {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 0.5s;\n  height: 96px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  /* Mixin for how many grid items to show per row */\n}\n\n@media screen and (max-width: 600px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 33.33333%;\n        -ms-flex: 1 1 33.33333%;\n            flex: 1 1 33.33333%;\n    max-width: 33.33333%;\n  }\n  md-bottom-sheet.md-grid md-list-item:nth-of-type(3n + 1) {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  md-bottom-sheet.md-grid md-list-item:nth-of-type(3n) {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 960px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 25%;\n        -ms-flex: 1 1 25%;\n            flex: 1 1 25%;\n    max-width: 25%;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 16.66667%;\n        -ms-flex: 1 1 16.66667%;\n            flex: 1 1 16.66667%;\n    max-width: 16.66667%;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 14.28571%;\n        -ms-flex: 1 1 14.28571%;\n            flex: 1 1 14.28571%;\n    max-width: 14.28571%;\n  }\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-list-item-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 48px;\n  padding-bottom: 16px;\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-grid-item-content {\n  border: 1px solid transparent;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 80px;\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-icon-container {\n  display: inline-block;\n  box-sizing: border-box;\n  height: 48px;\n  width: 48px;\n  margin: 0 0;\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-grid-text {\n  font-weight: 400;\n  line-height: 16px;\n  font-size: 13px;\n  margin: 0;\n  white-space: nowrap;\n  width: 64px;\n  text-align: center;\n  text-transform: none;\n  padding-top: 8px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-bottom-sheet {\n    border: 1px solid #fff;\n  }\n}\n\nbutton.md-button::-moz-focus-inner {\n  border: 0;\n}\n\n.md-button {\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: currentColor;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  outline: none;\n  border: 0;\n  display: inline-block;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 6px;\n  margin: 6px 8px;\n  line-height: 36px;\n  min-height: 36px;\n  background: transparent;\n  white-space: nowrap;\n  min-width: 88px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-family: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  overflow: hidden;\n  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-button:focus {\n  outline: none;\n}\n\n.md-button:hover, .md-button:focus {\n  text-decoration: none;\n}\n\n.md-button.ng-hide, .md-button.ng-leave {\n  transition: none;\n}\n\n.md-button.md-cornered {\n  border-radius: 0;\n}\n\n.md-button.md-icon {\n  padding: 0;\n  background: none;\n}\n\n.md-button.md-raised:not([disabled]) {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.md-button.md-icon-button {\n  margin: 0 6px;\n  height: 48px;\n  min-width: 0;\n  line-height: 48px;\n  padding-left: 0;\n  padding-right: 0;\n  width: 48px;\n  border-radius: 50%;\n}\n\n.md-button.md-icon-button .md-ripple-container {\n  border-radius: 50%;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-mask-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC\");\n}\n\n.md-button.md-fab {\n  z-index: 20;\n  line-height: 56px;\n  min-width: 0;\n  width: 56px;\n  height: 56px;\n  vertical-align: middle;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 50%;\n  background-clip: padding-box;\n  overflow: hidden;\n  transition: 0.2s linear;\n  transition-property: background-color, box-shadow;\n}\n\n.md-button.md-fab.md-fab-bottom-right {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: absolute;\n}\n\n.md-button.md-fab.md-fab-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 20px;\n  left: 20px;\n  position: absolute;\n}\n\n.md-button.md-fab.md-fab-top-right {\n  top: 20px;\n  right: 20px;\n  bottom: auto;\n  left: auto;\n  position: absolute;\n}\n\n.md-button.md-fab.md-fab-top-left {\n  top: 20px;\n  right: auto;\n  bottom: auto;\n  left: 20px;\n  position: absolute;\n}\n\n.md-button.md-fab .md-ripple-container {\n  border-radius: 50%;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-mask-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC\");\n}\n\n.md-button.md-fab.md-mini {\n  line-height: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.md-button:not([disabled]).md-raised.md-focused,\n.md-button:not([disabled]).md-fab.md-focused {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.md-button:not([disabled]).md-raised:active,\n.md-button:not([disabled]).md-fab:active {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.md-button .md-ripple-container {\n  border-radius: 3px;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-mask-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC\");\n}\n\n.md-toast-open-top .md-button.md-fab-top-left,\n.md-toast-open-top .md-button.md-fab-top-right {\n  -webkit-transform: translate3d(0, 42px, 0);\n          transform: translate3d(0, 42px, 0);\n}\n\n.md-toast-open-top .md-button.md-fab-top-left:not([disabled]).md-focused,\n.md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,\n.md-toast-open-top .md-button.md-fab-top-right:not([disabled]).md-focused,\n.md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover {\n  -webkit-transform: translate3d(0, 41px, 0);\n          transform: translate3d(0, 41px, 0);\n}\n\n.md-toast-open-bottom .md-button.md-fab-bottom-left,\n.md-toast-open-bottom .md-button.md-fab-bottom-right {\n  -webkit-transform: translate3d(0, -42px, 0);\n          transform: translate3d(0, -42px, 0);\n}\n\n.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]).md-focused,\n.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,\n.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]).md-focused,\n.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover {\n  -webkit-transform: translate3d(0, -43px, 0);\n          transform: translate3d(0, -43px, 0);\n}\n\n.md-button-group {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n}\n\n.md-button-group > .md-button {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: block;\n  overflow: hidden;\n  width: 0;\n  border-width: 1px 0px 1px 1px;\n  border-radius: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.md-button-group > .md-button:first-child {\n  border-radius: 2px 0px 0px 2px;\n}\n\n.md-button-group > .md-button:last-child {\n  border-right-width: 1px;\n  border-radius: 0px 2px 2px 0px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-button.md-raised,\n  .md-button.md-fab {\n    border: 1px solid #fff;\n  }\n}\n\nmd-card {\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 8px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\nmd-card > img,\nmd-card > :not(md-card-content) img {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 100%;\n  height: auto;\n}\n\nmd-card md-card-content {\n  padding: 16px;\n}\n\nmd-card .md-actions {\n  margin: 0;\n}\n\nmd-card .md-actions .md-button {\n  margin-bottom: 8px;\n  margin-top: 8px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n\nmd-card md-card-footer {\n  margin-top: auto;\n  padding: 16px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-card {\n    border: 1px solid #fff;\n  }\n}\n\nmd-checkbox {\n  box-sizing: border-box;\n  display: block;\n  margin: 8px;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-left: 18px;\n  padding-right: 0;\n  position: relative;\n  line-height: 26px;\n  min-width: 18px;\n  min-height: 18px;\n}\n\nhtml[dir=rtl] md-checkbox {\n  padding-left: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox {\n  padding-left: 0;\n  unicode-bidi: embed;\n}\n\nmd-checkbox bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-checkbox {\n  padding-right: 18px;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox {\n  padding-right: 18px;\n  unicode-bidi: embed;\n}\n\nmd-checkbox bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox.md-focused:not([disabled]) .md-container:before {\n  left: -8px;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n\nmd-checkbox.md-focused:not([disabled]):not(.md-checked) .md-container:before {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\nmd-checkbox .md-container {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  box-sizing: border-box;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  left: 0;\n  right: auto;\n}\n\nhtml[dir=rtl] md-checkbox .md-container {\n  left: auto;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-container {\n  left: auto;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-container bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-container bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-checkbox .md-container {\n  right: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-container {\n  right: 0;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-container bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-container bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-container:before {\n  box-sizing: border-box;\n  background-color: transparent;\n  border-radius: 50%;\n  content: '';\n  position: absolute;\n  display: block;\n  height: auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s;\n  width: auto;\n}\n\nmd-checkbox .md-container:after {\n  box-sizing: border-box;\n  content: '';\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  bottom: -10px;\n  left: -10px;\n}\n\nmd-checkbox .md-container .md-ripple-container {\n  position: absolute;\n  display: block;\n  width: auto;\n  height: auto;\n  left: -15px;\n  top: -15px;\n  right: -15px;\n  bottom: -15px;\n}\n\nmd-checkbox.md-align-top-left > div.md-container {\n  top: 12px;\n}\n\nmd-checkbox .md-icon {\n  box-sizing: border-box;\n  transition: 240ms;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 2px;\n}\n\nmd-checkbox.md-checked .md-icon {\n  border: none;\n}\n\nmd-checkbox[disabled] {\n  cursor: no-drop;\n}\n\nmd-checkbox.md-checked .md-icon:after {\n  box-sizing: border-box;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  display: table;\n  width: 6px;\n  height: 12px;\n  border-width: 2px;\n  border-style: solid;\n  border-top: 0;\n  border-left: 0;\n  content: '';\n}\n\nmd-checkbox .md-label {\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: normal;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  margin-left: 10px;\n  margin-right: 0;\n}\n\nhtml[dir=rtl] md-checkbox .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-checkbox .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\n.md-contact-chips .md-chips .md-chip {\n  padding: 0 25px 0 0;\n}\n\n.md-contact-chips .md-chips .md-chip .md-contact-avatar {\n  float: left;\n}\n\n.md-contact-chips .md-chips .md-chip .md-contact-avatar img {\n  height: 32px;\n  border-radius: 16px;\n}\n\n.md-contact-chips .md-chips .md-chip .md-contact-name {\n  display: inline-block;\n  height: 32px;\n  margin-left: 8px;\n}\n\n.md-contact-suggestion {\n  height: 56px;\n}\n\n.md-contact-suggestion img {\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 8px;\n}\n\n.md-contact-suggestion .md-contact-name {\n  margin-left: 8px;\n  width: 120px;\n}\n\n.md-contact-suggestion .md-contact-name, .md-contact-suggestion .md-contact-email {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.md-contact-chips-suggestions li {\n  height: 100%;\n}\n\n.md-chips {\n  display: block;\n  font-family: bernina, Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  padding: 0 0 8px 3px;\n  vertical-align: middle;\n}\n\n.md-chips:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n.md-chips:not(.md-readonly) {\n  cursor: text;\n}\n\n.md-chips:not(.md-readonly) .md-chip {\n  padding-right: 22px;\n}\n\n.md-chips .md-chip {\n  cursor: default;\n  border-radius: 16px;\n  display: block;\n  height: 32px;\n  line-height: 32px;\n  margin: 8px 8px 0 0;\n  padding: 0 12px 0 12px;\n  float: left;\n  box-sizing: border-box;\n  max-width: 100%;\n  position: relative;\n}\n\n.md-chips .md-chip .md-chip-content {\n  display: block;\n  padding-right: 4px;\n  float: left;\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.md-chips .md-chip .md-chip-content:focus {\n  outline: none;\n}\n\n.md-chips .md-chip .md-chip-remove-container {\n  position: absolute;\n  right: 0;\n  line-height: 22px;\n}\n\n.md-chips .md-chip .md-chip-remove {\n  text-align: center;\n  width: 32px;\n  height: 32px;\n  min-width: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  position: relative;\n}\n\n.md-chips .md-chip .md-chip-remove md-icon {\n  height: 18px;\n  width: 18px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n\n.md-chips .md-chip-input-container {\n  display: block;\n  line-height: 32px;\n  margin: 8px 8px 0 0;\n  padding: 0 12px 0 12px;\n  float: left;\n}\n\n.md-chips .md-chip-input-container input:not([type]), .md-chips .md-chip-input-container input[type=\"email\"], .md-chips .md-chip-input-container input[type=\"number\"], .md-chips .md-chip-input-container input[type=\"tel\"], .md-chips .md-chip-input-container input[type=\"url\"], .md-chips .md-chip-input-container input[type=\"text\"] {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n}\n\n.md-chips .md-chip-input-container input:not([type]):focus, .md-chips .md-chip-input-container input[type=\"email\"]:focus, .md-chips .md-chip-input-container input[type=\"number\"]:focus, .md-chips .md-chip-input-container input[type=\"tel\"]:focus, .md-chips .md-chip-input-container input[type=\"url\"]:focus, .md-chips .md-chip-input-container input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {\n  background: transparent;\n  height: 32px;\n}\n\n.md-chips .md-chip-input-container md-autocomplete md-autocomplete-wrap {\n  box-shadow: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete input {\n  position: relative;\n}\n\n.md-chips .md-chip-input-container input {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n}\n\n.md-chips .md-chip-input-container input:focus {\n  outline: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {\n  height: 32px;\n}\n\n.md-chips .md-chip-input-container md-autocomplete {\n  box-shadow: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete input {\n  position: relative;\n}\n\n.md-chips .md-chip-input-container:not(:first-child) {\n  margin: 8px 8px 0 0;\n}\n\n.md-chips .md-chip-input-container input {\n  background: transparent;\n  border-width: 0;\n}\n\n.md-chips md-autocomplete button {\n  display: none;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-chip-input-container,\n  md-chip {\n    border: 1px solid #fff;\n  }\n  .md-chip-input-container md-autocomplete {\n    border: none;\n  }\n}\n\nmd-content {\n  display: block;\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\nmd-content[md-scroll-y] {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\nmd-content[md-scroll-x] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nmd-content.autoScroll {\n  -webkit-overflow-scrolling: auto;\n}\n\n.md-dialog-is-showing {\n  max-height: 100%;\n}\n\n.md-dialog-container {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 80;\n  overflow: hidden;\n}\n\nmd-dialog {\n  opacity: 0;\n  min-width: 240px;\n  max-width: 80%;\n  max-height: 80%;\n  position: relative;\n  overflow: auto;\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmd-dialog.md-transition-in {\n  opacity: 1;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n\nmd-dialog.md-transition-out {\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transform: translate3d(0, 100%, 0) scale(0.2);\n          transform: translate3d(0, 100%, 0) scale(0.2);\n}\n\nmd-dialog > form {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto;\n}\n\nmd-dialog .md-dialog-content {\n  padding: 24px;\n}\n\nmd-dialog md-dialog-content {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\nmd-dialog md-dialog-content:not([layout=row]) > *:first-child:not(.md-subheader) {\n  margin-top: 0;\n}\n\nmd-dialog md-dialog-content:focus {\n  outline: none;\n}\n\nmd-dialog md-dialog-content .md-subheader {\n  margin: 0;\n}\n\nmd-dialog md-dialog-content .md-subheader.sticky-clone {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n}\n\nmd-dialog md-dialog-content.sticky-container {\n  padding: 0;\n}\n\nmd-dialog md-dialog-content.sticky-container > div {\n  padding: 24px;\n  padding-top: 0;\n}\n\nmd-dialog md-dialog-content .md-dialog-content-body {\n  width: 100%;\n}\n\nmd-dialog .md-actions {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  box-sizing: border-box;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 0;\n  padding-right: 8px;\n  padding-left: 16px;\n  min-height: 52px;\n  overflow: hidden;\n}\n\nmd-dialog .md-actions .md-button {\n  margin-bottom: 8px;\n  margin-left: 8px;\n  margin-right: 0;\n  margin-top: 8px;\n}\n\nmd-dialog.md-content-overflow .md-actions {\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-dialog {\n    border: 1px solid #fff;\n  }\n}\n\nmd-divider {\n  display: block;\n  border-top-width: 1px;\n  border-top-style: solid;\n  margin: 0;\n}\n\nmd-divider[md-inset] {\n  margin-left: 80px;\n}\n\n/** Styles for mdCalendar. */\nmd-calendar {\n  font-size: 13px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.md-calendar-scroll-mask {\n  display: inline-block;\n  overflow: hidden;\n  height: 308px;\n}\n\n.md-calendar-scroll-mask .md-virtual-repeat-scroller {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.md-calendar-scroll-mask .md-virtual-repeat-scroller::-webkit-scrollbar {\n  display: none;\n}\n\n.md-calendar-scroll-mask .md-virtual-repeat-offsetter {\n  width: 100%;\n}\n\n.md-calendar-scroll-container {\n  box-shadow: inset -3px 3px 6px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  height: 308px;\n  width: 346px;\n}\n\n.md-calendar-date {\n  height: 44px;\n  width: 44px;\n  text-align: center;\n  padding: 0;\n  border: none;\n}\n\n.md-calendar-date:first-child {\n  padding-left: 16px;\n}\n\n.md-calendar-date:last-child {\n  padding-right: 16px;\n}\n\n.md-calendar-date.md-calendar-date-disabled {\n  cursor: default;\n}\n\n.md-calendar-date-selection-indicator {\n  transition: background-color, color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-radius: 50%;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.md-calendar-date:not(.md-disabled) .md-calendar-date-selection-indicator {\n  cursor: pointer;\n}\n\n.md-calendar-month-label {\n  height: 44px;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 0 0 24px;\n}\n\n.md-calendar-day-header {\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.md-calendar-day-header th {\n  height: 44px;\n  width: 44px;\n  text-align: center;\n  padding: 0;\n  border: none;\n  font-weight: normal;\n  height: 40px;\n}\n\n.md-calendar-day-header th:first-child {\n  padding-left: 16px;\n}\n\n.md-calendar-day-header th:last-child {\n  padding-right: 16px;\n}\n\n.md-calendar {\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.md-calendar tr:last-child td {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.md-calendar:first-child {\n  border-top: 1px solid transparent;\n}\n\n/** Styles for mdDatepicker. */\nmd-datepicker {\n  white-space: nowrap;\n}\n\n.md-datepicker-button {\n  display: inline-block;\n  box-sizing: border-box;\n  background: none;\n}\n\n.md-datepicker-input {\n  font-size: 14px;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background: transparent;\n  min-width: 120px;\n  max-width: 328px;\n}\n\n.md-datepicker-input::-ms-clear {\n  display: none;\n}\n\n.md-datepicker-input-container {\n  position: relative;\n  padding-bottom: 5px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  display: inline-block;\n  width: auto;\n  margin-left: 12px;\n}\n\n.md-datepicker-input-container.md-datepicker-focused {\n  border-bottom-width: 2px;\n}\n\n.md-datepicker-calendar-pane {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  border-width: 1px;\n  border-style: solid;\n  background: transparent;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  transition: -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-datepicker-calendar-pane.md-pane-open {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.md-datepicker-input-mask {\n  height: 40px;\n  width: 340px;\n  position: relative;\n  background: transparent;\n  pointer-events: none;\n  cursor: text;\n}\n\n.md-datepicker-input-mask-opaque {\n  position: absolute;\n  right: 0;\n  left: 120px;\n  height: 100%;\n}\n\n.md-datepicker-calendar {\n  opacity: 0;\n  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.25, 1);\n}\n\n.md-pane-open .md-datepicker-calendar {\n  opacity: 1;\n}\n\n.md-datepicker-calendar md-calendar:focus {\n  outline: none;\n}\n\n.md-datepicker-expand-triangle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n}\n\n.md-datepicker-triangle-button {\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translateY(-25%) translateX(45%);\n          transform: translateY(-25%) translateX(45%);\n}\n\n.md-datepicker-triangle-button.md-button.md-icon-button {\n  height: 100%;\n  width: 36px;\n  position: absolute;\n}\n\nmd-datepicker[disabled] .md-datepicker-input-container {\n  border-bottom-color: transparent;\n}\n\nmd-datepicker[disabled] .md-datepicker-triangle-button {\n  display: none;\n}\n\n.md-datepicker-open .md-datepicker-input-container {\n  margin-left: -12px;\n  border: none;\n}\n\n.md-datepicker-open .md-datepicker-input {\n  margin-left: 24px;\n  height: 40px;\n}\n\n.md-datepicker-open .md-datepicker-triangle-button {\n  display: none;\n}\n\n.md-datepicker-pos-adjusted .md-datepicker-input-mask {\n  display: none;\n}\n\n.md-datepicker-calendar-pane .md-calendar {\n  -webkit-transform: translateY(-85px);\n          transform: translateY(-85px);\n  transition: -webkit-transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-delay: 0.125s;\n}\n\n.md-datepicker-calendar-pane.md-pane-open .md-calendar {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\nmd-fab-speed-dial {\n  position: relative;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 20;\n  /*\n   * Handle the animations\n   */\n}\n\nmd-fab-speed-dial.md-fab-bottom-right {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-speed-dial.md-fab-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 20px;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-speed-dial.md-fab-top-right {\n  top: 20px;\n  right: 20px;\n  bottom: auto;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-speed-dial.md-fab-top-left {\n  top: 20px;\n  right: auto;\n  bottom: auto;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-speed-dial:not(.md-hover-full) {\n  pointer-events: none;\n}\n\nmd-fab-speed-dial:not(.md-hover-full) md-fab-trigger, md-fab-speed-dial:not(.md-hover-full) .md-fab-action-item {\n  pointer-events: auto;\n}\n\nmd-fab-speed-dial:not(.md-hover-full).md-is-open {\n  pointer-events: auto;\n}\n\nmd-fab-speed-dial .md-css-variables {\n  z-index: 20;\n}\n\nmd-fab-speed-dial.md-is-open .md-fab-action-item {\n  visibility: visible;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nmd-fab-speed-dial md-fab-actions {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\nmd-fab-speed-dial md-fab-actions .md-fab-action-item {\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-speed-dial.md-down {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmd-fab-speed-dial.md-down md-fab-trigger {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-down md-fab-actions {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-up {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmd-fab-speed-dial.md-up md-fab-trigger {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-up md-fab-actions {\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-left {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-fab-speed-dial.md-left md-fab-trigger {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-left md-fab-actions {\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-left md-fab-actions .md-fab-action-item {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-speed-dial.md-right {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-fab-speed-dial.md-right md-fab-trigger {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-right md-fab-actions {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-right md-fab-actions .md-fab-action-item {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-speed-dial.md-scale .md-fab-action-item {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 0.14286s;\n}\n\nmd-fab-toolbar {\n  display: block;\n  /*\n   * Closed styling\n   */\n  /*\n   * Hover styling\n   */\n}\n\nmd-fab-toolbar.md-fab-bottom-right {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-toolbar.md-fab-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 20px;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-toolbar.md-fab-top-right {\n  top: 20px;\n  right: 20px;\n  bottom: auto;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-toolbar.md-fab-top-left {\n  top: 20px;\n  right: auto;\n  bottom: auto;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-toolbar .md-fab-toolbar-wrapper {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 68px;\n}\n\nmd-fab-toolbar md-fab-trigger {\n  position: absolute;\n  z-index: 20;\n}\n\nmd-fab-toolbar md-fab-trigger button {\n  overflow: visible !important;\n}\n\nmd-fab-toolbar md-fab-trigger .md-fab-toolbar-background {\n  display: block;\n  position: absolute;\n  z-index: 21;\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-toolbar md-fab-trigger md-icon {\n  position: relative;\n  z-index: 22;\n  opacity: 1;\n  transition: all 200ms ease-in;\n}\n\nmd-fab-toolbar.md-left md-fab-trigger {\n  right: 0;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools {\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n  margin-right: 0.6rem;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n  margin-left: -0.8rem;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools > .md-button:last-child {\n  margin-right: 8px;\n}\n\nmd-fab-toolbar.md-right md-fab-trigger {\n  left: 0;\n}\n\nmd-fab-toolbar.md-right .md-toolbar-tools {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-fab-toolbar md-toolbar {\n  background-color: transparent !important;\n  pointer-events: none;\n  z-index: 23;\n}\n\nmd-fab-toolbar md-toolbar .md-toolbar-tools {\n  padding: 0 20px;\n  margin-top: 3px;\n}\n\nmd-fab-toolbar md-toolbar .md-fab-action-item {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 0.15s;\n}\n\nmd-fab-toolbar.md-is-open md-fab-trigger > button {\n  box-shadow: none;\n}\n\nmd-fab-toolbar.md-is-open md-fab-trigger > button md-icon {\n  opacity: 0;\n}\n\nmd-fab-toolbar.md-is-open .md-fab-action-item {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-grid-list {\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n}\n\nmd-grid-list md-grid-tile,\nmd-grid-list md-grid-tile > figure,\nmd-grid-list md-grid-tile-header,\nmd-grid-list md-grid-tile-footer {\n  box-sizing: border-box;\n}\n\nmd-grid-list md-grid-tile {\n  display: block;\n  position: absolute;\n}\n\nmd-grid-list md-grid-tile figure {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header,\nmd-grid-list md-grid-tile md-grid-tile-footer {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header h3,\nmd-grid-list md-grid-tile md-grid-tile-header h4,\nmd-grid-list md-grid-tile md-grid-tile-footer h3,\nmd-grid-list md-grid-tile md-grid-tile-footer h4 {\n  font-weight: 400;\n  margin: 0 0 0 16px;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header h3,\nmd-grid-list md-grid-tile md-grid-tile-footer h3 {\n  font-size: 14px;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header h4,\nmd-grid-list md-grid-tile md-grid-tile-footer h4 {\n  font-size: 12px;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header {\n  top: 0;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-footer {\n  bottom: 0;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-grid-tile {\n    border: 1px solid #fff;\n  }\n  md-grid-tile-footer {\n    border-top: 1px solid #fff;\n  }\n}\n\nmd-icon {\n  margin: auto;\n  background-repeat: no-repeat no-repeat;\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n}\n\nmd-icon svg {\n  pointer-events: none;\n}\n\nmd-icon[md-font-icon] {\n  line-height: 1;\n  width: auto;\n}\n\nmd-input-container {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 2px;\n  padding-bottom: 26px;\n  /*\n   * The .md-input class is added to the input/textarea\n   */\n}\n\nmd-input-container.md-input-has-messages {\n  padding-bottom: 2px;\n}\n\nmd-input-container > md-icon {\n  position: absolute;\n  top: 5px;\n  left: 2px;\n}\n\nmd-input-container > md-icon + input {\n  margin-left: 36px;\n}\n\nmd-input-container textarea,\nmd-input-container input[type=\"text\"],\nmd-input-container input[type=\"password\"],\nmd-input-container input[type=\"datetime\"],\nmd-input-container input[type=\"datetime-local\"],\nmd-input-container input[type=\"date\"],\nmd-input-container input[type=\"month\"],\nmd-input-container input[type=\"time\"],\nmd-input-container input[type=\"week\"],\nmd-input-container input[type=\"number\"],\nmd-input-container input[type=\"email\"],\nmd-input-container input[type=\"url\"],\nmd-input-container input[type=\"search\"],\nmd-input-container input[type=\"tel\"],\nmd-input-container input[type=\"color\"] {\n  /* remove default appearance from all input/textarea */\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\nmd-input-container input[type=\"date\"],\nmd-input-container input[type=\"datetime-local\"],\nmd-input-container input[type=\"month\"],\nmd-input-container input[type=\"time\"],\nmd-input-container input[type=\"week\"] {\n  min-height: 26px;\n}\n\nmd-input-container textarea {\n  resize: none;\n  overflow: hidden;\n}\n\nmd-input-container textarea.md-input {\n  min-height: 26px;\n  -ms-flex-preferred-size: auto;\n}\n\nmd-input-container label {\n  position: relative;\n  top: -2px;\n}\n\nmd-input-container label:not(.md-no-float),\nmd-input-container .md-placeholder {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  pointer-events: none;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 2px;\n  z-index: 1;\n  -webkit-transform: translate3d(0, 28px, 0) scale(1);\n          transform: translate3d(0, 28px, 0) scale(1);\n  transition: -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s, -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n\nhtml[dir=rtl] md-input-container label:not(.md-no-float),\nhtml[dir=rtl] md-input-container .md-placeholder {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-input-container label:not(.md-no-float),\nbody[dir=rtl] md-input-container .md-placeholder {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nmd-input-container label:not(.md-no-float) bdo[dir=rtl],\nmd-input-container .md-placeholder bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-input-container label:not(.md-no-float) bdo[dir=ltr],\nmd-input-container .md-placeholder bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-input-container .md-placeholder {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n  -webkit-transform: translate3d(0, 30px, 0);\n          transform: translate3d(0, 30px, 0);\n}\n\nmd-input-container .md-placeholder.md-static {\n  position: static;\n}\n\nmd-input-container.md-input-focused .md-placeholder {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 24px, 0);\n          transform: translate3d(0, 24px, 0);\n}\n\nmd-input-container.md-input-has-value .md-placeholder {\n  transition: none;\n  opacity: 0;\n}\n\nmd-input-container:not(.md-input-has-value) input:not(:focus),\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text {\n  color: transparent;\n}\n\nmd-input-container .md-input {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  display: block;\n  margin-top: 0;\n  background: none;\n  padding-top: 2px;\n  padding-bottom: 1px;\n  padding-left: 2px;\n  padding-right: 2px;\n  border-width: 0 0 1px 0;\n  line-height: 26px;\n  -ms-flex-preferred-size: 26px;\n  border-radius: 0;\n  border-style: solid;\n  width: auto;\n}\n\nmd-input-container .md-input:focus {\n  outline: none;\n}\n\nmd-input-container .md-input:invalid {\n  outline: none;\n  box-shadow: none;\n}\n\nmd-input-container .md-input.md-no-flex {\n  -webkit-flex: none !important;\n      -ms-flex: none !important;\n          flex: none !important;\n}\n\nmd-input-container .md-char-counter {\n  position: absolute;\n  right: 2px;\n  bottom: 7px;\n}\n\nmd-input-container ng-messages, md-input-container data-ng-messages, md-input-container x-ng-messages,\nmd-input-container [ng-messages], md-input-container [data-ng-messages], md-input-container [x-ng-messages] {\n  position: relative;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4;\n  min-height: 24px;\n}\n\nmd-input-container ng-messages .md-char-counter, md-input-container data-ng-messages .md-char-counter, md-input-container x-ng-messages .md-char-counter,\nmd-input-container [ng-messages] .md-char-counter, md-input-container [data-ng-messages] .md-char-counter, md-input-container [x-ng-messages] .md-char-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: auto;\n}\n\nmd-input-container ng-message, md-input-container data-ng-message, md-input-container x-ng-message,\nmd-input-container [ng-message], md-input-container [data-ng-message], md-input-container [x-ng-message],\nmd-input-container [ng-message-exp], md-input-container [data-ng-message-exp], md-input-container [x-ng-message-exp],\nmd-input-container .md-char-counter {\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  padding-top: 5px;\n}\n\nmd-input-container ng-message:not(.md-char-counter), md-input-container data-ng-message:not(.md-char-counter), md-input-container x-ng-message:not(.md-char-counter),\nmd-input-container [ng-message]:not(.md-char-counter), md-input-container [data-ng-message]:not(.md-char-counter), md-input-container [x-ng-message]:not(.md-char-counter),\nmd-input-container [ng-message-exp]:not(.md-char-counter), md-input-container [data-ng-message-exp]:not(.md-char-counter), md-input-container [x-ng-message-exp]:not(.md-char-counter),\nmd-input-container .md-char-counter:not(.md-char-counter) {\n  padding-right: 50px;\n}\n\nmd-input-container ng-message.ng-enter, md-input-container data-ng-message.ng-enter, md-input-container x-ng-message.ng-enter,\nmd-input-container [ng-message].ng-enter, md-input-container [data-ng-message].ng-enter, md-input-container [x-ng-message].ng-enter,\nmd-input-container [ng-message-exp].ng-enter, md-input-container [data-ng-message-exp].ng-enter, md-input-container [x-ng-message-exp].ng-enter,\nmd-input-container .md-char-counter.ng-enter {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-delay: 0.2s;\n  transition-duration: 0.2s;\n}\n\nmd-input-container ng-message.ng-leave, md-input-container data-ng-message.ng-leave, md-input-container x-ng-message.ng-leave,\nmd-input-container [ng-message].ng-leave, md-input-container [data-ng-message].ng-leave, md-input-container [x-ng-message].ng-leave,\nmd-input-container [ng-message-exp].ng-leave, md-input-container [data-ng-message-exp].ng-leave, md-input-container [x-ng-message-exp].ng-leave,\nmd-input-container .md-char-counter.ng-leave {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 0.26667s;\n}\n\nmd-input-container ng-message.ng-enter,\nmd-input-container ng-message.ng-leave.ng-leave-active, md-input-container data-ng-message.ng-enter,\nmd-input-container data-ng-message.ng-leave.ng-leave-active, md-input-container x-ng-message.ng-enter,\nmd-input-container x-ng-message.ng-leave.ng-leave-active,\nmd-input-container [ng-message].ng-enter,\nmd-input-container [ng-message].ng-leave.ng-leave-active, md-input-container [data-ng-message].ng-enter,\nmd-input-container [data-ng-message].ng-leave.ng-leave-active, md-input-container [x-ng-message].ng-enter,\nmd-input-container [x-ng-message].ng-leave.ng-leave-active,\nmd-input-container [ng-message-exp].ng-enter,\nmd-input-container [ng-message-exp].ng-leave.ng-leave-active, md-input-container [data-ng-message-exp].ng-enter,\nmd-input-container [data-ng-message-exp].ng-leave.ng-leave-active, md-input-container [x-ng-message-exp].ng-enter,\nmd-input-container [x-ng-message-exp].ng-leave.ng-leave-active,\nmd-input-container .md-char-counter.ng-enter,\nmd-input-container .md-char-counter.ng-leave.ng-leave-active {\n  margin-top: -19px;\n  opacity: 0;\n}\n\nmd-input-container ng-message.ng-leave,\nmd-input-container ng-message.ng-enter.ng-enter-active, md-input-container data-ng-message.ng-leave,\nmd-input-container data-ng-message.ng-enter.ng-enter-active, md-input-container x-ng-message.ng-leave,\nmd-input-container x-ng-message.ng-enter.ng-enter-active,\nmd-input-container [ng-message].ng-leave,\nmd-input-container [ng-message].ng-enter.ng-enter-active, md-input-container [data-ng-message].ng-leave,\nmd-input-container [data-ng-message].ng-enter.ng-enter-active, md-input-container [x-ng-message].ng-leave,\nmd-input-container [x-ng-message].ng-enter.ng-enter-active,\nmd-input-container [ng-message-exp].ng-leave,\nmd-input-container [ng-message-exp].ng-enter.ng-enter-active, md-input-container [data-ng-message-exp].ng-leave,\nmd-input-container [data-ng-message-exp].ng-enter.ng-enter-active, md-input-container [x-ng-message-exp].ng-leave,\nmd-input-container [x-ng-message-exp].ng-enter.ng-enter-active,\nmd-input-container .md-char-counter.ng-leave,\nmd-input-container .md-char-counter.ng-enter.ng-enter-active {\n  margin-top: 0;\n  opacity: 1;\n}\n\nmd-input-container.md-input-focused label:not(.md-no-float),\nmd-input-container.md-input-has-placeholder label:not(.md-no-float),\nmd-input-container.md-input-has-value label:not(.md-no-float) {\n  -webkit-transform: translate3d(0, 6px, 0) scale(0.75);\n          transform: translate3d(0, 6px, 0) scale(0.75);\n}\n\nmd-input-container.md-input-has-value label {\n  transition: none;\n}\n\nmd-input-container.md-input-focused .md-input,\nmd-input-container .md-input.ng-invalid.ng-dirty {\n  padding-bottom: 0;\n  border-width: 0 0 2px 0;\n}\n\nmd-input-container .md-input[disabled],\n[disabled] md-input-container .md-input {\n  background-position: 0 bottom;\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n  margin-bottom: -1px;\n}\n\nmd-input-container.md-icon-float {\n  margin-top: -16px;\n  transition: margin-top 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-input-container.md-icon-float > label {\n  pointer-events: none;\n  position: absolute;\n  margin-left: 36px;\n}\n\nmd-input-container.md-icon-float > md-icon {\n  top: 26px;\n  left: 2px;\n}\n\nmd-input-container.md-icon-float > md-icon + input,\nmd-input-container.md-icon-float > md-icon + textarea {\n  margin-left: 36px;\n}\n\nmd-input-container.md-icon-float > input,\nmd-input-container.md-icon-float > textarea {\n  padding-top: 24px;\n}\n\nmd-input-container.md-icon-float.md-input-focused,\nmd-input-container.md-icon-float.md-input-has-value {\n  margin-top: -8px;\n}\n\nmd-input-container.md-icon-float.md-input-focused label,\nmd-input-container.md-icon-float.md-input-has-value label {\n  -webkit-transform: translate3d(0, 6px, 0) scale(0.75);\n          transform: translate3d(0, 6px, 0) scale(0.75);\n  transition: -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;\n  transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;\n  transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s, -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;\n}\n\nmd-input-container.md-icon-right input {\n  margin-right: 36px;\n}\n\nmd-input-container.md-icon-right input + md-icon {\n  top: 26px;\n  right: 2px;\n  margin-right: 0;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-input-container.md-default-theme > md-icon {\n    fill: #fff;\n  }\n}\n\nmd-list {\n  display: block;\n  padding: 8px 0px 8px 0px;\n}\n\nmd-list .md-subheader {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  line-height: 1.2em;\n}\n\nmd-list-item.md-proxy-focus.md-focused .md-no-style {\n  transition: background-color 0.15s linear;\n}\n\nmd-list-item.md-no-proxy,\nmd-list-item .md-no-style {\n  position: relative;\n  padding: 0px 16px;\n  -webkit-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\nmd-list-item.md-no-proxy.md-button,\nmd-list-item .md-no-style.md-button {\n  font-size: inherit;\n  height: inherit;\n  text-align: left;\n  text-transform: none;\n  width: 100%;\n  white-space: normal;\n  -webkit-flex-direction: inherit;\n      -ms-flex-direction: inherit;\n          flex-direction: inherit;\n  -webkit-align-items: inherit;\n      -ms-flex-align: inherit;\n          align-items: inherit;\n}\n\nmd-list-item.md-no-proxy:focus,\nmd-list-item .md-no-style:focus {\n  outline: none;\n}\n\nmd-list-item.md-with-secondary {\n  position: relative;\n}\n\nmd-list-item.md-clickable:hover {\n  cursor: pointer;\n}\n\nmd-list-item md-divider {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\nmd-list-item md-divider[md-inset] {\n  left: 96px;\n  width: calc(100% - 96px);\n  margin: 0;\n}\n\nmd-list-item, md-list-item .md-list-item-inner {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 48px;\n  height: auto;\n}\n\nmd-list-item > div.md-primary > md-icon:not(.md-avatar-icon),\nmd-list-item > div.md-secondary > md-icon:not(.md-avatar-icon),\nmd-list-item > md-icon:first-child:not(.md-avatar-icon),\nmd-list-item > md-icon.md-secondary:not(.md-avatar-icon), md-list-item .md-list-item-inner > div.md-primary > md-icon:not(.md-avatar-icon),\nmd-list-item .md-list-item-inner > div.md-secondary > md-icon:not(.md-avatar-icon),\nmd-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon),\nmd-list-item .md-list-item-inner > md-icon.md-secondary:not(.md-avatar-icon) {\n  width: 24px;\n  margin-top: 16px;\n  margin-bottom: 12px;\n  box-sizing: content-box;\n}\n\nmd-list-item > div.md-primary > md-checkbox,\nmd-list-item > div.md-secondary > md-checkbox,\nmd-list-item > md-checkbox:first-child,\nmd-list-item md-checkbox.md-secondary, md-list-item .md-list-item-inner > div.md-primary > md-checkbox,\nmd-list-item .md-list-item-inner > div.md-secondary > md-checkbox,\nmd-list-item .md-list-item-inner > md-checkbox:first-child,\nmd-list-item .md-list-item-inner md-checkbox.md-secondary {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n\nmd-list-item > div.md-primary > md-checkbox .md-label,\nmd-list-item > div.md-secondary > md-checkbox .md-label,\nmd-list-item > md-checkbox:first-child .md-label,\nmd-list-item md-checkbox.md-secondary .md-label, md-list-item .md-list-item-inner > div.md-primary > md-checkbox .md-label,\nmd-list-item .md-list-item-inner > div.md-secondary > md-checkbox .md-label,\nmd-list-item .md-list-item-inner > md-checkbox:first-child .md-label,\nmd-list-item .md-list-item-inner md-checkbox.md-secondary .md-label {\n  display: none;\n}\n\nmd-list-item > md-icon:first-child:not(.md-avatar-icon), md-list-item .md-list-item-inner > md-icon:first-child:not(.md-avatar-icon) {\n  margin-right: 32px;\n}\n\nmd-list-item > md-checkbox:first-child, md-list-item .md-list-item-inner > md-checkbox:first-child {\n  width: 24px;\n  margin-left: 3px;\n  margin-right: 29px;\n}\n\nmd-list-item > .md-avatar, md-list-item .md-avatar-icon, md-list-item .md-list-item-inner > .md-avatar, md-list-item .md-list-item-inner .md-avatar-icon {\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-right: 16px;\n  border-radius: 50%;\n  box-sizing: content-box;\n}\n\nmd-list-item > .md-avatar, md-list-item .md-list-item-inner > .md-avatar {\n  width: 40px;\n  height: 40px;\n}\n\nmd-list-item > .md-avatar-icon, md-list-item .md-list-item-inner > .md-avatar-icon {\n  padding: 8px;\n}\n\nmd-list-item md-checkbox.md-secondary,\nmd-list-item md-switch.md-secondary, md-list-item .md-list-item-inner md-checkbox.md-secondary,\nmd-list-item .md-list-item-inner md-switch.md-secondary {\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nmd-list-item button.md-button.md-secondary-container, md-list-item .md-list-item-inner button.md-button.md-secondary-container {\n  background-color: transparent;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n  border-radius: 50%;\n  margin: 0px;\n  min-width: 0px;\n}\n\nmd-list-item button.md-button.md-secondary-container .md-ripple,\nmd-list-item button.md-button.md-secondary-container .md-ripple-container, md-list-item .md-list-item-inner button.md-button.md-secondary-container .md-ripple,\nmd-list-item .md-list-item-inner button.md-button.md-secondary-container .md-ripple-container {\n  border-radius: 50%;\n}\n\nmd-list-item .md-secondary-container,\nmd-list-item .md-secondary, md-list-item .md-list-item-inner .md-secondary-container,\nmd-list-item .md-list-item-inner .md-secondary {\n  margin-left: 16px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n\nmd-list-item > .md-button.md-secondary-container > .md-secondary, md-list-item .md-list-item-inner > .md-button.md-secondary-container > .md-secondary {\n  margin-left: 0px;\n  position: static;\n}\n\nmd-list-item > p, md-list-item > .md-list-item-inner > p, md-list-item .md-list-item-inner > p, md-list-item .md-list-item-inner > .md-list-item-inner > p {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0;\n}\n\nmd-list-item.md-2-line,\nmd-list-item.md-2-line > .md-no-style,\nmd-list-item.md-3-line,\nmd-list-item.md-3-line > .md-no-style {\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmd-list-item.md-2-line .md-list-item-text,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text,\nmd-list-item.md-3-line .md-list-item-text,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: auto;\n  text-overflow: ellipsis;\n}\n\nmd-list-item.md-2-line .md-list-item-text.md-offset,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset,\nmd-list-item.md-3-line .md-list-item-text.md-offset,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {\n  margin-left: 56px;\n}\n\nmd-list-item.md-2-line .md-list-item-text h3,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text h3,\nmd-list-item.md-3-line .md-list-item-text h3,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text h3 {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  margin: 0 0 0px 0;\n  line-height: 1.2em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\nmd-list-item.md-2-line .md-list-item-text h4,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text h4,\nmd-list-item.md-3-line .md-list-item-text h4,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text h4 {\n  font-size: 14px;\n  letter-spacing: 0.010em;\n  margin: 3px 0 1px 0;\n  font-weight: 400;\n  line-height: 1.2em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\nmd-list-item.md-2-line .md-list-item-text p,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text p,\nmd-list-item.md-3-line .md-list-item-text p,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text p {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  margin: 0 0 0 0;\n  line-height: 1.6em;\n}\n\nmd-list-item.md-2-line,\nmd-list-item.md-2-line > .md-no-style {\n  height: auto;\n  min-height: 72px;\n}\n\nmd-list-item.md-2-line.md-long-text,\nmd-list-item.md-2-line > .md-no-style.md-long-text {\n  margin: 1.6em;\n}\n\nmd-list-item.md-2-line > .md-avatar,\nmd-list-item.md-2-line .md-avatar-icon,\nmd-list-item.md-2-line > .md-no-style > .md-avatar, md-list-item.md-2-line > .md-no-style .md-avatar-icon {\n  margin-top: 12px;\n}\n\nmd-list-item.md-2-line > md-icon:first-child,\nmd-list-item.md-2-line > .md-no-style > md-icon:first-child {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\nmd-list-item.md-2-line .md-list-item-text,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\nmd-list-item.md-3-line,\nmd-list-item.md-3-line > .md-no-style {\n  height: auto;\n  min-height: 88px;\n}\n\nmd-list-item.md-3-line.md-long-text,\nmd-list-item.md-3-line > .md-no-style.md-long-text {\n  margin: 1.6em;\n}\n\nmd-list-item.md-3-line > md-icon:first-child,\nmd-list-item.md-3-line > .md-avatar,\nmd-list-item.md-3-line > .md-no-style > md-icon:first-child,\nmd-list-item.md-3-line > .md-no-style > .md-avatar {\n  margin-top: 16px;\n}\n\n.md-open-menu-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 99;\n  opacity: 0;\n  border-radius: 2px;\n}\n\n.md-open-menu-container md-menu-divider {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  height: 1px;\n  width: 100%;\n}\n\n.md-open-menu-container md-menu-content > * {\n  opacity: 0;\n}\n\n.md-open-menu-container:not(.md-clickable) {\n  pointer-events: none;\n}\n\n.md-open-menu-container.md-active {\n  opacity: 1;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 200ms;\n}\n\n.md-open-menu-container.md-active > md-menu-content > * {\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 200ms;\n  transition-delay: 100ms;\n}\n\n.md-open-menu-container.md-leave {\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 250ms;\n}\n\nmd-menu-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 8px 0;\n  max-height: 304px;\n  overflow-y: auto;\n}\n\nmd-menu-content.md-dense {\n  max-height: 208px;\n}\n\nmd-menu-content.md-dense md-menu-item {\n  height: 32px;\n  min-height: 0px;\n}\n\nmd-menu-item {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-height: 48px;\n  height: 48px;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\nmd-menu-item > * {\n  width: 100%;\n  margin: auto 0;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nmd-menu-item > a.md-button {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmd-menu-item > .md-button {\n  border-radius: 0;\n  margin: auto 0;\n  font-size: 15px;\n  text-transform: none;\n  font-weight: 400;\n  text-align: start;\n  height: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  display: inline-block;\n  -webkit-align-items: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -webkit-align-content: left;\n      -ms-flex-line-pack: left;\n          align-content: left;\n  width: 100%;\n}\n\nmd-menu-item > .md-button md-icon {\n  margin: auto 16px auto 0;\n}\n\nmd-menu-item > .md-button p {\n  display: inline-block;\n  margin: auto;\n}\n\nmd-menu-item > .md-button span {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nmd-menu-item > .md-button .md-ripple-container {\n  border-radius: inherit;\n}\n\n.md-menu {\n  padding: 8px 0;\n}\n\nmd-toolbar .md-menu {\n  height: auto;\n  margin: auto;\n}\n\n@media (max-width: 599px) {\n  md-menu-content {\n    min-width: 112px;\n  }\n  md-menu-content[width=\"3\"] {\n    min-width: 168px;\n  }\n  md-menu-content[width=\"4\"] {\n    min-width: 224px;\n  }\n  md-menu-content[width=\"5\"] {\n    min-width: 280px;\n  }\n  md-menu-content[width=\"6\"] {\n    min-width: 336px;\n  }\n  md-menu-content[width=\"7\"] {\n    min-width: 392px;\n  }\n}\n\n@media (min-width: 600px) {\n  md-menu-content {\n    min-width: 96px;\n  }\n  md-menu-content[width=\"3\"] {\n    min-width: 192px;\n  }\n  md-menu-content[width=\"4\"] {\n    min-width: 256px;\n  }\n  md-menu-content[width=\"5\"] {\n    min-width: 320px;\n  }\n  md-menu-content[width=\"6\"] {\n    min-width: 384px;\n  }\n  md-menu-content[width=\"7\"] {\n    min-width: 448px;\n  }\n}\n\nmd-toolbar.md-menu-toolbar h2.md-toolbar-tools {\n  line-height: 1rem;\n  height: auto;\n  padding: 28px;\n  padding-bottom: 12px;\n}\n\nmd-menu-bar {\n  padding: 0 20px;\n  display: block;\n  position: relative;\n  z-index: 2;\n}\n\nmd-menu-bar .md-menu {\n  display: inline-block;\n  padding: 0;\n  position: relative;\n}\n\nmd-menu-bar button {\n  font-size: 14px;\n  padding: 0 10px;\n  margin: 0;\n  border: 0;\n  background-color: transparent;\n  height: 40px;\n}\n\nmd-menu-bar md-backdrop.md-menu-backdrop {\n  z-index: -2;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense {\n  max-height: none;\n  padding: 16px 0;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent {\n  position: relative;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > md-icon {\n  position: absolute;\n  padding: 0;\n  width: 24px;\n  top: 6px;\n  left: 24px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > .md-button, md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu > .md-button {\n  padding: 0 32px 0 64px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-button {\n  min-height: 0;\n  height: 32px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-button span {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  margin: 0 8px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-divider {\n  margin: 8px 0;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-menu {\n  padding: 0;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  text-align: left;\n  text-align: start;\n  text-transform: none;\n  font-weight: normal;\n  border-radius: 0px;\n  padding-left: 16px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button:after {\n  display: block;\n  content: '\\25BC';\n  position: absolute;\n  top: 0px;\n  speak: none;\n  -webkit-transform: rotate(270deg) scaleY(0.45) scaleX(0.9);\n          transform: rotate(270deg) scaleY(0.45) scaleX(0.9);\n  right: 28px;\n}\n\nmd-progress-circular {\n  display: block;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  padding-top: 0 !important;\n  margin-bottom: 0 !important;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\nmd-progress-circular .md-spinner-wrapper {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner {\n  width: 100px;\n  height: 100px;\n  position: relative;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-gap {\n  position: absolute;\n  left: 49px;\n  right: 49px;\n  top: 0;\n  bottom: 0;\n  border-top-width: 10px;\n  border-top-style: solid;\n  box-sizing: border-box;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left, md-progress-circular .md-spinner-wrapper .md-inner .md-right {\n  position: absolute;\n  top: 0;\n  height: 100px;\n  width: 50px;\n  overflow: hidden;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left .md-half-circle, md-progress-circular .md-spinner-wrapper .md-inner .md-right .md-half-circle {\n  position: absolute;\n  top: 0;\n  width: 100px;\n  height: 100px;\n  box-sizing: border-box;\n  border-width: 10px;\n  border-style: solid;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left {\n  left: 0;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left .md-half-circle {\n  left: 0;\n  border-right-color: transparent;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-right {\n  right: 0;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-right .md-half-circle {\n  right: 0;\n  border-left-color: transparent;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate {\n  -webkit-animation: outer-rotate 2.91667s linear infinite;\n          animation: outer-rotate 2.91667s linear infinite;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner {\n  -webkit-animation: sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite;\n          animation: sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-left .md-half-circle, md-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-right .md-half-circle {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 1.3125s;\n          animation-duration: 1.3125s;\n  -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n          animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-left .md-half-circle {\n  -webkit-animation-name: left-wobble;\n          animation-name: left-wobble;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-right .md-half-circle {\n  -webkit-animation-name: right-wobble;\n          animation-name: right-wobble;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner .md-left .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner .md-right .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide .md-inner {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide .md-inner .md-left .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide .md-inner .md-right .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\n@-webkit-keyframes outer-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes outer-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes left-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n}\n\n@keyframes left-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n}\n\n@-webkit-keyframes right-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n}\n\n@keyframes right-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n}\n\n@-webkit-keyframes sporadic-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  100% {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n}\n\n@keyframes sporadic-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  100% {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n}\n\nmd-radio-button,\n.md-switch-thumb {\n  box-sizing: border-box;\n  display: block;\n  margin: 15px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\nmd-radio-button .md-container,\n.md-switch-thumb .md-container {\n  box-sizing: border-box;\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n\nmd-radio-button .md-container .md-ripple-container,\n.md-switch-thumb .md-container .md-ripple-container {\n  position: absolute;\n  display: block;\n  width: 48px;\n  height: 48px;\n  left: -16px;\n  top: -16px;\n}\n\nmd-radio-button .md-container:before,\n.md-switch-thumb .md-container:before {\n  box-sizing: border-box;\n  background-color: transparent;\n  border-radius: 50%;\n  content: '';\n  position: absolute;\n  display: block;\n  height: auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s;\n  width: auto;\n}\n\nmd-radio-button.md-align-top-left > div.md-container,\n.md-switch-thumb.md-align-top-left > div.md-container {\n  top: -15px;\n}\n\nmd-radio-button .md-off,\n.md-switch-thumb .md-off {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 50%;\n  transition: border-color ease 0.28s;\n}\n\nmd-radio-button .md-on,\n.md-switch-thumb .md-on {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  transition: -webkit-transform ease 0.28s;\n  transition: transform ease 0.28s;\n  transition: transform ease 0.28s, -webkit-transform ease 0.28s;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nmd-radio-button.md-checked .md-on,\n.md-switch-thumb.md-checked .md-on {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\nmd-radio-button .md-label,\n.md-switch-thumb .md-label {\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 0;\n  vertical-align: middle;\n  white-space: normal;\n  pointer-events: none;\n  width: auto;\n}\n\nhtml[dir=rtl] md-radio-button .md-label,\nhtml[dir=rtl] .md-switch-thumb .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-radio-button .md-label,\nbody[dir=rtl] .md-switch-thumb .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nmd-radio-button .md-label bdo[dir=rtl],\n.md-switch-thumb .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-radio-button .md-label bdo[dir=ltr],\n.md-switch-thumb .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-radio-button .md-label,\nhtml[dir=rtl] .md-switch-thumb .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-radio-button .md-label,\nbody[dir=rtl] .md-switch-thumb .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nmd-radio-button .md-label bdo[dir=rtl],\n.md-switch-thumb .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-radio-button .md-label bdo[dir=ltr],\n.md-switch-thumb .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-radio-button .circle,\n.md-switch-thumb .circle {\n  border-radius: 50%;\n}\n\nmd-radio-group:focus {\n  outline: none;\n}\n\nmd-radio-group.md-focused .md-checked .md-container:before {\n  left: -8px;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-radio-button.md-default-theme .md-on {\n    background-color: #fff;\n  }\n}\n\nmd-progress-linear {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  padding-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\nmd-progress-linear .md-container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  -webkit-transform: translate(0, 0) scale(1, 1);\n          transform: translate(0, 0) scale(1, 1);\n}\n\nmd-progress-linear .md-container .md-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}\n\nmd-progress-linear .md-container .md-dashed:before {\n  content: \"\";\n  display: none;\n  position: absolute;\n  margin-top: 0;\n  height: 5px;\n  width: 100%;\n  background-color: transparent;\n  background-size: 10px 10px !important;\n  background-position: 0px -23px;\n}\n\nmd-progress-linear .md-container .md-bar1, md-progress-linear .md-container .md-bar2 {\n  transition: -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear;\n  transition: transform 0.2s linear, -webkit-transform 0.2s linear;\n}\n\nmd-progress-linear .md-container.md-mode-query .md-bar1 {\n  display: none;\n}\n\nmd-progress-linear .md-container.md-mode-query .md-bar2 {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n\nmd-progress-linear .md-container.md-mode-determinate .md-bar1 {\n  display: none;\n}\n\nmd-progress-linear .md-container.md-mode-indeterminate .md-bar1 {\n  -webkit-animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;\n          animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;\n}\n\nmd-progress-linear .md-container.md-mode-indeterminate .md-bar2 {\n  -webkit-animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;\n          animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;\n}\n\nmd-progress-linear .md-container.ng-hide {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-linear .md-container.ng-hide .md-bar1 {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-linear .md-container.ng-hide .md-bar2 {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-linear .md-container.md-mode-buffer {\n  background-color: transparent !important;\n  transition: all 0.2s linear;\n}\n\nmd-progress-linear .md-container.md-mode-buffer .md-dashed:before {\n  display: block;\n  -webkit-animation: buffer 3s infinite linear;\n          animation: buffer 3s infinite linear;\n}\n\n@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n\n@keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n\n@-webkit-keyframes buffer {\n  0% {\n    opacity: 1;\n    background-position: 0px -23px;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n}\n\n@keyframes buffer {\n  0% {\n    opacity: 1;\n    background-position: 0px -23px;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-scale-1 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  36.6% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n  }\n  69.15% {\n    -webkit-transform: scaleX(0.83);\n            transform: scaleX(0.83);\n    -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n            animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-scale-1 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  36.6% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n  }\n  69.15% {\n    -webkit-transform: scaleX(0.83);\n            transform: scaleX(0.83);\n    -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n            animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-1 {\n  0% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  20% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n  }\n  69.15% {\n    left: 21.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n  }\n  100% {\n    left: 95.44444%;\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-1 {\n  0% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  20% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n  }\n  69.15% {\n    left: 21.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n  }\n  100% {\n    left: 95.44444%;\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-scale-2 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n  }\n  19.15% {\n    -webkit-transform: scaleX(0.57);\n            transform: scaleX(0.57);\n    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n  }\n  44.15% {\n    -webkit-transform: scaleX(0.91);\n            transform: scaleX(0.91);\n    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-scale-2 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n  }\n  19.15% {\n    -webkit-transform: scaleX(0.57);\n            transform: scaleX(0.57);\n    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n  }\n  44.15% {\n    -webkit-transform: scaleX(0.91);\n            transform: scaleX(0.91);\n    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-2 {\n  0% {\n    left: -54.88889%;\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n  }\n  25% {\n    left: -17.25%;\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n  }\n  48.35% {\n    left: 29.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n  }\n  100% {\n    left: 117.38889%;\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-2 {\n  0% {\n    left: -54.88889%;\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n  }\n  25% {\n    left: -17.25%;\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n  }\n  48.35% {\n    left: 29.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n  }\n  100% {\n    left: 117.38889%;\n  }\n}\n\n.md-select-menu-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 99;\n  opacity: 0;\n}\n\n.md-select-menu-container:not(.md-clickable) {\n  pointer-events: none;\n}\n\n.md-select-menu-container md-progress-circular {\n  display: table;\n  margin: 24px auto !important;\n}\n\n.md-select-menu-container.md-active {\n  opacity: 1;\n}\n\n.md-select-menu-container.md-active md-select-menu {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 150ms;\n}\n\n.md-select-menu-container.md-active md-select-menu > * {\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 150ms;\n  transition-delay: 100ms;\n}\n\n.md-select-menu-container.md-leave {\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 250ms;\n}\n\nmd-input-container > md-select {\n  margin: 0;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-select {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 20px 0 26px 0;\n}\n\nmd-select[disabled] .md-select-value {\n  background-position: 0 bottom;\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n  margin-bottom: -1px;\n}\n\nmd-select:focus {\n  outline: none;\n}\n\nmd-select[disabled]:hover {\n  cursor: default;\n}\n\nmd-select:not([disabled]):hover {\n  cursor: pointer;\n}\n\nmd-select:not([disabled]).ng-invalid.ng-dirty .md-select-value {\n  border-bottom: 2px solid;\n  padding-bottom: 0;\n}\n\nmd-select:not([disabled]):focus .md-select-value {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  padding-bottom: 0;\n}\n\n.md-select-value {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 2px 2px 1px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  background-color: transparent;\n  position: relative;\n  box-sizing: content-box;\n  min-width: 64px;\n  min-height: 26px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.md-select-value *:first-child {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: calc(100% - 2*8px);\n  -webkit-transform: translate3d(0, 2px, 0);\n          transform: translate3d(0, 2px, 0);\n}\n\n.md-select-value .md-select-icon {\n  display: block;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  text-align: end;\n  width: 24px;\n  margin: 0 4px;\n  -webkit-transform: translate3d(0, 1px, 0);\n          transform: translate3d(0, 1px, 0);\n}\n\n.md-select-value .md-select-icon:after {\n  display: block;\n  content: '\\25BC';\n  position: relative;\n  top: 2px;\n  speak: none;\n  -webkit-transform: scaleY(0.6) scaleX(1);\n          transform: scaleY(0.6) scaleX(1);\n}\n\n.md-select-value.md-select-placeholder {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  pointer-events: none;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 2px;\n  z-index: 1;\n}\n\nmd-select-menu {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-height: 256px;\n  min-height: 48px;\n  overflow-y: hidden;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-select-menu.md-reverse {\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\nmd-select-menu:not(.md-overflow) md-content {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\nhtml[dir=rtl] md-select-menu {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-select-menu {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nmd-select-menu bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-select-menu bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-select-menu md-content {\n  min-width: 136px;\n  min-height: 48px;\n  max-height: 256px;\n  overflow-y: auto;\n}\n\nmd-select-menu > * {\n  opacity: 0;\n}\n\nmd-option {\n  cursor: pointer;\n  position: relative;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0 16px 0 16px;\n  height: 48px;\n}\n\nmd-option:focus {\n  outline: none;\n}\n\nmd-option .md-text {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n}\n\nmd-optgroup {\n  display: block;\n}\n\nmd-optgroup label {\n  display: block;\n  font-size: 14px;\n  text-transform: uppercase;\n  padding: 16px;\n  font-weight: 500;\n}\n\nmd-optgroup md-option {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-select-backdrop {\n    background-color: transparent;\n  }\n  md-select-menu {\n    border: 1px solid #fff;\n  }\n}\n\nmd-sidenav {\n  box-sizing: border-box;\n  position: absolute;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 60;\n  width: 304px;\n  min-width: 304px;\n  max-width: 304px;\n  bottom: 0;\n  overflow: auto;\n}\n\nmd-sidenav ul {\n  list-style: none;\n}\n\nmd-sidenav.md-closed {\n  display: none;\n}\n\nmd-sidenav.md-closed-add,\nmd-sidenav.md-closed-remove {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  transition: 0.2s ease-in all;\n}\n\nmd-sidenav.md-closed-add.md-closed-add-active,\nmd-sidenav.md-closed-remove.md-closed-remove-active {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-sidenav.md-locked-open-add,\nmd-sidenav.md-locked-open-remove {\n  position: static;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-sidenav.md-locked-open {\n  width: 304px;\n  min-width: 304px;\n  max-width: 304px;\n}\n\nmd-sidenav.md-locked-open,\nmd-sidenav.md-locked-open.md-closed,\nmd-sidenav.md-locked-open.md-closed.md-sidenav-left,\nmd-sidenav.md-locked-open.md-closed,\nmd-sidenav.md-locked-open.md-closed.md-sidenav-right,\nmd-sidenav.md-locked-open-remove.md-closed {\n  position: static;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-sidenav.md-locked-open-remove-active {\n  transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  width: 0;\n  min-width: 0;\n}\n\nmd-sidenav.md-closed.md-locked-open-add {\n  width: 0;\n  min-width: 0;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\nmd-sidenav.md-closed.md-locked-open-add-active {\n  transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  width: 304px;\n  min-width: 304px;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\n.md-sidenav-backdrop.md-locked-open {\n  display: none;\n}\n\n.md-sidenav-left, md-sidenav {\n  left: 0;\n  top: 0;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\n.md-sidenav-left.md-closed, md-sidenav.md-closed {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n\n.md-sidenav-right {\n  left: 100%;\n  top: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n\n.md-sidenav-right.md-closed {\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\n@media (max-width: 360px) {\n  md-sidenav {\n    width: 85%;\n  }\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-sidenav-left, md-sidenav {\n    border-right: 1px solid #fff;\n  }\n  .md-sidenav-right {\n    border-left: 1px solid #fff;\n  }\n}\n\n@-webkit-keyframes sliderFocusThumb {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes sliderFocusThumb {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\nmd-slider {\n  height: 48px;\n  position: relative;\n  display: block;\n  margin-left: 4px;\n  margin-right: 4px;\n  padding: 0;\n  /**\n   * Track\n   */\n  /**\n   * Slider thumb\n   */\n  /* The sign that's focused in discrete mode */\n  /**\n   * The border/background that comes in when focused in non-discrete mode\n   */\n  /* Don't animate left/right while panning */\n}\n\nmd-slider *, md-slider *:after {\n  box-sizing: border-box;\n}\n\nmd-slider .md-slider-wrapper {\n  position: relative;\n}\n\nmd-slider .md-track-container {\n  width: 100%;\n  position: absolute;\n  top: 23px;\n  height: 2px;\n}\n\nmd-slider .md-track {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\nmd-slider .md-track-fill {\n  transition: width 0.05s linear;\n}\n\nmd-slider .md-track-ticks {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\nmd-slider .md-track-ticks canvas {\n  width: 100%;\n}\n\nmd-slider .md-thumb-container {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  transition: left 0.1s linear;\n}\n\nmd-slider .md-thumb {\n  z-index: 1;\n  position: absolute;\n  left: -19px;\n  top: 5px;\n  width: 38px;\n  height: 38px;\n  border-radius: 38px;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  transition: all 0.1s linear;\n}\n\nmd-slider .md-thumb:after {\n  content: '';\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n  border-width: 3px;\n  border-style: solid;\n}\n\nmd-slider .md-sign {\n  /* Center the children (slider-thumb-text) */\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  left: -14px;\n  top: -20px;\n  width: 28px;\n  height: 28px;\n  border-radius: 28px;\n  -webkit-transform: scale(0.4) translate3d(0, 70px, 0);\n          transform: scale(0.4) translate3d(0, 70px, 0);\n  transition: all 0.2s ease-in-out;\n  /* The arrow pointing down under the sign */\n}\n\nmd-slider .md-sign:after {\n  position: absolute;\n  content: '';\n  left: 0px;\n  border-radius: 16px;\n  top: 19px;\n  border-left: 14px solid transparent;\n  border-right: 14px solid transparent;\n  border-top-width: 16px;\n  border-top-style: solid;\n  opacity: 0;\n  -webkit-transform: translate3d(0, -8px, 0);\n          transform: translate3d(0, -8px, 0);\n  transition: all 0.2s ease-in-out;\n}\n\nmd-slider .md-sign .md-thumb-text {\n  z-index: 1;\n  font-size: 12px;\n  font-weight: bold;\n}\n\nmd-slider .md-focus-thumb {\n  position: absolute;\n  left: -24px;\n  top: 0px;\n  width: 48px;\n  height: 48px;\n  border-radius: 48px;\n  display: none;\n  opacity: 0;\n  background-color: #C0C0C0;\n  -webkit-animation: sliderFocusThumb 0.4s linear;\n          animation: sliderFocusThumb 0.4s linear;\n}\n\nmd-slider .md-focus-ring {\n  position: absolute;\n  left: -24px;\n  top: 0px;\n  width: 48px;\n  height: 48px;\n  border-radius: 48px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all 0.2s linear;\n  opacity: 0.26;\n}\n\nmd-slider .md-disabled-thumb {\n  position: absolute;\n  left: -22px;\n  top: 2px;\n  width: 44px;\n  height: 44px;\n  border-radius: 44px;\n  -webkit-transform: scale(0.35);\n          transform: scale(0.35);\n  border-width: 6px;\n  border-style: solid;\n  display: none;\n}\n\nmd-slider.md-min .md-thumb:after {\n  background-color: white;\n}\n\nmd-slider.md-min .md-sign {\n  opacity: 0;\n}\n\nmd-slider:focus {\n  outline: none;\n}\n\nmd-slider.md-dragging .md-thumb-container,\nmd-slider.md-dragging .md-track-fill {\n  transition: none;\n}\n\nmd-slider:not([md-discrete]) {\n  /* Hide the sign and ticks in non-discrete mode */\n}\n\nmd-slider:not([md-discrete]) .md-track-ticks,\nmd-slider:not([md-discrete]) .md-sign {\n  display: none;\n}\n\nmd-slider:not([md-discrete]):not([disabled]):hover .md-thumb {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n}\n\nmd-slider:not([md-discrete]):not([disabled]):focus .md-focus-thumb,\nmd-slider:not([md-discrete]):not([disabled]).md-active .md-focus-thumb {\n  display: block;\n}\n\nmd-slider:not([md-discrete]):not([disabled]):focus .md-focus-ring,\nmd-slider:not([md-discrete]):not([disabled]).md-active .md-focus-ring {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-slider:not([md-discrete]):not([disabled]):focus .md-thumb,\nmd-slider:not([md-discrete]):not([disabled]).md-active .md-thumb {\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n}\n\nmd-slider[md-discrete] {\n  /* Hide the focus thumb in discrete mode */\n}\n\nmd-slider[md-discrete] .md-focus-thumb,\nmd-slider[md-discrete] .md-focus-ring {\n  display: none;\n}\n\nmd-slider[md-discrete]:not([disabled]):focus .md-sign,\nmd-slider[md-discrete]:not([disabled]):focus .md-sign:after,\nmd-slider[md-discrete]:not([disabled]).md-active .md-sign,\nmd-slider[md-discrete]:not([disabled]).md-active .md-sign:after {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n\nmd-slider[disabled] .md-track-fill {\n  display: none;\n}\n\nmd-slider[disabled] .md-sign {\n  display: none;\n}\n\nmd-slider[disabled] .md-thumb {\n  -webkit-transform: scale(0.35);\n          transform: scale(0.35);\n}\n\nmd-slider[disabled] .md-disabled-thumb {\n  display: block;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-slider.md-default-theme .md-track {\n    border-bottom: 1px solid #fff;\n  }\n}\n\n.md-sticky-clone {\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  position: absolute !important;\n  -webkit-transform: translate3d(-9999px, -9999px, 0);\n          transform: translate3d(-9999px, -9999px, 0);\n}\n\n.md-sticky-clone[sticky-state=\"active\"] {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.md-sticky-clone[sticky-state=\"active\"]:not(.md-sticky-no-effect) .md-subheader-inner {\n  -webkit-animation: subheaderStickyHoverIn 0.3s ease-out both;\n          animation: subheaderStickyHoverIn 0.3s ease-out both;\n}\n\n@-webkit-keyframes subheaderStickyHoverIn {\n  0% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n  100% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n}\n\n@keyframes subheaderStickyHoverIn {\n  0% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n  100% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n}\n\n@-webkit-keyframes subheaderStickyHoverOut {\n  0% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n\n@keyframes subheaderStickyHoverOut {\n  0% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect) {\n  transition: 0.2s ease-out margin;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect) .md-subheader {\n  margin: 0;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect).md-sticky-clone {\n  z-index: 2;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect)[sticky-state=\"active\"] {\n  margin-top: -2px;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state=\"active\"] .md-subheader-inner:after {\n  -webkit-animation: subheaderStickyHoverOut 0.3s ease-out both;\n          animation: subheaderStickyHoverOut 0.3s ease-out both;\n}\n\n.md-subheader {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1em;\n  margin: 0 0 0 0;\n  margin-right: 16px;\n  position: relative;\n}\n\n.md-subheader .md-subheader-inner {\n  display: block;\n  padding: 16px 0px 16px 16px;\n}\n\n.md-subheader .md-subheader-content {\n  display: block;\n  z-index: 1;\n  position: relative;\n}\n\nmd-switch {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 15px;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nmd-switch .md-container {\n  cursor: -webkit-grab;\n  cursor: grab;\n  width: 36px;\n  height: 24px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-right: 8px;\n}\n\nmd-switch:not([disabled]) .md-dragging,\nmd-switch:not([disabled]).md-dragging .md-container {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\nmd-switch.md-focused:not([disabled]) .md-thumb:before {\n  left: -8px;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n\nmd-switch.md-focused:not([disabled]):not(.md-checked) .md-thumb:before {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\nmd-switch .md-label {\n  border-color: transparent;\n  border-width: 0;\n}\n\nmd-switch .md-bar {\n  left: 1px;\n  width: 34px;\n  top: 5px;\n  height: 14px;\n  border-radius: 8px;\n  position: absolute;\n}\n\nmd-switch .md-thumb-container {\n  top: 2px;\n  left: 0;\n  width: 16px;\n  position: absolute;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  z-index: 1;\n}\n\nmd-switch.md-checked .md-thumb-container {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n\nmd-switch .md-thumb {\n  position: absolute;\n  margin: 0;\n  left: 0;\n  top: 0;\n  outline: none;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\nmd-switch .md-thumb:before {\n  background-color: transparent;\n  border-radius: 50%;\n  content: '';\n  position: absolute;\n  display: block;\n  height: auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s;\n  width: auto;\n}\n\nmd-switch .md-thumb .md-ripple-container {\n  position: absolute;\n  display: block;\n  width: auto;\n  height: auto;\n  left: -20px;\n  top: -20px;\n  right: -20px;\n  bottom: -20px;\n}\n\nmd-switch:not(.md-dragging) .md-bar,\nmd-switch:not(.md-dragging) .md-thumb-container,\nmd-switch:not(.md-dragging) .md-thumb {\n  transition: all 0.08s linear;\n  transition-property: background-color, -webkit-transform;\n  transition-property: transform, background-color;\n  transition-property: transform, background-color, -webkit-transform;\n}\n\nmd-switch:not(.md-dragging) .md-bar,\nmd-switch:not(.md-dragging) .md-thumb {\n  transition-delay: 0.05s;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-switch.md-default-theme .md-bar {\n    background-color: #666;\n  }\n  md-switch.md-default-theme.md-checked .md-bar {\n    background-color: #9E9E9E;\n  }\n  md-switch.md-default-theme .md-thumb {\n    background-color: #fff;\n  }\n}\n\nmd-toast {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 90;\n  box-sizing: border-box;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 48px;\n  padding-left: 24px;\n  padding-right: 24px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 2px;\n  font-size: 14px;\n  cursor: default;\n  height: 0px;\n  max-height: 168px;\n  max-width: 100%;\n  overflow: hidden;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0) rotateZ(0deg);\n          transform: translate3d(0, 0, 0) rotateZ(0deg);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  /* Transition differently when swiping */\n}\n\nmd-toast.md-capsule {\n  border-radius: 24px;\n}\n\nmd-toast.ng-leave-active {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-toast.md-swipeleft,\nmd-toast.md-swiperight,\nmd-toast.md-swipeup,\nmd-toast.md-swipedown {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-toast.ng-enter {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  opacity: 0;\n}\n\nmd-toast.ng-enter.md-top {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n\nmd-toast.ng-enter.ng-enter-active {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n\nmd-toast.ng-leave.ng-leave-active {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n\nmd-toast.ng-leave.ng-leave-active.md-top {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n\nmd-toast.ng-leave.ng-leave-active.md-swipeleft {\n  -webkit-transform: translate3d(-100%, 0%, 0);\n          transform: translate3d(-100%, 0%, 0);\n}\n\nmd-toast.ng-leave.ng-leave-active.md-swiperight {\n  -webkit-transform: translate3d(100%, 0%, 0);\n          transform: translate3d(100%, 0%, 0);\n}\n\nmd-toast .md-action {\n  line-height: 19px;\n  margin-left: 24px;\n  cursor: pointer;\n  text-transform: uppercase;\n  float: right;\n}\n\nmd-toast .md-action.md-button {\n  min-width: 0;\n}\n\n@media (max-width: 600px) {\n  md-toast {\n    left: 0;\n    right: 0;\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    border-radius: 0;\n    bottom: 0;\n  }\n  md-toast.md-top {\n    bottom: auto;\n    top: 0;\n  }\n}\n\n@media (min-width: 600px) {\n  md-toast {\n    min-width: 288px;\n    /*\n     * When the toast doesn't take up the whole screen,\n     * make it rotate when the user swipes it away\n     */\n  }\n  md-toast.md-bottom {\n    bottom: 8px;\n  }\n  md-toast.md-left {\n    left: 8px;\n  }\n  md-toast.md-right {\n    right: 8px;\n  }\n  md-toast.md-top {\n    top: 8px;\n  }\n  md-toast.ng-leave.ng-leave-active.md-swipeleft {\n    -webkit-transform: translate3d(-100%, 25%, 0) rotateZ(-15deg);\n            transform: translate3d(-100%, 25%, 0) rotateZ(-15deg);\n  }\n  md-toast.ng-leave.ng-leave-active.md-swiperight {\n    -webkit-transform: translate3d(100%, 25%, 0) rotateZ(15deg);\n            transform: translate3d(100%, 25%, 0) rotateZ(15deg);\n  }\n  md-toast.ng-leave.ng-leave-active.md-top.md-swipeleft {\n    -webkit-transform: translate3d(-100%, 0, 0) rotateZ(-15deg);\n            transform: translate3d(-100%, 0, 0) rotateZ(-15deg);\n  }\n  md-toast.ng-leave.ng-leave-active.md-top.md-swiperight {\n    -webkit-transform: translate3d(100%, 0, 0) rotateZ(15deg);\n            transform: translate3d(100%, 0, 0) rotateZ(15deg);\n  }\n}\n\n@media (min-width: 1200px) {\n  md-toast {\n    max-width: 568px;\n  }\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-toast {\n    border: 1px solid #fff;\n  }\n}\n\n@-webkit-keyframes md-tab-content-hide {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes md-tab-content-hide {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\nmd-tab-data {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0;\n}\n\nmd-tabs {\n  display: block;\n  margin: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n\nmd-tabs:not(.md-no-tab-content):not(.md-dynamic-height) {\n  min-height: 248px;\n}\n\nmd-tabs[md-align-tabs=\"bottom\"] {\n  padding-bottom: 48px;\n}\n\nmd-tabs[md-align-tabs=\"bottom\"] md-tabs-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 48px;\n  z-index: 2;\n}\n\nmd-tabs[md-align-tabs=\"bottom\"] md-tabs-content-wrapper {\n  top: 0;\n  bottom: 48px;\n}\n\nmd-tabs.md-dynamic-height md-tabs-content-wrapper {\n  min-height: 0;\n  position: relative;\n  top: auto;\n  left: auto;\n  right: auto;\n  bottom: auto;\n  overflow: visible;\n}\n\nmd-tabs.md-dynamic-height md-tab-content.md-active {\n  position: relative;\n}\n\nmd-tabs[md-border-bottom] md-tabs-wrapper {\n  border-width: 0 0 1px;\n  border-style: solid;\n}\n\nmd-tabs[md-border-bottom]:not(.md-dynamic-height) md-tabs-content-wrapper {\n  top: 49px;\n}\n\nmd-tabs-wrapper {\n  display: block;\n  position: relative;\n}\n\nmd-tabs-wrapper md-prev-button, md-tabs-wrapper md-next-button {\n  height: 100%;\n  width: 32px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  line-height: 1em;\n  z-index: 2;\n  cursor: pointer;\n  font-size: 16px;\n  background: transparent no-repeat center center;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-tabs-wrapper md-prev-button:focus, md-tabs-wrapper md-next-button:focus {\n  outline: none;\n}\n\nmd-tabs-wrapper md-prev-button.md-disabled, md-tabs-wrapper md-next-button.md-disabled {\n  opacity: 0.25;\n  cursor: default;\n}\n\nmd-tabs-wrapper md-prev-button.ng-leave, md-tabs-wrapper md-next-button.ng-leave {\n  transition: none;\n}\n\nmd-tabs-wrapper md-prev-button md-icon, md-tabs-wrapper md-next-button md-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n\nmd-tabs-wrapper md-prev-button {\n  left: 0;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==\");\n}\n\nmd-tabs-wrapper md-next-button {\n  right: 0;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K\");\n}\n\nmd-tabs-wrapper md-next-button md-icon {\n  -webkit-transform: translate3d(-50%, -50%, 0) rotate(180deg);\n          transform: translate3d(-50%, -50%, 0) rotate(180deg);\n}\n\nmd-tabs-wrapper.md-stretch-tabs md-pagination-wrapper {\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-tabs-wrapper.md-stretch-tabs md-pagination-wrapper md-tab-item {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\nmd-tabs-canvas {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  height: 48px;\n}\n\nmd-tabs-canvas:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\nmd-tabs-canvas .md-dummy-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmd-tabs-canvas.md-paginated {\n  margin: 0 32px;\n}\n\nmd-tabs-canvas.md-center-tabs {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n}\n\nmd-tabs-canvas.md-center-tabs .md-tab {\n  float: none;\n  display: inline-block;\n}\n\nmd-pagination-wrapper {\n  height: 48px;\n  display: block;\n  transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  position: absolute;\n  width: 999999px;\n  left: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-pagination-wrapper:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\nmd-pagination-wrapper.md-center-tabs {\n  position: relative;\n  width: initial;\n  margin: 0 auto;\n}\n\nmd-tabs-content-wrapper {\n  display: block;\n  position: absolute;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n\nmd-tab-content {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  overflow: auto;\n}\n\nmd-tab-content.md-no-scroll {\n  bottom: auto;\n  overflow: hidden;\n}\n\nmd-tab-content.ng-leave, md-tab-content.md-no-transition {\n  transition: none;\n}\n\nmd-tab-content.md-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-animation: 1s md-tab-content-hide;\n          animation: 1s md-tab-content-hide;\n  opacity: 0;\n}\n\nmd-tab-content.md-left * {\n  transition: visibility 0s linear;\n  transition-delay: 0.5s;\n  visibility: hidden;\n}\n\nmd-tab-content.md-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  -webkit-animation: 1s md-tab-content-hide;\n          animation: 1s md-tab-content-hide;\n  opacity: 0;\n}\n\nmd-tab-content.md-right * {\n  transition: visibility 0s linear;\n  transition-delay: 0.5s;\n  visibility: hidden;\n}\n\nmd-tab-content > div.ng-leave {\n  -webkit-animation: 1s md-tab-content-hide;\n          animation: 1s md-tab-content-hide;\n}\n\nmd-ink-bar {\n  position: absolute;\n  left: auto;\n  right: auto;\n  bottom: 0;\n  height: 2px;\n}\n\nmd-ink-bar.md-left {\n  transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-ink-bar.md-right {\n  transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-tab {\n  position: absolute;\n  z-index: -1;\n  left: -9999px;\n}\n\n.md-tab {\n  font-size: 14px;\n  text-align: center;\n  line-height: 24px;\n  padding: 12px 24px;\n  transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);\n  cursor: pointer;\n  white-space: nowrap;\n  position: relative;\n  text-transform: uppercase;\n  float: left;\n  font-weight: 500;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.md-tab.md-focused {\n  box-shadow: none;\n  outline: none;\n}\n\n.md-tab.md-active {\n  cursor: default;\n}\n\n.md-tab.md-disabled {\n  pointer-events: none;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  opacity: 0.5;\n  cursor: default;\n}\n\n.md-tab.ng-leave {\n  transition: none;\n}\n\nmd-toolbar + md-tabs {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nmd-toolbar {\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n  min-height: 64px;\n  width: 100%;\n}\n\nmd-toolbar.md-whiteframe-z1-add, md-toolbar.md-whiteframe-z1-remove {\n  transition: box-shadow 0.5s linear;\n}\n\nmd-toolbar md-toolbar-filler {\n  width: 72px;\n}\n\nmd-toolbar *,\nmd-toolbar *:before,\nmd-toolbar *:after {\n  box-sizing: border-box;\n}\n\nmd-toolbar.md-tall {\n  height: 128px;\n  min-height: 128px;\n  max-height: 128px;\n}\n\nmd-toolbar.md-medium-tall {\n  height: 88px;\n  min-height: 88px;\n  max-height: 88px;\n}\n\nmd-toolbar.md-medium-tall .md-toolbar-tools {\n  height: 48px;\n  min-height: 48px;\n  max-height: 48px;\n}\n\nmd-toolbar > .md-indent {\n  margin-left: 64px;\n}\n\nmd-toolbar ~ md-content > md-list {\n  padding: 0;\n}\n\nmd-toolbar ~ md-content > md-list md-list-item:last-child md-divider {\n  display: none;\n}\n\n.md-toolbar-tools {\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  box-sizing: border-box;\n  font-weight: 400;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  height: 64px;\n  max-height: 64px;\n  padding: 0 16px;\n  margin: 0;\n}\n\n.md-toolbar-tools h1, .md-toolbar-tools h2, .md-toolbar-tools h3 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: inherit;\n}\n\n.md-toolbar-tools a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.md-toolbar-tools .fill-height {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.md-toolbar-tools .md-button {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.md-toolbar-tools > .md-button:first-child {\n  margin-left: -8px;\n}\n\n.md-toolbar-tools > .md-button:last-child {\n  margin-right: -8px;\n}\n\n.md-toolbar-tools > md-menu:last-child {\n  margin-right: -8px;\n}\n\n.md-toolbar-tools > md-menu:last-child > .md-button {\n  margin-right: 0;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-toolbar-tools {\n    border-bottom: 1px solid #fff;\n  }\n}\n\n@media only screen and (min-width: 0) and (max-width: 600px) and (orientation: portrait) {\n  md-toolbar {\n    min-height: 56px;\n  }\n  .md-toolbar-tools {\n    height: 56px;\n    max-height: 56px;\n  }\n}\n\n@media only screen and (min-width: 0) and (max-width: 600px) and (orientation: landscape) {\n  md-toolbar {\n    min-height: 48px;\n  }\n  .md-toolbar-tools {\n    height: 48px;\n    max-height: 48px;\n  }\n}\n\nmd-tooltip {\n  position: absolute;\n  z-index: 100;\n  overflow: hidden;\n  pointer-events: none;\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n@media screen and (min-width: 600px) {\n  md-tooltip {\n    font-size: 10px;\n  }\n}\n\nmd-tooltip .md-background {\n  position: absolute;\n  border-radius: 50%;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 1;\n}\n\nmd-tooltip .md-background.md-show-add {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n}\n\nmd-tooltip .md-background.md-show, md-tooltip .md-background.md-show-add-active {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\nmd-tooltip .md-background.md-show-remove {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-tooltip .md-background.md-show-remove.md-show-remove-active {\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n}\n\nmd-tooltip .md-content {\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: transparent;\n  opacity: 0;\n  height: 32px;\n  line-height: 32px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n@media screen and (min-width: 600px) {\n  md-tooltip .md-content {\n    height: 22px;\n    line-height: 22px;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\nmd-tooltip .md-content.md-show-add {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n\nmd-tooltip .md-content.md-show, md-tooltip .md-content.md-show-add-active {\n  opacity: 1;\n}\n\nmd-tooltip .md-content.md-show-remove {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-tooltip .md-content.md-show-remove.md-show-remove-active {\n  opacity: 0;\n}\n\nmd-tooltip.md-hide {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-tooltip.md-show {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  pointer-events: auto;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.md-virtual-repeat-container {\n  box-sizing: border-box;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n}\n\n.md-virtual-repeat-container .md-virtual-repeat-scroller {\n  bottom: 0;\n  box-sizing: border-box;\n  left: 0;\n  margin: 0;\n  overflow-x: hidden;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.md-virtual-repeat-container .md-virtual-repeat-sizer {\n  box-sizing: border-box;\n  height: 1px;\n  display: block;\n  margin: 0;\n  padding: 0;\n  width: 1px;\n}\n\n.md-virtual-repeat-container .md-virtual-repeat-offsetter {\n  box-sizing: border-box;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {\n  bottom: 16px;\n  right: auto;\n  white-space: nowrap;\n}\n\n.md-whiteframe-1dp, .md-whiteframe-z1 {\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-2dp {\n  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-3dp {\n  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-4dp, .md-whiteframe-z2 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-5dp {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-6dp {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-7dp, .md-whiteframe-z3 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-8dp {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-9dp {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-10dp, .md-whiteframe-z4 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-11dp {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-12dp {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-13dp, .md-whiteframe-z5 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-14dp {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-15dp {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-16dp {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-17dp {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-18dp {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-19dp {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-20dp {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-21dp {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-22dp {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-23dp {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n.md-whiteframe-24dp {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-whiteframe {\n    border: 1px solid #fff;\n  }\n}\n\n@font-face {\n  font-family: 'freight';\n  src: url(" + __webpack_require__(67) + ");\n  src: url(" + __webpack_require__(67) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(68) + ") format(\"woff2\"), url(" + __webpack_require__(69) + ") format(\"woff\"), url(" + __webpack_require__(70) + ") format(\"truetype\"), url(" + __webpack_require__(71) + "#freighttext_probook) format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'freight';\n  src: url(" + __webpack_require__(72) + ");\n  src: url(" + __webpack_require__(72) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(73) + ") format(\"woff2\"), url(" + __webpack_require__(74) + ") format(\"woff\"), url(" + __webpack_require__(75) + ") format(\"truetype\"), url(" + __webpack_require__(76) + "#freighttext_prolight) format(\"svg\");\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'bernina';\n  src: url(" + __webpack_require__(77) + ");\n  src: url(" + __webpack_require__(77) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(78) + ") format(\"woff2\"), url(" + __webpack_require__(79) + ") format(\"woff\"), url(" + __webpack_require__(80) + ") format(\"truetype\"), url(" + __webpack_require__(81) + "#bernina_sansbold) format(\"svg\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'bernina';\n  src: url(" + __webpack_require__(82) + ");\n  src: url(" + __webpack_require__(82) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(83) + ") format(\"woff2\"), url(" + __webpack_require__(84) + ") format(\"woff\"), url(" + __webpack_require__(85) + ") format(\"truetype\"), url(" + __webpack_require__(86) + "#bernino_sansregular) format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'bernina';\n  src: url(" + __webpack_require__(87) + ");\n  src: url(" + __webpack_require__(87) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(88) + ") format(\"woff2\"), url(" + __webpack_require__(89) + ") format(\"woff\"), url(" + __webpack_require__(90) + ") format(\"truetype\"), url(" + __webpack_require__(91) + "#bernino_sanssemibold) format(\"svg\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nhtml,\nbody {\n  color: #414141;\n  background-color: white;\n  font-family: bernina, Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.mute {\n  color: rgba(0, 0, 0, 0.54) !important;\n}\n\n.no-mute {\n  color: rgba(0, 0, 0, 0.87) !important;\n}\n\n.sans {\n  font-family: 'bernina';\n}\n\n.serif {\n  font-family: 'freight';\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.margin-on-md {\n  margin: 0px 0px 66px;\n}\n\n@media (min-width: 600px) {\n  .margin-on-md {\n    margin: 0px 72px 66px;\n  }\n  .margin-on-md .chat-list {\n    border-radius: 4px;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0954a1d4faf380088b70a04e1051cc4e.eot"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f0e28b45ee6ed956e3f444f035417dee.woff2"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ca5eae7e340fc9f225762178cfe6c973.woff"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bb84a2c27855afc87b20fae6d28b7710.ttf"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "40ae515bb894e375567700a00601443e.svg"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ae52c7c6316dec2d9d370ce7fc3d5991.eot"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "01b541e1228139b27548b4d826f557fe.woff2"

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "93069032a6fe98a12e38c40c7f6344cb.woff"

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2f2d59da54a0ebac64bb2b9b173a1c35.ttf"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "345eba346f21df0d091a648870996cc4.svg"

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1b73bd9655d8f922962ffed98164b4f5.eot"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e3fd8f67998ec8bff8d36f697c774fc.woff2"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "981957c996d078c25e40e93cf869f067.woff"

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c6b163d38dc8addcaeb3b2bd0f612278.ttf"

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "daa0400bd8d87b497899b952ab19c328.svg"

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b478806a911341b3b334ee35719cb942.eot"

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8fd1ec69127c16687bcbb7705220e6b9.woff2"

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1c5f673c8bbd13d3d4607de59b84c5ac.woff"

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc78fe600b6493c7b18ce6cc92400f8b.ttf"

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "28021292ec505572ea0b498a473032a2.svg"

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2957d2cd787d5cb4c7792d5ef8c1137e.eot"

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c17038dd183d9e3d30f126c59f762990.woff2"

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6c7e71f799f7d157f1d9024dd96fd9dc.woff"

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b170ea4e0f665bc9de78cc6b68240871.ttf"

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e66fac08a93dcd2ba2d063f0cbef04af.svg"

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=index.js.map