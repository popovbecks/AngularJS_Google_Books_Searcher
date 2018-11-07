angular.
module('header').
component('header', {
    bindings: {
        name: '@'
    },
    templateUrl: 'header/header.template.html',
    controller: ["$translate", function HeaderController($translate) {
        this.changeLanguage = function (lang) {
            $translate.use(lang);
        }
    }]
});