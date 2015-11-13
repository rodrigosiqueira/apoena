QUnit.test("Point constructor", function( assert) {
	assert.expect(2);
	var point = new Point(10,20);
	assert.deepEqual(10, point.x, "We expect value of x");
	assert.deepEqual(20, point.y, "We expect value of y");
});
QUnit.test("Point constructor with default parameters", function( assert) {
	assert.expect(2);
	var point = new Point();
	var zero = 0;
	assert.deepEqual(zero, point.x, "We expect value of x to be zero");
	assert.deepEqual(zero, point.y, "We expect value of y to be zero");
});
QUnit.test("Line constructor", function( assert) {
	assert.expect(5);
	var line = new Line();
	var size = line.points.length;
	assert.deepEqual(null, line.A, "We expect value of A to be null");
	assert.deepEqual(null, line.B, "We expect value of B to be null");
	assert.deepEqual('', line.textA, "We expect value of text A to be empty");
	assert.deepEqual('', line.textB, "We expect value of text B to be empty");
	assert.deepEqual(3, size, "We expect line to have 3 points");
});