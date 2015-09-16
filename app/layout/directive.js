module.exports = function (ngModule) {
  'use strict';

  ngModule.directive('sideNavLayout', ($rootScope, $mdUtil, $mdSidenav, $log, $state) => {
    return {
      restrict: 'E',
      transclude: true,
      template: require('./layout.html'),
      link: (scope, element, attrs) => {
        scope.toggleLeft = buildToggler('left');
        scope.close = function () {
          $mdSidenav('left').close()
            .then(function () {
              $log.debug('close LEFT is done');
            });
        };

        scope.navItems = [{
          name: 'Home',
          icon: 'home',
          onClick: goTo('home')
        }, {
          name: 'Councils',
          icon: 'people_outline',
          onClick: goTo('councils')
        }, {
          name: 'Settings',
          icon: 'settings',
          onClick: goTo('settings')
        }, {
          name: 'Feeback',
          icon: 'chat_bubble_outline',
          onClick: () => {
            // do something.
          }
        }, {
          name: 'Sync',
          icon: 'sync',
          onClick: () => {
            // do something.
          }
        }];

        function goTo (state) {
          return () => {
            return $state.go(state)
              .then(() => $mdSidenav('left').close());
          };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
          var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                  .toggle()
                  .then(function () {
                    $log.debug(`toggle ${navID} is done`);
                  });
              }, 200);
          return debounceFn;
        }
      }
    };
  });
};
