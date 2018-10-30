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
        otherwise('/books');
    }
]);