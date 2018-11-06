'use strict';
angular.
module('booksSearch').
component('booksSearch', {
    bindings: {
        change: '&',
        query: '=',
        search: '='
    },
    templateUrl: 'books-search/books-search.template.html',
    controller: [function BooksSearchController() {
        this.search = 'intitle'
    }]
});