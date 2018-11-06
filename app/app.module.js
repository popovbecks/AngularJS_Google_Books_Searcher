'use strict';

// Define the `phonecatApp` module
angular.module('libraryApp', [
  // ...which depends on the `phoneList` module
  'header',
  'booksList', 'ui.router', 'booksLibrary', 'nvd3', 'bookDetail', 'booksSearch', 'barChart', 'bookItem',
])

// .constant('_', window._);