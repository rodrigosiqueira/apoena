QUnit.test("Point constructor", function(assert) {
  assert.expect(2);
  var point = new Point(10,20);
  assert.deepEqual(10, point.x, "We expect value of x");
  assert.deepEqual(20, point.y, "We expect value of y");
});

QUnit.test("Point constructor with default parameters", function(assert) {
  assert.expect(2);
  var point = new Point();
  var zero = 0;
  assert.deepEqual(zero, point.x, "We expect value of x to be zero");
  assert.deepEqual(zero, point.y, "We expect value of y to be zero");
});

QUnit.test("Line constructor", function(assert) {
  assert.expect(5);
  var line = new Line();
  var size = line.points.length;
  assert.deepEqual(null, line.A, "We expect value of A to be null");
  assert.deepEqual(null, line.B, "We expect value of B to be null");
  assert.deepEqual('', line.textA, "We expect value of text A to be empty");
  assert.deepEqual('', line.textB, "We expect value of text B to be empty");
  assert.deepEqual(3, size, "We expect line to have 3 points");
});

QUnit.test("Line calculation", function(assert) {
  assert.expect(8);
  apo.reloadCanvas('sample');
  var d1 = new DiagramObject("d1");
  var d2 = new DiagramObject("d2");
  d1.x = 381;
  d1.y = 28;
  var line = new Line();
  line.calculateLine(d1,d2);

  assert.deepEqual(381, line.points[0].x, "We expect value of x in point 1");
  assert.deepEqual(53, line.points[0].y, "We expect value of y in point 1");
  assert.deepEqual(30, line.points[1].x, "We expect value of x in point 2");
  assert.deepEqual(53, line.points[1].y, "We expect value of y in point 2");
  assert.deepEqual(30, line.points[2].x, "We expect value of x in point 3");
  assert.deepEqual(53, line.points[2].y, "We expect value of y in point 3");

  assert.deepEqual(line, d1.lines[0], "We expect value of lines to contain line");
  assert.deepEqual(line, d2.lines[0], "We expect value of lines to contain line");
});

QUnit.test("Line recalculation", function(assert) {
  assert.expect(6);
  apo.reloadCanvas('sample');
  var d1 = new DiagramObject("d1");
  var d2 = new DiagramObject("d2");
  d1.x = 381;
  d1.y = 28;
  var line = new Line();
  line.recalculateLine(d1,d2);

  assert.deepEqual(381, line.points[0].x, "We expect value of x in point 1");
  assert.deepEqual(53, line.points[0].y, "We expect value of y in point 1");
  assert.deepEqual(30, line.points[1].x, "We expect value of x in point 2");
  assert.deepEqual(53, line.points[1].y, "We expect value of y in point 2");
  assert.deepEqual(30, line.points[2].x, "We expect value of x in point 3");
  assert.deepEqual(53, line.points[2].y, "We expect value of y in point 3");
});

QUnit.test("Drawable constructor", function(assert) {
  assert.expect(1);
  var drawable = new Drawable();
  var name = "draw";
  assert.deepEqual(name, drawable.name, "We expect value of name to be draw");
});