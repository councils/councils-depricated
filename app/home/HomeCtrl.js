module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function HomeCtrl ($scope, User, _, currentAuth, $firebaseObject, Modal, $window, $mdToast, $rootScope, $q) {
    var home = this;
    home.tabs = { selectedIndex: 0 };
    home.myAssignments = [];
    home.delegatedAssignments = [];
    home.discussions = [];

    home.openChat = function ($event, assignment) {
      $event.stopPropagation();
      Modal.open(assignment.$id, assignment.council, assignment.content);
    };

    $rootScope.isLoading = true;

    home.update = function ($event, assignment) {
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

    User.get().then((user) => {
      var ref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}`);
      var myAssignments = ref.child(`users/${user.uid}/myAssignments`);
      var delagatedAssignments = ref.child(`users/${user.uid}/delagatedAssignments`);
      var discussions = ref.child(`users/${user.uid}/discussions`);

      var p = new Promise((resolve) => {
        ref.once('value', () => {
          resolve();
        });
      });
      var t = new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });

      Promise.race([p, t])
        .then(() => {
          $rootScope.isLoading = false;
        });

      myAssignments.on('child_added', (snapshot) => {
        var assignment = snapshot.val();
        var aref = ref.child(`${assignment.council}/assignments/${assignment.key}`);
        home.myAssignments.push($firebaseObject(aref));
      });

      delagatedAssignments.on('child_added', (snapshot) => {
        var assignment = snapshot.val();
        var aref = ref.child(`${assignment.council}/assignments/${assignment.key}`);
        home.delegatedAssignments.push($firebaseObject(aref));
      });

      discussions.on('child_added', (snapshot) => {
        var discussion = snapshot.val();
        var dref = ref.child(`${discussion.council}/discussions/${discussion.key}`);
        home.discussions.push($firebaseObject(dref));
      });
    });
  }

  ngModule.controller('HomeCtrl', HomeCtrl);
};
