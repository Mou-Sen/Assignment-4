(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', ['$http', 'ApiBasePath', function ($http, ApiBasePath) {
            var service = this;

            service.getAllCategories = function () {
                return $http.get(ApiBasePath + 'categories.json');
            };

            service.getItemsForCategory = function (categoryShortName) {
                return $http.get(ApiBasePath + 'menu_items/' + categoryShortName + '.json');
            };
        }]);
})();
