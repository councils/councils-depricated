module.exports = function (angular) {

  var module = angular.module('ngCordova', [
    'ngCordova.plugins'
  ]);

  angular.module('ngCordova.plugins', [
  	 'ngCordova.plugins.imagePicker',
  	 'ngCordova.plugins.VideoCapturePlus',
  	 'ngCordova.plugins.appRate',
  	 'ngCordova.plugins.contact',
  	 'ngCordova.plugins.googleAnalytic',
  	 'ngCordova.plugins.camera',
  	 'ngCordova.plugins.capture',
  	 'ngCordova.plugins.emailComposer',
  	 'ngCordova.plugins.touchid',
  	 'ngCordova.plugins.datepicker',
  	 'ngCordova.plugins.ga',
  	 'ngCordova.plugins.actionSheet',
  	 'ngCordova.plugins.device',
  	 'ngCordova.plugins.file',
     'ngCordova.plugins.sm',
     'ngCordova.plugins.toast',
     'ngCordova.plugins.vibration',
  	 'ngCordova.plugins.inAppBrowser'
  ]);

  //#### Begin Individual Plugin Code ####

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

  return module;
};
