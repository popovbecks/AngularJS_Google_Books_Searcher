'use strict';

angular.
module('booksList').
component('booksList', {
  templateUrl: 'books-list/books-list.template.html',
  controller: ['libService', function BooksListController(libService) {
    var self = this;

    self.arr = function () {
      libService.getBooksFromApi(self.query, self.searchBy).then(function (response) {
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