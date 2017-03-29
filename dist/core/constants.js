(function() {
    'use strict';

    angular
         .module('blog.core')
         .constant('dataUrl', `${window.location.protocol}//${window.location.host}/blog/app/content`)

})();
