module.exports = function (ngModule) {
  'use strict';

  // @ngInject
  function Modal ($compile, $rootScope, $firebaseArray, User, _) {
    var el;
    var oldTopic;
    var scope;

    return {
      open,
      close,
      destroy
    };

    function open (topic, council, title) {
      if (topic !== oldTopic) {
        destroy();
        $rootScope.isLoading = true;
        scope = $rootScope.$new();
        scope.title = title;
        User.get().then(user => {
          scope.user = user;
          var ref = new Firebase(`https://councilsapp.firebaseio.com/${user.homeUnitNbr}/${council}/threads/${topic}`);
          $firebaseArray(ref.orderByChild('date')).$loaded()
            .then((resp) => {
              scope.chats = resp;
              $rootScope.isLoading = false;
            });
          el = $compile(require('./modal.html'))(scope);
          el.appendTo(document.body);
          setTimeout(scroll, 250);
          var target = el.find('.message-input-contianer');
          el.find('.chats').scroll(_.throttle(function () {
            if (this.scrollTop + $(this).innerHeight() >= this.scrollHeight) {
              target.removeClass('md-whiteframe-z3');
            } else {
              target.addClass('md-whiteframe-z3');
            }
          }, 100));
        });

        scope.close = close;

        scope.send = function (message) {
          scope.chats.$add({
            author: scope.user.uid,
            authorName: `${scope.user.fname} ${scope.user.lname}`,
            date: new Date().getTime(),
            message: message,
            profileImage: scope.user.profileImage
          });

          scope.message = '';
          scroll();
        };


      } else {
        el.addClass('open');
      }
    }

    function close () {
      el.removeClass('open');
    }

    function destroy () {
      scope && scope.$destroy();
      el && el.remove();
    }


    function scroll () {
      var chats = el.find('.chats');
      chats.animate({ scrollTop: chats.get(0).scrollHeight }, '250', 'swing', angular.noop);
    }
  }

  ngModule.factory('Modal', Modal);
};
