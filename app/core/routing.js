(function() {
    'use strict';

    angular.module('blog.routing').config(routing);

    routing.$inject = ['$routeProvider'];

    function routing($routeProvider) {
        $routeProvider.
        when('/bloglist', {
            templateUrl: 'bloglist/bloglist.html',
            controller: 'BloglistController',
            controllerAs: 'bl'
        }).
        when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            controllerAs: 'l'
        }).
        when('/', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            controllerAs: 'l'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }

})();
