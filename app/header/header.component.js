angular.
module('header').
component('header', {
    bindings: {
        name: '@'
    },
    templateUrl: 'header/header.template.html',
    controller: [function HeaderController() {

    }]
});