describe('book-item tests', function () {
    beforeEach(module('bookItem'));
    describe('book-item controller', function () {
        var ctrl;
        beforeEach(inject(function ($componentController) {
            ctrl = $componentController('bookItem');
        }));
        it('some text', function () {
            expect(ctrl).toBeTruthy();
        });
        it('some text', function () {
            expect(ctrl.name).toBe('Alex');
        });
        it('some text', function () {
            ctrl.setName('Ben')
            expect(ctrl.name).toBe('Ben');
        })
    })
})