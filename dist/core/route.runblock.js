(function() {
    'use strict';

    angular.module('blog.core').run(loginTest);

    loginTest.$inject = ['$rootScope', '$location'];

    function loginTest($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            let loggedIn = $rootScope.loggedIn;
            if (loggedIn) {
                $location.path('/bloglist')
            } else {
                $location.path('/login');
            }
        });
    }
})();
