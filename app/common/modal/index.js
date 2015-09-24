module.exports = function (angular) {
  'use strict';
  require('./_modal.scss');

  var ngModule = angular.module('councils.modal', []);

  require('./factory.js')(ngModule);
  //require('./modal.js')(ngModule);

  return ngModule;
};
