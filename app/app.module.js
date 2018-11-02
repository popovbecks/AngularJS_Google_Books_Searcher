'use strict';

// Define the `phonecatApp` module
angular.module('libraryApp', [
  // ...which depends on the `phoneList` module
  'header',
  'booksList', 'ngRoute', 'booksLibrary', 'bookDetail', 'booksSearch', 'bookItem'
])

// .constant('_', window._);