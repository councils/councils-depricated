module.exports = (angular) => {
  'use strict';
  require('./_feedback.scss');

  var ngModule = angular.module('councils.feedback', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        title: 'Feedback',
        controller: 'FeedbackCtrl',
        controllerAs: 'feedback',
        views: {
          'main' : {
            template: require('./feedback.html')
          }
        }
      });
  });

  // load module components
  require('./FeedbackCtrl.js')(ngModule);

  return ngModule;
};
