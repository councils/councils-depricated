module.exports = (angular) => {
  'use strict';
  require('./_home.scss');

  var ngModule = angular.module('councils.home', [])

  .config(($stateProvider) => {
    $stateProvider.state('home', {
      title: 'Home',
      url: '/home',
      views: {
        'main' : {
          template: require('./home.html'),
          controller: 'HomeCtrl',
          controllerAs: 'home',
          resolve: {
            currentAuth: /* @ngInject */ function() {
              // return Auth.$requireAuth();
              return { uid: 'simplelogin:6' };
            }
          }
        }
      }
    });
  });

  // load module components
  require('./HomeCtrl.js')(ngModule);

  return ngModule;
};
