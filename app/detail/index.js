module.exports = (angular) => {
  'use strict';
  require('./_detail.scss');

  var ngModule = angular.module('councils.detail', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('detail', {
        title: 'Details',
        url: '/detail/:council?tabIndex',
        navType: 'back',
        views: {
          'main' : {
            template: require('./detail.html'),
            controller: 'DetailCtrl',
            controllerAs: 'detail',
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
  require('./DetailCtrl.js')(ngModule);

  return ngModule;
};
