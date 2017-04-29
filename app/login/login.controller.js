(function() {
    'use strict';

    angular.module('blog.login').controller('LoginController', LoginController);

    LoginController.$inject = ['dataservice', 'dataUrl', 'localstore', 'loginService'];

    function LoginController(dataservice, dataUrl, localstore, loginService) {
        let vm = this;
        vm.login = login;
        vm.user;
        vm.password;

        function login() {
            loginService.get(`${dataUrl}/user.json`, {user:vm.user, password:vm.password}).then(function(data) {
              console.log(data);
              console.log(`login correct ${data}`);
            })
        }

    }

})();

/*
  click - get set from localstorage, add, save
  load - get set from local storage, check if id exists, return true
*/
