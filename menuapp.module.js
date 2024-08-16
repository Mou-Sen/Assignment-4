(function () {
    'use strict';

    angular.module('MenuApp', ['ui.router', 'data'])
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home.html'
                })
                .state('categories', {
                    url: '/categories',
                    template: '<categories categories="categories"></categories>',
                    controller: ['MenuDataService', function (MenuDataService) {
                        var ctrl = this;
                        MenuDataService.getAllCategories().then(function (response) {
                            ctrl.categories = response.data;
                        });
                    }],
                    controllerAs: 'ctrl'
                })
                .state('items', {
                    url: '/items/{categoryShortName}',
                    template: '<items items="items"></items>',
                    controller: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        var ctrl = this;
                        MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (response) {
                            ctrl.items = response.data;
                        });
                    }],
                    controllerAs: 'ctrl'
                });
        }]);
})();
