QUnit.test("Property default constructor", function(assert) {
  assert.expect(3);

  var property = new Property();
  assert.deepEqual("Property", property.name, "We expect value of name to be Property");
  assert.deepEqual(visibility.public, property.visibility, "We expect value of visibility to be public");
  assert.deepEqual(null, property.type, "We expect value of type to be null");
});

QUnit.test("Property constructor with parameters", function(assert) {
  assert.expect(3);

  var name = "PropertyTestName";
  var type = "float";
  var property = new Property(name, type);
  assert.deepEqual(name, property.name, "We expect value of name to be PropertyTestName");
  assert.deepEqual(visibility.public, property.visibility, "We expect value of visibility to be public");
  assert.deepEqual(type, property.type, "We expect value of type to be float");
});

QUnit.test("Property get width", function(assert) {
  assert.expect(1);

  var property = new Property();
  assert.deepEqual(15, property.getWidth(), "We expect value of width to be 15");
});