module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function DetailCtrl ($stateParams, User, $firebaseArray, $firebaseObject, $http, $rootScope, $scope, $timeout, Modal, $mdToast) {
    var detail = this;
    detail.hymns = [];
    detail.tabs = { selectedIndex: +$stateParams.tabIndex };
    detail.council = $stateParams.council || 'Bishopric';
    detail.querySearch = querySearch;
    detail.openHymn = openHymn;
    $rootScope.isLoading = true;

    detail.openChat = function ($event, assignment) {
      $event.stopPropagation();
      Modal.open(assignment.$id, assignment.council, assignment.content);
    };

    detail.update = function ($event, assignment) {
      assignment.completed = assignment._completed;
      if (assignment.completed) {
        var toast = $mdToast.simple()
            .content('You marked that assignment as completed.')
            .action('undo')
            .highlightAction(true)
            .hideDelay(5000)
            .position('bottom left');

        $mdToast.show(toast).then(function(response) {
          if ( response === 'ok' ) {
            assignment.completed = false;
            assignment._completed = false;
          }
          return assignment.$save();
        });
      }
    };

    var user;
    User.get().then(me => {
      user = me;
      var aRef = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/${detail.council}/assignments`);
      var dRef = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/${detail.council}/discussions`);
      detail.assignments = $firebaseArray(aRef);
      detail.discussions = $firebaseArray(dRef);
    });

    loadAll();

    detail.weekIndex = 1;
    var destroy = angular.noop;
    $scope.$watch('detail.weekIndex', (_new, _old) => {
      destroy();
      var weekNumber = detail.weeks[_new].weekNumber;
      var year = detail.weeks[_new].year;
      User.get().then(user => {
        var agendaRef = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/${detail.council}/agendas/Week-${weekNumber} ${year}`);
        $firebaseObject(agendaRef).$bindTo($scope, 'agenda').then(unbind => {
          destroy = unbind;
          $timeout(() => {
            $rootScope.isLoading = false;
          }, 250);
        });
      });
    });

    var lastWeek = moment().subtract(7, 'days');
    var thisWeek = moment();
    var nextWeek = moment().add(7, 'days');

    detail.weeks = [{
      weekNumber: lastWeek.week(),
      year: lastWeek.year(),
      title: lastWeek.startOf('week').format('MMM D')
    }, {
      weekNumber: thisWeek.week(),
      year: thisWeek.year(),
      title: thisWeek.startOf('week').format('MMM D')
    }, {
      weekNumber: nextWeek.week(),
      year: nextWeek.year(),
      title: nextWeek.startOf('week').format('MMM D')
    }];

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
      cordova.InAppBrowser.open(`https://docs.google.com/viewer?url=${hymn.pdf}&embedded=true`, '_blank', 'location=yes');
    }

  }

  ngModule.controller('DetailCtrl', DetailCtrl);
};
