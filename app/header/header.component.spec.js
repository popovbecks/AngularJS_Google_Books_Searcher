xdescribe('header', function () {
    beforeEach(module('header'));
    describe('HeaderControlle', function () {
        it('should creates header controller instance', inject(function ($componentController) {
            var ctrl = $componentController('header');
            expect(ctrl).toBeTruthy();
        }));
    })
})