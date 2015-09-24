module.exports = (angular) => {
  'use strict';
  require('./_login.scss');

  var ngModule = angular.module('councils.login', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        title: 'Login',
        views: {
          'main' : {
            template: require('./login.html'),
            controller: 'LoginCtrl',
            controllerAs: 'login'
          }
        }
      });
  })
  .run(($templateCache) => {
    $templateCache.put('ldsLogin.html', require('./ldsLogin.html'));
    $templateCache.put('signup.html', require('./signup.html'));
  });

  // load module components
  require('./LoginCtrl.js')(ngModule);

  return ngModule;
};
