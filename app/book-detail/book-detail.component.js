'use strict';

angular.
module('bookDetail').
component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$http', 'libService', '$stateParams',
        function BookDetailController($http, libService, $stateParams) {
            var self = this;
            self.addBook = function (book) {
                book.bookId = $stateParams.bookId;
                libService.addToLib(book).then(book => {
                    console.log(book)
                })
            }
            self.redirectForBuy = function () {

                window.open(self.book.infoLink)
            }
            $http.get(`https://www.googleapis.com/books/v1/volumes/${$stateParams.bookId}`).then(function (response) {
                self.book = response.data.volumeInfo;
            });

        }
    ]
});