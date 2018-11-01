'use strict';

angular.
module('bookItem').
component('bookItem', {
    bindings: {
        book: '='
    },
    templateUrl: 'book-item/book-item.template.html',
    controller: [function BookItemController() {
        this.name = 'Alex';
        this.setName = function (value) {
            this.name = value;
        }
        this.$onInit = function () {};
    }]
});