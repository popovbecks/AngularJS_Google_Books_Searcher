'use strict';

describe('booksList', function () {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('booksList'));

  // Test the controller
  describe('BooksListController', function () {
    var ctrl, $httpBackend;
    var mockQuery = 'artur'
    var mockSearchBy = 'inauthor'
    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(`https://www.googleapis.com/books/v1/volumes?q=${mockQuery}+${mockSearchBy}:${mockQuery}`)
        .respond(200, {
          items: [{
              title: 'book1'
            },
            {
              title: 'book2'
            }
          ]
        })
      ctrl = $componentController('booksList');
      ctrl.query = mockQuery;
      ctrl.searchBy = mockSearchBy;
    }))

    it('should creates books-list controller instance', function () {
      expect(ctrl).toBeTruthy();
    });
    it('should download books if query not undefined', function () {
      expect(ctrl.books).toBeUndefined();
      ctrl.arr();
      $httpBackend.flush();
      expect(ctrl.books).toEqual([{
        title: 'book1'
      }, {
        title: 'book2'
      }]);
    });
  })
});