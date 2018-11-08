'use strict';

angular.
module('bookDetail').
component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$http', 'libService', '$stateParams',
        function BookDetailController($http, libService, $stateParams) {
            this.getAll = function () {
                libService.getBooksFromLib().then(books => {
                    this.books = books.data;
                }).then(a => {
                    this.ids = this.books.map(b => {
                        return b.bookId;
                    })
                })
            }
            this.$onInit = () => {
                this.getAll();
            }
            var self = this;
            self.addBook = function (book) {
                book.bookId = $stateParams.bookId;
                libService.addToLib(book).then(book => {})
            }
            self.redirect = function (url) {
                window.open(url)
            }
            $http.get(`https://www.googleapis.com/books/v1/volumes/${$stateParams.bookId}`).then(function (response) {
                self.book = response.data.volumeInfo;
                self.data = response.data;
                self.pdfLink = self.data.accessInfo.pdf.acsTokenLink;
                self.epubLink = self.data.accessInfo.epub.acsTokenLink;
                console.log(self.data)
            }).then(b => {
                this.contains = this.ids.filter(b => b === self.data.id);
            });
        }
    ]
});