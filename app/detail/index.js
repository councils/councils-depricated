module.exports = (angular) => {
  'use strict';
  require('./_detail.scss');

  var ngModule = angular.module('councils.detail', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('detail', {
        title: 'Details',
        url: '/detail/:council?tabIndex',
        views: {
          'main' : {
            template: require('./detail.html'),
            controller: 'DetailCtrl',
            controllerAs: 'detail',
          }
        }
      });
  });

  // load module components
  require('./DetailCtrl.js')(ngModule);

  return ngModule;
};
