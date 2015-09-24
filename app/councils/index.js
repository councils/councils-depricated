module.exports = (angular) => {
  'use strict';
  require('./_councils.scss');

  var ngModule = angular.module('councils.councils', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('councils', {
        title: 'Councils',
        url: '/councils',
        views: {
          'main' : {
            template: require('./councils.html'),
            controller: 'CouncilsCtrl',
            controllerAs: 'councils',
            resolve: {
              currentAuth: /* @ngInject */ function(Auth) {
                return Auth.$requireAuth();
              }
            }
          }
        }
      });
  });

  // load module components
  require('./CouncilsCtrl.js')(ngModule);

  return ngModule;
};
