module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function LoginCtrl ($log, $state, Auth, $http, $firebaseObject) {
    var login = this;
    login.logoURL = require('../common/assets/logo.png');
    login.credentials = {};
    login.lds = {};
    login.template = 'ldsLogin.html';

    login.login = function () {
      Auth.$authWithPassword({
        email: login.credentials.email,
        password: login.credentials.password
      }).then((authData) => {
        $state.go('home');
      }).catch((error) => {
        $log.error('Authentication failed:', error);
      });
    };

    login.signup = function () {
      login.loading = true;
      $http.post('https://councils-app.herokuapp.com/api/me', login.lds)
        .then((response) => {
          login.me = response.data;
          login.signup.email = login.me.email;
          login.me.fname = login.me.preferredName.split(', ')[1];
          login.me.lname = login.me.surname;
          login.loading = false;
          login.template = 'signup.html';
        })
        .catch(() => {
          login.loading = false;
          // TODO: display message that login failed.
        });
    };

    login.create = function () {
      console.log('create!');
      Auth.$createUser({
        email: login.signup.email,
        password: login.signup.pass
      })
      .then((userData) => {
        console.log('u', userData);
        login.me.uid = userData.uid;
        var ref = new Firebase('https://councilsapp.firebaseio.com/users');
        return $firebaseObject(ref).$loaded().then((users) => {
          console.log('users', users);
          users[login.me.uid] = login.me.homeUnitNbr;
          return users.$save();
        });
      })
      .then(() => {
        console.log('auth');
        return Auth.$authWithPassword({
          email: login.signup.email,
          password: login.signup.pass
        });
      })
      .then(() => {
        console.log('ward');
        var ref = new Firebase(`https://councilsapp.firebaseio.com/${login.me.homeUnitNbr}/users`);
        var members = $firebaseObject(ref);
        members[login.me.uid] = {};
        members[login.me.uid].info = login.me;
        return members.$save();
      })
      .then((authData) => {
        console.log('home');
        $state.go('home');
      });
    };
  }

  ngModule.controller('LoginCtrl', LoginCtrl);
};
