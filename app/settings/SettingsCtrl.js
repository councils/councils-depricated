module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function SettingsCtrl (User, $firebaseObject) {
    var settings = this;

    User.get().then((user) => {
      var ref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/users/${user.uid}/info/touchID`);
      settings.touchID = $firebaseObject(ref);
    });

    settings.updateTouchID = function () {
      console.log(settings.touchID);
      settings.touchID.$save();
    };
  }

  ngModule.controller('SettingsCtrl', SettingsCtrl);
};
