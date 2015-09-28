module.exports = (angular) => {
  'use strict';
  require('./_feedback.scss');

  var ngModule = angular.module('councils.feedback', [])

  .config(($stateProvider) => {
    $stateProvider
      .state('feedback', {
        url: '/feedback',
        title: 'Feedback',
        views: {
          'main' : {
            template: require('./feedback.html'),
            controller: 'FeedbackCtrl',
            controllerAs: 'feedback'
          }
        }
      });
  });

  // load module components
  require('./FeedbackCtrl.js')(ngModule);

  return ngModule;
};
