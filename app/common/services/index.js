module.exports = (angular) => {
  'use strict';

  // var ngCordova = require('./ng-cordova.js')(angular);

  var ngModule = angular.module('councils.services', [
    'firebase',
    // ngCordova.name
    // optionally inject dependencies for this feature.
  ]);

  // load module components
  require('./user.js')(ngModule);
  require('./auth.js')(ngModule);
  require('./Notify.js')(ngModule);

  return ngModule;
};
