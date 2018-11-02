angular.
module('libraryApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        //$locationProvider.hashPrefix('!');

        $routeProvider.
        when('/books', {
            template: '<books-list></books-list>'
        }).
        when('/books/:bookId', {
            template: '<book-detail></book-detail>'
        }).
        when('/library', {
            template: '<books-library></books-library>'
        }).
        otherwise('/books');
    }
]);