(function() {
    'use strict';

    angular.module('blog.login').controller('LoginController', LoginController);

    LoginController.$inject = ['dataservice', 'dataUrl', 'localstore', 'loginService','$rootScope', '$location'];

    function LoginController(dataservice, dataUrl, localstore, loginService, $rootScope, $location) {
        let vm = this;
        vm.login = login;
        vm.user;
        vm.password;

        function login() {
            loginService.get(`${dataUrl}/user.json`, {
                user: vm.user,
                password: vm.password
            }).then(function(data) {
              $rootScope.loggedIn = data;
              $location.path('/bloglist')
                console.log(`login correct ${data}`);
            });
        }

    }

})();
