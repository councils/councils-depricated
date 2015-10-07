module.exports = function (ngModule) {
  'use strict';

  ngModule.directive('sideNavLayout', ($rootScope, $mdUtil, $mdSidenav, $state, PLATFORM) => {
    return {
      restrict: 'E',
      transclude: true,
      template: require('./layout.html'),
      link: (scope, element, attrs) => {

        console.log(PLATFORM);
        if (PLATFORM === 'iOS') {
          angular.element('#councilsApp').addClass('status-bar');
          angular.element('#topBar').addClass('status-bar');
          angular.element('.nav-header').addClass('status-bar');
        }

        setMenuItems();

        scope.close = function (state) {
          $state.go(state)
            .then(() => {
              $mdSidenav('left').close();
            });
        };

        function setMenuItems () {
          // scope.$applyAsync(() => {
            scope.navItems = [{
              name: 'Home',
              icon: 'home',
              state: 'home'
            }, {
              name: 'Councils',
              icon: 'people_outline',
              state: 'councils'
            }, {
              name: 'Settings',
              icon: 'settings',
              state: 'settings'
            }, {
              name: 'Feeback',
              icon: 'feedback',
              state: 'feedback'
            }, {
              name: 'Sync',
              icon: 'sync',
              state: '#'
            }];
          // });
        }
      }
    };
  });
};
