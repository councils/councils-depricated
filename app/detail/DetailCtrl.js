module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function DetailCtrl ($stateParams, User, $firebaseArray, $http, $cordovaInAppBrowser) {
    var detail = this;
    detail.hymns = [];
    detail.tabs = { selectedIndex: +$stateParams.tabIndex };
    detail.council = $stateParams.council || 'Bishopric';
    detail.querySearch = querySearch;
    detail.openHymn = openHymn

    User.get().then(user => {
      var dRef = new Firebase('https://councilsapp.firebaseio.com/').child(user.homeUnitNbr).child('discussions').orderByChild('council').equalTo(detail.council);
      var aRef = new Firebase('https://councilsapp.firebaseio.com/').child(user.homeUnitNbr).child('assignments').orderByChild('council').equalTo(detail.council);
      detail.discussions = $firebaseArray(dRef);
      detail.assignments = $firebaseArray(aRef);
    });

    loadAll();

    function querySearch (query) {
      var results = query ? detail.hymns.filter( createFilterFor(query) ) : [];
      return results;
    }

    function loadAll () {
      $http.get('https://councils-app.herokuapp.com/api/hymns')
        .then((resp) => {
          detail.hymns = resp.data;
        });
    }

    function createFilterFor (query) {
      var lowercaseQuery = query.toLowerCase();
      return function filterFn(hymn) {
        return (hymn.searchTerm.indexOf(lowercaseQuery) >= 0);
      };
    }

    function openHymn (hymn) {
      $cordovaInAppBrowser.open(`https://docs.google.com/viewer?url=${hymn.pdf}`, '_blank', {
          location: 'yes',
          toolbar: 'yes'
        })
        .then(function(event) {
          console.log('success!');
        })
        .catch(function(event) {
          console.log('error');
        });
    }

  }

  ngModule.controller('DetailCtrl', DetailCtrl);
};
