module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function Notify ($http) {
    var api = {send};
    return api;
    function send (title, message, uids) {
      console.log('uids', uids);
      return $http.post('https://councils-app.herokuapp.com/api/push', {
        title: title,
        message: message,
        user_ids: uids
      });
    }
  }

  ngModule.factory('Notify', Notify);
};
