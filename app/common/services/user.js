module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function User ($firebaseObject, $q) {
    var user = {};
    var unit = null;
    var deferred = $q.defer();
    var service = {
      get: get,
      set: set,
      getUnit: getUnit
    };
    return service;

    ////////////
    function get () {
      return deferred.promise
        .then(() => {
            return user;
        });
    }

    function set (uid) {
      var ref = new Firebase(`https://councilsapp.firebaseio.com/users/${uid}`);
      return $firebaseObject(ref).$loaded()
        .then((home) => {
          unit = home.$value;
          ngModule.value('UNITNUMBER', unit);
          ngModule.value('UID', uid);
          home.$destroy();
          var ref2 = new Firebase(`https://councilsapp.firebaseio.com/${unit}/users/${uid}/info`);
          return $firebaseObject(ref2).$loaded();
        })
        .then((ref) => {
          user = ref;
          deferred.resolve(user);
          return user;
        });
    }

    function getUnit () {
      return unit;
    }
  }

  ngModule.factory('User', User);
};
