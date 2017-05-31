(function() {
    'use strict';

    angular.module('blog.routing').config(routing);

    routing.$inject = ['$routeProvider'];

    function routing($routeProvider) {
        $routeProvider.
        // when('/bloglist', {
        //     templateUrl: 'bloglist/bloglist.html',
        //     controller: 'BloglistController',
        //     controllerAs: 'bl'
        // }).
        when('/', {
          templateUrl: 'bloglist/bloglist.html',
          controller: 'BloglistController',
          controllerAs: 'bl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }

})();
