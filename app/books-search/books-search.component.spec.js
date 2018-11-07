describe('Tests for books search', function () {
    beforeEach(module('booksSearch'));

    describe('BooksSearchController', function () {
        var ctrl;
        beforeEach(inject(function ($componentController) {
            ctrl = $componentController('booksSearch')
        }));

        it('should creates books serach controller instance', function () {
            expect(ctrl).toBeTruthy();
        });
        it('should creates books serach controller instance', function () {
            expect(ctrl.search).toBe('inauthor');
        });
    })
})