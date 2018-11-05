'use strict';

// Define the `phonecatApp` module
angular.module('libraryApp', [
  // ...which depends on the `phoneList` module
  'header',
  'booksList', 'ui.router', 'booksLibrary', 'bookDetail', 'booksSearch', 'bookItem'
])

// .constant('_', window._);