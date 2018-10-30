'use strict';

angular.
module('bookDetail').
component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$http', '$routeParams',
        function BookDetailController($http, $routeParams) {
            var self = this;
            self.redirectForBuy = function () {

                window.open(self.book.infoLink)
            }
            $http.get(`https://www.googleapis.com/books/v1/volumes/${$routeParams.bookId}`).then(function (response) {
                self.book = response.data.volumeInfo;
                console.log(self.book.infoLink)
            });
        }
    ]
});