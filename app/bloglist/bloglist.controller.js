(function() {
    'use strict';

    angular.module('blog.bloglist').controller('BloglistController', BloglistController);

    BloglistController.$inject = ['dataservice', 'dataUrl', 'localstore'];

    function BloglistController(dataservice, dataUrl, localstore) {
        let vm = this;
        vm.articles;
        vm.likeArticle = likeArticle;
        vm.isLiked = isLiked;

        activate();

        function activate() {
            return getArticles().then(function() {
                console.log('Articles received', vm.articles);

            })
        }

        function getArticles() {
            return dataservice.get(`${dataUrl}London,gb`).then(function(data) {
                vm.articles = data.articles;
                return vm.articles;
            })
        }  

    }

})();
