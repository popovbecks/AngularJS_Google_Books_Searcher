angular.
module('libraryApp').
config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/books');
        $stateProvider
            .state('books', {
                url: '/books',
                template: '<books-list></books-list>'
            })

            .state('library', {
                url: '/library',
                template: '<books-library></books-library>'
            })
            .state('books-detail', {
                url: '/books/:bookId',
                template: '<book-detail></book-detail>'
            })
            .state('chart', {
                url: '/barChart',
                template: '<bar-chart></bar-chart>'
            })
            .state('lang', {
                url: '/bookLang',
                template: '<book-lang></book-lang>'
            })


    }
]);