angular.
module('booksLibrary').
component('booksLibrary', {
    templateUrl: 'books-library/books-library.template.html',
    controller: ['libService', function BooksLibraryController(libService) {
        this.getAll = function () {
            libService.getBooksFromLib().then(books => {
                this.books = books.data;
            })
        }
        this.$onInit = () => {
            this.getAll();
        }
        this.deleteBook = function (id) {
            return libService.deleteFromLib(id).then(item => {
                this.getAll();
            })
        }
    }]
});