'use strict';

// Define the `phonecatApp` module
angular.module('libraryApp', [
  // ...which depends on the `phoneList` module
  'header',
  'booksList', 'ngRoute', 'bookDetail'
])

// .constant('_', window._);