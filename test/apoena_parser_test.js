QUnit.test("apo_parser attributes", function(assert) {
  assert.expect(5);

  assert.deepEqual(0, apo_parser.dx, "We expect value of dx to be 0");
  assert.deepEqual(0, apo_parser.dy, "We expect value of dy to be 0");
  assert.deepEqual([], apo_parser.inheritanceData, "We expect value of inheritanceData to be empty");
  assert.deepEqual([], apo_parser.diagramData, "We expect value of diagramData to be empty");
  assert.deepEqual(null, apo_parser.xml, "We expect value of xml to be null");
});

QUnit.test("apo_parser process class", function(assert) {
  assert.expect(1);
  // implement me
});

QUnit.test("apo_parser process method", function(assert) {
  assert.expect(1);
  // implement me
});

QUnit.test("apo_parser process variable", function(assert) {
  assert.expect(1);
  // implement me
});

QUnit.test("get diagram by name", function(assert) {
  assert.expect(1);
  // implement me
});

QUnit.test("import class", function(assert) {
  assert.expect(1);
  // implement me
});