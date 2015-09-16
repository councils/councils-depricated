(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular"), require("lodash")) : factory(root["angular"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_39__) {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Module dependencies
	 */
	var angular = __webpack_require__(1);

	/**
	 * Setup App Module
	 */
	var appModule = module.exports = angular.module('councils', ['ngAnimate', 'ngMaterial', 'ui.router', 'ionic', 'firebase', 'angularMoment',
	// 'ionic.service.core',
	// 'ionic.service.deploy',
	// 'ionic.service.analytics',
	// 'ionic.service.push',
	// 'ngCordova',
	__webpack_require__(2)(angular).name, __webpack_require__(16)(angular).name, __webpack_require__(23)(angular).name, __webpack_require__(28)(angular).name, __webpack_require__(33)(angular).name]).constant('version', __webpack_require__(38).version).constant('_', __webpack_require__(39)).config(["$compileProvider", "$urlRouterProvider", "$mdThemingProvider", function ($compileProvider, $urlRouterProvider, $mdThemingProvider) {
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

	  $mdThemingProvider.theme('green').primaryPalette('councils-green');

	  $mdThemingProvider.theme('default')
	  //.backgroundPalette('councils-green')
	  .primaryPalette('councils-white').accentPalette('councils-grey');
	}]).run(["$log", "$rootScope", "$ionicBackdrop", "$timeout", "User", function ($log, $rootScope, $ionicBackdrop, $timeout, User) {

	  $log.debug('app module - run');

	  $rootScope.$on('$stateChangeStart', function (event, toState) {
	    $log.debug('$stateChangeStart - name:', toState.name);
	  });

	  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
	    $rootScope.title = toParams.council ? toParams.council : toState.title;
	    $log.debug('$stateChangeSuccess - name:', toState.name);
	  });

	  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
	    $log.warn('$stateNotFound', {
	      event: event,
	      unfoundState: unfoundState,
	      fromState: fromState,
	      fromParams: fromParams
	    });
	  });

	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
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

	  User.set('simplelogin:6').then(function (user) {
	    return user.$bindTo($rootScope, 'user');
	  });

	  $ionicBackdrop.retain();

	  $timeout(function () {
	    $ionicBackdrop.release();
	  }, 600);
	}]);

	// Add the styles to the page
	__webpack_require__(40);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';

	  var ngCordova = __webpack_require__(3)(angular);
	  console.log(ngCordova);
	  var ngModule = angular.module('councils.services', ['firebase', ngCordova.name
	  // optionally inject dependencies for this feature.
	  ]);

	  // load module components
	  __webpack_require__(14)(ngModule);
	  __webpack_require__(15)(ngModule);

	  return ngModule;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$keys = __webpack_require__(4)['default'];

	module.exports = function (angular) {

	  var module = angular.module('ngCordova', ['ngCordova.plugins']);

	  angular.module('ngCordova.plugins', [
	  // 'ngCordova.plugins.imagePicker',
	  // 'ngCordova.plugins.VideoCapturePlus',
	  // 'ngCordova.plugins.appRate',
	  // 'ngCordova.plugins.contact',
	  // 'ngCordova.plugins.googleAnalytic',
	  // 'ngCordova.plugins.camera',
	  // 'ngCordova.plugins.capture',
	  // 'ngCordova.plugins.emailComposer',
	  // 'ngCordova.plugins.touchid',
	  // 'ngCordova.plugins.datepicker',
	  // 'ngCordova.plugins.ga',
	  // 'ngCordova.plugins.actionSheet',
	  // 'ngCordova.plugins.device',
	  // 'ngCordova.plugins.file',
	  // 'ngCordova.plugins.sm',
	  // 'ngCordova.plugins.toast',
	  'ngCordova.plugins.vibration', 'ngCordova.plugins.inAppBrowser']);

	  //#### Begin Individual Plugin Code ####

	  // install  :     cordova plugin add https://github.com/katzer/cordova-plugin-email-composer.git
	  // link     :     https://github.com/katzer/cordova-plugin-email-composer

	  angular.module('ngCordova.plugins.emailComposer', []).factory('$cordovaEmailComposer', ['$q', function ($q) {

	    return {
	      isAvailable: function isAvailable() {
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

	      open: function open(properties) {
	        var q = $q.defer();

	        cordova.plugins.email.open(properties, function () {
	          q.reject(); // user closed email composer
	        });

	        return q.promise;
	      },

	      addAlias: function addAlias(app, schema) {
	        cordova.plugins.email.addAlias(app, schema);
	      }
	    };
	  }]);
	  // install   :      cordova plugin add https://github.com/leecrossley/cordova-plugin-touchid.git
	  // link      :      https://github.com/leecrossley/cordova-plugin-touchid

	  /* globals touchid: true */
	  angular.module('ngCordova.plugins.touchid', []).factory('$cordovaTouchID', ['$q', function ($q) {

	    return {
	      checkSupport: function checkSupport() {
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

	      authenticate: function authenticate(authReasonText) {
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
	  // install   :      cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
	  // link      :      https://github.com/VitaliiBlagodir/cordova-plugin-datepicker

	  angular.module('ngCordova.plugins.datePicker', []).factory('$cordovaDatePicker', ['$window', '$q', function ($window, $q) {

	    return {
	      show: function show(options) {
	        var q = $q.defer();
	        options = options || { date: new Date(), mode: 'date' };
	        $window.datePicker.show(options, function (date) {
	          q.resolve(date);
	        });
	        return q.promise;
	      }
	    };
	  }]);
	  // install   :     cordova plugin add https://github.com/phonegap-build/GAPlugin.git
	  // link      :     https://github.com/phonegap-build/GAPlugin

	  angular.module('ngCordova.plugins.ga', []).factory('$cordovaGA', ['$q', '$window', function ($q, $window) {

	    return {
	      init: function init(id, mingap) {
	        var q = $q.defer();
	        mingap = mingap >= 0 ? mingap : 10;
	        $window.plugins.gaPlugin.init(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        }, id, mingap);
	        return q.promise;
	      },

	      trackEvent: function trackEvent(success, fail, category, eventAction, eventLabel, eventValue) {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.trackEvent(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        }, category, eventAction, eventLabel, eventValue);
	        return q.promise;
	      },

	      trackPage: function trackPage(success, fail, pageURL) {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.trackPage(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        }, pageURL);
	        return q.promise;
	      },

	      setVariable: function setVariable(success, fail, index, value) {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.setVariable(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        }, index, value);
	        return q.promise;
	      },

	      exit: function exit() {
	        var q = $q.defer();
	        $window.plugins.gaPlugin.exit(function (result) {
	          q.resolve(result);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      }
	    };
	  }]);
	  // install  :     cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git
	  // link     :     https://github.com/EddyVerbruggen/cordova-plugin-actionsheet

	  angular.module('ngCordova.plugins.actionSheet', []).factory('$cordovaActionSheet', ['$q', '$window', function ($q, $window) {

	    return {
	      show: function show(options) {
	        var q = $q.defer();

	        $window.plugins.actionsheet.show(options, function (result) {
	          q.resolve(result);
	        });

	        return q.promise;
	      },

	      hide: function hide() {
	        return $window.plugins.actionsheet.hide();
	      }
	    };
	  }]);
	  // install   :     cordova plugin add cordova-plugin-device
	  // link      :     https://github.com/apache/cordova-plugin-device

	  /* globals device: true */
	  angular.module('ngCordova.plugins.device', []).factory('$cordovaDevice', [function () {

	    return {
	      /**
	       * Returns the whole device object.
	       * @see https://github.com/apache/cordova-plugin-device
	       * @returns {Object} The device object.
	       */
	      getDevice: function getDevice() {
	        return device;
	      },

	      /**
	       * Returns the Cordova version.
	       * @see https://github.com/apache/cordova-plugin-device#devicecordova
	       * @returns {String} The Cordova version.
	       */
	      getCordova: function getCordova() {
	        return device.cordova;
	      },

	      /**
	       * Returns the name of the device's model or product.
	       * @see https://github.com/apache/cordova-plugin-device#devicemodel
	       * @returns {String} The name of the device's model or product.
	       */
	      getModel: function getModel() {
	        return device.model;
	      },

	      /**
	       * @deprecated device.name is deprecated as of version 2.3.0. Use device.model instead.
	       * @returns {String}
	       */
	      getName: function getName() {
	        return device.name;
	      },

	      /**
	       * Returns the device's operating system name.
	       * @see https://github.com/apache/cordova-plugin-device#deviceplatform
	       * @returns {String} The device's operating system name.
	       */
	      getPlatform: function getPlatform() {
	        return device.platform;
	      },

	      /**
	       * Returns the device's Universally Unique Identifier.
	       * @see https://github.com/apache/cordova-plugin-device#deviceuuid
	       * @returns {String} The device's Universally Unique Identifier
	       */
	      getUUID: function getUUID() {
	        return device.uuid;
	      },

	      /**
	       * Returns the operating system version.
	       * @see https://github.com/apache/cordova-plugin-device#deviceversion
	       * @returns {String}
	       */
	      getVersion: function getVersion() {
	        return device.version;
	      },

	      /**
	       * Returns the device manufacturer.
	       * @returns {String}
	       */
	      getManufacturer: function getManufacturer() {
	        return device.manufacturer;
	      }
	    };
	  }]);
	  // install   :     cordova plugin add cordova-plugin-file
	  // link      :     https://github.com/apache/cordova-plugin-file

	  angular.module('ngCordova.plugins.file', []).constant('$cordovaFileError', {
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
	  }).provider('$cordovaFile', [function () {

	    this.$get = ['$q', '$window', '$cordovaFileError', function ($q, $window, $cordovaFileError) {

	      return {

	        getFreeDiskSpace: function getFreeDiskSpace() {
	          var q = $q.defer();
	          cordova.exec(function (result) {
	            q.resolve(result);
	          }, function (error) {
	            q.reject(error);
	          }, 'File', 'getFreeDiskSpace', []);
	          return q.promise;
	        },

	        checkDir: function checkDir(path, dir) {
	          var q = $q.defer();

	          if (/^\//.test(dir)) {
	            q.reject('directory cannot start with \/');
	          }

	          try {
	            var directory = path + dir;
	            $window.resolveLocalFileSystemURL(directory, function (fileSystem) {
	              if (fileSystem.isDirectory === true) {
	                q.resolve(fileSystem);
	              } else {
	                q.reject({ code: 13, message: 'input is not a directory' });
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

	        checkFile: function checkFile(path, file) {
	          var q = $q.defer();

	          if (/^\//.test(file)) {
	            q.reject('directory cannot start with \/');
	          }

	          try {
	            var directory = path + file;
	            $window.resolveLocalFileSystemURL(directory, function (fileSystem) {
	              if (fileSystem.isFile === true) {
	                q.resolve(fileSystem);
	              } else {
	                q.reject({ code: 13, message: 'input is not a file' });
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

	        createDir: function createDir(path, dirName, replaceBool) {
	          var q = $q.defer();

	          if (/^\//.test(dirName)) {
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

	        createFile: function createFile(path, fileName, replaceBool) {
	          var q = $q.defer();

	          if (/^\//.test(fileName)) {
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

	        removeDir: function removeDir(path, dirName) {
	          var q = $q.defer();

	          if (/^\//.test(dirName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, { create: false }, function (dirEntry) {
	                dirEntry.remove(function () {
	                  q.resolve({ success: true, fileRemoved: dirEntry });
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

	        removeFile: function removeFile(path, fileName) {
	          var q = $q.defer();

	          if (/^\//.test(fileName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, { create: false }, function (fileEntry) {
	                fileEntry.remove(function () {
	                  q.resolve({ success: true, fileRemoved: fileEntry });
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

	        removeRecursively: function removeRecursively(path, dirName) {
	          var q = $q.defer();

	          if (/^\//.test(dirName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, { create: false }, function (dirEntry) {
	                dirEntry.removeRecursively(function () {
	                  q.resolve({ success: true, fileRemoved: dirEntry });
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

	        writeFile: function writeFile(path, fileName, text, replaceBool) {
	          var q = $q.defer();

	          if (/^\//.test(fileName)) {
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

	        writeExistingFile: function writeExistingFile(path, fileName, text) {
	          var q = $q.defer();

	          if (/^\//.test(fileName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, { create: false }, function (fileEntry) {
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

	        readAsText: function readAsText(path, file) {
	          var q = $q.defer();

	          if (/^\//.test(file)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, { create: false }, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();

	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({ code: null, message: 'READER_ONLOADEND_ERR' });
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

	        readAsDataURL: function readAsDataURL(path, file) {
	          var q = $q.defer();

	          if (/^\//.test(file)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, { create: false }, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();
	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({ code: null, message: 'READER_ONLOADEND_ERR' });
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

	        readAsBinaryString: function readAsBinaryString(path, file) {
	          var q = $q.defer();

	          if (/^\//.test(file)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, { create: false }, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();
	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({ code: null, message: 'READER_ONLOADEND_ERR' });
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

	        readAsArrayBuffer: function readAsArrayBuffer(path, file) {
	          var q = $q.defer();

	          if (/^\//.test(file)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(file, { create: false }, function (fileEntry) {
	                fileEntry.file(function (fileData) {
	                  var reader = new FileReader();
	                  reader.onloadend = function (evt) {
	                    if (evt.target.result !== undefined || evt.target.result !== null) {
	                      q.resolve(evt.target.result);
	                    } else if (evt.target.error !== undefined || evt.target.error !== null) {
	                      q.reject(evt.target.error);
	                    } else {
	                      q.reject({ code: null, message: 'READER_ONLOADEND_ERR' });
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

	        moveFile: function moveFile(path, fileName, newPath, newFileName) {
	          var q = $q.defer();

	          newFileName = newFileName || fileName;

	          if (/^\//.test(fileName) || /^\//.test(newFileName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, { create: false }, function (fileEntry) {
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

	        moveDir: function moveDir(path, dirName, newPath, newDirName) {
	          var q = $q.defer();

	          newDirName = newDirName || dirName;

	          if (/^\//.test(dirName) || /^\//.test(newDirName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, { create: false }, function (dirEntry) {
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

	        copyDir: function copyDir(path, dirName, newPath, newDirName) {
	          var q = $q.defer();

	          newDirName = newDirName || dirName;

	          if (/^\//.test(dirName) || /^\//.test(newDirName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getDirectory(dirName, { create: false, exclusive: false }, function (dirEntry) {

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

	        copyFile: function copyFile(path, fileName, newPath, newFileName) {
	          var q = $q.defer();

	          newFileName = newFileName || fileName;

	          if (/^\//.test(fileName)) {
	            q.reject('file-name cannot start with \/');
	          }

	          try {
	            $window.resolveLocalFileSystemURL(path, function (fileSystem) {
	              fileSystem.getFile(fileName, { create: false, exclusive: false }, function (fileEntry) {

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
	  // install   :     cordova plugin add cordova-plugin-inappbrowser
	  // link      :     https://github.com/apache/cordova-plugin-inappbrowser

	  angular.module('ngCordova.plugins.inAppBrowser', []).provider('$cordovaInAppBrowser', [function () {

	    var ref;
	    var defaultOptions = this.defaultOptions = {};

	    this.setDefaultOptions = function (config) {
	      defaultOptions = angular.extend(defaultOptions, config);
	    };

	    this.$get = ['$rootScope', '$q', '$window', '$timeout', function ($rootScope, $q, $window, $timeout) {
	      return {
	        open: function open(url, target, requestOptions) {
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

	        close: function close() {
	          ref.close();
	          ref = null;
	        },

	        show: function show() {
	          ref.show();
	        },

	        executeScript: function executeScript(details) {
	          var q = $q.defer();

	          ref.executeScript(details, function (result) {
	            q.resolve(result);
	          });

	          return q.promise;
	        },

	        insertCSS: function insertCSS(details) {
	          var q = $q.defer();

	          ref.insertCSS(details, function (result) {
	            q.resolve(result);
	          });

	          return q.promise;
	        }
	      };
	    }];
	  }]);
	  // install   :      cordova plugin add https://github.com/cordova-sms/cordova-sms-plugin.git
	  // link      :      https://github.com/cordova-sms/cordova-sms-plugin

	  /* globals sms: true */
	  angular.module('ngCordova.plugins.sms', []).factory('$cordovaSms', ['$q', function ($q) {

	    return {
	      send: function send(number, message, options) {
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
	  // install   :      cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
	  // link      :      https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin

	  angular.module('ngCordova.plugins.toast', []).factory('$cordovaToast', ['$q', '$window', function ($q, $window) {

	    return {
	      showShortTop: function showShortTop(message) {
	        var q = $q.defer();
	        $window.plugins.toast.showShortTop(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showShortCenter: function showShortCenter(message) {
	        var q = $q.defer();
	        $window.plugins.toast.showShortCenter(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showShortBottom: function showShortBottom(message) {
	        var q = $q.defer();
	        $window.plugins.toast.showShortBottom(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showLongTop: function showLongTop(message) {
	        var q = $q.defer();
	        $window.plugins.toast.showLongTop(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showLongCenter: function showLongCenter(message) {
	        var q = $q.defer();
	        $window.plugins.toast.showLongCenter(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      showLongBottom: function showLongBottom(message) {
	        var q = $q.defer();
	        $window.plugins.toast.showLongBottom(message, function (response) {
	          q.resolve(response);
	        }, function (error) {
	          q.reject(error);
	        });
	        return q.promise;
	      },

	      show: function show(message, duration, position) {
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
	  // install   :      cordova plugin add cordova-plugin-vibration
	  // link      :      https://github.com/apache/cordova-plugin-vibration

	  angular.module('ngCordova.plugins.vibration', []).factory('$cordovaVibration', [function () {

	    return {
	      vibrate: function vibrate(times) {
	        return navigator.notification.vibrate(times);
	      },
	      vibrateWithPattern: function vibrateWithPattern(pattern, repeat) {
	        return navigator.notification.vibrateWithPattern(pattern, repeat);
	      },
	      cancelVibration: function cancelVibration() {
	        return navigator.notification.cancelVibration();
	      }
	    };
	  }]);
	  // install  :     cordova plugin add https://github.com/wymsee/cordova-imagePicker.git
	  // link     :     https://github.com/wymsee/cordova-imagePicker

	  angular.module('ngCordova.plugins.imagePicker', []).factory('$cordovaImagePicker', ['$q', '$window', function ($q, $window) {

	    return {
	      getPictures: function getPictures(options) {
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
	  // install   :    cordova plugin add https://github.com/EddyVerbruggen/VideoCapturePlus-PhoneGap-Plugin.git
	  // link      :    https://github.com/EddyVerbruggen/VideoCapturePlus-PhoneGap-Plugin

	  angular.module('ngCordova.plugins.videoCapturePlus', []).provider('$cordovaVideoCapturePlus', [function () {

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
	        captureVideo: function captureVideo(options) {
	          var q = $q.defer();

	          if (!$window.plugins.videocaptureplus) {
	            q.resolve(null);
	            return q.promise;
	          }

	          $window.plugins.videocaptureplus.captureVideo(q.resolve, q.reject, angular.extend({}, defaultOptions, options));

	          return q.promise;
	        }
	      };
	    }];
	  }]);
	  // install  :     cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
	  // link     :     https://github.com/pushandplay/cordova-plugin-apprate

	  /* globals AppRate: true */
	  angular.module('ngCordova.plugins.appRate', []).provider('$cordovaAppRate', [function () {

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
	        promptForRating: function promptForRating(immediate) {
	          var q = $q.defer();
	          var prompt = AppRate.promptForRating(immediate);
	          q.resolve(prompt);

	          return q.promise;
	        },

	        navigateToAppStore: function navigateToAppStore() {
	          var q = $q.defer();
	          var navigate = AppRate.navigateToAppStore();
	          q.resolve(navigate);

	          return q.promise;
	        },

	        onButtonClicked: function onButtonClicked(cb) {
	          AppRate.onButtonClicked = function (buttonIndex) {
	            cb.call(this, buttonIndex);
	          };
	        },

	        onRateDialogShow: function onRateDialogShow(cb) {
	          AppRate.onRateDialogShow = cb();
	        }
	      };
	    }];
	  }]);
	  // install   :     cordova plugin add cordova-plugin-contacts
	  // link      :     https://github.com/apache/cordova-plugin-contacts

	  angular.module('ngCordova.plugins.contacts', []).factory('$cordovaContacts', ['$q', function ($q) {

	    return {
	      save: function save(contact) {
	        var q = $q.defer();
	        var deviceContact = navigator.contacts.create(contact);

	        deviceContact.save(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });
	        return q.promise;
	      },

	      remove: function remove(contact) {
	        var q = $q.defer();
	        var deviceContact = navigator.contacts.create(contact);

	        deviceContact.remove(function (result) {
	          q.resolve(result);
	        }, function (err) {
	          q.reject(err);
	        });
	        return q.promise;
	      },

	      clone: function clone(contact) {
	        var deviceContact = navigator.contacts.create(contact);
	        return deviceContact.clone(contact);
	      },

	      find: function find(options) {
	        var q = $q.defer();
	        var fields = options.fields || ['id', 'displayName'];
	        delete options.fields;
	        if (_Object$keys(options).length === 0) {
	          navigator.contacts.find(fields, function (results) {
	            q.resolve(results);
	          }, function (err) {
	            q.reject(err);
	          });
	        } else {
	          navigator.contacts.find(fields, function (results) {
	            q.resolve(results);
	          }, function (err) {
	            q.reject(err);
	          }, options);
	        }
	        return q.promise;
	      },

	      pickContact: function pickContact() {
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
	  // install   :     cordova plugin add https://github.com/danwilson/google-analytics-plugin.git
	  // link      :     https://github.com/danwilson/google-analytics-plugin

	  angular.module('ngCordova.plugins.googleAnalytics', []).factory('$cordovaGoogleAnalytics', ['$q', '$window', function ($q, $window) {

	    return {
	      startTrackerWithId: function startTrackerWithId(id) {
	        var d = $q.defer();

	        $window.analytics.startTrackerWithId(id, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      setUserId: function setUserId(id) {
	        var d = $q.defer();

	        $window.analytics.setUserId(id, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      debugMode: function debugMode() {
	        var d = $q.defer();

	        $window.analytics.debugMode(function (response) {
	          d.resolve(response);
	        }, function () {
	          d.reject();
	        });

	        return d.promise;
	      },

	      trackView: function trackView(screenName) {
	        var d = $q.defer();

	        $window.analytics.trackView(screenName, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      addCustomDimension: function addCustomDimension(key, value) {
	        var d = $q.defer();

	        $window.analytics.addCustomDimension(key, value, function () {
	          d.resolve();
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      trackEvent: function trackEvent(category, action, label, value) {
	        var d = $q.defer();

	        $window.analytics.trackEvent(category, action, label, value, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      trackException: function trackException(description, fatal) {
	        var d = $q.defer();

	        $window.analytics.trackException(description, fatal, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      trackTiming: function trackTiming(category, milliseconds, variable, label) {
	        var d = $q.defer();

	        $window.analytics.trackTiming(category, milliseconds, variable, label, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      addTransaction: function addTransaction(transactionId, affiliation, revenue, tax, shipping, currencyCode) {
	        var d = $q.defer();

	        $window.analytics.addTransaction(transactionId, affiliation, revenue, tax, shipping, currencyCode, function (response) {
	          d.resolve(response);
	        }, function (error) {
	          d.reject(error);
	        });

	        return d.promise;
	      },

	      addTransactionItem: function addTransactionItem(transactionId, name, sku, category, price, quantity, currencyCode) {
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
	  // install   :   cordova plugin add cordova-plugin-camera
	  // link      :   https://github.com/apache/cordova-plugin-camera

	  angular.module('ngCordova.plugins.camera', []).factory('$cordovaCamera', ['$q', function ($q) {

	    return {
	      getPicture: function getPicture(options) {
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

	      cleanup: function cleanup() {
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

	  angular.module('ngCordova.plugins.capture', []).factory('$cordovaCapture', ['$q', function ($q) {

	    return {
	      captureAudio: function captureAudio(options) {
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
	      captureImage: function captureImage(options) {
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
	      captureVideo: function captureVideo(options) {
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

	  return module;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(12).Object.keys;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(7);

	__webpack_require__(9)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(8);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(10)
	    , fn   = (__webpack_require__(12).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(13)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  // @ngInject
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
	        home.$destroy();
	        var ref2 = new Firebase('https://councilsapp.firebaseio.com/' + unit + '/users/' + uid);
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
/* 15 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  // @ngInject
	  function Auth($firebaseAuth) {
	    var ref = new Firebase('https://councilsapp.firebaseio.com');
	    return $firebaseAuth(ref);
	  }
	  Auth.$inject = ["$firebaseAuth"];

	  ngModule.factory('Auth', Auth);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (angular) {
	  'use strict';
	  __webpack_require__(17);

	  var ngModule = angular.module('councils.layout', ['ngMaterial']);

	  // load module components

	  // optionally inject dependencies for this feature.
	  __webpack_require__(21)(ngModule);

	  return ngModule;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, ".layout-container {\n  width: 100%;\n  height: 100%;\n}\n\n.grey-side-nav {\n  background-color: rgba(255, 255, 255, 0.95);\n}\n\n@supports (-webkit-backdrop-filter: none) {\n  .grey-side-nav {\n    background-color: rgba(255, 255, 255, 0.8);\n    -webkit-backdrop-filter: blur(10px) saturate(50%);\n  }\n}\n\n.nav-header {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  z-index: 2;\n}\n\na.user-img {\n  border-bottom: none;\n  text-decoration: none;\n}\n\n.user-img {\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 32px 0 16px;\n  margin: 0 auto;\n}\n\n.nametype {\n  color: #414141;\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.img-round {\n  border-radius: 999px;\n}\n\n.menu-item-list {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.accent-icon {\n  color: #1EAD8A;\n}\n\nmd-toolbar.white {\n  background-color: #fff;\n  border-bottom: 1px solid #DEDEDD;\n}\n\n.profile-img {\n  max-width: 128px;\n  border: 1px solid #414141;\n}\n\n.status-bar {\n  width: 100%;\n  height: 10px;\n  background-color: #fff;\n  margin: 0;\n  padding: 0;\n}\n\n.status-bar.no-fill {\n  background-color: rgba(255, 255, 255, 0);\n}\n", ""]);

	// exports


/***/ },
/* 19 */
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
/* 20 */
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
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

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

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  ngModule.directive('sideNavLayout', ["$rootScope", "$mdUtil", "$mdSidenav", "$log", "$state", function ($rootScope, $mdUtil, $mdSidenav, $log, $state) {
	    return {
	      restrict: 'E',
	      transclude: true,
	      template: __webpack_require__(22),
	      link: function link(scope, element, attrs) {
	        scope.toggleLeft = buildToggler('left');
	        scope.close = function () {
	          $mdSidenav('left').close().then(function () {
	            $log.debug('close LEFT is done');
	          });
	        };

	        scope.navItems = [{
	          name: 'Home',
	          icon: 'home',
	          onClick: goTo('home')
	        }, {
	          name: 'Councils',
	          icon: 'people_outline',
	          onClick: goTo('councils')
	        }, {
	          name: 'Settings',
	          icon: 'settings',
	          onClick: goTo('settings')
	        }, {
	          name: 'Feeback',
	          icon: 'chat_bubble_outline',
	          onClick: function onClick() {
	            // do something.
	          }
	        }, {
	          name: 'Sync',
	          icon: 'sync',
	          onClick: function onClick() {
	            // do something.
	          }
	        }];

	        function goTo(state) {
	          return function () {
	            return $state.go(state).then(function () {
	              return $mdSidenav('left').close();
	            });
	          };
	        }

	        /**
	         * Build handler to open/close a SideNav; when animation finishes
	         * report completion in console
	         */
	        function buildToggler(navID) {
	          var debounceFn = $mdUtil.debounce(function () {
	            $mdSidenav(navID).toggle().then(function () {
	              $log.debug('toggle ' + navID + ' is done');
	            });
	          }, 200);
	          return debounceFn;
	        }
	      }
	    };
	  }]);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"layout-container\" layout-fill layout=\"column\">\n  <section layout=\"row\" flex>\n    <md-sidenav class=\"md-sidenav-left md-whiteframe-z2 grey-side-nav\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n      <div class=\"status-bar no-fill\"></div>\n      <header class=\"nav-header\">\n        <a ng-href=\"#/\" class=\"user-img\" href=\"#/\">\n          <img class=\"profile-img img-round\" ng-src=\"{{user.profileImage}}\" alt=\"{{user.preferredName}}\">\n          <h1 class=\"nametype md-heading\">{{user.fname}} {{user.lname}}</h1>\n        </a>\n      </header>\n      <md-content>\n        <md-list class=\"menu-item-list\">\n          <div ng-repeat=\"item in navItems\">\n            <md-list-item ng-click=\"item.onClick()\">\n              <md-icon class=\"accent-icon\">{{item.icon}}</md-icon>\n              <p>{{item.name}}</p>\n            </md-list-item>\n            <md-divider ></md-divider>\n          </div>\n        </md-list>\n      </md-content>\n    </md-sidenav>\n    <div layout-fill layout=\"column\" flex>\n      <div class=\"status-bar\"></div>\n      <md-toolbar layout=\"row\" class=\"white\">\n          <div class=\"md-toolbar-tools\">\n            <md-button class=\"md-icon-button hide-gt-md\" aria-label=\"Menu\" ng-click=\"toggleLeft()\">\n              <md-icon> menu </md-icon>\n            </md-button>\n            <h2>\n              <span>{{title}}</span>\n            </h2>\n            <span flex></span>\n            <!-- <md-button class=\"md-icon-button\" aria-label=\"Favorite\">\n              <md-icon md-svg-icon=\"img/icons/favorite.svg\" style=\"color: greenyellow;\"></md-icon>\n            </md-button>\n            <md-button class=\"md-icon-button\" aria-label=\"More\">\n              <md-icon md-svg-icon=\"img/icons/more_vert.svg\"></md-icon>\n            </md-button> -->\n          </div>\n      </md-toolbar>\n      <div class=\"content-area\" ng-transclude></div>\n    </div>\n  </section>\n</div>\n\n";

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
	            currentAuth: /* @ngInject */function currentAuth() {
	              // return Auth.$requireAuth();
	              return { uid: 'simplelogin:6' };
	            }
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
	var update = __webpack_require__(20)(content, {});
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

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, "md-tabs-wrapper {\n  background-color: #f8f8f8;\n  border-bottom: 1px solid #DEDEDD;\n}\n\nh3.multiline {\n  line-height: 1.3em !important;\n}\n\nmd-list {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  background-color: #fff;\n}\n\nmd-list .md-subheader {\n  margin-right: 0px;\n  background-color: #f8f8f8;\n  border-bottom: 1px solid #DEDEDD;\n}\n\nmd-list .md-subheader .md-subheader-inner {\n  margin-right: 16px;\n}\n", ""]);

	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<md-tabs id=\"home-tabs\" md-dynamic-height md-swipe-content=\"true\" md-selected=\"home.tabs.selectedIndex\">\n  <md-tab id=\"assignments\">\n    <md-tab-label>My Assignments</md-tab-label>\n    <md-tab-body>\n      <md-list>\n        <md-subheader class=\"md-no-sticky\">My unfinished assignments</md-subheader>\n          <md-list-item md-no-ink class=\"md-2-line\" ng-repeat=\"assignment in home.myAssignments | filter:{completed:false}\">\n            <md-checkbox ng-model=\"assignment._completed\" ng-change=\"home.update(assignment)\"></md-checkbox>\n            <div flex=\"80\" class=\"md-list-item-text\">\n              <h3 class=\"multiline\">{{assignment.content}}</h3>\n              <p am-time-ago=\"assignment.dueDate\"></p>\n            </div>\n            <md-icon class=\"accent-icon\" ng-click=\"home.openChat($event, assignment)\">chat</md-icon>\n            <md-divider></md-divider>\n          </md-list-item>\n        <md-subheader class=\"md-no-sticky\">My delagated assignments</md-subheader>\n        <md-list-item md-no-ink class=\"md-2-line\" ng-repeat=\"assignment in home.delegatedAssignments | filter:{completed:false}\">\n          <md-checkbox ng-model=\"assignment._completed\" ng-change=\"home.update(assignment)\"></md-checkbox>\n          <div flex=\"80\" class=\"md-list-item-text\">\n            <h3 class=\"multiline\">{{assignment.content}}</h3>\n            <p am-time-ago=\"assignment.dueDate\"></p>\n          </div>\n          <md-icon class=\"accent-icon\" ng-click=\"home.openChat($event, assignment)\">chat</md-icon>\n          <md-divider></md-divider>\n        </md-list-item>\n      </md-list>\n    </md-tab-body>\n  </md-tab>\n  <md-tab id=\"discussions\">\n    <md-tab-label>My Discussions</md-tab-label>\n    <md-tab-body>\n      <md-list>\n       <md-list-item class=\"md-3-line\" ng-repeat=\"discussion in home.discussions\">\n          <img ng-src=\"{{discussion.userAvatar}}\" class=\"md-avatar\" alt=\"{{discussion.userName}}\" />\n          <div flex=\"80\" class=\"md-list-item-text\">\n            <h3>{{discussion.userName}}</h3>\n            <h4 am-time-ago=\"discussion.createdDate\"></h4>\n            <p>{{discussion.content}}</p>\n          </div>\n          <md-icon class=\"accent-icon\" ng-click=\"home.openChat($event, assignment)\">chat</md-icon>\n          <md-divider></md-divider>\n        </md-list-item>\n      </md-list>\n    </md-tab-body>\n  </md-tab>\n</md-tabs>\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  // @ngInject
	  function HomeCtrl(User, _, currentAuth, $firebaseObject) {
	    var home = this;
	    home.tabs = { selectedIndex: 0 };
	    home.myAssignments = [];
	    home.delegatedAssignments = [];
	    home.discussions = [];

	    home.openChat = function ($event, assignment) {
	      event.stopPropagation();
	    };

	    User.get().then(function (user) {
	      console.log(user);
	      var assignments = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/assignments');
	      var discussions = new Firebase('https://councilsapp.firebaseio.com/' + user.homeUnitNbr + '/discussions');

	      assignments.orderByChild('assignedTo').equalTo(user.$id).on('child_added', function (snapshot) {
	        home.myAssignments.push($firebaseObject(snapshot.ref()));
	      });

	      assignments.orderByChild('assignedBy').equalTo(user.$id).on('child_added', function (snapshot) {
	        home.delegatedAssignments.push($firebaseObject(snapshot.ref()));
	      });

	      _.forEach(user.discussions, function (item) {
	        var child = discussions.child(item);
	        home.discussions.push($firebaseObject(child));
	      });
	    });
	  }
	  HomeCtrl.$inject = ["User", "_", "currentAuth", "$firebaseObject"];

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
	            currentAuth: /* @ngInject */function currentAuth() {
	              // return Auth.$requireAuth();
	              return { uid: 'simplelogin:6' };
	            }
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
	var update = __webpack_require__(20)(content, {});
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

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, ".list-item-title {\n  margin-left: 16px;\n  font-size: 18px;\n  font-weight: 300;\n}\n", ""]);

	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<md-list>\n  <div ng-repeat=\"council in councils.myCouncils\">\n    <md-list-item>\n      <p class=\"list-item-title\">{{council}}</p>\n      <div class=\"icon-button-secondary\">\n        <md-button ui-sref=\"detail({ council: council, tabIndex: 0 })\"\n                    title=\"Go to Agnendas\"\n                    aria-label=\"Agendas\"\n                    class=\"md-icon-button\" >\n          <md-icon>event_note</md-icon>\n        </md-button>\n        <md-button ui-sref=\"detail({ council: council, tabIndex: 1 })\"\n                    title=\"Go to Assignments\"\n                    aria-label=\"Assignments\"\n                    class=\"md-icon-button\" >\n          <md-icon>assignment</md-icon>\n        </md-button>\n        <md-button ui-sref=\"detail({ council: council, tabIndex: 2 })\"\n                    title=\"Go to Discussions\"\n                    aria-label=\"Discussions\"\n                    class=\"md-icon-button\" >\n          <md-icon>chat</md-icon>\n        </md-button>\n      </div>\n    </md-list-item>\n    <md-divider></md-divider>\n  </div>\n</md-list>\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  // @ngInject
	  function CouncilsCtrl($stateParams) {
	    var councils = this;
	    councils.myCouncils = ['Bishopric', 'Ward Council'];
	    console.log($stateParams);
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
	      views: {
	        'main': {
	          template: __webpack_require__(36),
	          controller: 'DetailCtrl',
	          controllerAs: 'detail'
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
	var update = __webpack_require__(20)(content, {});
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

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, "md-tab-content {\n  background-color: #fff;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<md-tabs id=\"home-tabs\" md-dynamic-height md-swipe-content=\"true\" md-selected=\"detail.tabs.selectedIndex\">\n  <md-tab id=\"agendas\">\n    <md-tab-label>Agendas</md-tab-label>\n    <md-tab-body>\n      <md-content layout=\"column\" layout-padding md-theme=\"green\">\n        <div layout=\"row\">\n          <md-autocomplete flex\n              md-input-name=\"hymn\"\n              md-selected-item=\"detail.selectedItem\"\n              md-search-text=\"detail.searchText\"\n              md-items=\"hymn in detail.querySearch(detail.searchText)\"\n              md-item-text=\"hymn.name + ' - ' + hymn.number\"\n              md-floating-label=\"Opening Hymn\">\n            <md-item-template>\n              <span md-highlight-text=\"detail.searchText\">{{item.name + ' - ' + item.number}}</span>\n            </md-item-template>\n          </md-autocomplete>\n          <md-button ng-disabled=\"!detail.selectedItem\" class=\"md-icon-button\" ng-click=\"detail.openHymn(detail.selectedItem)\"><md-icon>queue_music</md-icon></a>\n        </div>\n        <md-input-container>\n          <label>Opening Prayer</label>\n          <input ng-model=\"agendas.agenda.openingPrayer\">\n        </md-input-container>\n        <md-input-container>\n          <label>Spiritual thought</label>\n          <input ng-model=\"agendas.agenda.spiritualThought\">\n        </md-input-container>\n         <md-input-container>\n          <label>High councilor remarks from...</label>\n          <input ng-model=\"agendas.agenda.highCouncil\">\n        </md-input-container>\n         <md-input-container>\n          <label>Spiritual thought</label>\n          <input ng-model=\"agendas.agenda.spiritualThought\">\n        </md-input-container>\n      </md-content>\n    </md-tab-body>\n  </md-tab>\n  <md-tab id=\"assignments\">\n    <md-tab-label>Assignments</md-tab-label>\n    <md-tab-body>\n      <md-list>\n        <div ng-repeat=\"assignment in detail.assignments | filter:{completed:false}\">\n          <md-list-item md-no-ink class=\"md-2-line\">\n            <md-checkbox ng-model=\"assignment._completed\" ng-change=\"detail.update(assignment)\"></md-checkbox>\n            <div class=\"md-list-item-text\">\n              <h3>{{assignment.content}}</h3>\n              <p am-time-ago=\"assignment.dueDate\"></p>\n            </div>\n          </md-list-item>\n          <md-divider></md-divider>\n        </div>\n      </md-list>\n    </md-tab-body>\n  </md-tab>\n  <md-tab id=\"discussions\">\n    <md-tab-label>Discussions</md-tab-label>\n    <md-tab-body>\n      <md-list>\n        <div ng-repeat=\"discussion in detail.discussions\">\n          <md-list-item class=\"md-3-line\">\n            <img ng-src=\"{{discussion.userAvatar}}\" class=\"md-avatar\" alt=\"{{discussion.userName}}\" />\n            <div class=\"md-list-item-text\">\n              <h3>{{discussion.userName}}</h3>\n              <h4 am-time-ago=\"discussion.createdDate\"></h4>\n              <p>{{discussion.content}}</p>\n            </div>\n            <md-icon class=\"accent-icon\">chat</md-icon>\n          </md-list-item>\n          <md-divider></md-divider>\n        </div>\n      </md-list>\n    </md-tab-body>\n  </md-tab>\n</md-tabs>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (ngModule) {
	  'use strict';

	  // @ngInject
	  function DetailCtrl($stateParams, User, $firebaseArray, $http, $cordovaInAppBrowser) {
	    var detail = this;
	    detail.hymns = [];
	    detail.tabs = { selectedIndex: +$stateParams.tabIndex };
	    detail.council = $stateParams.council || 'Bishopric';
	    detail.querySearch = querySearch;
	    detail.openHymn = openHymn;

	    User.get().then(function (user) {
	      var dRef = new Firebase('https://councilsapp.firebaseio.com/').child(user.homeUnitNbr).child('discussions').orderByChild('council').equalTo(detail.council);
	      var aRef = new Firebase('https://councilsapp.firebaseio.com/').child(user.homeUnitNbr).child('assignments').orderByChild('council').equalTo(detail.council);
	      detail.discussions = $firebaseArray(dRef);
	      detail.assignments = $firebaseArray(aRef);
	    });

	    loadAll();

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
	      $cordovaInAppBrowser.open('https://docs.google.com/viewer?url=' + hymn.pdf, '_blank', {
	        location: 'yes',
	        toolbar: 'yes'
	      }).then(function (event) {
	        console.log('success!');
	      })['catch'](function (event) {
	        console.log('error');
	      });
	    }
	  }
	  DetailCtrl.$inject = ["$stateParams", "User", "$firebaseArray", "$http", "$cordovaInAppBrowser"];

	  ngModule.controller('DetailCtrl', DetailCtrl);
	};

/***/ },
/* 38 */
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
			"babel-core": "^5.8.24",
			"babel-loader": "^5.3.2",
			"bower": "^1.3.12",
			"css-loader": "^0.18.0",
			"del": "^2.0.2",
			"exports-loader": "^0.6.2",
			"file-loader": "^0.8.4",
			"gulp": "^3.8.8",
			"gulp-util": "^3.0.1",
			"html-loader": "^0.3.0",
			"html-webpack-plugin": "^1.1.0",
			"json-loader": "^0.5.1",
			"lodash": "^3.10.1",
			"ng-annotate-webpack-plugin": "^0.1.2",
			"open": "0.0.5",
			"portscanner": "^1.0.0",
			"postcss-loader": "^0.6.0",
			"sass-loader": "^2.0.1",
			"style-loader": "^0.12.3",
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
			"angular": "^1.4.5",
			"angular-animate": "^1.4.5",
			"angular-aria": "^1.4.5",
			"angular-elastic": "^2.5.0",
			"angular-material": "^0.11.0",
			"angular-moment": "^0.10.3",
			"angularfire": "^1.1.2",
			"babel-runtime": "^5.8.24",
			"conventional-changelog": "^0.4.3",
			"del": "^2.0.2",
			"firebase": "^2.2.9",
			"firebase-util": "^0.2.5",
			"gulp-bump": "^0.3.1",
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
			"jquery": "^2.1.4",
			"lodash": "^3.10.1",
			"map-stream": "0.0.6",
			"material-design-icons": "^2.0.0",
			"moment": "^2.10.6",
			"ng-cordova": "^0.1.20-alpha"
		}
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports


	// module
	exports.push([module.id, "/*\nTo customize the look and feel of Ionic, you can override the variables\nin ionic's _variables.scss file.\n\nFor example, you might change some of the default colors:\n\n$light:                           #fff !default;\n$stable:                          #f8f8f8 !default;\n$positive:                        #4a87ee !default;\n$calm:                            #43cee6 !default;\n$balanced:                        #66cc33 !default;\n$energized:                       #f0b840 !default;\n$assertive:                       #ef4e3a !default;\n$royal:                           #8a6de9 !default;\n$dark:                            #444 !default;\n*/\n/* The path for our ionicons font files, relative to the built CSS in www/css */\n/* @import \"../bower_components/ionic/scss/ionic\"; */\nhtml, body {\n  height: 100%;\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n  position: relative;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n[tabindex='-1']:focus {\n  outline: none;\n}\n\n.inset {\n  padding: 10px;\n}\n\nbutton.md-no-style {\n  font-weight: normal;\n  background-color: inherit;\n  text-align: left;\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\nselect,\nbutton,\ntextarea,\ninput {\n  vertical-align: baseline;\n}\n\ninput[type=\"reset\"],\ninput[type=\"submit\"],\nhtml input[type=\"button\"],\nbutton {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\ninput[type=\"reset\"][disabled],\ninput[type=\"submit\"][disabled],\nhtml input[type=\"button\"][disabled],\nbutton[disabled] {\n  cursor: default;\n}\n\ntextarea {\n  vertical-align: top;\n  overflow: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n.md-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px;\n}\n\n.md-shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border-radius: inherit;\n  pointer-events: none;\n}\n\n.md-shadow-bottom-z-1 {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.md-shadow-bottom-z-2 {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.md-shadow-animated.md-shadow {\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/*\n * A container inside of a rippling element (eg a button),\n * which contains all of the individual ripples\n */\n.md-ripple-container {\n  pointer-events: none;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-ripple {\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  opacity: 0;\n  border-radius: 50%;\n}\n\n.md-ripple.md-ripple-placed {\n  transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-ripple.md-ripple-scaled {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n}\n\n.md-ripple.md-ripple-active, .md-ripple.md-ripple-full, .md-ripple.md-ripple-visible {\n  opacity: 0.20;\n}\n\n.md-padding {\n  padding: 8px;\n}\n\n.md-margin {\n  margin: 8px;\n}\n\n.md-scroll-mask {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.md-scroll-mask > .md-scroll-mask-bar {\n  display: block;\n  position: absolute;\n  background-color: #fafafa;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 65;\n  box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.3);\n}\n\n@media (min-width: 600px) {\n  .md-padding {\n    padding: 16px;\n  }\n}\n\nhtml, body {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  min-height: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/************\n * Headings\n ************/\n.md-display-4 {\n  font-size: 112px;\n  font-weight: 300;\n  letter-spacing: -0.010em;\n  line-height: 112px;\n}\n\n.md-display-3 {\n  font-size: 56px;\n  font-weight: 400;\n  letter-spacing: -0.005em;\n  line-height: 56px;\n}\n\n.md-display-2 {\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 64px;\n}\n\n.md-display-1 {\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n}\n\n.md-headline {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n}\n\n.md-title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n}\n\n.md-subhead {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  line-height: 24px;\n}\n\n/************\n * Body Copy\n ************/\n.md-body-1 {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  line-height: 20px;\n}\n\n.md-body-2 {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  line-height: 24px;\n}\n\n.md-caption {\n  font-size: 12px;\n  letter-spacing: 0.020em;\n}\n\n.md-button {\n  letter-spacing: 0.010em;\n}\n\n/************\n * Defaults\n ************/\nbutton,\nselect,\nhtml,\ntextarea,\ninput {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nselect,\nbutton,\ntextarea,\ninput {\n  font-size: 100%;\n}\n\n/* Sizes:\n  0    <= size < 600  Phone\n  600  <= size < 960  Tablet\n  960  <= size < 1200 Tablet-Landscape\n  1200 <= size         PC\n*/\n.layout {\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.layout-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-flex-direction: column;\n}\n\n.layout-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -webkit-flex-direction: row;\n}\n\n.layout-padding > .flex-sm,\n.layout-padding > .flex-lt-md {\n  padding: 4px;\n}\n\n.layout-padding,\n.layout-padding > .flex,\n.layout-padding > .flex-gt-sm,\n.layout-padding > .flex-md,\n.layout-padding > .flex-lt-lg {\n  padding: 8px;\n}\n\n.layout-padding > .flex-gt-md,\n.layout-padding > .flex-lg {\n  padding: 16px;\n}\n\n.layout-margin > .flex-sm,\n.layout-margin > .flex-lt-md {\n  margin: 4px;\n}\n\n.layout-margin,\n.layout-margin > .flex,\n.layout-margin > .flex-gt-sm,\n.layout-margin > .flex-md,\n.layout-margin > .flex-lt-lg {\n  margin: 8px;\n}\n\n.layout-margin > .flex-gt-md,\n.layout-margin > .flex-lg {\n  margin: 16px;\n}\n\n.layout-wrap {\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.layout-fill {\n  margin: 0;\n  min-height: 100%;\n  width: 100%;\n}\n\n@-moz-document url-prefix() {\n  .layout-fill {\n    margin: 0;\n    width: 100%;\n    min-height: auto;\n    height: inherit;\n  }\n}\n\n.flex {\n  box-sizing: border-box;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.flex-0 {\n  -webkit-flex: 0 0 0%;\n      -ms-flex: 0 0 0%;\n          flex: 0 0 0%;\n}\n\n.layout-row > .flex-0 {\n  max-width: 0%;\n}\n\n.layout-column > .flex-0 {\n  max-height: 0%;\n}\n\n.flex-5 {\n  -webkit-flex: 0 0 5%;\n      -ms-flex: 0 0 5%;\n          flex: 0 0 5%;\n}\n\n.layout-row > .flex-5 {\n  max-width: 5%;\n}\n\n.layout-column > .flex-5 {\n  max-height: 5%;\n}\n\n.flex-10 {\n  -webkit-flex: 0 0 10%;\n      -ms-flex: 0 0 10%;\n          flex: 0 0 10%;\n}\n\n.layout-row > .flex-10 {\n  max-width: 10%;\n}\n\n.layout-column > .flex-10 {\n  max-height: 10%;\n}\n\n.flex-15 {\n  -webkit-flex: 0 0 15%;\n      -ms-flex: 0 0 15%;\n          flex: 0 0 15%;\n}\n\n.layout-row > .flex-15 {\n  max-width: 15%;\n}\n\n.layout-column > .flex-15 {\n  max-height: 15%;\n}\n\n.flex-20 {\n  -webkit-flex: 0 0 20%;\n      -ms-flex: 0 0 20%;\n          flex: 0 0 20%;\n}\n\n.layout-row > .flex-20 {\n  max-width: 20%;\n}\n\n.layout-column > .flex-20 {\n  max-height: 20%;\n}\n\n.flex-25 {\n  -webkit-flex: 0 0 25%;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n}\n\n.layout-row > .flex-25 {\n  max-width: 25%;\n}\n\n.layout-column > .flex-25 {\n  max-height: 25%;\n}\n\n.flex-30 {\n  -webkit-flex: 0 0 30%;\n      -ms-flex: 0 0 30%;\n          flex: 0 0 30%;\n}\n\n.layout-row > .flex-30 {\n  max-width: 30%;\n}\n\n.layout-column > .flex-30 {\n  max-height: 30%;\n}\n\n.flex-35 {\n  -webkit-flex: 0 0 35%;\n      -ms-flex: 0 0 35%;\n          flex: 0 0 35%;\n}\n\n.layout-row > .flex-35 {\n  max-width: 35%;\n}\n\n.layout-column > .flex-35 {\n  max-height: 35%;\n}\n\n.flex-40 {\n  -webkit-flex: 0 0 40%;\n      -ms-flex: 0 0 40%;\n          flex: 0 0 40%;\n}\n\n.layout-row > .flex-40 {\n  max-width: 40%;\n}\n\n.layout-column > .flex-40 {\n  max-height: 40%;\n}\n\n.flex-45 {\n  -webkit-flex: 0 0 45%;\n      -ms-flex: 0 0 45%;\n          flex: 0 0 45%;\n}\n\n.layout-row > .flex-45 {\n  max-width: 45%;\n}\n\n.layout-column > .flex-45 {\n  max-height: 45%;\n}\n\n.flex-50 {\n  -webkit-flex: 0 0 50%;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n\n.layout-row > .flex-50 {\n  max-width: 50%;\n}\n\n.layout-column > .flex-50 {\n  max-height: 50%;\n}\n\n.flex-55 {\n  -webkit-flex: 0 0 55%;\n      -ms-flex: 0 0 55%;\n          flex: 0 0 55%;\n}\n\n.layout-row > .flex-55 {\n  max-width: 55%;\n}\n\n.layout-column > .flex-55 {\n  max-height: 55%;\n}\n\n.flex-60 {\n  -webkit-flex: 0 0 60%;\n      -ms-flex: 0 0 60%;\n          flex: 0 0 60%;\n}\n\n.layout-row > .flex-60 {\n  max-width: 60%;\n}\n\n.layout-column > .flex-60 {\n  max-height: 60%;\n}\n\n.flex-65 {\n  -webkit-flex: 0 0 65%;\n      -ms-flex: 0 0 65%;\n          flex: 0 0 65%;\n}\n\n.layout-row > .flex-65 {\n  max-width: 65%;\n}\n\n.layout-column > .flex-65 {\n  max-height: 65%;\n}\n\n.flex-70 {\n  -webkit-flex: 0 0 70%;\n      -ms-flex: 0 0 70%;\n          flex: 0 0 70%;\n}\n\n.layout-row > .flex-70 {\n  max-width: 70%;\n}\n\n.layout-column > .flex-70 {\n  max-height: 70%;\n}\n\n.flex-75 {\n  -webkit-flex: 0 0 75%;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n}\n\n.layout-row > .flex-75 {\n  max-width: 75%;\n}\n\n.layout-column > .flex-75 {\n  max-height: 75%;\n}\n\n.flex-80 {\n  -webkit-flex: 0 0 80%;\n      -ms-flex: 0 0 80%;\n          flex: 0 0 80%;\n}\n\n.layout-row > .flex-80 {\n  max-width: 80%;\n}\n\n.layout-column > .flex-80 {\n  max-height: 80%;\n}\n\n.flex-85 {\n  -webkit-flex: 0 0 85%;\n      -ms-flex: 0 0 85%;\n          flex: 0 0 85%;\n}\n\n.layout-row > .flex-85 {\n  max-width: 85%;\n}\n\n.layout-column > .flex-85 {\n  max-height: 85%;\n}\n\n.flex-90 {\n  -webkit-flex: 0 0 90%;\n      -ms-flex: 0 0 90%;\n          flex: 0 0 90%;\n}\n\n.layout-row > .flex-90 {\n  max-width: 90%;\n}\n\n.layout-column > .flex-90 {\n  max-height: 90%;\n}\n\n.flex-95 {\n  -webkit-flex: 0 0 95%;\n      -ms-flex: 0 0 95%;\n          flex: 0 0 95%;\n}\n\n.layout-row > .flex-95 {\n  max-width: 95%;\n}\n\n.layout-column > .flex-95 {\n  max-height: 95%;\n}\n\n.flex-100 {\n  -webkit-flex: 0 0 100%;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n}\n\n.layout-row > .flex-100 {\n  max-width: 100%;\n}\n\n.layout-column > .flex-100 {\n  max-height: 100%;\n}\n\n.flex-33, .flex-34 {\n  -webkit-flex: 0 0 33.33%;\n      -ms-flex: 0 0 33.33%;\n          flex: 0 0 33.33%;\n}\n\n.flex-66, .flex-67 {\n  -webkit-flex: 0 0 66.66%;\n      -ms-flex: 0 0 66.66%;\n          flex: 0 0 66.66%;\n}\n\n.layout-row > .flex-33, .layout-row > .flex-34 {\n  max-width: 33.33%;\n}\n\n.layout-row > .flex-66, .layout-row > .flex-67 {\n  max-width: 66.66%;\n}\n\n.layout-column > .flex-33, .layout-column > .flex-34 {\n  max-height: 33.33%;\n}\n\n.layout-column > .flex-66, .layout-column > .flex-67 {\n  max-height: 66.66%;\n}\n\n.layout-align-center, .layout-align-center-center,\n.layout-align-center-start,\n.layout-align-center-end {\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.layout-align-end, .layout-align-end-center,\n.layout-align-end-start,\n.layout-align-end-end {\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.layout-align-space-around, .layout-align-space-around-center,\n.layout-align-space-around-start,\n.layout-align-space-around-end {\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n\n.layout-align-space-between, .layout-align-space-between-center,\n.layout-align-space-between-start,\n.layout-align-space-between-end {\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.layout-align-center-center,\n.layout-align-start-center,\n.layout-align-end-center,\n.layout-align-space-between-center,\n.layout-align-space-around-center {\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.layout-align-center-start,\n.layout-align-start-start,\n.layout-align-end-start,\n.layout-align-space-between-start,\n.layout-align-space-around-start {\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.layout-align-center-end,\n.layout-align-start-end,\n.layout-align-end-end,\n.layout-align-space-between-end,\n.layout-align-space-around-end {\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.flex-order-0 {\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n.flex-order-1 {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.flex-order-2 {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.flex-order-3 {\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n}\n\n.flex-order-4 {\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4;\n}\n\n.flex-order-5 {\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5;\n}\n\n.flex-order-6 {\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6;\n}\n\n.flex-order-7 {\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7;\n}\n\n.flex-order-8 {\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8;\n}\n\n.flex-order-9 {\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9;\n}\n\n.offset-5 {\n  margin-left: 5%;\n}\n\n.offset-10 {\n  margin-left: 10%;\n}\n\n.offset-15 {\n  margin-left: 15%;\n}\n\n.offset-20 {\n  margin-left: 20%;\n}\n\n.offset-25 {\n  margin-left: 25%;\n}\n\n.offset-30 {\n  margin-left: 30%;\n}\n\n.offset-35 {\n  margin-left: 35%;\n}\n\n.offset-40 {\n  margin-left: 40%;\n}\n\n.offset-45 {\n  margin-left: 45%;\n}\n\n.offset-50 {\n  margin-left: 50%;\n}\n\n.offset-55 {\n  margin-left: 55%;\n}\n\n.offset-60 {\n  margin-left: 60%;\n}\n\n.offset-65 {\n  margin-left: 65%;\n}\n\n.offset-70 {\n  margin-left: 70%;\n}\n\n.offset-75 {\n  margin-left: 75%;\n}\n\n.offset-80 {\n  margin-left: 80%;\n}\n\n.offset-85 {\n  margin-left: 85%;\n}\n\n.offset-90 {\n  margin-left: 90%;\n}\n\n.offset-95 {\n  margin-left: 95%;\n}\n\n.offset-33, .offset-34 {\n  margin-left: 33.33%;\n}\n\n.offset-66, .offset-67 {\n  margin-left: 66.66%;\n}\n\n/**\n * `hide-gt-sm show-gt-lg` should hide from 600px to 1200px\n * `show-md hide-gt-sm` should show from 0px to 960px and hide at >960px\n * `hide-gt-md show-gt-sm` should show everywhere (show overrides hide)`\n */\n@media (max-width: 599px) {\n  .hide-sm:not(.show-sm):not(.show), .hide:not(.show-sm):not(.show) {\n    display: none;\n  }\n  .flex-order-sm-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-sm-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-sm-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-sm-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-sm-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-sm-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-sm-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-sm-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-sm-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-sm-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .layout-align-sm-center, .layout-align-sm-center-center,\n  .layout-align-sm-center-start,\n  .layout-align-sm-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-sm-end, .layout-align-sm-end-center,\n  .layout-align-sm-end-start,\n  .layout-align-sm-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-sm-space-around, .layout-align-sm-space-around-center,\n  .layout-align-sm-space-around-start,\n  .layout-align-sm-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-sm-space-between, .layout-align-sm-space-between-center,\n  .layout-align-sm-space-between-start,\n  .layout-align-sm-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-sm-center-center,\n  .layout-align-sm-start-center,\n  .layout-align-sm-end-center,\n  .layout-align-sm-space-between-center,\n  .layout-align-sm-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .layout-align-sm-center-start,\n  .layout-align-sm-start-start,\n  .layout-align-sm-end-start,\n  .layout-align-sm-space-between-start,\n  .layout-align-sm-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-sm-center-end,\n  .layout-align-sm-start-end,\n  .layout-align-sm-end-end,\n  .layout-align-sm-space-between-end,\n  .layout-align-sm-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .layout-sm {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-sm-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-sm-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .offset-sm-5 {\n    margin-left: 5%;\n  }\n  .offset-sm-10 {\n    margin-left: 10%;\n  }\n  .offset-sm-15 {\n    margin-left: 15%;\n  }\n  .offset-sm-20 {\n    margin-left: 20%;\n  }\n  .offset-sm-25 {\n    margin-left: 25%;\n  }\n  .offset-sm-30 {\n    margin-left: 30%;\n  }\n  .offset-sm-35 {\n    margin-left: 35%;\n  }\n  .offset-sm-40 {\n    margin-left: 40%;\n  }\n  .offset-sm-45 {\n    margin-left: 45%;\n  }\n  .offset-sm-50 {\n    margin-left: 50%;\n  }\n  .offset-sm-55 {\n    margin-left: 55%;\n  }\n  .offset-sm-60 {\n    margin-left: 60%;\n  }\n  .offset-sm-65 {\n    margin-left: 65%;\n  }\n  .offset-sm-70 {\n    margin-left: 70%;\n  }\n  .offset-sm-75 {\n    margin-left: 75%;\n  }\n  .offset-sm-80 {\n    margin-left: 80%;\n  }\n  .offset-sm-85 {\n    margin-left: 85%;\n  }\n  .offset-sm-90 {\n    margin-left: 90%;\n  }\n  .offset-sm-95 {\n    margin-left: 95%;\n  }\n  .offset-sm-33, .offset-sm-34 {\n    margin-left: 33.33%;\n  }\n  .offset-sm-66, .offset-sm-67 {\n    margin-left: 66.66%;\n  }\n  .flex-sm {\n    box-sizing: border-box;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .flex-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n  }\n  .layout-row > .flex-sm-0 {\n    max-width: 0%;\n  }\n  .layout-column > .flex-sm-0 {\n    max-height: 0%;\n  }\n  .flex-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n  }\n  .layout-row > .flex-sm-5 {\n    max-width: 5%;\n  }\n  .layout-column > .flex-sm-5 {\n    max-height: 5%;\n  }\n  .flex-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n  }\n  .layout-row > .flex-sm-10 {\n    max-width: 10%;\n  }\n  .layout-column > .flex-sm-10 {\n    max-height: 10%;\n  }\n  .flex-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n  }\n  .layout-row > .flex-sm-15 {\n    max-width: 15%;\n  }\n  .layout-column > .flex-sm-15 {\n    max-height: 15%;\n  }\n  .flex-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n  }\n  .layout-row > .flex-sm-20 {\n    max-width: 20%;\n  }\n  .layout-column > .flex-sm-20 {\n    max-height: 20%;\n  }\n  .flex-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n  .layout-row > .flex-sm-25 {\n    max-width: 25%;\n  }\n  .layout-column > .flex-sm-25 {\n    max-height: 25%;\n  }\n  .flex-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n  }\n  .layout-row > .flex-sm-30 {\n    max-width: 30%;\n  }\n  .layout-column > .flex-sm-30 {\n    max-height: 30%;\n  }\n  .flex-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n  }\n  .layout-row > .flex-sm-35 {\n    max-width: 35%;\n  }\n  .layout-column > .flex-sm-35 {\n    max-height: 35%;\n  }\n  .flex-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n  }\n  .layout-row > .flex-sm-40 {\n    max-width: 40%;\n  }\n  .layout-column > .flex-sm-40 {\n    max-height: 40%;\n  }\n  .flex-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n  }\n  .layout-row > .flex-sm-45 {\n    max-width: 45%;\n  }\n  .layout-column > .flex-sm-45 {\n    max-height: 45%;\n  }\n  .flex-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n  .layout-row > .flex-sm-50 {\n    max-width: 50%;\n  }\n  .layout-column > .flex-sm-50 {\n    max-height: 50%;\n  }\n  .flex-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n  }\n  .layout-row > .flex-sm-55 {\n    max-width: 55%;\n  }\n  .layout-column > .flex-sm-55 {\n    max-height: 55%;\n  }\n  .flex-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n  }\n  .layout-row > .flex-sm-60 {\n    max-width: 60%;\n  }\n  .layout-column > .flex-sm-60 {\n    max-height: 60%;\n  }\n  .flex-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n  }\n  .layout-row > .flex-sm-65 {\n    max-width: 65%;\n  }\n  .layout-column > .flex-sm-65 {\n    max-height: 65%;\n  }\n  .flex-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n  }\n  .layout-row > .flex-sm-70 {\n    max-width: 70%;\n  }\n  .layout-column > .flex-sm-70 {\n    max-height: 70%;\n  }\n  .flex-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n  .layout-row > .flex-sm-75 {\n    max-width: 75%;\n  }\n  .layout-column > .flex-sm-75 {\n    max-height: 75%;\n  }\n  .flex-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n  }\n  .layout-row > .flex-sm-80 {\n    max-width: 80%;\n  }\n  .layout-column > .flex-sm-80 {\n    max-height: 80%;\n  }\n  .flex-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n  }\n  .layout-row > .flex-sm-85 {\n    max-width: 85%;\n  }\n  .layout-column > .flex-sm-85 {\n    max-height: 85%;\n  }\n  .flex-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n  }\n  .layout-row > .flex-sm-90 {\n    max-width: 90%;\n  }\n  .layout-column > .flex-sm-90 {\n    max-height: 90%;\n  }\n  .flex-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n  }\n  .layout-row > .flex-sm-95 {\n    max-width: 95%;\n  }\n  .layout-column > .flex-sm-95 {\n    max-height: 95%;\n  }\n  .flex-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n  .layout-row > .flex-sm-100 {\n    max-width: 100%;\n  }\n  .layout-column > .flex-sm-100 {\n    max-height: 100%;\n  }\n  .flex-sm-33, .flex-sm-34 {\n    -webkit-flex: 0 0 33.33%;\n        -ms-flex: 0 0 33.33%;\n            flex: 0 0 33.33%;\n  }\n  .flex-sm-66, .flex-sm-67 {\n    -webkit-flex: 0 0 66.66%;\n        -ms-flex: 0 0 66.66%;\n            flex: 0 0 66.66%;\n  }\n  .layout-row > .flex-sm-33, .layout-row > .flex-sm-34 {\n    max-width: 33.33%;\n  }\n  .layout-row > .flex-sm-66, .layout-row > .flex-sm-67 {\n    max-width: 66.66%;\n  }\n  .layout-column > .flex-sm-33, .layout-column > .flex-sm-34 {\n    max-height: 33.33%;\n  }\n  .layout-column > .flex-sm-66, .layout-column > .flex-sm-67 {\n    max-height: 66.66%;\n  }\n}\n\n@media (min-width: 600px) {\n  .flex-order-gt-sm-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-gt-sm-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-gt-sm-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-gt-sm-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-gt-sm-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-gt-sm-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-gt-sm-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-gt-sm-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-gt-sm-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-gt-sm-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .layout-align-gt-sm-center, .layout-align-gt-sm-center-center,\n  .layout-align-gt-sm-center-start,\n  .layout-align-gt-sm-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-gt-sm-end, .layout-align-gt-sm-end-center,\n  .layout-align-gt-sm-end-start,\n  .layout-align-gt-sm-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-gt-sm-space-around, .layout-align-gt-sm-space-around-center,\n  .layout-align-gt-sm-space-around-start,\n  .layout-align-gt-sm-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-gt-sm-space-between, .layout-align-gt-sm-space-between-center,\n  .layout-align-gt-sm-space-between-start,\n  .layout-align-gt-sm-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-gt-sm-center-center,\n  .layout-align-gt-sm-start-center,\n  .layout-align-gt-sm-end-center,\n  .layout-align-gt-sm-space-between-center,\n  .layout-align-gt-sm-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .layout-align-gt-sm-center-start,\n  .layout-align-gt-sm-start-start,\n  .layout-align-gt-sm-end-start,\n  .layout-align-gt-sm-space-between-start,\n  .layout-align-gt-sm-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-gt-sm-center-end,\n  .layout-align-gt-sm-start-end,\n  .layout-align-gt-sm-end-end,\n  .layout-align-gt-sm-space-between-end,\n  .layout-align-gt-sm-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .layout-gt-sm {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-gt-sm-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-gt-sm-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .offset-gt-sm-5 {\n    margin-left: 5%;\n  }\n  .offset-gt-sm-10 {\n    margin-left: 10%;\n  }\n  .offset-gt-sm-15 {\n    margin-left: 15%;\n  }\n  .offset-gt-sm-20 {\n    margin-left: 20%;\n  }\n  .offset-gt-sm-25 {\n    margin-left: 25%;\n  }\n  .offset-gt-sm-30 {\n    margin-left: 30%;\n  }\n  .offset-gt-sm-35 {\n    margin-left: 35%;\n  }\n  .offset-gt-sm-40 {\n    margin-left: 40%;\n  }\n  .offset-gt-sm-45 {\n    margin-left: 45%;\n  }\n  .offset-gt-sm-50 {\n    margin-left: 50%;\n  }\n  .offset-gt-sm-55 {\n    margin-left: 55%;\n  }\n  .offset-gt-sm-60 {\n    margin-left: 60%;\n  }\n  .offset-gt-sm-65 {\n    margin-left: 65%;\n  }\n  .offset-gt-sm-70 {\n    margin-left: 70%;\n  }\n  .offset-gt-sm-75 {\n    margin-left: 75%;\n  }\n  .offset-gt-sm-80 {\n    margin-left: 80%;\n  }\n  .offset-gt-sm-85 {\n    margin-left: 85%;\n  }\n  .offset-gt-sm-90 {\n    margin-left: 90%;\n  }\n  .offset-gt-sm-95 {\n    margin-left: 95%;\n  }\n  .offset-gt-sm-33, .offset-gt-sm-34 {\n    margin-left: 33.33%;\n  }\n  .offset-gt-sm-66, .offset-gt-sm-67 {\n    margin-left: 66.66%;\n  }\n  .flex-gt-sm {\n    box-sizing: border-box;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .flex-gt-sm-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n  }\n  .layout-row > .flex-gt-sm-0 {\n    max-width: 0%;\n  }\n  .layout-column > .flex-gt-sm-0 {\n    max-height: 0%;\n  }\n  .flex-gt-sm-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n  }\n  .layout-row > .flex-gt-sm-5 {\n    max-width: 5%;\n  }\n  .layout-column > .flex-gt-sm-5 {\n    max-height: 5%;\n  }\n  .flex-gt-sm-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n  }\n  .layout-row > .flex-gt-sm-10 {\n    max-width: 10%;\n  }\n  .layout-column > .flex-gt-sm-10 {\n    max-height: 10%;\n  }\n  .flex-gt-sm-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n  }\n  .layout-row > .flex-gt-sm-15 {\n    max-width: 15%;\n  }\n  .layout-column > .flex-gt-sm-15 {\n    max-height: 15%;\n  }\n  .flex-gt-sm-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n  }\n  .layout-row > .flex-gt-sm-20 {\n    max-width: 20%;\n  }\n  .layout-column > .flex-gt-sm-20 {\n    max-height: 20%;\n  }\n  .flex-gt-sm-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n  .layout-row > .flex-gt-sm-25 {\n    max-width: 25%;\n  }\n  .layout-column > .flex-gt-sm-25 {\n    max-height: 25%;\n  }\n  .flex-gt-sm-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n  }\n  .layout-row > .flex-gt-sm-30 {\n    max-width: 30%;\n  }\n  .layout-column > .flex-gt-sm-30 {\n    max-height: 30%;\n  }\n  .flex-gt-sm-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n  }\n  .layout-row > .flex-gt-sm-35 {\n    max-width: 35%;\n  }\n  .layout-column > .flex-gt-sm-35 {\n    max-height: 35%;\n  }\n  .flex-gt-sm-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n  }\n  .layout-row > .flex-gt-sm-40 {\n    max-width: 40%;\n  }\n  .layout-column > .flex-gt-sm-40 {\n    max-height: 40%;\n  }\n  .flex-gt-sm-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n  }\n  .layout-row > .flex-gt-sm-45 {\n    max-width: 45%;\n  }\n  .layout-column > .flex-gt-sm-45 {\n    max-height: 45%;\n  }\n  .flex-gt-sm-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n  .layout-row > .flex-gt-sm-50 {\n    max-width: 50%;\n  }\n  .layout-column > .flex-gt-sm-50 {\n    max-height: 50%;\n  }\n  .flex-gt-sm-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n  }\n  .layout-row > .flex-gt-sm-55 {\n    max-width: 55%;\n  }\n  .layout-column > .flex-gt-sm-55 {\n    max-height: 55%;\n  }\n  .flex-gt-sm-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n  }\n  .layout-row > .flex-gt-sm-60 {\n    max-width: 60%;\n  }\n  .layout-column > .flex-gt-sm-60 {\n    max-height: 60%;\n  }\n  .flex-gt-sm-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n  }\n  .layout-row > .flex-gt-sm-65 {\n    max-width: 65%;\n  }\n  .layout-column > .flex-gt-sm-65 {\n    max-height: 65%;\n  }\n  .flex-gt-sm-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n  }\n  .layout-row > .flex-gt-sm-70 {\n    max-width: 70%;\n  }\n  .layout-column > .flex-gt-sm-70 {\n    max-height: 70%;\n  }\n  .flex-gt-sm-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n  .layout-row > .flex-gt-sm-75 {\n    max-width: 75%;\n  }\n  .layout-column > .flex-gt-sm-75 {\n    max-height: 75%;\n  }\n  .flex-gt-sm-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n  }\n  .layout-row > .flex-gt-sm-80 {\n    max-width: 80%;\n  }\n  .layout-column > .flex-gt-sm-80 {\n    max-height: 80%;\n  }\n  .flex-gt-sm-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n  }\n  .layout-row > .flex-gt-sm-85 {\n    max-width: 85%;\n  }\n  .layout-column > .flex-gt-sm-85 {\n    max-height: 85%;\n  }\n  .flex-gt-sm-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n  }\n  .layout-row > .flex-gt-sm-90 {\n    max-width: 90%;\n  }\n  .layout-column > .flex-gt-sm-90 {\n    max-height: 90%;\n  }\n  .flex-gt-sm-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n  }\n  .layout-row > .flex-gt-sm-95 {\n    max-width: 95%;\n  }\n  .layout-column > .flex-gt-sm-95 {\n    max-height: 95%;\n  }\n  .flex-gt-sm-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n  .layout-row > .flex-gt-sm-100 {\n    max-width: 100%;\n  }\n  .layout-column > .flex-gt-sm-100 {\n    max-height: 100%;\n  }\n  .flex-gt-sm-33, .flex-gt-sm-34 {\n    -webkit-flex: 0 0 33.33%;\n        -ms-flex: 0 0 33.33%;\n            flex: 0 0 33.33%;\n  }\n  .flex-gt-sm-66, .flex-gt-sm-67 {\n    -webkit-flex: 0 0 66.66%;\n        -ms-flex: 0 0 66.66%;\n            flex: 0 0 66.66%;\n  }\n  .layout-row > .flex-gt-sm-33, .layout-row > .flex-gt-sm-34 {\n    max-width: 33.33%;\n  }\n  .layout-row > .flex-gt-sm-66, .layout-row > .flex-gt-sm-67 {\n    max-width: 66.66%;\n  }\n  .layout-column > .flex-gt-sm-33, .layout-column > .flex-gt-sm-34 {\n    max-height: 33.33%;\n  }\n  .layout-column > .flex-gt-sm-66, .layout-column > .flex-gt-sm-67 {\n    max-height: 66.66%;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 959px) {\n  .hide:not(.show-gt-sm):not(.show-md):not(.show), .hide-gt-sm:not(.show-gt-sm):not(.show-md):not(.show) {\n    display: none;\n  }\n  .hide-md:not(.show-md):not(.show) {\n    display: none;\n  }\n  .flex-order-md-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-md-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-md-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-md-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-md-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-md-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-md-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-md-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-md-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-md-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .layout-align-md-center, .layout-align-md-center-center,\n  .layout-align-md-center-start,\n  .layout-align-md-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-md-end, .layout-align-md-end-center,\n  .layout-align-md-end-start,\n  .layout-align-md-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-md-space-around, .layout-align-md-space-around-center,\n  .layout-align-md-space-around-start,\n  .layout-align-md-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-md-space-between, .layout-align-md-space-between-center,\n  .layout-align-md-space-between-start,\n  .layout-align-md-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-md-center-center,\n  .layout-align-md-start-center,\n  .layout-align-md-end-center,\n  .layout-align-md-space-between-center,\n  .layout-align-md-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .layout-align-md-center-start,\n  .layout-align-md-start-start,\n  .layout-align-md-end-start,\n  .layout-align-md-space-between-start,\n  .layout-align-md-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-md-center-end,\n  .layout-align-md-start-end,\n  .layout-align-md-end-end,\n  .layout-align-md-space-between-end,\n  .layout-align-md-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .layout-md {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-md-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-md-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .offset-md-5 {\n    margin-left: 5%;\n  }\n  .offset-md-10 {\n    margin-left: 10%;\n  }\n  .offset-md-15 {\n    margin-left: 15%;\n  }\n  .offset-md-20 {\n    margin-left: 20%;\n  }\n  .offset-md-25 {\n    margin-left: 25%;\n  }\n  .offset-md-30 {\n    margin-left: 30%;\n  }\n  .offset-md-35 {\n    margin-left: 35%;\n  }\n  .offset-md-40 {\n    margin-left: 40%;\n  }\n  .offset-md-45 {\n    margin-left: 45%;\n  }\n  .offset-md-50 {\n    margin-left: 50%;\n  }\n  .offset-md-55 {\n    margin-left: 55%;\n  }\n  .offset-md-60 {\n    margin-left: 60%;\n  }\n  .offset-md-65 {\n    margin-left: 65%;\n  }\n  .offset-md-70 {\n    margin-left: 70%;\n  }\n  .offset-md-75 {\n    margin-left: 75%;\n  }\n  .offset-md-80 {\n    margin-left: 80%;\n  }\n  .offset-md-85 {\n    margin-left: 85%;\n  }\n  .offset-md-90 {\n    margin-left: 90%;\n  }\n  .offset-md-95 {\n    margin-left: 95%;\n  }\n  .offset-md-33, .offset-md-34 {\n    margin-left: 33.33%;\n  }\n  .offset-md-66, .offset-md-67 {\n    margin-left: 66.66%;\n  }\n  .flex-md {\n    box-sizing: border-box;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .flex-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n  }\n  .layout-row > .flex-md-0 {\n    max-width: 0%;\n  }\n  .layout-column > .flex-md-0 {\n    max-height: 0%;\n  }\n  .flex-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n  }\n  .layout-row > .flex-md-5 {\n    max-width: 5%;\n  }\n  .layout-column > .flex-md-5 {\n    max-height: 5%;\n  }\n  .flex-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n  }\n  .layout-row > .flex-md-10 {\n    max-width: 10%;\n  }\n  .layout-column > .flex-md-10 {\n    max-height: 10%;\n  }\n  .flex-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n  }\n  .layout-row > .flex-md-15 {\n    max-width: 15%;\n  }\n  .layout-column > .flex-md-15 {\n    max-height: 15%;\n  }\n  .flex-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n  }\n  .layout-row > .flex-md-20 {\n    max-width: 20%;\n  }\n  .layout-column > .flex-md-20 {\n    max-height: 20%;\n  }\n  .flex-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n  .layout-row > .flex-md-25 {\n    max-width: 25%;\n  }\n  .layout-column > .flex-md-25 {\n    max-height: 25%;\n  }\n  .flex-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n  }\n  .layout-row > .flex-md-30 {\n    max-width: 30%;\n  }\n  .layout-column > .flex-md-30 {\n    max-height: 30%;\n  }\n  .flex-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n  }\n  .layout-row > .flex-md-35 {\n    max-width: 35%;\n  }\n  .layout-column > .flex-md-35 {\n    max-height: 35%;\n  }\n  .flex-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n  }\n  .layout-row > .flex-md-40 {\n    max-width: 40%;\n  }\n  .layout-column > .flex-md-40 {\n    max-height: 40%;\n  }\n  .flex-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n  }\n  .layout-row > .flex-md-45 {\n    max-width: 45%;\n  }\n  .layout-column > .flex-md-45 {\n    max-height: 45%;\n  }\n  .flex-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n  .layout-row > .flex-md-50 {\n    max-width: 50%;\n  }\n  .layout-column > .flex-md-50 {\n    max-height: 50%;\n  }\n  .flex-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n  }\n  .layout-row > .flex-md-55 {\n    max-width: 55%;\n  }\n  .layout-column > .flex-md-55 {\n    max-height: 55%;\n  }\n  .flex-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n  }\n  .layout-row > .flex-md-60 {\n    max-width: 60%;\n  }\n  .layout-column > .flex-md-60 {\n    max-height: 60%;\n  }\n  .flex-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n  }\n  .layout-row > .flex-md-65 {\n    max-width: 65%;\n  }\n  .layout-column > .flex-md-65 {\n    max-height: 65%;\n  }\n  .flex-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n  }\n  .layout-row > .flex-md-70 {\n    max-width: 70%;\n  }\n  .layout-column > .flex-md-70 {\n    max-height: 70%;\n  }\n  .flex-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n  .layout-row > .flex-md-75 {\n    max-width: 75%;\n  }\n  .layout-column > .flex-md-75 {\n    max-height: 75%;\n  }\n  .flex-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n  }\n  .layout-row > .flex-md-80 {\n    max-width: 80%;\n  }\n  .layout-column > .flex-md-80 {\n    max-height: 80%;\n  }\n  .flex-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n  }\n  .layout-row > .flex-md-85 {\n    max-width: 85%;\n  }\n  .layout-column > .flex-md-85 {\n    max-height: 85%;\n  }\n  .flex-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n  }\n  .layout-row > .flex-md-90 {\n    max-width: 90%;\n  }\n  .layout-column > .flex-md-90 {\n    max-height: 90%;\n  }\n  .flex-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n  }\n  .layout-row > .flex-md-95 {\n    max-width: 95%;\n  }\n  .layout-column > .flex-md-95 {\n    max-height: 95%;\n  }\n  .flex-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n  .layout-row > .flex-md-100 {\n    max-width: 100%;\n  }\n  .layout-column > .flex-md-100 {\n    max-height: 100%;\n  }\n  .flex-md-33, .flex-md-34 {\n    -webkit-flex: 0 0 33.33%;\n        -ms-flex: 0 0 33.33%;\n            flex: 0 0 33.33%;\n  }\n  .flex-md-66, .flex-md-67 {\n    -webkit-flex: 0 0 66.66%;\n        -ms-flex: 0 0 66.66%;\n            flex: 0 0 66.66%;\n  }\n  .layout-row > .flex-md-33, .layout-row > .flex-md-34 {\n    max-width: 33.33%;\n  }\n  .layout-row > .flex-md-66, .layout-row > .flex-md-67 {\n    max-width: 66.66%;\n  }\n  .layout-column > .flex-md-33, .layout-column > .flex-md-34 {\n    max-height: 33.33%;\n  }\n  .layout-column > .flex-md-66, .layout-column > .flex-md-67 {\n    max-height: 66.66%;\n  }\n}\n\n@media (min-width: 960px) {\n  .flex-order-gt-md-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-gt-md-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-gt-md-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-gt-md-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-gt-md-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-gt-md-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-gt-md-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-gt-md-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-gt-md-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-gt-md-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .layout-align-gt-md-center, .layout-align-gt-md-center-center,\n  .layout-align-gt-md-center-start,\n  .layout-align-gt-md-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-gt-md-end, .layout-align-gt-md-end-center,\n  .layout-align-gt-md-end-start,\n  .layout-align-gt-md-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-gt-md-space-around, .layout-align-gt-md-space-around-center,\n  .layout-align-gt-md-space-around-start,\n  .layout-align-gt-md-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-gt-md-space-between, .layout-align-gt-md-space-between-center,\n  .layout-align-gt-md-space-between-start,\n  .layout-align-gt-md-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-gt-md-center-center,\n  .layout-align-gt-md-start-center,\n  .layout-align-gt-md-end-center,\n  .layout-align-gt-md-space-between-center,\n  .layout-align-gt-md-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .layout-align-gt-md-center-start,\n  .layout-align-gt-md-start-start,\n  .layout-align-gt-md-end-start,\n  .layout-align-gt-md-space-between-start,\n  .layout-align-gt-md-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-gt-md-center-end,\n  .layout-align-gt-md-start-end,\n  .layout-align-gt-md-end-end,\n  .layout-align-gt-md-space-between-end,\n  .layout-align-gt-md-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .layout-gt-md {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-gt-md-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-gt-md-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .offset-gt-md-5 {\n    margin-left: 5%;\n  }\n  .offset-gt-md-10 {\n    margin-left: 10%;\n  }\n  .offset-gt-md-15 {\n    margin-left: 15%;\n  }\n  .offset-gt-md-20 {\n    margin-left: 20%;\n  }\n  .offset-gt-md-25 {\n    margin-left: 25%;\n  }\n  .offset-gt-md-30 {\n    margin-left: 30%;\n  }\n  .offset-gt-md-35 {\n    margin-left: 35%;\n  }\n  .offset-gt-md-40 {\n    margin-left: 40%;\n  }\n  .offset-gt-md-45 {\n    margin-left: 45%;\n  }\n  .offset-gt-md-50 {\n    margin-left: 50%;\n  }\n  .offset-gt-md-55 {\n    margin-left: 55%;\n  }\n  .offset-gt-md-60 {\n    margin-left: 60%;\n  }\n  .offset-gt-md-65 {\n    margin-left: 65%;\n  }\n  .offset-gt-md-70 {\n    margin-left: 70%;\n  }\n  .offset-gt-md-75 {\n    margin-left: 75%;\n  }\n  .offset-gt-md-80 {\n    margin-left: 80%;\n  }\n  .offset-gt-md-85 {\n    margin-left: 85%;\n  }\n  .offset-gt-md-90 {\n    margin-left: 90%;\n  }\n  .offset-gt-md-95 {\n    margin-left: 95%;\n  }\n  .offset-gt-md-33, .offset-gt-md-34 {\n    margin-left: 33.33%;\n  }\n  .offset-gt-md-66, .offset-gt-md-67 {\n    margin-left: 66.66%;\n  }\n  .flex-gt-md {\n    box-sizing: border-box;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .flex-gt-md-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n  }\n  .layout-row > .flex-gt-md-0 {\n    max-width: 0%;\n  }\n  .layout-column > .flex-gt-md-0 {\n    max-height: 0%;\n  }\n  .flex-gt-md-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n  }\n  .layout-row > .flex-gt-md-5 {\n    max-width: 5%;\n  }\n  .layout-column > .flex-gt-md-5 {\n    max-height: 5%;\n  }\n  .flex-gt-md-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n  }\n  .layout-row > .flex-gt-md-10 {\n    max-width: 10%;\n  }\n  .layout-column > .flex-gt-md-10 {\n    max-height: 10%;\n  }\n  .flex-gt-md-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n  }\n  .layout-row > .flex-gt-md-15 {\n    max-width: 15%;\n  }\n  .layout-column > .flex-gt-md-15 {\n    max-height: 15%;\n  }\n  .flex-gt-md-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n  }\n  .layout-row > .flex-gt-md-20 {\n    max-width: 20%;\n  }\n  .layout-column > .flex-gt-md-20 {\n    max-height: 20%;\n  }\n  .flex-gt-md-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n  .layout-row > .flex-gt-md-25 {\n    max-width: 25%;\n  }\n  .layout-column > .flex-gt-md-25 {\n    max-height: 25%;\n  }\n  .flex-gt-md-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n  }\n  .layout-row > .flex-gt-md-30 {\n    max-width: 30%;\n  }\n  .layout-column > .flex-gt-md-30 {\n    max-height: 30%;\n  }\n  .flex-gt-md-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n  }\n  .layout-row > .flex-gt-md-35 {\n    max-width: 35%;\n  }\n  .layout-column > .flex-gt-md-35 {\n    max-height: 35%;\n  }\n  .flex-gt-md-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n  }\n  .layout-row > .flex-gt-md-40 {\n    max-width: 40%;\n  }\n  .layout-column > .flex-gt-md-40 {\n    max-height: 40%;\n  }\n  .flex-gt-md-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n  }\n  .layout-row > .flex-gt-md-45 {\n    max-width: 45%;\n  }\n  .layout-column > .flex-gt-md-45 {\n    max-height: 45%;\n  }\n  .flex-gt-md-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n  .layout-row > .flex-gt-md-50 {\n    max-width: 50%;\n  }\n  .layout-column > .flex-gt-md-50 {\n    max-height: 50%;\n  }\n  .flex-gt-md-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n  }\n  .layout-row > .flex-gt-md-55 {\n    max-width: 55%;\n  }\n  .layout-column > .flex-gt-md-55 {\n    max-height: 55%;\n  }\n  .flex-gt-md-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n  }\n  .layout-row > .flex-gt-md-60 {\n    max-width: 60%;\n  }\n  .layout-column > .flex-gt-md-60 {\n    max-height: 60%;\n  }\n  .flex-gt-md-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n  }\n  .layout-row > .flex-gt-md-65 {\n    max-width: 65%;\n  }\n  .layout-column > .flex-gt-md-65 {\n    max-height: 65%;\n  }\n  .flex-gt-md-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n  }\n  .layout-row > .flex-gt-md-70 {\n    max-width: 70%;\n  }\n  .layout-column > .flex-gt-md-70 {\n    max-height: 70%;\n  }\n  .flex-gt-md-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n  .layout-row > .flex-gt-md-75 {\n    max-width: 75%;\n  }\n  .layout-column > .flex-gt-md-75 {\n    max-height: 75%;\n  }\n  .flex-gt-md-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n  }\n  .layout-row > .flex-gt-md-80 {\n    max-width: 80%;\n  }\n  .layout-column > .flex-gt-md-80 {\n    max-height: 80%;\n  }\n  .flex-gt-md-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n  }\n  .layout-row > .flex-gt-md-85 {\n    max-width: 85%;\n  }\n  .layout-column > .flex-gt-md-85 {\n    max-height: 85%;\n  }\n  .flex-gt-md-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n  }\n  .layout-row > .flex-gt-md-90 {\n    max-width: 90%;\n  }\n  .layout-column > .flex-gt-md-90 {\n    max-height: 90%;\n  }\n  .flex-gt-md-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n  }\n  .layout-row > .flex-gt-md-95 {\n    max-width: 95%;\n  }\n  .layout-column > .flex-gt-md-95 {\n    max-height: 95%;\n  }\n  .flex-gt-md-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n  .layout-row > .flex-gt-md-100 {\n    max-width: 100%;\n  }\n  .layout-column > .flex-gt-md-100 {\n    max-height: 100%;\n  }\n  .flex-gt-md-33, .flex-gt-md-34 {\n    -webkit-flex: 0 0 33.33%;\n        -ms-flex: 0 0 33.33%;\n            flex: 0 0 33.33%;\n  }\n  .flex-gt-md-66, .flex-gt-md-67 {\n    -webkit-flex: 0 0 66.66%;\n        -ms-flex: 0 0 66.66%;\n            flex: 0 0 66.66%;\n  }\n  .layout-row > .flex-gt-md-33, .layout-row > .flex-gt-md-34 {\n    max-width: 33.33%;\n  }\n  .layout-row > .flex-gt-md-66, .layout-row > .flex-gt-md-67 {\n    max-width: 66.66%;\n  }\n  .layout-column > .flex-gt-md-33, .layout-column > .flex-gt-md-34 {\n    max-height: 33.33%;\n  }\n  .layout-column > .flex-gt-md-66, .layout-column > .flex-gt-md-67 {\n    max-height: 66.66%;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1199px) {\n  .hide:not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-sm:not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show), .hide-gt-md:not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show) {\n    display: none;\n  }\n  .hide-lg:not(.show-lg):not(.show) {\n    display: none;\n  }\n  .flex-order-lg-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-lg-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-lg-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-lg-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-lg-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-lg-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-lg-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-lg-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-lg-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-lg-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .layout-align-lg-center, .layout-align-lg-center-center,\n  .layout-align-lg-center-start,\n  .layout-align-lg-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-lg-end, .layout-align-lg-end-center,\n  .layout-align-lg-end-start,\n  .layout-align-lg-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-lg-space-around, .layout-align-lg-space-around-center,\n  .layout-align-lg-space-around-start,\n  .layout-align-lg-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-lg-space-between, .layout-align-lg-space-between-center,\n  .layout-align-lg-space-between-start,\n  .layout-align-lg-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-lg-center-center,\n  .layout-align-lg-start-center,\n  .layout-align-lg-end-center,\n  .layout-align-lg-space-between-center,\n  .layout-align-lg-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .layout-align-lg-center-start,\n  .layout-align-lg-start-start,\n  .layout-align-lg-end-start,\n  .layout-align-lg-space-between-start,\n  .layout-align-lg-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-lg-center-end,\n  .layout-align-lg-start-end,\n  .layout-align-lg-end-end,\n  .layout-align-lg-space-between-end,\n  .layout-align-lg-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .layout-lg {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-lg-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-lg-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .offset-lg-5 {\n    margin-left: 5%;\n  }\n  .offset-lg-10 {\n    margin-left: 10%;\n  }\n  .offset-lg-15 {\n    margin-left: 15%;\n  }\n  .offset-lg-20 {\n    margin-left: 20%;\n  }\n  .offset-lg-25 {\n    margin-left: 25%;\n  }\n  .offset-lg-30 {\n    margin-left: 30%;\n  }\n  .offset-lg-35 {\n    margin-left: 35%;\n  }\n  .offset-lg-40 {\n    margin-left: 40%;\n  }\n  .offset-lg-45 {\n    margin-left: 45%;\n  }\n  .offset-lg-50 {\n    margin-left: 50%;\n  }\n  .offset-lg-55 {\n    margin-left: 55%;\n  }\n  .offset-lg-60 {\n    margin-left: 60%;\n  }\n  .offset-lg-65 {\n    margin-left: 65%;\n  }\n  .offset-lg-70 {\n    margin-left: 70%;\n  }\n  .offset-lg-75 {\n    margin-left: 75%;\n  }\n  .offset-lg-80 {\n    margin-left: 80%;\n  }\n  .offset-lg-85 {\n    margin-left: 85%;\n  }\n  .offset-lg-90 {\n    margin-left: 90%;\n  }\n  .offset-lg-95 {\n    margin-left: 95%;\n  }\n  .offset-lg-33, .offset-lg-34 {\n    margin-left: 33.33%;\n  }\n  .offset-lg-66, .offset-lg-67 {\n    margin-left: 66.66%;\n  }\n  .flex-lg {\n    box-sizing: border-box;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .flex-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n  }\n  .layout-row > .flex-lg-0 {\n    max-width: 0%;\n  }\n  .layout-column > .flex-lg-0 {\n    max-height: 0%;\n  }\n  .flex-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n  }\n  .layout-row > .flex-lg-5 {\n    max-width: 5%;\n  }\n  .layout-column > .flex-lg-5 {\n    max-height: 5%;\n  }\n  .flex-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n  }\n  .layout-row > .flex-lg-10 {\n    max-width: 10%;\n  }\n  .layout-column > .flex-lg-10 {\n    max-height: 10%;\n  }\n  .flex-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n  }\n  .layout-row > .flex-lg-15 {\n    max-width: 15%;\n  }\n  .layout-column > .flex-lg-15 {\n    max-height: 15%;\n  }\n  .flex-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n  }\n  .layout-row > .flex-lg-20 {\n    max-width: 20%;\n  }\n  .layout-column > .flex-lg-20 {\n    max-height: 20%;\n  }\n  .flex-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n  .layout-row > .flex-lg-25 {\n    max-width: 25%;\n  }\n  .layout-column > .flex-lg-25 {\n    max-height: 25%;\n  }\n  .flex-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n  }\n  .layout-row > .flex-lg-30 {\n    max-width: 30%;\n  }\n  .layout-column > .flex-lg-30 {\n    max-height: 30%;\n  }\n  .flex-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n  }\n  .layout-row > .flex-lg-35 {\n    max-width: 35%;\n  }\n  .layout-column > .flex-lg-35 {\n    max-height: 35%;\n  }\n  .flex-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n  }\n  .layout-row > .flex-lg-40 {\n    max-width: 40%;\n  }\n  .layout-column > .flex-lg-40 {\n    max-height: 40%;\n  }\n  .flex-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n  }\n  .layout-row > .flex-lg-45 {\n    max-width: 45%;\n  }\n  .layout-column > .flex-lg-45 {\n    max-height: 45%;\n  }\n  .flex-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n  .layout-row > .flex-lg-50 {\n    max-width: 50%;\n  }\n  .layout-column > .flex-lg-50 {\n    max-height: 50%;\n  }\n  .flex-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n  }\n  .layout-row > .flex-lg-55 {\n    max-width: 55%;\n  }\n  .layout-column > .flex-lg-55 {\n    max-height: 55%;\n  }\n  .flex-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n  }\n  .layout-row > .flex-lg-60 {\n    max-width: 60%;\n  }\n  .layout-column > .flex-lg-60 {\n    max-height: 60%;\n  }\n  .flex-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n  }\n  .layout-row > .flex-lg-65 {\n    max-width: 65%;\n  }\n  .layout-column > .flex-lg-65 {\n    max-height: 65%;\n  }\n  .flex-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n  }\n  .layout-row > .flex-lg-70 {\n    max-width: 70%;\n  }\n  .layout-column > .flex-lg-70 {\n    max-height: 70%;\n  }\n  .flex-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n  .layout-row > .flex-lg-75 {\n    max-width: 75%;\n  }\n  .layout-column > .flex-lg-75 {\n    max-height: 75%;\n  }\n  .flex-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n  }\n  .layout-row > .flex-lg-80 {\n    max-width: 80%;\n  }\n  .layout-column > .flex-lg-80 {\n    max-height: 80%;\n  }\n  .flex-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n  }\n  .layout-row > .flex-lg-85 {\n    max-width: 85%;\n  }\n  .layout-column > .flex-lg-85 {\n    max-height: 85%;\n  }\n  .flex-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n  }\n  .layout-row > .flex-lg-90 {\n    max-width: 90%;\n  }\n  .layout-column > .flex-lg-90 {\n    max-height: 90%;\n  }\n  .flex-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n  }\n  .layout-row > .flex-lg-95 {\n    max-width: 95%;\n  }\n  .layout-column > .flex-lg-95 {\n    max-height: 95%;\n  }\n  .flex-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n  .layout-row > .flex-lg-100 {\n    max-width: 100%;\n  }\n  .layout-column > .flex-lg-100 {\n    max-height: 100%;\n  }\n  .flex-lg-33, .flex-lg-34 {\n    -webkit-flex: 0 0 33.33%;\n        -ms-flex: 0 0 33.33%;\n            flex: 0 0 33.33%;\n  }\n  .flex-lg-66, .flex-lg-67 {\n    -webkit-flex: 0 0 66.66%;\n        -ms-flex: 0 0 66.66%;\n            flex: 0 0 66.66%;\n  }\n  .layout-row > .flex-lg-33, .layout-row > .flex-lg-34 {\n    max-width: 33.33%;\n  }\n  .layout-row > .flex-lg-66, .layout-row > .flex-lg-67 {\n    max-width: 66.66%;\n  }\n  .layout-column > .flex-lg-33, .layout-column > .flex-lg-34 {\n    max-height: 33.33%;\n  }\n  .layout-column > .flex-lg-66, .layout-column > .flex-lg-67 {\n    max-height: 66.66%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hide-gt-sm:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show), .hide-gt-md:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show), .hide-gt-lg:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show), .hide:not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show) {\n    display: none;\n  }\n  .flex-order-gt-lg-0 {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n  .flex-order-gt-lg-1 {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .flex-order-gt-lg-2 {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .flex-order-gt-lg-3 {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .flex-order-gt-lg-4 {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .flex-order-gt-lg-5 {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .flex-order-gt-lg-6 {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .flex-order-gt-lg-7 {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .flex-order-gt-lg-8 {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .flex-order-gt-lg-9 {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .layout-align-gt-lg-center, .layout-align-gt-lg-center-center,\n  .layout-align-gt-lg-center-start,\n  .layout-align-gt-lg-center-end {\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  .layout-align-gt-lg-end, .layout-align-gt-lg-end-center,\n  .layout-align-gt-lg-end-start,\n  .layout-align-gt-lg-end-end {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .layout-align-gt-lg-space-around, .layout-align-gt-lg-space-around-center,\n  .layout-align-gt-lg-space-around-start,\n  .layout-align-gt-lg-space-around-end {\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n  }\n  .layout-align-gt-lg-space-between, .layout-align-gt-lg-space-between-center,\n  .layout-align-gt-lg-space-between-start,\n  .layout-align-gt-lg-space-between-end {\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .layout-align-gt-lg-center-center,\n  .layout-align-gt-lg-start-center,\n  .layout-align-gt-lg-end-center,\n  .layout-align-gt-lg-space-between-center,\n  .layout-align-gt-lg-space-around-center {\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .layout-align-gt-lg-center-start,\n  .layout-align-gt-lg-start-start,\n  .layout-align-gt-lg-end-start,\n  .layout-align-gt-lg-space-between-start,\n  .layout-align-gt-lg-space-around-start {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  .layout-align-gt-lg-center-end,\n  .layout-align-gt-lg-start-end,\n  .layout-align-gt-lg-end-end,\n  .layout-align-gt-lg-space-between-end,\n  .layout-align-gt-lg-space-around-end {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .layout-gt-lg {\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -moz-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .layout-gt-lg-column {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .layout-gt-lg-row {\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .offset-gt-lg-5 {\n    margin-left: 5%;\n  }\n  .offset-gt-lg-10 {\n    margin-left: 10%;\n  }\n  .offset-gt-lg-15 {\n    margin-left: 15%;\n  }\n  .offset-gt-lg-20 {\n    margin-left: 20%;\n  }\n  .offset-gt-lg-25 {\n    margin-left: 25%;\n  }\n  .offset-gt-lg-30 {\n    margin-left: 30%;\n  }\n  .offset-gt-lg-35 {\n    margin-left: 35%;\n  }\n  .offset-gt-lg-40 {\n    margin-left: 40%;\n  }\n  .offset-gt-lg-45 {\n    margin-left: 45%;\n  }\n  .offset-gt-lg-50 {\n    margin-left: 50%;\n  }\n  .offset-gt-lg-55 {\n    margin-left: 55%;\n  }\n  .offset-gt-lg-60 {\n    margin-left: 60%;\n  }\n  .offset-gt-lg-65 {\n    margin-left: 65%;\n  }\n  .offset-gt-lg-70 {\n    margin-left: 70%;\n  }\n  .offset-gt-lg-75 {\n    margin-left: 75%;\n  }\n  .offset-gt-lg-80 {\n    margin-left: 80%;\n  }\n  .offset-gt-lg-85 {\n    margin-left: 85%;\n  }\n  .offset-gt-lg-90 {\n    margin-left: 90%;\n  }\n  .offset-gt-lg-95 {\n    margin-left: 95%;\n  }\n  .offset-gt-lg-33, .offset-gt-lg-34 {\n    margin-left: 33.33%;\n  }\n  .offset-gt-lg-66, .offset-gt-lg-67 {\n    margin-left: 66.66%;\n  }\n  .flex-gt-lg {\n    box-sizing: border-box;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n  .flex-gt-lg-0 {\n    -webkit-flex: 0 0 0%;\n        -ms-flex: 0 0 0%;\n            flex: 0 0 0%;\n  }\n  .layout-row > .flex-gt-lg-0 {\n    max-width: 0%;\n  }\n  .layout-column > .flex-gt-lg-0 {\n    max-height: 0%;\n  }\n  .flex-gt-lg-5 {\n    -webkit-flex: 0 0 5%;\n        -ms-flex: 0 0 5%;\n            flex: 0 0 5%;\n  }\n  .layout-row > .flex-gt-lg-5 {\n    max-width: 5%;\n  }\n  .layout-column > .flex-gt-lg-5 {\n    max-height: 5%;\n  }\n  .flex-gt-lg-10 {\n    -webkit-flex: 0 0 10%;\n        -ms-flex: 0 0 10%;\n            flex: 0 0 10%;\n  }\n  .layout-row > .flex-gt-lg-10 {\n    max-width: 10%;\n  }\n  .layout-column > .flex-gt-lg-10 {\n    max-height: 10%;\n  }\n  .flex-gt-lg-15 {\n    -webkit-flex: 0 0 15%;\n        -ms-flex: 0 0 15%;\n            flex: 0 0 15%;\n  }\n  .layout-row > .flex-gt-lg-15 {\n    max-width: 15%;\n  }\n  .layout-column > .flex-gt-lg-15 {\n    max-height: 15%;\n  }\n  .flex-gt-lg-20 {\n    -webkit-flex: 0 0 20%;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%;\n  }\n  .layout-row > .flex-gt-lg-20 {\n    max-width: 20%;\n  }\n  .layout-column > .flex-gt-lg-20 {\n    max-height: 20%;\n  }\n  .flex-gt-lg-25 {\n    -webkit-flex: 0 0 25%;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n  }\n  .layout-row > .flex-gt-lg-25 {\n    max-width: 25%;\n  }\n  .layout-column > .flex-gt-lg-25 {\n    max-height: 25%;\n  }\n  .flex-gt-lg-30 {\n    -webkit-flex: 0 0 30%;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%;\n  }\n  .layout-row > .flex-gt-lg-30 {\n    max-width: 30%;\n  }\n  .layout-column > .flex-gt-lg-30 {\n    max-height: 30%;\n  }\n  .flex-gt-lg-35 {\n    -webkit-flex: 0 0 35%;\n        -ms-flex: 0 0 35%;\n            flex: 0 0 35%;\n  }\n  .layout-row > .flex-gt-lg-35 {\n    max-width: 35%;\n  }\n  .layout-column > .flex-gt-lg-35 {\n    max-height: 35%;\n  }\n  .flex-gt-lg-40 {\n    -webkit-flex: 0 0 40%;\n        -ms-flex: 0 0 40%;\n            flex: 0 0 40%;\n  }\n  .layout-row > .flex-gt-lg-40 {\n    max-width: 40%;\n  }\n  .layout-column > .flex-gt-lg-40 {\n    max-height: 40%;\n  }\n  .flex-gt-lg-45 {\n    -webkit-flex: 0 0 45%;\n        -ms-flex: 0 0 45%;\n            flex: 0 0 45%;\n  }\n  .layout-row > .flex-gt-lg-45 {\n    max-width: 45%;\n  }\n  .layout-column > .flex-gt-lg-45 {\n    max-height: 45%;\n  }\n  .flex-gt-lg-50 {\n    -webkit-flex: 0 0 50%;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n  }\n  .layout-row > .flex-gt-lg-50 {\n    max-width: 50%;\n  }\n  .layout-column > .flex-gt-lg-50 {\n    max-height: 50%;\n  }\n  .flex-gt-lg-55 {\n    -webkit-flex: 0 0 55%;\n        -ms-flex: 0 0 55%;\n            flex: 0 0 55%;\n  }\n  .layout-row > .flex-gt-lg-55 {\n    max-width: 55%;\n  }\n  .layout-column > .flex-gt-lg-55 {\n    max-height: 55%;\n  }\n  .flex-gt-lg-60 {\n    -webkit-flex: 0 0 60%;\n        -ms-flex: 0 0 60%;\n            flex: 0 0 60%;\n  }\n  .layout-row > .flex-gt-lg-60 {\n    max-width: 60%;\n  }\n  .layout-column > .flex-gt-lg-60 {\n    max-height: 60%;\n  }\n  .flex-gt-lg-65 {\n    -webkit-flex: 0 0 65%;\n        -ms-flex: 0 0 65%;\n            flex: 0 0 65%;\n  }\n  .layout-row > .flex-gt-lg-65 {\n    max-width: 65%;\n  }\n  .layout-column > .flex-gt-lg-65 {\n    max-height: 65%;\n  }\n  .flex-gt-lg-70 {\n    -webkit-flex: 0 0 70%;\n        -ms-flex: 0 0 70%;\n            flex: 0 0 70%;\n  }\n  .layout-row > .flex-gt-lg-70 {\n    max-width: 70%;\n  }\n  .layout-column > .flex-gt-lg-70 {\n    max-height: 70%;\n  }\n  .flex-gt-lg-75 {\n    -webkit-flex: 0 0 75%;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n  }\n  .layout-row > .flex-gt-lg-75 {\n    max-width: 75%;\n  }\n  .layout-column > .flex-gt-lg-75 {\n    max-height: 75%;\n  }\n  .flex-gt-lg-80 {\n    -webkit-flex: 0 0 80%;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%;\n  }\n  .layout-row > .flex-gt-lg-80 {\n    max-width: 80%;\n  }\n  .layout-column > .flex-gt-lg-80 {\n    max-height: 80%;\n  }\n  .flex-gt-lg-85 {\n    -webkit-flex: 0 0 85%;\n        -ms-flex: 0 0 85%;\n            flex: 0 0 85%;\n  }\n  .layout-row > .flex-gt-lg-85 {\n    max-width: 85%;\n  }\n  .layout-column > .flex-gt-lg-85 {\n    max-height: 85%;\n  }\n  .flex-gt-lg-90 {\n    -webkit-flex: 0 0 90%;\n        -ms-flex: 0 0 90%;\n            flex: 0 0 90%;\n  }\n  .layout-row > .flex-gt-lg-90 {\n    max-width: 90%;\n  }\n  .layout-column > .flex-gt-lg-90 {\n    max-height: 90%;\n  }\n  .flex-gt-lg-95 {\n    -webkit-flex: 0 0 95%;\n        -ms-flex: 0 0 95%;\n            flex: 0 0 95%;\n  }\n  .layout-row > .flex-gt-lg-95 {\n    max-width: 95%;\n  }\n  .layout-column > .flex-gt-lg-95 {\n    max-height: 95%;\n  }\n  .flex-gt-lg-100 {\n    -webkit-flex: 0 0 100%;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n  .layout-row > .flex-gt-lg-100 {\n    max-width: 100%;\n  }\n  .layout-column > .flex-gt-lg-100 {\n    max-height: 100%;\n  }\n  .flex-gt-lg-33, .flex-gt-lg-34 {\n    -webkit-flex: 0 0 33.33%;\n        -ms-flex: 0 0 33.33%;\n            flex: 0 0 33.33%;\n  }\n  .flex-gt-lg-66, .flex-gt-lg-67 {\n    -webkit-flex: 0 0 66.66%;\n        -ms-flex: 0 0 66.66%;\n            flex: 0 0 66.66%;\n  }\n  .layout-row > .flex-gt-lg-33, .layout-row > .flex-gt-lg-34 {\n    max-width: 33.33%;\n  }\n  .layout-row > .flex-gt-lg-66, .layout-row > .flex-gt-lg-67 {\n    max-width: 66.66%;\n  }\n  .layout-column > .flex-gt-lg-33, .layout-column > .flex-gt-lg-34 {\n    max-height: 33.33%;\n  }\n  .layout-column > .flex-gt-lg-66, .layout-column > .flex-gt-lg-67 {\n    max-height: 66.66%;\n  }\n}\n\n@-webkit-keyframes md-autocomplete-list-out {\n  0% {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes md-autocomplete-list-out {\n  0% {\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    height: 0;\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes md-autocomplete-list-in {\n  0% {\n    opacity: 0;\n    height: 0;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n  }\n  100% {\n    opacity: 1;\n    height: 40px;\n  }\n}\n\n@keyframes md-autocomplete-list-in {\n  0% {\n    opacity: 0;\n    height: 0;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  50% {\n    opacity: 0;\n    height: 40px;\n  }\n  100% {\n    opacity: 1;\n    height: 40px;\n  }\n}\n\nmd-autocomplete {\n  border-radius: 2px;\n  display: block;\n  height: 40px;\n  position: relative;\n  overflow: visible;\n  min-width: 190px;\n}\n\nmd-autocomplete[disabled] input {\n  cursor: not-allowed;\n}\n\nmd-autocomplete[md-floating-label] {\n  padding-bottom: 26px;\n  border-radius: 0;\n  background: transparent;\n  height: auto;\n}\n\nmd-autocomplete[md-floating-label] md-input-container {\n  padding-bottom: 0;\n}\n\nmd-autocomplete[md-floating-label] md-autocomplete-wrap {\n  height: auto;\n}\n\nmd-autocomplete[md-floating-label] button {\n  position: absolute;\n  top: auto;\n  bottom: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n}\n\nmd-autocomplete md-autocomplete-wrap {\n  display: block;\n  position: relative;\n  overflow: visible;\n  height: 40px;\n}\n\nmd-autocomplete md-autocomplete-wrap.md-menu-showing {\n  z-index: 51;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  transition: none;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate .md-container {\n  transition: none;\n  height: 3px;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter {\n  transition: opacity 0.15s linear;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter.ng-enter-active {\n  opacity: 1;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave {\n  transition: opacity 0.15s linear;\n}\n\nmd-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave.ng-leave-active {\n  opacity: 0;\n}\n\nmd-autocomplete input:not(.md-input) {\n  font-size: 14px;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n  padding: 0 15px;\n  line-height: 40px;\n  height: 40px;\n}\n\nmd-autocomplete input:not(.md-input)::-ms-clear {\n  display: none;\n}\n\nmd-autocomplete button {\n  position: relative;\n  line-height: 20px;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  font-size: 12px;\n  background: transparent;\n  margin: auto 5px;\n}\n\nmd-autocomplete button:after {\n  content: '';\n  position: absolute;\n  top: -6px;\n  right: -6px;\n  bottom: -6px;\n  left: -6px;\n  border-radius: 50%;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-autocomplete button:focus {\n  outline: none;\n}\n\nmd-autocomplete button:focus:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n\nmd-autocomplete button md-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(0.9);\n          transform: translate3d(-50%, -50%, 0) scale(0.9);\n}\n\nmd-autocomplete button md-icon path {\n  stroke-width: 0;\n}\n\nmd-autocomplete button.ng-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out;\n}\n\nmd-autocomplete button.ng-enter.ng-enter-active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-autocomplete button.ng-leave {\n  transition: -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out;\n}\n\nmd-autocomplete button.ng-leave.ng-leave-active {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-autocomplete input {\n    border: 1px solid #fff;\n  }\n  md-autocomplete li:focus {\n    color: #fff;\n  }\n}\n\n.md-virtual-repeat-container.md-autocomplete-suggestions-container {\n  position: absolute;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  height: 225.5px;\n  max-height: 225.5px;\n  z-index: 100;\n}\n\n.md-autocomplete-suggestions {\n  margin: 0;\n  list-style: none;\n  padding: 0;\n}\n\n.md-autocomplete-suggestions li {\n  cursor: pointer;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 0 15px;\n  line-height: 48px;\n  height: 48px;\n  transition: background 0.15s linear;\n  margin: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.md-autocomplete-suggestions li:focus {\n  outline: none;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-autocomplete,\n  .md-autocomplete-suggestions {\n    border: 1px solid #fff;\n  }\n}\n\nmd-bottom-sheet {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 8px 16px 88px 16px;\n  z-index: 70;\n  border-top-width: 1px;\n  border-top-style: solid;\n  -webkit-transform: translate3d(0, 80px, 0);\n          transform: translate3d(0, 80px, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: -webkit-transform;\n  transition-property: transform;\n}\n\nmd-bottom-sheet.md-has-header {\n  padding-top: 0;\n}\n\nmd-bottom-sheet.ng-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n\nmd-bottom-sheet.ng-enter-active {\n  opacity: 1;\n  display: block;\n  -webkit-transform: translate3d(0, 80px, 0) !important;\n          transform: translate3d(0, 80px, 0) !important;\n}\n\nmd-bottom-sheet.ng-leave-active {\n  -webkit-transform: translate3d(0, 100%, 0) !important;\n          transform: translate3d(0, 100%, 0) !important;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-bottom-sheet .md-subheader {\n  background-color: transparent;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 56px;\n  padding: 0;\n  white-space: nowrap;\n}\n\nmd-bottom-sheet md-inline-icon {\n  display: inline-block;\n  height: 24px;\n  width: 24px;\n  fill: #444;\n}\n\nmd-bottom-sheet md-list-item {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n}\n\nmd-bottom-sheet md-list-item:hover {\n  cursor: pointer;\n}\n\nmd-bottom-sheet.md-list md-list-item {\n  padding: 0;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n}\n\nmd-bottom-sheet.md-list md-list-item div.md-icon-container {\n  display: inline-block;\n  height: 24px;\n  margin-right: 32px;\n}\n\nmd-bottom-sheet.md-grid {\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-top: 0;\n}\n\nmd-bottom-sheet.md-grid md-list {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  transition: all 0.5s;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nmd-bottom-sheet.md-grid md-list-item {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 0.5s;\n  height: 96px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  /* Mixin for how many grid items to show per row */\n}\n\n@media screen and (max-width: 600px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 33.33333%;\n        -ms-flex: 1 1 33.33333%;\n            flex: 1 1 33.33333%;\n    max-width: 33.33333%;\n  }\n  md-bottom-sheet.md-grid md-list-item:nth-of-type(3n + 1) {\n    -webkit-align-items: flex-start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n  }\n  md-bottom-sheet.md-grid md-list-item:nth-of-type(3n) {\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n}\n\n@media screen and (min-width: 600px) and (max-width: 960px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 25%;\n        -ms-flex: 1 1 25%;\n            flex: 1 1 25%;\n    max-width: 25%;\n  }\n}\n\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 16.66667%;\n        -ms-flex: 1 1 16.66667%;\n            flex: 1 1 16.66667%;\n    max-width: 16.66667%;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  md-bottom-sheet.md-grid md-list-item {\n    -webkit-flex: 1 1 14.28571%;\n        -ms-flex: 1 1 14.28571%;\n            flex: 1 1 14.28571%;\n    max-width: 14.28571%;\n  }\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-list-item-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 48px;\n  padding-bottom: 16px;\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-grid-item-content {\n  border: 1px solid transparent;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 80px;\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-icon-container {\n  display: inline-block;\n  box-sizing: border-box;\n  height: 48px;\n  width: 48px;\n  margin: 0 0;\n}\n\nmd-bottom-sheet.md-grid md-list-item .md-grid-text {\n  font-weight: 400;\n  line-height: 16px;\n  font-size: 13px;\n  margin: 0;\n  white-space: nowrap;\n  width: 64px;\n  text-align: center;\n  text-transform: none;\n  padding-top: 8px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-bottom-sheet {\n    border: 1px solid #fff;\n  }\n}\n\nmd-backdrop {\n  transition: opacity 450ms;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 50;\n}\n\nmd-backdrop.md-menu-backdrop {\n  position: fixed !important;\n  z-index: 98;\n}\n\nmd-backdrop.md-select-backdrop {\n  z-index: 81;\n  transition-duration: 0;\n}\n\nmd-backdrop.md-dialog-backdrop {\n  z-index: 79;\n}\n\nmd-backdrop.md-bottom-sheet-backdrop {\n  z-index: 69;\n}\n\nmd-backdrop.md-sidenav-backdrop {\n  z-index: 59;\n}\n\nmd-backdrop.md-click-catcher {\n  position: absolute;\n}\n\nmd-backdrop.md-opaque {\n  opacity: .48;\n}\n\nmd-backdrop.md-opaque.ng-enter {\n  opacity: 0;\n}\n\nmd-backdrop.md-opaque.ng-enter.md-opaque.ng-enter-active {\n  opacity: .48;\n}\n\nmd-backdrop.md-opaque.ng-leave {\n  opacity: .48;\n  transition: opacity 400ms;\n}\n\nmd-backdrop.md-opaque.ng-leave.md-opaque.ng-leave-active {\n  opacity: 0;\n}\n\n.md-button {\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: currentColor;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  outline: none;\n  border: 0;\n  display: inline-block;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 6px;\n  margin: 6px 8px;\n  line-height: 36px;\n  min-height: 36px;\n  background: transparent;\n  white-space: nowrap;\n  min-width: 88px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-family: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  overflow: hidden;\n  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-button:focus {\n  outline: none;\n}\n\n.md-button:hover, .md-button:focus {\n  text-decoration: none;\n}\n\n.md-button.ng-hide, .md-button.ng-leave {\n  transition: none;\n}\n\n.md-button.md-cornered {\n  border-radius: 0;\n}\n\n.md-button.md-icon {\n  padding: 0;\n  background: none;\n}\n\n.md-button.md-raised:not([disabled]) {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.md-button.md-icon-button {\n  margin: 0 6px;\n  height: 48px;\n  min-width: 0;\n  line-height: 48px;\n  padding-left: 0;\n  padding-right: 0;\n  width: 48px;\n  border-radius: 50%;\n}\n\n.md-button.md-icon-button .md-ripple-container {\n  border-radius: 50%;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-mask-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC\");\n}\n\n.md-button.md-fab {\n  z-index: 20;\n  line-height: 56px;\n  min-width: 0;\n  width: 56px;\n  height: 56px;\n  vertical-align: middle;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 50%;\n  background-clip: padding-box;\n  overflow: hidden;\n  transition: 0.2s linear;\n  transition-property: background-color, box-shadow;\n}\n\n.md-button.md-fab.md-fab-bottom-right {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: absolute;\n}\n\n.md-button.md-fab.md-fab-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 20px;\n  left: 20px;\n  position: absolute;\n}\n\n.md-button.md-fab.md-fab-top-right {\n  top: 20px;\n  right: 20px;\n  bottom: auto;\n  left: auto;\n  position: absolute;\n}\n\n.md-button.md-fab.md-fab-top-left {\n  top: 20px;\n  right: auto;\n  bottom: auto;\n  left: 20px;\n  position: absolute;\n}\n\n.md-button.md-fab .md-ripple-container {\n  border-radius: 50%;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-mask-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC\");\n}\n\n.md-button.md-fab.md-mini {\n  line-height: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.md-button:not([disabled]).md-raised.md-focused,\n.md-button:not([disabled]).md-fab.md-focused {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.md-button:not([disabled]).md-raised:active,\n.md-button:not([disabled]).md-fab:active {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\n}\n\n.md-button .md-ripple-container {\n  border-radius: 3px;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-mask-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC\");\n}\n\n.md-toast-open-top .md-button.md-fab-top-left,\n.md-toast-open-top .md-button.md-fab-top-right {\n  -webkit-transform: translate3d(0, 42px, 0);\n          transform: translate3d(0, 42px, 0);\n}\n\n.md-toast-open-top .md-button.md-fab-top-left:not([disabled]).md-focused,\n.md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,\n.md-toast-open-top .md-button.md-fab-top-right:not([disabled]).md-focused,\n.md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover {\n  -webkit-transform: translate3d(0, 41px, 0);\n          transform: translate3d(0, 41px, 0);\n}\n\n.md-toast-open-bottom .md-button.md-fab-bottom-left,\n.md-toast-open-bottom .md-button.md-fab-bottom-right {\n  -webkit-transform: translate3d(0, -42px, 0);\n          transform: translate3d(0, -42px, 0);\n}\n\n.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]).md-focused,\n.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,\n.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]).md-focused,\n.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover {\n  -webkit-transform: translate3d(0, -43px, 0);\n          transform: translate3d(0, -43px, 0);\n}\n\n.md-button-group {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n}\n\n.md-button-group > .md-button {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: block;\n  overflow: hidden;\n  width: 0;\n  border-width: 1px 0px 1px 1px;\n  border-radius: 0;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.md-button-group > .md-button:first-child {\n  border-radius: 2px 0px 0px 2px;\n}\n\n.md-button-group > .md-button:last-child {\n  border-right-width: 1px;\n  border-radius: 0px 2px 2px 0px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-button.md-raised,\n  .md-button.md-fab {\n    border: 1px solid #fff;\n  }\n}\n\nmd-card {\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.14), 0px 2px 2px 0px rgba(0, 0, 0, 0.098), 0px 1px 5px 0px rgba(0, 0, 0, 0.084);\n}\n\nmd-card > img,\nmd-card > :not(md-card-content) img {\n  width: 100%;\n}\n\nmd-card md-card-content {\n  padding: 16px;\n}\n\nmd-card .md-actions {\n  margin: 0;\n}\n\nmd-card .md-actions .md-button {\n  margin-bottom: 8px;\n  margin-top: 8px;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n\nmd-card md-card-footer {\n  padding: 16px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-card {\n    border: 1px solid #fff;\n  }\n}\n\nmd-checkbox {\n  box-sizing: border-box;\n  display: block;\n  margin: 8px;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-left: 18px;\n  padding-right: 0;\n  position: relative;\n  line-height: 26px;\n  min-width: 18px;\n  min-height: 18px;\n}\n\nhtml[dir=rtl] md-checkbox {\n  padding-left: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox {\n  padding-left: 0;\n  unicode-bidi: embed;\n}\n\nmd-checkbox bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-checkbox {\n  padding-right: 18px;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox {\n  padding-right: 18px;\n  unicode-bidi: embed;\n}\n\nmd-checkbox bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox.md-focused:not([disabled]) .md-container:before {\n  left: -8px;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n\nmd-checkbox.md-focused:not([disabled]):not(.md-checked) .md-container:before {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\nmd-checkbox .md-container {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  box-sizing: border-box;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  left: 0;\n  right: auto;\n}\n\nhtml[dir=rtl] md-checkbox .md-container {\n  left: auto;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-container {\n  left: auto;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-container bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-container bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-checkbox .md-container {\n  right: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-container {\n  right: 0;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-container bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-container bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-container:before {\n  box-sizing: border-box;\n  background-color: transparent;\n  border-radius: 50%;\n  content: '';\n  position: absolute;\n  display: block;\n  height: auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s;\n  width: auto;\n}\n\nmd-checkbox .md-container:after {\n  box-sizing: border-box;\n  content: '';\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  bottom: -10px;\n  left: -10px;\n}\n\nmd-checkbox .md-container .md-ripple-container {\n  position: absolute;\n  display: block;\n  width: auto;\n  height: auto;\n  left: -15px;\n  top: -15px;\n  right: -15px;\n  bottom: -15px;\n}\n\nmd-checkbox.md-align-top-left > div.md-container {\n  top: 12px;\n}\n\nmd-checkbox .md-icon {\n  box-sizing: border-box;\n  transition: 240ms;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 2px;\n}\n\nmd-checkbox.md-checked .md-icon {\n  border: none;\n}\n\nmd-checkbox[disabled] {\n  cursor: no-drop;\n}\n\nmd-checkbox.md-checked .md-icon:after {\n  box-sizing: border-box;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  display: table;\n  width: 6px;\n  height: 12px;\n  border-width: 2px;\n  border-style: solid;\n  border-top: 0;\n  border-left: 0;\n  content: '';\n}\n\nmd-checkbox .md-label {\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: normal;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  margin-left: 10px;\n  margin-right: 0;\n}\n\nhtml[dir=rtl] md-checkbox .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-checkbox .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-checkbox .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nmd-checkbox .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-checkbox .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\n.md-contact-chips .md-chips .md-chip {\n  padding: 0 25px 0 0;\n}\n\n.md-contact-chips .md-chips .md-chip .md-contact-avatar {\n  float: left;\n}\n\n.md-contact-chips .md-chips .md-chip .md-contact-avatar img {\n  height: 32px;\n  border-radius: 16px;\n}\n\n.md-contact-chips .md-chips .md-chip .md-contact-name {\n  display: inline-block;\n  height: 32px;\n  margin-left: 8px;\n}\n\n.md-contact-suggestion {\n  height: 56px;\n}\n\n.md-contact-suggestion img {\n  height: 40px;\n  border-radius: 20px;\n  margin-top: 8px;\n}\n\n.md-contact-suggestion .md-contact-name {\n  margin-left: 8px;\n  width: 120px;\n}\n\n.md-contact-suggestion .md-contact-name, .md-contact-suggestion .md-contact-email {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.md-contact-chips-suggestions li {\n  height: 100%;\n}\n\n.md-chips {\n  display: block;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  padding: 0 0 8px 3px;\n  vertical-align: middle;\n}\n\n.md-chips:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n.md-chips:not(.md-readonly) {\n  cursor: text;\n}\n\n.md-chips:not(.md-readonly) .md-chip {\n  padding-right: 22px;\n}\n\n.md-chips .md-chip {\n  cursor: default;\n  border-radius: 16px;\n  display: block;\n  height: 32px;\n  line-height: 32px;\n  margin: 8px 8px 0 0;\n  padding: 0 12px 0 12px;\n  float: left;\n  box-sizing: border-box;\n  max-width: 100%;\n  position: relative;\n}\n\n.md-chips .md-chip .md-chip-content {\n  display: block;\n  padding-right: 4px;\n  float: left;\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.md-chips .md-chip .md-chip-content:focus {\n  outline: none;\n}\n\n.md-chips .md-chip .md-chip-remove-container {\n  position: absolute;\n  right: 0;\n  line-height: 22px;\n}\n\n.md-chips .md-chip .md-chip-remove {\n  text-align: center;\n  width: 32px;\n  height: 32px;\n  min-width: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  position: relative;\n}\n\n.md-chips .md-chip .md-chip-remove md-icon {\n  height: 18px;\n  width: 18px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n\n.md-chips .md-chip-input-container {\n  display: block;\n  line-height: 32px;\n  margin: 8px 8px 0 0;\n  padding: 0 12px 0 12px;\n  float: left;\n}\n\n.md-chips .md-chip-input-container input:not([type]), .md-chips .md-chip-input-container input[type=\"email\"], .md-chips .md-chip-input-container input[type=\"number\"], .md-chips .md-chip-input-container input[type=\"tel\"], .md-chips .md-chip-input-container input[type=\"url\"], .md-chips .md-chip-input-container input[type=\"text\"] {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n}\n\n.md-chips .md-chip-input-container input:not([type]):focus, .md-chips .md-chip-input-container input[type=\"email\"]:focus, .md-chips .md-chip-input-container input[type=\"number\"]:focus, .md-chips .md-chip-input-container input[type=\"tel\"]:focus, .md-chips .md-chip-input-container input[type=\"url\"]:focus, .md-chips .md-chip-input-container input[type=\"text\"]:focus {\n  outline: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {\n  background: transparent;\n  height: 32px;\n}\n\n.md-chips .md-chip-input-container md-autocomplete md-autocomplete-wrap {\n  box-shadow: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete input {\n  position: relative;\n}\n\n.md-chips .md-chip-input-container input {\n  border: 0;\n  height: 32px;\n  line-height: 32px;\n  padding: 0;\n}\n\n.md-chips .md-chip-input-container input:focus {\n  outline: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete, .md-chips .md-chip-input-container md-autocomplete-wrap {\n  height: 32px;\n}\n\n.md-chips .md-chip-input-container md-autocomplete {\n  box-shadow: none;\n}\n\n.md-chips .md-chip-input-container md-autocomplete input {\n  position: relative;\n}\n\n.md-chips .md-chip-input-container:not(:first-child) {\n  margin: 8px 8px 0 0;\n}\n\n.md-chips .md-chip-input-container input {\n  background: transparent;\n  border-width: 0;\n}\n\n.md-chips md-autocomplete button {\n  display: none;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-chip-input-container,\n  md-chip {\n    border: 1px solid #fff;\n  }\n  .md-chip-input-container md-autocomplete {\n    border: none;\n  }\n}\n\nmd-content {\n  display: block;\n  position: relative;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\nmd-content[md-scroll-y] {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\nmd-content[md-scroll-x] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\nmd-content.autoScroll {\n  -webkit-overflow-scrolling: auto;\n}\n\n/** Styles for mdCalendar. */\nmd-calendar {\n  font-size: 13px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.md-calendar-scroll-mask {\n  display: inline-block;\n  overflow: hidden;\n  height: 308px;\n}\n\n.md-calendar-scroll-mask .md-virtual-repeat-scroller {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.md-calendar-scroll-mask .md-virtual-repeat-scroller::-webkit-scrollbar {\n  display: none;\n}\n\n.md-calendar-scroll-mask .md-virtual-repeat-offsetter {\n  width: 100%;\n}\n\n.md-calendar-scroll-container {\n  display: inline-block;\n  height: 308px;\n  width: 340px;\n}\n\n.md-calendar-date {\n  height: 44px;\n  width: 44px;\n  text-align: center;\n  padding: 0;\n  border: none;\n}\n\n.md-calendar-date:first-child {\n  padding-left: 16px;\n}\n\n.md-calendar-date:last-child {\n  padding-right: 16px;\n}\n\n.md-calendar-date.md-calendar-date-disabled {\n  cursor: default;\n}\n\n.md-calendar-date-selection-indicator {\n  transition: background-color, color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-radius: 50%;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.md-calendar-date:not(.md-disabled) .md-calendar-date-selection-indicator {\n  cursor: pointer;\n}\n\n.md-calendar-month-label {\n  height: 44px;\n  font-size: 13px;\n  padding: 0 0 0 24px;\n}\n\n.md-calendar-day-header {\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.md-calendar-day-header th {\n  height: 44px;\n  width: 44px;\n  text-align: center;\n  padding: 0;\n  border: none;\n  font-weight: normal;\n  height: 40px;\n}\n\n.md-calendar-day-header th:first-child {\n  padding-left: 16px;\n}\n\n.md-calendar-day-header th:last-child {\n  padding-right: 16px;\n}\n\n.md-calendar {\n  table-layout: fixed;\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.md-calendar tr:last-child td {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.md-calendar:first-child {\n  border-top: 1px solid transparent;\n}\n\n/** Styles for mdDatepicker. */\nmd-datepicker {\n  white-space: nowrap;\n}\n\n.md-datepicker-button {\n  display: inline-block;\n  box-sizing: border-box;\n  background: none;\n}\n\n.md-datepicker-input {\n  font-size: 14px;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background: transparent;\n  min-width: 120px;\n  max-width: 328px;\n}\n\n.md-datepicker-input::-ms-clear {\n  display: none;\n}\n\n.md-datepicker-input-container {\n  position: relative;\n  padding-bottom: 5px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  display: inline-block;\n  width: auto;\n  margin-left: 12px;\n}\n\n.md-datepicker-input-container.md-datepicker-focused {\n  border-bottom-width: 2px;\n}\n\n.md-datepicker-calendar-pane {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  border-width: 1px;\n  border-style: solid;\n  background: transparent;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  transition: -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.md-datepicker-calendar-pane.md-pane-open {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.md-datepicker-input-mask {\n  height: 40px;\n  width: 340px;\n  position: relative;\n  background: transparent;\n  pointer-events: none;\n  cursor: text;\n}\n\n.md-datepicker-input-mask-opaque {\n  position: absolute;\n  right: 0;\n  left: 120px;\n  background: white;\n  height: 100%;\n}\n\n.md-datepicker-calendar {\n  opacity: 0;\n  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.25, 1);\n}\n\n.md-pane-open .md-datepicker-calendar {\n  opacity: 1;\n}\n\n.md-datepicker-calendar md-calendar:focus {\n  outline: none;\n}\n\n.md-datepicker-expand-triangle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid rgba(0, 0, 0, 0.2);\n}\n\n.md-datepicker-triangle-button {\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transform: translateY(-25%) translateX(45%);\n          transform: translateY(-25%) translateX(45%);\n}\n\n.md-datepicker-triangle-button.md-button.md-icon-button {\n  height: 100%;\n  width: 36px;\n  position: absolute;\n}\n\nmd-datepicker[disabled] .md-datepicker-input-container {\n  border-bottom-color: transparent;\n}\n\nmd-datepicker[disabled] .md-datepicker-triangle-button {\n  display: none;\n}\n\n.md-datepicker-open .md-datepicker-input-container {\n  margin-left: -12px;\n  border: none;\n}\n\n.md-datepicker-open .md-datepicker-input {\n  margin-left: 24px;\n  height: 40px;\n}\n\n.md-datepicker-open .md-datepicker-triangle-button {\n  display: none;\n}\n\n.md-dialog-is-showing {\n  max-height: 100%;\n}\n\n.md-dialog-container {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 80;\n  overflow: hidden;\n}\n\nmd-dialog {\n  opacity: 0;\n  min-width: 240px;\n  max-width: 80%;\n  max-height: 80%;\n  position: relative;\n  overflow: auto;\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.14), 0px 16px 24px 2px rgba(0, 0, 0, 0.098), 0px 6px 30px 5px rgba(0, 0, 0, 0.084);\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmd-dialog.md-transition-in {\n  opacity: 1;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n\nmd-dialog.md-transition-out {\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transform: translate3d(0, 100%, 0) scale(0.2);\n          transform: translate3d(0, 100%, 0) scale(0.2);\n}\n\nmd-dialog > form {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto;\n}\n\nmd-dialog md-dialog-content {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 24px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\nmd-dialog md-dialog-content:not([layout=row]) > *:first-child:not(.md-subheader) {\n  margin-top: 0;\n}\n\nmd-dialog md-dialog-content:focus {\n  outline: none;\n}\n\nmd-dialog md-dialog-content .md-subheader {\n  margin: 0;\n}\n\nmd-dialog md-dialog-content .md-subheader.sticky-clone {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);\n}\n\nmd-dialog md-dialog-content.sticky-container {\n  padding: 0;\n}\n\nmd-dialog md-dialog-content.sticky-container > div {\n  padding: 24px;\n  padding-top: 0;\n}\n\nmd-dialog md-dialog-content .md-dialog-content-body {\n  width: 100%;\n}\n\nmd-dialog .md-actions {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  box-sizing: border-box;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 0;\n  padding-right: 8px;\n  padding-left: 16px;\n  min-height: 52px;\n  overflow: hidden;\n}\n\nmd-dialog .md-actions .md-button {\n  margin-bottom: 8px;\n  margin-left: 8px;\n  margin-right: 0;\n  margin-top: 8px;\n}\n\nmd-dialog.md-content-overflow .md-actions {\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-dialog {\n    border: 1px solid #fff;\n  }\n}\n\nmd-divider {\n  display: block;\n  border-top-width: 1px;\n  border-top-style: solid;\n  margin: 0;\n}\n\nmd-divider[md-inset] {\n  margin-left: 80px;\n}\n\nmd-fab-speed-dial {\n  position: relative;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /*\n   * Handle the animations\n   */\n}\n\nmd-fab-speed-dial.md-fab-bottom-right {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-speed-dial.md-fab-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 20px;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-speed-dial.md-fab-top-right {\n  top: 20px;\n  right: 20px;\n  bottom: auto;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-speed-dial.md-fab-top-left {\n  top: 20px;\n  right: auto;\n  bottom: auto;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-speed-dial .md-css-variables {\n  z-index: 20;\n}\n\nmd-fab-speed-dial.md-is-open .md-fab-action-item {\n  visibility: visible;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nmd-fab-speed-dial md-fab-actions {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\nmd-fab-speed-dial md-fab-actions .md-fab-action-item {\n  visibility: hidden;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-speed-dial.md-down {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmd-fab-speed-dial.md-down md-fab-trigger {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-down md-fab-actions {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-up {\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmd-fab-speed-dial.md-up md-fab-trigger {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-up md-fab-actions {\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-left {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-fab-speed-dial.md-left md-fab-trigger {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-left md-fab-actions {\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-left md-fab-actions .md-fab-action-item {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-speed-dial.md-right {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-fab-speed-dial.md-right md-fab-trigger {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\nmd-fab-speed-dial.md-right md-fab-actions {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-fab-speed-dial.md-right md-fab-actions .md-fab-action-item {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-speed-dial.md-scale .md-fab-action-item {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 0.14286s;\n}\n\nmd-fab-toolbar {\n  display: block;\n  /*\n   * Closed styling\n   */\n  /*\n   * Hover styling\n   */\n}\n\nmd-fab-toolbar.md-fab-bottom-right {\n  top: auto;\n  right: 20px;\n  bottom: 20px;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-toolbar.md-fab-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 20px;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-toolbar.md-fab-top-right {\n  top: 20px;\n  right: 20px;\n  bottom: auto;\n  left: auto;\n  position: absolute;\n}\n\nmd-fab-toolbar.md-fab-top-left {\n  top: 20px;\n  right: auto;\n  bottom: auto;\n  left: 20px;\n  position: absolute;\n}\n\nmd-fab-toolbar .md-fab-toolbar-wrapper {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 68px;\n}\n\nmd-fab-toolbar md-fab-trigger {\n  position: absolute;\n  z-index: 20;\n}\n\nmd-fab-toolbar md-fab-trigger button {\n  overflow: visible !important;\n}\n\nmd-fab-toolbar md-fab-trigger .md-fab-toolbar-background {\n  display: block;\n  position: absolute;\n  z-index: 21;\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-fab-toolbar md-fab-trigger md-icon {\n  position: relative;\n  z-index: 22;\n  opacity: 1;\n  transition: all 200ms ease-in;\n}\n\nmd-fab-toolbar.md-left md-fab-trigger {\n  right: 0;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools {\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n  margin-right: 0.6rem;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools > .md-button:first-child {\n  margin-left: -0.8rem;\n}\n\nmd-fab-toolbar.md-left .md-toolbar-tools > .md-button:last-child {\n  margin-right: 8px;\n}\n\nmd-fab-toolbar.md-right md-fab-trigger {\n  left: 0;\n}\n\nmd-fab-toolbar.md-right .md-toolbar-tools {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-fab-toolbar md-toolbar {\n  background-color: transparent !important;\n  pointer-events: none;\n  z-index: 23;\n}\n\nmd-fab-toolbar md-toolbar .md-toolbar-tools {\n  padding: 0 20px;\n  margin-top: 3px;\n}\n\nmd-fab-toolbar md-toolbar .md-fab-action-item {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 0.15s;\n}\n\nmd-fab-toolbar.md-is-open md-fab-trigger > button {\n  box-shadow: none;\n}\n\nmd-fab-toolbar.md-is-open md-fab-trigger > button md-icon {\n  opacity: 0;\n}\n\nmd-fab-toolbar.md-is-open .md-fab-action-item {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-grid-list {\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n}\n\nmd-grid-list md-grid-tile,\nmd-grid-list md-grid-tile > figure,\nmd-grid-list md-grid-tile-header,\nmd-grid-list md-grid-tile-footer {\n  box-sizing: border-box;\n}\n\nmd-grid-list md-grid-tile {\n  display: block;\n  position: absolute;\n}\n\nmd-grid-list md-grid-tile figure {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header,\nmd-grid-list md-grid-tile md-grid-tile-footer {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header h3,\nmd-grid-list md-grid-tile md-grid-tile-header h4,\nmd-grid-list md-grid-tile md-grid-tile-footer h3,\nmd-grid-list md-grid-tile md-grid-tile-footer h4 {\n  font-weight: 400;\n  margin: 0 0 0 16px;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header h3,\nmd-grid-list md-grid-tile md-grid-tile-footer h3 {\n  font-size: 14px;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header h4,\nmd-grid-list md-grid-tile md-grid-tile-footer h4 {\n  font-size: 12px;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-header {\n  top: 0;\n}\n\nmd-grid-list md-grid-tile md-grid-tile-footer {\n  bottom: 0;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-grid-tile {\n    border: 1px solid #fff;\n  }\n  md-grid-tile-footer {\n    border-top: 1px solid #fff;\n  }\n}\n\nmd-icon {\n  margin: auto;\n  background-repeat: no-repeat no-repeat;\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n}\n\nmd-icon svg {\n  pointer-events: none;\n}\n\nmd-icon[md-font-icon] {\n  line-height: 1;\n  width: auto;\n}\n\nmd-input-container {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 2px;\n  padding-bottom: 26px;\n  /*\n   * The .md-input class is added to the input/textarea\n   */\n}\n\nmd-input-container > md-icon {\n  position: absolute;\n  top: 5px;\n  left: 2px;\n}\n\nmd-input-container > md-icon + input {\n  margin-left: 36px;\n}\n\nmd-input-container textarea,\nmd-input-container input[type=\"text\"],\nmd-input-container input[type=\"password\"],\nmd-input-container input[type=\"datetime\"],\nmd-input-container input[type=\"datetime-local\"],\nmd-input-container input[type=\"date\"],\nmd-input-container input[type=\"month\"],\nmd-input-container input[type=\"time\"],\nmd-input-container input[type=\"week\"],\nmd-input-container input[type=\"number\"],\nmd-input-container input[type=\"email\"],\nmd-input-container input[type=\"url\"],\nmd-input-container input[type=\"search\"],\nmd-input-container input[type=\"tel\"],\nmd-input-container input[type=\"color\"] {\n  /* remove default appearance from all input/textarea */\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\nmd-input-container input[type=\"date\"],\nmd-input-container input[type=\"datetime-local\"],\nmd-input-container input[type=\"month\"],\nmd-input-container input[type=\"time\"],\nmd-input-container input[type=\"week\"] {\n  min-height: 26px;\n}\n\nmd-input-container textarea {\n  resize: none;\n  overflow: hidden;\n}\n\nmd-input-container textarea.md-input {\n  min-height: 26px;\n  -ms-flex-preferred-size: auto;\n}\n\nmd-input-container label {\n  position: relative;\n  top: -2px;\n}\n\nmd-input-container label:not(.md-no-float),\nmd-input-container .md-placeholder {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  pointer-events: none;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 2px;\n  z-index: 1;\n  -webkit-transform: translate3d(0, 28px, 0) scale(1);\n          transform: translate3d(0, 28px, 0) scale(1);\n  transition: -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.25s;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n\nhtml[dir=rtl] md-input-container label:not(.md-no-float),\nhtml[dir=rtl] md-input-container .md-placeholder {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-input-container label:not(.md-no-float),\nbody[dir=rtl] md-input-container .md-placeholder {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nmd-input-container label:not(.md-no-float) bdo[dir=rtl],\nmd-input-container .md-placeholder bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-input-container label:not(.md-no-float) bdo[dir=ltr],\nmd-input-container .md-placeholder bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-input-container .md-placeholder {\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  -webkit-transform: translate3d(0, 30px, 0);\n          transform: translate3d(0, 30px, 0);\n}\n\nmd-input-container .md-placeholder.md-static {\n  position: static;\n}\n\nmd-input-container.md-input-focused .md-placeholder {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 24px, 0);\n          transform: translate3d(0, 24px, 0);\n}\n\nmd-input-container.md-input-has-value .md-placeholder {\n  transition: none;\n  opacity: 0;\n}\n\nmd-input-container:not(.md-input-has-value) input:not(:focus),\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field,\nmd-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text {\n  color: transparent;\n}\n\nmd-input-container .md-input {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n  display: block;\n  margin-top: auto;\n  background: none;\n  padding-top: 2px;\n  padding-bottom: 1px;\n  padding-left: 2px;\n  padding-right: 2px;\n  border-width: 0 0 1px 0;\n  line-height: 26px;\n  -ms-flex-preferred-size: 26px;\n  border-radius: 0;\n}\n\nmd-input-container .md-input:focus {\n  outline: none;\n}\n\nmd-input-container .md-input:invalid {\n  outline: none;\n  box-shadow: none;\n}\n\nmd-input-container .md-input.md-no-flex {\n  -webkit-flex: none !important;\n      -ms-flex: none !important;\n          flex: none !important;\n}\n\nmd-input-container ng-messages, md-input-container data-ng-messages, md-input-container x-ng-messages,\nmd-input-container [ng-messages], md-input-container [data-ng-messages], md-input-container [x-ng-messages] {\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n  position: relative;\n}\n\nmd-input-container ng-message, md-input-container data-ng-message, md-input-container x-ng-message,\nmd-input-container [ng-message], md-input-container [data-ng-message], md-input-container [x-ng-message],\nmd-input-container .md-char-counter {\n  position: absolute;\n  font-size: 12px;\n  line-height: 24px;\n}\n\nmd-input-container ng-message:not(.md-char-counter), md-input-container data-ng-message:not(.md-char-counter), md-input-container x-ng-message:not(.md-char-counter),\nmd-input-container [ng-message]:not(.md-char-counter), md-input-container [data-ng-message]:not(.md-char-counter), md-input-container [x-ng-message]:not(.md-char-counter),\nmd-input-container .md-char-counter:not(.md-char-counter) {\n  padding-right: 30px;\n}\n\nmd-input-container ng-message.ng-enter, md-input-container data-ng-message.ng-enter, md-input-container x-ng-message.ng-enter,\nmd-input-container [ng-message].ng-enter, md-input-container [data-ng-message].ng-enter, md-input-container [x-ng-message].ng-enter,\nmd-input-container .md-char-counter.ng-enter {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-delay: 0.2s;\n}\n\nmd-input-container ng-message.ng-leave, md-input-container data-ng-message.ng-leave, md-input-container x-ng-message.ng-leave,\nmd-input-container [ng-message].ng-leave, md-input-container [data-ng-message].ng-leave, md-input-container [x-ng-message].ng-leave,\nmd-input-container .md-char-counter.ng-leave {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-input-container ng-message.ng-enter,\nmd-input-container ng-message.ng-leave.ng-leave-active, md-input-container data-ng-message.ng-enter,\nmd-input-container data-ng-message.ng-leave.ng-leave-active, md-input-container x-ng-message.ng-enter,\nmd-input-container x-ng-message.ng-leave.ng-leave-active,\nmd-input-container [ng-message].ng-enter,\nmd-input-container [ng-message].ng-leave.ng-leave-active, md-input-container [data-ng-message].ng-enter,\nmd-input-container [data-ng-message].ng-leave.ng-leave-active, md-input-container [x-ng-message].ng-enter,\nmd-input-container [x-ng-message].ng-leave.ng-leave-active,\nmd-input-container .md-char-counter.ng-enter,\nmd-input-container .md-char-counter.ng-leave.ng-leave-active {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -20%, 0);\n          transform: translate3d(0, -20%, 0);\n}\n\nmd-input-container ng-message.ng-leave,\nmd-input-container ng-message.ng-enter.ng-enter-active, md-input-container data-ng-message.ng-leave,\nmd-input-container data-ng-message.ng-enter.ng-enter-active, md-input-container x-ng-message.ng-leave,\nmd-input-container x-ng-message.ng-enter.ng-enter-active,\nmd-input-container [ng-message].ng-leave,\nmd-input-container [ng-message].ng-enter.ng-enter-active, md-input-container [data-ng-message].ng-leave,\nmd-input-container [data-ng-message].ng-enter.ng-enter-active, md-input-container [x-ng-message].ng-leave,\nmd-input-container [x-ng-message].ng-enter.ng-enter-active,\nmd-input-container .md-char-counter.ng-leave,\nmd-input-container .md-char-counter.ng-enter.ng-enter-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-input-container .md-char-counter {\n  bottom: 2px;\n  right: 2px;\n}\n\nmd-input-container.md-input-focused label:not(.md-no-float),\nmd-input-container.md-input-has-value label:not(.md-no-float) {\n  -webkit-transform: translate3d(0, 6px, 0) scale(0.75);\n          transform: translate3d(0, 6px, 0) scale(0.75);\n}\n\nmd-input-container.md-input-focused .md-input,\nmd-input-container .md-input.ng-invalid.ng-dirty {\n  padding-bottom: 0;\n  border-width: 0 0 2px 0;\n}\n\nmd-input-container .md-input[disabled],\n[disabled] md-input-container .md-input {\n  background-position: 0 bottom;\n  background-size: 4px 1px;\n  background-repeat: repeat-x;\n  margin-bottom: -1px;\n}\n\nmd-input-container.md-icon-float {\n  margin-top: -16px;\n  transition: margin-top 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-input-container.md-icon-float > label {\n  pointer-events: none;\n  position: absolute;\n  margin-left: 36px;\n}\n\nmd-input-container.md-icon-float > md-icon {\n  top: 26px;\n  left: 2px;\n}\n\nmd-input-container.md-icon-float > md-icon + input,\nmd-input-container.md-icon-float > md-icon + textarea {\n  margin-left: 36px;\n}\n\nmd-input-container.md-icon-float > input,\nmd-input-container.md-icon-float > textarea {\n  padding-top: 24px;\n}\n\nmd-input-container.md-icon-float.md-input-focused,\nmd-input-container.md-icon-float.md-input-has-value {\n  margin-top: -8px;\n}\n\nmd-input-container.md-icon-float.md-input-focused label,\nmd-input-container.md-icon-float.md-input-has-value label {\n  -webkit-transform: translate3d(0, 6px, 0) scale(0.75);\n          transform: translate3d(0, 6px, 0) scale(0.75);\n  transition: -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;\n  transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-input-container.md-default-theme > md-icon {\n    fill: #fff;\n  }\n}\n\nmd-list {\n  display: block;\n  padding: 8px 0px 8px 0px;\n}\n\nmd-list .md-subheader {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  line-height: 0.75em;\n}\n\nmd-list-item.md-proxy-focus.md-focused .md-no-style {\n  transition: background-color 0.15s linear;\n}\n\nmd-list-item.md-no-proxy,\nmd-list-item .md-no-style {\n  position: relative;\n  padding: 0px 16px;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\nmd-list-item.md-no-proxy.md-button,\nmd-list-item .md-no-style.md-button {\n  font-size: inherit;\n  height: inherit;\n  text-align: left;\n  text-transform: none;\n  width: 100%;\n  white-space: normal;\n  -webkit-flex-direction: inherit;\n      -ms-flex-direction: inherit;\n          flex-direction: inherit;\n  -webkit-align-items: inherit;\n      -ms-flex-align: inherit;\n          align-items: inherit;\n}\n\nmd-list-item.md-no-proxy:focus,\nmd-list-item .md-no-style:focus {\n  outline: none;\n}\n\nmd-list-item.md-with-secondary {\n  position: relative;\n}\n\nmd-list-item.md-clickable:hover {\n  cursor: pointer;\n}\n\nmd-list-item md-divider {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\nmd-list-item md-divider[md-inset] {\n  left: 96px;\n  width: calc(100% - 96px);\n  margin: 0;\n}\n\nmd-list-item, md-list-item .md-list-item-inner {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 64px;\n}\n\nmd-list-item > div.md-primary > md-icon,\nmd-list-item > div.md-secondary > md-icon,\nmd-list-item > md-icon:first-child,\nmd-list-item > md-icon.md-secondary, md-list-item .md-list-item-inner > div.md-primary > md-icon,\nmd-list-item .md-list-item-inner > div.md-secondary > md-icon,\nmd-list-item .md-list-item-inner > md-icon:first-child,\nmd-list-item .md-list-item-inner > md-icon.md-secondary {\n  width: 24px;\n  margin-top: 16px;\n  margin-bottom: 12px;\n  box-sizing: content-box;\n}\n\nmd-list-item > div.md-primary > md-checkbox,\nmd-list-item > div.md-secondary > md-checkbox,\nmd-list-item > md-checkbox:first-child,\nmd-list-item md-checkbox.md-secondary, md-list-item .md-list-item-inner > div.md-primary > md-checkbox,\nmd-list-item .md-list-item-inner > div.md-secondary > md-checkbox,\nmd-list-item .md-list-item-inner > md-checkbox:first-child,\nmd-list-item .md-list-item-inner md-checkbox.md-secondary {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n\nmd-list-item > div.md-primary > md-checkbox .md-label,\nmd-list-item > div.md-secondary > md-checkbox .md-label,\nmd-list-item > md-checkbox:first-child .md-label,\nmd-list-item md-checkbox.md-secondary .md-label, md-list-item .md-list-item-inner > div.md-primary > md-checkbox .md-label,\nmd-list-item .md-list-item-inner > div.md-secondary > md-checkbox .md-label,\nmd-list-item .md-list-item-inner > md-checkbox:first-child .md-label,\nmd-list-item .md-list-item-inner md-checkbox.md-secondary .md-label {\n  display: none;\n}\n\nmd-list-item > md-icon:first-child, md-list-item .md-list-item-inner > md-icon:first-child {\n  margin-right: 32px;\n}\n\nmd-list-item > md-checkbox:first-child, md-list-item .md-list-item-inner > md-checkbox:first-child {\n  width: 24px;\n  margin-left: 3px;\n  margin-right: 29px;\n}\n\nmd-list-item > .md-avatar:first-child, md-list-item .md-list-item-inner > .md-avatar:first-child {\n  width: 40px;\n  height: 40px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-right: 16px;\n  border-radius: 50%;\n  box-sizing: content-box;\n}\n\nmd-list-item md-checkbox.md-secondary,\nmd-list-item md-switch.md-secondary, md-list-item .md-list-item-inner md-checkbox.md-secondary,\nmd-list-item .md-list-item-inner md-switch.md-secondary {\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nmd-list-item button.md-button.md-secondary-container, md-list-item .md-list-item-inner button.md-button.md-secondary-container {\n  background-color: transparent;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n  border-radius: 50%;\n  margin: 0px;\n  min-width: 0px;\n}\n\nmd-list-item button.md-button.md-secondary-container .md-ripple,\nmd-list-item button.md-button.md-secondary-container .md-ripple-container, md-list-item .md-list-item-inner button.md-button.md-secondary-container .md-ripple,\nmd-list-item .md-list-item-inner button.md-button.md-secondary-container .md-ripple-container {\n  border-radius: 50%;\n}\n\nmd-list-item .md-secondary-container,\nmd-list-item .md-secondary, md-list-item .md-list-item-inner .md-secondary-container,\nmd-list-item .md-list-item-inner .md-secondary {\n  margin-left: 16px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n\nmd-list-item > .md-button.md-secondary-container > .md-secondary, md-list-item .md-list-item-inner > .md-button.md-secondary-container > .md-secondary {\n  margin-left: 0px;\n  position: static;\n}\n\nmd-list-item > p, md-list-item > .md-list-item-inner > p, md-list-item .md-list-item-inner > p, md-list-item .md-list-item-inner > .md-list-item-inner > p {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0;\n}\n\nmd-list-item.md-2-line,\nmd-list-item.md-2-line > .md-no-style,\nmd-list-item.md-3-line,\nmd-list-item.md-3-line > .md-no-style {\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\nmd-list-item.md-2-line .md-list-item-text,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text,\nmd-list-item.md-3-line .md-list-item-text,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 16px 0;\n  text-overflow: ellipsis;\n}\n\nmd-list-item.md-2-line .md-list-item-text.md-offset,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text.md-offset,\nmd-list-item.md-3-line .md-list-item-text.md-offset,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text.md-offset {\n  margin-left: 56px;\n}\n\nmd-list-item.md-2-line .md-list-item-text h3,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text h3,\nmd-list-item.md-3-line .md-list-item-text h3,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text h3 {\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.010em;\n  margin: 0 0 6px 0;\n  line-height: 0.75em;\n}\n\nmd-list-item.md-2-line .md-list-item-text h4,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text h4,\nmd-list-item.md-3-line .md-list-item-text h4,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text h4 {\n  font-size: 14px;\n  letter-spacing: 0.010em;\n  margin: 10px 0 5px 0;\n  font-weight: 400;\n  line-height: 0.75em;\n}\n\nmd-list-item.md-2-line .md-list-item-text p,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text p,\nmd-list-item.md-3-line .md-list-item-text p,\nmd-list-item.md-3-line > .md-no-style .md-list-item-text p {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.010em;\n  margin: 0 0 0 0;\n  line-height: 1.6em;\n}\n\nmd-list-item.md-2-line > .md-avatar:first-child,\nmd-list-item.md-2-line > .md-no-style > .md-avatar:first-child {\n  margin-top: 12px;\n}\n\nmd-list-item.md-2-line > md-icon:first-child,\nmd-list-item.md-2-line > .md-no-style > md-icon:first-child {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n}\n\nmd-list-item.md-2-line .md-list-item-text,\nmd-list-item.md-2-line > .md-no-style .md-list-item-text {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-top: 19px;\n}\n\nmd-list-item.md-3-line > md-icon:first-child,\nmd-list-item.md-3-line > .md-avatar:first-child,\nmd-list-item.md-3-line > .md-no-style > md-icon:first-child,\nmd-list-item.md-3-line > .md-no-style > .md-avatar:first-child {\n  margin-top: 16px;\n}\n\n.md-open-menu-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 99;\n  opacity: 0;\n  border-radius: 2px;\n}\n\n.md-open-menu-container md-menu-divider {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  height: 1px;\n  width: 100%;\n}\n\n.md-open-menu-container md-menu-content > * {\n  opacity: 0;\n}\n\n.md-open-menu-container:not(.md-clickable) {\n  pointer-events: none;\n}\n\n.md-open-menu-container.md-active {\n  opacity: 1;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 200ms;\n}\n\n.md-open-menu-container.md-active > md-menu-content > * {\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 200ms;\n  transition-delay: 100ms;\n}\n\n.md-open-menu-container.md-leave {\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 250ms;\n}\n\nmd-menu-content {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 8px 0;\n  max-height: 304px;\n  overflow-y: auto;\n}\n\nmd-menu-content.md-dense {\n  max-height: 208px;\n}\n\nmd-menu-content.md-dense md-menu-item {\n  height: 32px;\n  min-height: 0px;\n}\n\nmd-menu-item {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-height: 48px;\n  height: 48px;\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\nmd-menu-item > * {\n  width: 100%;\n  margin: auto 0;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nmd-menu-item > .md-button {\n  border-radius: 0;\n  margin: auto 0;\n  font-size: 15px;\n  text-transform: none;\n  font-weight: 400;\n  text-align: start;\n  height: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  display: inline-block;\n  -webkit-align-items: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -webkit-align-content: left;\n      -ms-flex-line-pack: left;\n          align-content: left;\n  width: 100%;\n}\n\nmd-menu-item > .md-button md-icon {\n  margin: auto 16px auto 0;\n}\n\nmd-menu-item > .md-button p {\n  display: inline-block;\n  margin: auto;\n}\n\nmd-menu-item > .md-button span {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nmd-menu-item > .md-button .md-ripple-container {\n  border-radius: inherit;\n}\n\n.md-menu {\n  padding: 8px 0;\n}\n\nmd-toolbar .md-menu {\n  height: auto;\n  margin: auto;\n}\n\n@media (max-width: 599px) {\n  md-menu-content {\n    min-width: 112px;\n  }\n  md-menu-content[width=\"3\"] {\n    min-width: 168px;\n  }\n  md-menu-content[width=\"4\"] {\n    min-width: 224px;\n  }\n  md-menu-content[width=\"5\"] {\n    min-width: 280px;\n  }\n  md-menu-content[width=\"6\"] {\n    min-width: 336px;\n  }\n  md-menu-content[width=\"7\"] {\n    min-width: 392px;\n  }\n}\n\n@media (min-width: 600px) {\n  md-menu-content {\n    min-width: 96px;\n  }\n  md-menu-content[width=\"3\"] {\n    min-width: 192px;\n  }\n  md-menu-content[width=\"4\"] {\n    min-width: 256px;\n  }\n  md-menu-content[width=\"5\"] {\n    min-width: 320px;\n  }\n  md-menu-content[width=\"6\"] {\n    min-width: 384px;\n  }\n  md-menu-content[width=\"7\"] {\n    min-width: 448px;\n  }\n}\n\nmd-toolbar.md-menu-toolbar h2.md-toolbar-tools {\n  line-height: 1rem;\n  height: auto;\n  padding: 28px;\n  padding-bottom: 12px;\n}\n\nmd-menu-bar {\n  padding: 0 20px;\n  display: block;\n  position: relative;\n  z-index: 2;\n}\n\nmd-menu-bar .md-menu {\n  display: inline-block;\n  padding: 0;\n  position: relative;\n}\n\nmd-menu-bar button {\n  font-size: 14px;\n  padding: 0 10px;\n  margin: 0;\n  border: 0;\n  background-color: transparent;\n  height: 40px;\n}\n\nmd-menu-bar md-backdrop.md-menu-backdrop {\n  z-index: -2;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense {\n  max-height: none;\n  padding: 16px 0;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent {\n  position: relative;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > md-icon {\n  position: absolute;\n  padding: 0;\n  width: 24px;\n  top: 6px;\n  left: 24px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent > .md-button, md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu > .md-button {\n  padding: 0 32px 0 64px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-button {\n  min-height: 0;\n  height: 32px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-button span {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  margin: 0 8px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense md-menu-divider {\n  margin: 8px 0;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-menu {\n  padding: 0;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  text-align: left;\n  text-align: start;\n  text-transform: none;\n  font-weight: normal;\n  border-radius: 0px;\n  padding-left: 16px;\n}\n\nmd-menu-content.md-menu-bar-menu.md-dense .md-menu > .md-button:after {\n  display: block;\n  content: '\\25BC';\n  position: absolute;\n  top: 0px;\n  speak: none;\n  -webkit-transform: rotate(270deg) scaleY(0.45) scaleX(0.9);\n          transform: rotate(270deg) scaleY(0.45) scaleX(0.9);\n  right: 28px;\n}\n\nmd-progress-circular {\n  display: block;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  padding-top: 0 !important;\n  margin-bottom: 0 !important;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\nmd-progress-circular .md-spinner-wrapper {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner {\n  width: 100px;\n  height: 100px;\n  position: relative;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-gap {\n  position: absolute;\n  left: 49px;\n  right: 49px;\n  top: 0;\n  bottom: 0;\n  border-top-width: 10px;\n  border-top-style: solid;\n  box-sizing: border-box;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left, md-progress-circular .md-spinner-wrapper .md-inner .md-right {\n  position: absolute;\n  top: 0;\n  height: 100px;\n  width: 50px;\n  overflow: hidden;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left .md-half-circle, md-progress-circular .md-spinner-wrapper .md-inner .md-right .md-half-circle {\n  position: absolute;\n  top: 0;\n  width: 100px;\n  height: 100px;\n  box-sizing: border-box;\n  border-width: 10px;\n  border-style: solid;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left {\n  left: 0;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-left .md-half-circle {\n  left: 0;\n  border-right-color: transparent;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-right {\n  right: 0;\n}\n\nmd-progress-circular .md-spinner-wrapper .md-inner .md-right .md-half-circle {\n  right: 0;\n  border-left-color: transparent;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate {\n  -webkit-animation: outer-rotate 2.91667s linear infinite;\n          animation: outer-rotate 2.91667s linear infinite;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner {\n  -webkit-animation: sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite;\n          animation: sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-left .md-half-circle, md-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-right .md-half-circle {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 1.3125s;\n          animation-duration: 1.3125s;\n  -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n          animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-left .md-half-circle {\n  -webkit-animation-name: left-wobble;\n          animation-name: left-wobble;\n}\n\nmd-progress-circular .md-spinner-wrapper.md-mode-indeterminate .md-inner .md-right .md-half-circle {\n  -webkit-animation-name: right-wobble;\n          animation-name: right-wobble;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner .md-left .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-circular md-progress-circular.ng-hide .md-spinner-wrapper .md-inner .md-right .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide .md-inner {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide .md-inner .md-left .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-circular .md-spinner-wrapper.ng-hide .md-inner .md-right .md-half-circle {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\n@-webkit-keyframes outer-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes outer-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes left-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n}\n\n@keyframes left-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n}\n\n@-webkit-keyframes right-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n}\n\n@keyframes right-wobble {\n  0%, 100% {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n}\n\n@-webkit-keyframes sporadic-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  100% {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n}\n\n@keyframes sporadic-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  100% {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n}\n\nmd-radio-button,\n.md-switch-thumb {\n  box-sizing: border-box;\n  display: block;\n  margin: 15px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\nmd-radio-button .md-container,\n.md-switch-thumb .md-container {\n  box-sizing: border-box;\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n\nmd-radio-button .md-container .md-ripple-container,\n.md-switch-thumb .md-container .md-ripple-container {\n  position: absolute;\n  display: block;\n  width: 48px;\n  height: 48px;\n  left: -16px;\n  top: -16px;\n}\n\nmd-radio-button .md-container:before,\n.md-switch-thumb .md-container:before {\n  box-sizing: border-box;\n  background-color: transparent;\n  border-radius: 50%;\n  content: '';\n  position: absolute;\n  display: block;\n  height: auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s;\n  width: auto;\n}\n\nmd-radio-button.md-align-top-left > div.md-container,\n.md-switch-thumb.md-align-top-left > div.md-container {\n  top: -15px;\n}\n\nmd-radio-button .md-off,\n.md-switch-thumb .md-off {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 50%;\n  transition: border-color ease 0.28s;\n}\n\nmd-radio-button .md-on,\n.md-switch-thumb .md-on {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  transition: -webkit-transform ease 0.28s;\n  transition: transform ease 0.28s;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nmd-radio-button.md-checked .md-on,\n.md-switch-thumb.md-checked .md-on {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\nmd-radio-button .md-label,\n.md-switch-thumb .md-label {\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 0;\n  vertical-align: middle;\n  white-space: normal;\n  pointer-events: none;\n  width: auto;\n}\n\nhtml[dir=rtl] md-radio-button .md-label,\nhtml[dir=rtl] .md-switch-thumb .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-radio-button .md-label,\nbody[dir=rtl] .md-switch-thumb .md-label {\n  margin-left: 0;\n  unicode-bidi: embed;\n}\n\nmd-radio-button .md-label bdo[dir=rtl],\n.md-switch-thumb .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-radio-button .md-label bdo[dir=ltr],\n.md-switch-thumb .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nhtml[dir=rtl] md-radio-button .md-label,\nhtml[dir=rtl] .md-switch-thumb .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-radio-button .md-label,\nbody[dir=rtl] .md-switch-thumb .md-label {\n  margin-right: 10px;\n  unicode-bidi: embed;\n}\n\nmd-radio-button .md-label bdo[dir=rtl],\n.md-switch-thumb .md-label bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-radio-button .md-label bdo[dir=ltr],\n.md-switch-thumb .md-label bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-radio-button .circle,\n.md-switch-thumb .circle {\n  border-radius: 50%;\n}\n\nmd-radio-group:focus {\n  outline: none;\n}\n\nmd-radio-group.md-focused .md-checked .md-container:before {\n  left: -8px;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-radio-button.md-default-theme .md-on {\n    background-color: #fff;\n  }\n}\n\nmd-progress-linear {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 5px;\n  padding-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\nmd-progress-linear .md-container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  -webkit-transform: translate(0, 0) scale(1, 1);\n          transform: translate(0, 0) scale(1, 1);\n}\n\nmd-progress-linear .md-container .md-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}\n\nmd-progress-linear .md-container .md-dashed:before {\n  content: \"\";\n  display: none;\n  position: absolute;\n  margin-top: 0;\n  height: 5px;\n  width: 100%;\n  background-color: transparent;\n  background-size: 10px 10px !important;\n  background-position: 0px -23px;\n}\n\nmd-progress-linear .md-container .md-bar1, md-progress-linear .md-container .md-bar2 {\n  transition: -webkit-transform 0.2s linear;\n  transition: transform 0.2s linear;\n}\n\nmd-progress-linear .md-container.md-mode-query .md-bar1 {\n  display: none;\n}\n\nmd-progress-linear .md-container.md-mode-query .md-bar2 {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n          animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n\nmd-progress-linear .md-container.md-mode-determinate .md-bar1 {\n  display: none;\n}\n\nmd-progress-linear .md-container.md-mode-indeterminate .md-bar1 {\n  -webkit-animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;\n          animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;\n}\n\nmd-progress-linear .md-container.md-mode-indeterminate .md-bar2 {\n  -webkit-animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;\n          animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;\n}\n\nmd-progress-linear .md-container.ng-hide {\n  -webkit-animation: none;\n          animation: none;\n}\n\nmd-progress-linear .md-container.ng-hide .md-bar1 {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-linear .md-container.ng-hide .md-bar2 {\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n\nmd-progress-linear .md-container.md-mode-buffer {\n  background-color: transparent !important;\n  transition: all 0.2s linear;\n}\n\nmd-progress-linear .md-container.md-mode-buffer .md-dashed:before {\n  display: block;\n  -webkit-animation: buffer 3s infinite linear;\n          animation: buffer 3s infinite linear;\n}\n\n@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n\n@keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1);\n  }\n}\n\n@-webkit-keyframes buffer {\n  0% {\n    opacity: 1;\n    background-position: 0px -23px;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n}\n\n@keyframes buffer {\n  0% {\n    opacity: 1;\n    background-position: 0px -23px;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-scale-1 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  36.6% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n  }\n  69.15% {\n    -webkit-transform: scaleX(0.83);\n            transform: scaleX(0.83);\n    -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n            animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-scale-1 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  36.6% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n            animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);\n  }\n  69.15% {\n    -webkit-transform: scaleX(0.83);\n            transform: scaleX(0.83);\n    -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n            animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-1 {\n  0% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  20% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n  }\n  69.15% {\n    left: 21.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n  }\n  100% {\n    left: 95.44444%;\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-1 {\n  0% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n  20% {\n    left: -105.16667%;\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n            animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n  }\n  69.15% {\n    left: 21.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n            animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n  }\n  100% {\n    left: 95.44444%;\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-scale-2 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n  }\n  19.15% {\n    -webkit-transform: scaleX(0.57);\n            transform: scaleX(0.57);\n    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n  }\n  44.15% {\n    -webkit-transform: scaleX(0.91);\n            transform: scaleX(0.91);\n    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-scale-2 {\n  0% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n    -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n            animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);\n  }\n  19.15% {\n    -webkit-transform: scaleX(0.57);\n            transform: scaleX(0.57);\n    -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n            animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);\n  }\n  44.15% {\n    -webkit-transform: scaleX(0.91);\n            transform: scaleX(0.91);\n    -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n            animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);\n  }\n  100% {\n    -webkit-transform: scaleX(0.1);\n            transform: scaleX(0.1);\n  }\n}\n\n@-webkit-keyframes md-progress-linear-indeterminate-2 {\n  0% {\n    left: -54.88889%;\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n  }\n  25% {\n    left: -17.25%;\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n  }\n  48.35% {\n    left: 29.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n  }\n  100% {\n    left: 117.38889%;\n  }\n}\n\n@keyframes md-progress-linear-indeterminate-2 {\n  0% {\n    left: -54.88889%;\n    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n            animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);\n  }\n  25% {\n    left: -17.25%;\n    -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n            animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);\n  }\n  48.35% {\n    left: 29.5%;\n    -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n            animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);\n  }\n  100% {\n    left: 117.38889%;\n  }\n}\n\n.md-select-menu-container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 99;\n  opacity: 0;\n}\n\n.md-select-menu-container:not(.md-clickable) {\n  pointer-events: none;\n}\n\n.md-select-menu-container md-progress-circular {\n  display: table;\n  margin: 24px auto !important;\n}\n\n.md-select-menu-container.md-active {\n  opacity: 1;\n}\n\n.md-select-menu-container.md-active md-select-menu {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 150ms;\n}\n\n.md-select-menu-container.md-active md-select-menu > * {\n  opacity: 1;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 150ms;\n  transition-delay: 100ms;\n}\n\n.md-select-menu-container.md-leave {\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: 250ms;\n}\n\nmd-input-container > md-select {\n  margin: auto 0 0 0;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\nmd-select {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 20px 0 26px 0;\n}\n\nmd-select:focus {\n  outline: none;\n}\n\nmd-select[disabled]:hover {\n  cursor: default;\n}\n\nmd-select:not([disabled]):hover {\n  cursor: pointer;\n}\n\nmd-select:not([disabled]).ng-invalid.ng-dirty .md-select-value {\n  border-bottom: 2px solid;\n  padding-bottom: 0;\n}\n\nmd-select:not([disabled]):focus .md-select-value {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  padding-bottom: 0;\n}\n\n.md-select-value {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 2px 2px 1px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  background-color: transparent;\n  position: relative;\n  box-sizing: content-box;\n  min-width: 64px;\n  min-height: 26px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.md-select-value *:first-child {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: calc(100% - 2*8px);\n  -webkit-transform: translate3d(0, 2px, 0);\n          transform: translate3d(0, 2px, 0);\n}\n\n.md-select-value .md-select-icon {\n  display: block;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  text-align: end;\n  width: 24px;\n  margin: 0 4px;\n  -webkit-transform: translate3d(0, 1px, 0);\n          transform: translate3d(0, 1px, 0);\n}\n\n.md-select-value .md-select-icon:after {\n  display: block;\n  content: '\\25BC';\n  position: relative;\n  top: 2px;\n  speak: none;\n  -webkit-transform: scaleY(0.6) scaleX(1);\n          transform: scaleY(0.6) scaleX(1);\n}\n\n.md-select-value.md-select-placeholder {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n  pointer-events: none;\n  -webkit-font-smoothing: antialiased;\n  padding-left: 2px;\n  z-index: 1;\n}\n\nmd-select-menu {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.14), 0px 2px 2px 0px rgba(0, 0, 0, 0.098), 0px 1px 5px 0px rgba(0, 0, 0, 0.084);\n  max-height: 256px;\n  min-height: 48px;\n  overflow-y: hidden;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-select-menu.md-reverse {\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\nmd-select-menu:not(.md-overflow) md-content {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\nhtml[dir=rtl] md-select-menu {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nbody[dir=rtl] md-select-menu {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n  unicode-bidi: embed;\n}\n\nmd-select-menu bdo[dir=rtl] {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nmd-select-menu bdo[dir=ltr] {\n  direction: ltr;\n  unicode-bidi: bidi-override;\n}\n\nmd-select-menu md-content {\n  min-width: 136px;\n  min-height: 48px;\n  max-height: 256px;\n  overflow-y: auto;\n}\n\nmd-select-menu > * {\n  opacity: 0;\n}\n\nmd-option {\n  cursor: pointer;\n  position: relative;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0 16px 0 16px;\n  height: 48px;\n}\n\nmd-option:focus {\n  outline: none;\n}\n\nmd-option .md-text {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n}\n\nmd-optgroup {\n  display: block;\n}\n\nmd-optgroup label {\n  display: block;\n  font-size: 14px;\n  text-transform: uppercase;\n  padding: 16px;\n  font-weight: 500;\n}\n\nmd-optgroup md-option {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-select-backdrop {\n    background-color: transparent;\n  }\n  md-select-menu {\n    border: 1px solid #fff;\n  }\n}\n\n@-webkit-keyframes sliderFocusThumb {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes sliderFocusThumb {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\nmd-slider {\n  height: 48px;\n  position: relative;\n  display: block;\n  margin-left: 4px;\n  margin-right: 4px;\n  padding: 0;\n  /**\n   * Track\n   */\n  /**\n   * Slider thumb\n   */\n  /* The sign that's focused in discrete mode */\n  /**\n   * The border/background that comes in when focused in non-discrete mode\n   */\n  /* Don't animate left/right while panning */\n}\n\nmd-slider *, md-slider *:after {\n  box-sizing: border-box;\n}\n\nmd-slider .md-slider-wrapper {\n  position: relative;\n}\n\nmd-slider .md-track-container {\n  width: 100%;\n  position: absolute;\n  top: 23px;\n  height: 2px;\n}\n\nmd-slider .md-track {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\nmd-slider .md-track-fill {\n  transition: width 0.05s linear;\n}\n\nmd-slider .md-track-ticks {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\nmd-slider .md-track-ticks canvas {\n  width: 100%;\n}\n\nmd-slider .md-thumb-container {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  transition: left 0.1s linear;\n}\n\nmd-slider .md-thumb {\n  z-index: 1;\n  position: absolute;\n  left: -19px;\n  top: 5px;\n  width: 38px;\n  height: 38px;\n  border-radius: 38px;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  transition: all 0.1s linear;\n}\n\nmd-slider .md-thumb:after {\n  content: '';\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n  border-width: 3px;\n  border-style: solid;\n}\n\nmd-slider .md-sign {\n  /* Center the children (slider-thumb-text) */\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  left: -14px;\n  top: -20px;\n  width: 28px;\n  height: 28px;\n  border-radius: 28px;\n  -webkit-transform: scale(0.4) translate3d(0, 70px, 0);\n          transform: scale(0.4) translate3d(0, 70px, 0);\n  transition: all 0.2s ease-in-out;\n  /* The arrow pointing down under the sign */\n}\n\nmd-slider .md-sign:after {\n  position: absolute;\n  content: '';\n  left: 0px;\n  border-radius: 16px;\n  top: 19px;\n  border-left: 14px solid transparent;\n  border-right: 14px solid transparent;\n  border-top-width: 16px;\n  border-top-style: solid;\n  opacity: 0;\n  -webkit-transform: translate3d(0, -8px, 0);\n          transform: translate3d(0, -8px, 0);\n  transition: all 0.2s ease-in-out;\n}\n\nmd-slider .md-sign .md-thumb-text {\n  z-index: 1;\n  font-size: 12px;\n  font-weight: bold;\n}\n\nmd-slider .md-focus-thumb {\n  position: absolute;\n  left: -24px;\n  top: 0px;\n  width: 48px;\n  height: 48px;\n  border-radius: 48px;\n  display: none;\n  opacity: 0;\n  background-color: #C0C0C0;\n  -webkit-animation: sliderFocusThumb 0.4s linear;\n          animation: sliderFocusThumb 0.4s linear;\n}\n\nmd-slider .md-focus-ring {\n  position: absolute;\n  left: -24px;\n  top: 0px;\n  width: 48px;\n  height: 48px;\n  border-radius: 48px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all 0.2s linear;\n  opacity: 0.26;\n}\n\nmd-slider .md-disabled-thumb {\n  position: absolute;\n  left: -22px;\n  top: 2px;\n  width: 44px;\n  height: 44px;\n  border-radius: 44px;\n  -webkit-transform: scale(0.35);\n          transform: scale(0.35);\n  border-width: 6px;\n  border-style: solid;\n  display: none;\n}\n\nmd-slider.md-min .md-thumb:after {\n  background-color: white;\n}\n\nmd-slider.md-min .md-sign {\n  opacity: 0;\n}\n\nmd-slider:focus {\n  outline: none;\n}\n\nmd-slider.dragging .md-thumb-container,\nmd-slider.dragging .md-track-fill {\n  transition: none;\n}\n\nmd-slider:not([md-discrete]) {\n  /* Hide the sign and ticks in non-discrete mode */\n}\n\nmd-slider:not([md-discrete]) .md-track-ticks,\nmd-slider:not([md-discrete]) .md-sign {\n  display: none;\n}\n\nmd-slider:not([md-discrete]):not([disabled]):hover .md-thumb {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n}\n\nmd-slider:not([md-discrete]):not([disabled]):focus .md-focus-thumb,\nmd-slider:not([md-discrete]):not([disabled]).active .md-focus-thumb {\n  display: block;\n}\n\nmd-slider:not([md-discrete]):not([disabled]):focus .md-focus-ring,\nmd-slider:not([md-discrete]):not([disabled]).active .md-focus-ring {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\nmd-slider:not([md-discrete]):not([disabled]):focus .md-thumb,\nmd-slider:not([md-discrete]):not([disabled]).active .md-thumb {\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n}\n\nmd-slider[md-discrete] {\n  /* Hide the focus thumb in discrete mode */\n}\n\nmd-slider[md-discrete] .md-focus-thumb,\nmd-slider[md-discrete] .md-focus-ring {\n  display: none;\n}\n\nmd-slider[md-discrete]:not([disabled]):focus .md-sign,\nmd-slider[md-discrete]:not([disabled]):focus .md-sign:after,\nmd-slider[md-discrete]:not([disabled]).active .md-sign,\nmd-slider[md-discrete]:not([disabled]).active .md-sign:after {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n\nmd-slider[disabled] .md-track-fill {\n  display: none;\n}\n\nmd-slider[disabled] .md-sign {\n  display: none;\n}\n\nmd-slider[disabled] .md-thumb {\n  -webkit-transform: scale(0.35);\n          transform: scale(0.35);\n}\n\nmd-slider[disabled] .md-disabled-thumb {\n  display: block;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-slider.md-default-theme .md-track {\n    border-bottom: 1px solid #fff;\n  }\n}\n\nmd-sidenav {\n  box-sizing: border-box;\n  position: absolute;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  z-index: 60;\n  width: 304px;\n  min-width: 304px;\n  max-width: 304px;\n  bottom: 0;\n  background-color: white;\n  overflow: auto;\n}\n\nmd-sidenav ul {\n  list-style: none;\n}\n\nmd-sidenav.md-closed {\n  display: none;\n}\n\nmd-sidenav.md-closed-add,\nmd-sidenav.md-closed-remove {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  transition: 0.2s ease-in all;\n}\n\nmd-sidenav.md-closed-add.md-closed-add-active,\nmd-sidenav.md-closed-remove.md-closed-remove-active {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-sidenav.md-locked-open-add,\nmd-sidenav.md-locked-open-remove {\n  position: static;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-sidenav.md-locked-open {\n  width: 304px;\n  min-width: 304px;\n  max-width: 304px;\n}\n\nmd-sidenav.md-locked-open,\nmd-sidenav.md-locked-open.md-closed,\nmd-sidenav.md-locked-open.md-closed.md-sidenav-left,\nmd-sidenav.md-locked-open.md-closed,\nmd-sidenav.md-locked-open.md-closed.md-sidenav-right,\nmd-sidenav.md-locked-open-remove.md-closed {\n  position: static;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-sidenav.md-locked-open-remove-active {\n  transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  width: 0;\n  min-width: 0;\n}\n\nmd-sidenav.md-closed.md-locked-open-add {\n  width: 0;\n  min-width: 0;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\nmd-sidenav.md-closed.md-locked-open-add-active {\n  transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  width: 304px;\n  min-width: 304px;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\n.md-sidenav-backdrop.md-locked-open {\n  display: none;\n}\n\n.md-sidenav-left, md-sidenav {\n  left: 0;\n  top: 0;\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\n.md-sidenav-left.md-closed, md-sidenav.md-closed {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n\n.md-sidenav-right {\n  left: 100%;\n  top: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n\n.md-sidenav-right.md-closed {\n  -webkit-transform: translate3d(0%, 0, 0);\n          transform: translate3d(0%, 0, 0);\n}\n\n@media (max-width: 360px) {\n  md-sidenav {\n    width: 85%;\n  }\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-sidenav-left, md-sidenav {\n    border-right: 1px solid #fff;\n  }\n  .md-sidenav-right {\n    border-left: 1px solid #fff;\n  }\n}\n\n.md-sticky-clone {\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  position: absolute !important;\n  -webkit-transform: translate3d(-9999px, -9999px, 0);\n          transform: translate3d(-9999px, -9999px, 0);\n}\n\n.md-sticky-clone[sticky-state=\"active\"] {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.md-sticky-clone[sticky-state=\"active\"]:not(.md-sticky-no-effect) .md-subheader-inner {\n  -webkit-animation: subheaderStickyHoverIn 0.3s ease-out both;\n          animation: subheaderStickyHoverIn 0.3s ease-out both;\n}\n\n@-webkit-keyframes subheaderStickyHoverIn {\n  0% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n  100% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n}\n\n@keyframes subheaderStickyHoverIn {\n  0% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n  100% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n}\n\n@-webkit-keyframes subheaderStickyHoverOut {\n  0% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n\n@keyframes subheaderStickyHoverOut {\n  0% {\n    box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect) {\n  transition: 0.2s ease-out margin;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect) .md-subheader {\n  margin: 0;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect).md-sticky-clone {\n  z-index: 2;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect)[sticky-state=\"active\"] {\n  margin-top: -2px;\n}\n\n.md-subheader-wrapper:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state=\"active\"] .md-subheader-inner:after {\n  -webkit-animation: subheaderStickyHoverOut 0.3s ease-out both;\n          animation: subheaderStickyHoverOut 0.3s ease-out both;\n}\n\n.md-subheader {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1em;\n  margin: 0 0 0 0;\n  margin-right: 16px;\n  position: relative;\n}\n\n.md-subheader .md-subheader-inner {\n  display: block;\n  padding: 16px 0px 16px 16px;\n}\n\n.md-subheader .md-subheader-content {\n  display: block;\n  z-index: 1;\n  position: relative;\n}\n\nmd-switch {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 15px;\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nmd-switch .md-container {\n  cursor: -webkit-grab;\n  cursor: grab;\n  width: 36px;\n  height: 24px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-right: 8px;\n}\n\nmd-switch:not([disabled]) .md-dragging,\nmd-switch:not([disabled]).md-dragging .md-container {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\nmd-switch.md-focused:not([disabled]) .md-thumb:before {\n  left: -8px;\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n}\n\nmd-switch.md-focused:not([disabled]):not(.md-checked) .md-thumb:before {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\nmd-switch .md-label {\n  border-color: transparent;\n  border-width: 0;\n}\n\nmd-switch .md-bar {\n  left: 1px;\n  width: 34px;\n  top: 5px;\n  height: 14px;\n  border-radius: 8px;\n  position: absolute;\n}\n\nmd-switch .md-thumb-container {\n  top: 2px;\n  left: 0;\n  width: 16px;\n  position: absolute;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  z-index: 1;\n}\n\nmd-switch.md-checked .md-thumb-container {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n\nmd-switch .md-thumb {\n  position: absolute;\n  margin: 0;\n  left: 0;\n  top: 0;\n  outline: none;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.14), 0px 2px 2px 0px rgba(0, 0, 0, 0.098), 0px 1px 5px 0px rgba(0, 0, 0, 0.084);\n}\n\nmd-switch .md-thumb:before {\n  background-color: transparent;\n  border-radius: 50%;\n  content: '';\n  position: absolute;\n  display: block;\n  height: auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s;\n  width: auto;\n}\n\nmd-switch .md-thumb .md-ripple-container {\n  position: absolute;\n  display: block;\n  width: auto;\n  height: auto;\n  left: -20px;\n  top: -20px;\n  right: -20px;\n  bottom: -20px;\n}\n\nmd-switch:not(.md-dragging) .md-bar,\nmd-switch:not(.md-dragging) .md-thumb-container,\nmd-switch:not(.md-dragging) .md-thumb {\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition-property: -webkit-transform, background-color;\n  transition-property: transform, background-color;\n}\n\nmd-switch:not(.md-dragging) .md-bar,\nmd-switch:not(.md-dragging) .md-thumb {\n  transition-delay: 0.05s;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-switch.md-default-theme .md-bar {\n    background-color: #666;\n  }\n  md-switch.md-default-theme.md-checked .md-bar {\n    background-color: #9E9E9E;\n  }\n  md-switch.md-default-theme .md-thumb {\n    background-color: #fff;\n  }\n}\n\n@-webkit-keyframes md-tab-content-hide {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes md-tab-content-hide {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\nmd-tab-data {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0;\n}\n\nmd-tabs {\n  display: block;\n  margin: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n\nmd-tabs:not(.md-no-tab-content):not(.md-dynamic-height) {\n  min-height: 248px;\n}\n\nmd-tabs[md-align-tabs=\"bottom\"] md-tabs-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 48px;\n}\n\nmd-tabs[md-align-tabs=\"bottom\"] md-tabs-content-wrapper {\n  top: 0;\n  bottom: 48px;\n}\n\nmd-tabs.md-dynamic-height md-tabs-content-wrapper {\n  min-height: 0;\n  position: relative;\n  top: auto;\n  left: auto;\n  right: auto;\n  bottom: auto;\n  overflow: visible;\n}\n\nmd-tabs.md-dynamic-height md-tab-content.md-active {\n  position: relative;\n}\n\nmd-tabs[md-border-bottom] md-tabs-wrapper {\n  border-width: 0 0 1px;\n  border-style: solid;\n}\n\nmd-tabs[md-border-bottom]:not(.md-dynamic-height) md-tabs-content-wrapper {\n  top: 49px;\n}\n\nmd-tabs-wrapper {\n  display: block;\n  position: relative;\n}\n\nmd-tabs-wrapper md-prev-button, md-tabs-wrapper md-next-button {\n  height: 100%;\n  width: 32px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  line-height: 1em;\n  z-index: 2;\n  cursor: pointer;\n  font-size: 16px;\n  background: transparent no-repeat center center;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-tabs-wrapper md-prev-button:focus, md-tabs-wrapper md-next-button:focus {\n  outline: none;\n}\n\nmd-tabs-wrapper md-prev-button.md-disabled, md-tabs-wrapper md-next-button.md-disabled {\n  opacity: 0.25;\n  cursor: default;\n}\n\nmd-tabs-wrapper md-prev-button.ng-leave, md-tabs-wrapper md-next-button.ng-leave {\n  transition: none;\n}\n\nmd-tabs-wrapper md-prev-button md-icon, md-tabs-wrapper md-next-button md-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n}\n\nmd-tabs-wrapper md-prev-button {\n  left: 0;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==\");\n}\n\nmd-tabs-wrapper md-next-button {\n  right: 0;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K\");\n}\n\nmd-tabs-wrapper md-next-button md-icon {\n  -webkit-transform: translate3d(-50%, -50%, 0) rotate(180deg);\n          transform: translate3d(-50%, -50%, 0) rotate(180deg);\n}\n\nmd-tabs-wrapper.md-stretch-tabs md-pagination-wrapper {\n  width: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nmd-tabs-wrapper.md-stretch-tabs md-pagination-wrapper md-tab-item {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\nmd-tabs-canvas {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  height: 48px;\n}\n\nmd-tabs-canvas:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\nmd-tabs-canvas .md-dummy-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmd-tabs-canvas.md-paginated {\n  margin: 0 32px;\n}\n\nmd-tabs-canvas.md-center-tabs {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n}\n\nmd-tabs-canvas.md-center-tabs .md-tab {\n  float: none;\n  display: inline-block;\n}\n\nmd-pagination-wrapper {\n  height: 48px;\n  display: block;\n  transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  position: absolute;\n  width: 999999px;\n  left: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\nmd-pagination-wrapper:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\nmd-pagination-wrapper.md-center-tabs {\n  position: relative;\n  width: initial;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 auto;\n}\n\nmd-tabs-content-wrapper {\n  display: block;\n  position: absolute;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n\nmd-tab-content {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  overflow: auto;\n}\n\nmd-tab-content.md-no-scroll {\n  bottom: auto;\n  overflow: hidden;\n}\n\nmd-tab-content.ng-leave, md-tab-content.md-no-transition {\n  transition: none;\n}\n\nmd-tab-content.md-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-animation: 1s md-tab-content-hide;\n          animation: 1s md-tab-content-hide;\n  opacity: 0;\n}\n\nmd-tab-content.md-left * {\n  transition: visibility 0s linear;\n  transition-delay: 0.5s;\n  visibility: hidden;\n}\n\nmd-tab-content.md-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  -webkit-animation: 1s md-tab-content-hide;\n          animation: 1s md-tab-content-hide;\n  opacity: 0;\n}\n\nmd-tab-content.md-right * {\n  transition: visibility 0s linear;\n  transition-delay: 0.5s;\n  visibility: hidden;\n}\n\nmd-tab-content > div.ng-leave {\n  -webkit-animation: 1s md-tab-content-hide;\n          animation: 1s md-tab-content-hide;\n}\n\nmd-ink-bar {\n  position: absolute;\n  left: auto;\n  right: auto;\n  bottom: 0;\n  height: 2px;\n}\n\nmd-ink-bar.md-left {\n  transition: left 0.225s cubic-bezier(0.35, 0, 0.25, 1), right 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-ink-bar.md-right {\n  transition: left 0.5s cubic-bezier(0.35, 0, 0.25, 1), right 0.225s cubic-bezier(0.35, 0, 0.25, 1);\n}\n\nmd-tab {\n  position: absolute;\n  z-index: -1;\n  left: -9999px;\n}\n\n.md-tab {\n  font-size: 14px;\n  text-align: center;\n  line-height: 24px;\n  padding: 12px 24px;\n  transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);\n  cursor: pointer;\n  white-space: nowrap;\n  position: relative;\n  text-transform: uppercase;\n  float: left;\n  font-weight: 500;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.md-tab.md-focused {\n  box-shadow: none;\n  outline: none;\n}\n\n.md-tab.md-active {\n  cursor: default;\n}\n\n.md-tab.md-disabled {\n  pointer-events: none;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  opacity: 0.5;\n  cursor: default;\n}\n\n.md-tab.ng-leave {\n  transition: none;\n}\n\nmd-toolbar + md-tabs {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\nmd-toast {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 90;\n  box-sizing: border-box;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 48px;\n  padding-left: 24px;\n  padding-right: 24px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 2px;\n  font-size: 14px;\n  cursor: default;\n  height: auto;\n  max-height: 168px;\n  max-width: 100%;\n  overflow: hidden;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0) rotateZ(0deg);\n          transform: translate3d(0, 0, 0) rotateZ(0deg);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  /* Transition differently when swiping */\n}\n\nmd-toast.md-capsule {\n  border-radius: 24px;\n}\n\nmd-toast.ng-leave-active {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-toast.md-swipeleft,\nmd-toast.md-swiperight,\nmd-toast.md-swipeup,\nmd-toast.md-swipedown {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\nmd-toast.ng-enter {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  opacity: 0;\n}\n\nmd-toast.ng-enter.md-top {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n\nmd-toast.ng-enter.ng-enter-active {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n\nmd-toast.ng-leave.ng-leave-active {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n\nmd-toast.ng-leave.ng-leave-active.md-top {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n\nmd-toast.ng-leave.ng-leave-active.md-swipeleft {\n  -webkit-transform: translate3d(-100%, 0%, 0);\n          transform: translate3d(-100%, 0%, 0);\n}\n\nmd-toast.ng-leave.ng-leave-active.md-swiperight {\n  -webkit-transform: translate3d(100%, 0%, 0);\n          transform: translate3d(100%, 0%, 0);\n}\n\nmd-toast .md-action {\n  line-height: 19px;\n  margin-left: 24px;\n  cursor: pointer;\n  text-transform: uppercase;\n  float: right;\n}\n\nmd-toast .md-action.md-button {\n  min-width: 0;\n}\n\n@media (max-width: 600px) {\n  md-toast {\n    left: 0;\n    right: 0;\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    border-radius: 0;\n    bottom: 0;\n  }\n  md-toast.md-top {\n    bottom: auto;\n    top: 0;\n  }\n}\n\n@media (min-width: 600px) {\n  md-toast {\n    min-width: 288px;\n    /*\n     * When the toast doesn't take up the whole screen,\n     * make it rotate when the user swipes it away\n     */\n  }\n  md-toast.md-bottom {\n    bottom: 8px;\n  }\n  md-toast.md-left {\n    left: 8px;\n  }\n  md-toast.md-right {\n    right: 8px;\n  }\n  md-toast.md-top {\n    top: 8px;\n  }\n  md-toast.ng-leave.ng-leave-active.md-swipeleft {\n    -webkit-transform: translate3d(-100%, 25%, 0) rotateZ(-15deg);\n            transform: translate3d(-100%, 25%, 0) rotateZ(-15deg);\n  }\n  md-toast.ng-leave.ng-leave-active.md-swiperight {\n    -webkit-transform: translate3d(100%, 25%, 0) rotateZ(15deg);\n            transform: translate3d(100%, 25%, 0) rotateZ(15deg);\n  }\n  md-toast.ng-leave.ng-leave-active.md-top.md-swipeleft {\n    -webkit-transform: translate3d(-100%, 0, 0) rotateZ(-15deg);\n            transform: translate3d(-100%, 0, 0) rotateZ(-15deg);\n  }\n  md-toast.ng-leave.ng-leave-active.md-top.md-swiperight {\n    -webkit-transform: translate3d(100%, 0, 0) rotateZ(15deg);\n            transform: translate3d(100%, 0, 0) rotateZ(15deg);\n  }\n}\n\n@media (min-width: 1200px) {\n  md-toast {\n    max-width: 568px;\n  }\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-toast {\n    border: 1px solid #fff;\n  }\n}\n\nmd-toolbar {\n  box-sizing: border-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n  min-height: 64px;\n  width: 100%;\n}\n\nmd-toolbar.md-whiteframe-z1-add, md-toolbar.md-whiteframe-z1-remove {\n  transition: box-shadow 0.5s linear;\n}\n\nmd-toolbar md-toolbar-filler {\n  width: 72px;\n}\n\nmd-toolbar *,\nmd-toolbar *:before,\nmd-toolbar *:after {\n  box-sizing: border-box;\n}\n\nmd-toolbar.md-tall {\n  height: 128px;\n  min-height: 128px;\n  max-height: 128px;\n}\n\nmd-toolbar.md-medium-tall {\n  height: 88px;\n  min-height: 88px;\n  max-height: 88px;\n}\n\nmd-toolbar.md-medium-tall .md-toolbar-tools {\n  height: 48px;\n  min-height: 48px;\n  max-height: 48px;\n}\n\nmd-toolbar > .md-indent {\n  margin-left: 64px;\n}\n\nmd-toolbar ~ md-content > md-list {\n  padding: 0;\n}\n\nmd-toolbar ~ md-content > md-list md-list-item:last-child md-divider {\n  display: none;\n}\n\n.md-toolbar-tools {\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  box-sizing: border-box;\n  font-weight: 400;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  height: 64px;\n  max-height: 64px;\n  padding: 0 16px;\n  margin: 0;\n}\n\n.md-toolbar-tools h1, .md-toolbar-tools h2, .md-toolbar-tools h3 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: inherit;\n}\n\n.md-toolbar-tools a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.md-toolbar-tools .fill-height {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.md-toolbar-tools .md-button {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.md-toolbar-tools > .md-button:first-child {\n  margin-left: -8px;\n}\n\n.md-toolbar-tools > .md-button:last-child {\n  margin-right: -8px;\n}\n\n.md-toolbar-tools > md-menu:last-child {\n  margin-right: -8px;\n}\n\n.md-toolbar-tools > md-menu:last-child > .md-button {\n  margin-right: 0;\n}\n\n@media screen and (-ms-high-contrast: active) {\n  .md-toolbar-tools {\n    border-bottom: 1px solid #fff;\n  }\n}\n\n@media only screen and (min-width: 0) and (max-width: 600px) and (orientation: portrait) {\n  md-toolbar {\n    min-height: 56px;\n  }\n  .md-toolbar-tools {\n    height: 56px;\n    max-height: 56px;\n  }\n}\n\n@media only screen and (min-width: 0) and (max-width: 600px) and (orientation: landscape) {\n  md-toolbar {\n    min-height: 48px;\n  }\n  .md-toolbar-tools {\n    height: 48px;\n    max-height: 48px;\n  }\n}\n\nmd-tooltip {\n  position: absolute;\n  z-index: 100;\n  overflow: hidden;\n  pointer-events: none;\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n@media screen and (min-width: 600px) {\n  md-tooltip {\n    font-size: 10px;\n  }\n}\n\nmd-tooltip .md-background {\n  position: absolute;\n  border-radius: 50%;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 1;\n}\n\nmd-tooltip .md-background.md-show-add {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n}\n\nmd-tooltip .md-background.md-show, md-tooltip .md-background.md-show-add-active {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\nmd-tooltip .md-background.md-show-remove {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-tooltip .md-background.md-show-remove.md-show-remove-active {\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n}\n\nmd-tooltip .md-content {\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: transparent;\n  opacity: 0;\n  height: 32px;\n  line-height: 32px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n@media screen and (min-width: 600px) {\n  md-tooltip .md-content {\n    height: 22px;\n    line-height: 22px;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n}\n\nmd-tooltip .md-content.md-show-add {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n\nmd-tooltip .md-content.md-show, md-tooltip .md-content.md-show-add-active {\n  opacity: 1;\n}\n\nmd-tooltip .md-content.md-show-remove {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-tooltip .md-content.md-show-remove.md-show-remove-active {\n  opacity: 0;\n}\n\nmd-tooltip.md-hide {\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n\nmd-tooltip.md-show {\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  pointer-events: auto;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.md-virtual-repeat-container {\n  box-sizing: border-box;\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n}\n\n.md-virtual-repeat-container .md-virtual-repeat-scroller {\n  bottom: 0;\n  box-sizing: border-box;\n  left: 0;\n  margin: 0;\n  overflow-x: hidden;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.md-virtual-repeat-container .md-virtual-repeat-sizer {\n  box-sizing: border-box;\n  height: 1px;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  width: 1px;\n}\n\n.md-virtual-repeat-container .md-virtual-repeat-offsetter {\n  box-sizing: border-box;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  right: 16px;\n  top: 0;\n}\n\n.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {\n  bottom: 16px;\n  right: auto;\n  white-space: nowrap;\n}\n\n.md-whiteframe-z1 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.14), 0px 2px 2px 0px rgba(0, 0, 0, 0.098), 0px 1px 5px 0px rgba(0, 0, 0, 0.084);\n}\n\n.md-whiteframe-z2 {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.098), 0 1px 10px 0 rgba(0, 0, 0, 0.084);\n}\n\n.md-whiteframe-z3 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.14), 0px 6px 10px 0px rgba(0, 0, 0, 0.098), 0px 1px 18px 0px rgba(0, 0, 0, 0.084);\n}\n\n.md-whiteframe-z4 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.098), 0px 3px 14px 2px rgba(0, 0, 0, 0.084);\n}\n\n.md-whiteframe-z5 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.14), 0px 16px 24px 2px rgba(0, 0, 0, 0.098), 0px 6px 30px 5px rgba(0, 0, 0, 0.084);\n}\n\n@media screen and (-ms-high-contrast: active) {\n  md-whiteframe {\n    border: 1px solid #fff;\n  }\n}\n\nhtml, body {\n  /* font-family: $font-family-sans-serif; */\n  color: #414141;\n  background-color: #f8f8f8;\n}\n", ""]);

	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map