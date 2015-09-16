module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function Auth ($firebaseAuth) {
    var ref = new Firebase('https://councilsapp.firebaseio.com');
    return $firebaseAuth(ref);
  }

  ngModule.factory('Auth', Auth);
};
