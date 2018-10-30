'use strict';

angular.
module('booksList').
component('booksList', {
  templateUrl: 'books-list/books-list.template.html',
  controller: ['$http', function BooksListController($http) {
    var self = this;
    self.arr = function () {
      return $http.get(`https://www.googleapis.com/books/v1/volumes?q=${self.query}+${self.searchBy}:${self.query}`).then(function (response) {
        if (self.query) {
          self.books = response.data.items;
        } else {
          self.books = [];
        }
      });
    }
    self.change = _.debounce(self.arr, 1500)
  }]
});