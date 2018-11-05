angular.
module('libraryApp').
config(['$routeProvider',
    function config($routeProvider) {
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