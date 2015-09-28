module.exports = (angular) => {
  'use strict';
  require('./_settings.scss');

  var ngModule = angular.module('councils.settings', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('settings', {
        url: '/settings',
        title: 'Settings',
        views: {
          'main' : {
            template: require('./settings.html'),
            controller: 'SettingsCtrl',
            controllerAs: 'settings'
          }
        }
      });
  });

  // load module components
  require('./SettingsCtrl.js')(ngModule);

  return ngModule;
};
