module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function CouncilsCtrl ($stateParams) {
    var councils = this;
    councils.myCouncils = ['Bishopric', 'Ward Council'];
  }

  ngModule.controller('CouncilsCtrl', CouncilsCtrl);
};
