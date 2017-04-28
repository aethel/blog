(function() {
    'use strict';

    angular.module('blog.login').controller('LoginController', LoginController);

    LoginController.$inject = ['dataservice', 'dataUrl', 'localstore'];

    function LoginController(dataservice, dataUrl, localstore) {
        let vm = this;


    }

})();

/*
  click - get set from localstorage, add, save
  load - get set from local storage, check if id exists, return true
*/
