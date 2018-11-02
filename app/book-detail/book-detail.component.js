'use strict';

angular.
module('bookDetail').
component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$http', 'libService', '$routeParams',
        function BookDetailController($http, libService, $routeParams) {
            var self = this;
            self.addBook = function (book) {
                book.bookId = $routeParams.bookId;
                libService.addToLib(book).then(book => {
                    console.log(book)
                })
            }
            self.redirectForBuy = function () {

                window.open(self.book.infoLink)
            }
            $http.get(`https://www.googleapis.com/books/v1/volumes/${$routeParams.bookId}`).then(function (response) {
                self.book = response.data.volumeInfo;
            });

        }
    ]
});