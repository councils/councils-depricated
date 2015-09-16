module.exports = (angular) =>{
  'use strict';
  require('./_layout.scss');

  var ngModule = angular.module('councils.layout', [
    'ngMaterial',
    // optionally inject dependencies for this feature.
  ]);

  // load module components
  require('./directive.js')(ngModule);

  return ngModule;
};
