QUnit.test("Drawable constructor", function( assert) {
	assert.expect(1);
	var drawable = new Drawable();
	var name = "draw";
	assert.deepEqual(name, drawable.name, "We expect value of name to be draw");
});