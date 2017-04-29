(function() {
    'use strict';

    angular.module('blog.core').factory('loginService', loginService);

    loginService.$inject = ['$http','$log', 'dataUrl','dataservice'];

    function loginService($http, $log, dataUrl, dataservice) {

      let loginService = {
        get: get
      };

      return loginService;

        function get(url,credentials) {
          return $http.get(url)
            .then(success)
            .catch(failed);

          function success (response) {
              let user = response.data.user.username,
                  password = response.data.user.password;
              let correct = user === credentials.user && password === credentials.password ? true : false;
              return correct;
            }

           function failed (error) {
              console.log(`Failure getting data: ${error.data}`);
            }
        }
    }

})();
