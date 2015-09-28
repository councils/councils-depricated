module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function CreateCtrl (User, $firebaseArray, $window, Notify) {
    var create = this;
    create.people = [];
    create.assignment = {};
    create.discussion = {};
    create.querySearch = querySearch;
    create.councils = ['Bishopric', 'Ward Council'];

    var user, assignments, discussions;
    User.get().then(me => {
      user = me;
      var ref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/users`);
      create.people = $firebaseArray(ref);
    });

    create.createAssignment = function (assignment) {
      var def = {
        assignedBy: user.uid,
        council: assignment.council,
        assignedByName: `${user.fname} ${user.lname}`,
        assignedTo: assignment.assignedTo.$id,
        assignedToName: `${assignment.assignedTo.info.fname} ${assignment.assignedTo.info.lname}`,
        completed: false,
        hasBeenViewed: false,
        content: assignment.content,
        dueDate: assignment.dueDate.getTime()
      };

      var ref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/${assignment.council}/assignments`);
      var mref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/users/${user.uid}/delagatedAssignments`);
      var tref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/users/${assignment.assignedTo.$id}/myAssignments`);
      var newRef = ref.push(def);

      mref.push({
        council: assignment.council,
        key: newRef.key()
      });

      tref.push({
        council: assignment.council,
        key: newRef.key()
      });

      Notify.send(false, `${user.fname} ${user.lname} just assigned you a task for the ${assignment.council}`, [assignment.assignedTo.$id]);
      $window.history.back();
    };

    create.createDiscussion = function (discussion) {
      var def = {
        content: discussion.topic,
        createdBy: user.uid,
        council: discussion.council,
        createdDate: new Date().getTime(),
        userAvatar: user.profileImage,
        userName: `${user.fname} ${user.lname}`
      };
      var ref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/${discussion.council}/discussions`);
      var mref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/users/${user.uid}/discussions`);
      var newRef = ref.push(def);
      mref.push({
        council: discussion.council,
        key: newRef.key()
      });
      $window.history.back();
    };

    function querySearch (query) {
      var results = query ? create.people.filter( createFilterFor(query) ) : [];
      return results;
    }

    function createFilterFor (query) {
      var lowercaseQuery = query.toLowerCase();
      return function filterFn(person) {
        return (person.info.preferredName.toLowerCase().indexOf(lowercaseQuery) >= 0);
      };
    }

  }

  ngModule.controller('CreateCtrl', CreateCtrl);
};
