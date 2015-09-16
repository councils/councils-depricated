module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function CouncilsCtrl ($stateParams) {
    var councils = this;
    councils.myCouncils = ['Bishopric', 'Ward Council'];
    console.log($stateParams);
  }

  ngModule.controller('CouncilsCtrl', CouncilsCtrl);
};
