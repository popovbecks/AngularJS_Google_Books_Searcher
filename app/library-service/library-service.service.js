angular.module('libraryApp')
    .service('libService', function ($http) {
        this.getBooksFromApi = function (query, searchBy) {
            return $http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+${searchBy}:${query}`)
        }

        this.addToLib = function (data) {
            return $http.post('http://localhost:3000/library/', data)
        }
        this.getBooksFromLib = function () {
            return $http.get('http://localhost:3000/library/');
        }
        this.deleteFromLib = function (id) {
            console.log(id)
            return $http.delete(`http://localhost:3000/library/${id}`);
        }
    })