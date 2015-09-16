module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function HomeCtrl (User, _, currentAuth, $firebaseObject) {
    var home = this;
    home.tabs = { selectedIndex: 0 };
    home.myAssignments = [];
    home.delegatedAssignments = [];
    home.discussions = [];

    home.openChat = function ($event, assignment) {
      event.stopPropagation();
    };

    User.get().then((user) => {
      console.log(user);
      var assignments = new Firebase('https://councilsapp.firebaseio.com/'+user.homeUnitNbr+'/assignments');
      var discussions = new Firebase('https://councilsapp.firebaseio.com/'+user.homeUnitNbr+'/discussions');

      assignments.orderByChild('assignedTo')
        .equalTo(user.$id)
        .on('child_added', (snapshot) => {
          home.myAssignments.push($firebaseObject(snapshot.ref()));
        });

      assignments.orderByChild('assignedBy')
        .equalTo(user.$id)
        .on('child_added', (snapshot) => {
          home.delegatedAssignments.push($firebaseObject(snapshot.ref()));
        });

      _.forEach(user.discussions, (item) => {
        var child = discussions.child(item);
        home.discussions.push($firebaseObject(child));
      });
    })
  }

  ngModule.controller('HomeCtrl', HomeCtrl);
};
