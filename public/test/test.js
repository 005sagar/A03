
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(App.math(67,160), 25.06, 'Tested with two positive numbers');
    assert.equal(App.math(67,-110), null, 'Tested with one negative and one positive numbers. ');
    assert.equal(App.math(-67,-170), null, 'Tested with two negative numbers.');
    assert.equal(App.math(0,0), null, 'Tested with two zero numbers.');
});
QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(App.math(67,160), 25.06, 'Tested with two positive numbers');
    assert.equal(App.math(67,-110), null, 'Tested with one negative and one positive numbers. ');
    assert.equal(App.math(-67,-170), null, 'Tested with two negative numbers.');
    assert.equal(App.math(0,0), null, 'Tested with two zero numbers.');
});



