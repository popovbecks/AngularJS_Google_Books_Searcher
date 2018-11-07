'use strict';

describe('header', function () {
    beforeEach(module('header'));
    describe('HeaderController', function () {
        var ctrl;
        beforeEach(inject(function ($componentController) {
            ctrl = $componentController('header');
        }))

        it('header instance should be creats', function () {
            expect(ctrl).toBeTruthy();
        })
    })
})