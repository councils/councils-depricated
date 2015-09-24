module.exports = (angular) => {
  'use strict';
  require('./_create.scss');

  var ngModule = angular.module('councils.create', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('create', {
        abtract: true,
        url: '/create',
        views: {
          'main' : {
            template: require('./main.html'),
            controller: 'CreateCtrl',
            controllerAs: 'create',
            resolve: {
              currentAuth: /* @ngInject */ function(Auth) {
                return Auth.$requireAuth();
              }
            }
          }
        }
      })
      .state('create.assignment', {
        title: 'Create Assignment',
        url: '/assignment',
        navType: 'back',
        views: {
          'sub' : {
            template: require('./assignment.html')
          }
        }
      })
      .state('create.discussion', {
        title: 'Create Discussion',
        url: '/discussion',
        navType: 'back',
        views: {
          'sub' : {
            template: require('./discussion.html')
          }
        }
      });
  });

  // load module components
  require('./CreateCtrl.js')(ngModule);

  return ngModule;
};
