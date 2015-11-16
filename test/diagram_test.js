QUnit.test("DiagramObject constructor without name", function(assert) {
  assert.expect(12);

  apo.reloadCanvas('sample');
  var diagramObject = new DiagramObject();

  assert.deepEqual("DiagramObject", diagramObject.name,  "We expect value of name to be DiagramObject");
  assert.deepEqual(0, diagramObject.x,                   "We expect value of x to be zero");
  assert.deepEqual(0, diagramObject.y,                   "We expect value of y to be zero");
  assert.deepEqual(50, diagramObject.height,             "We expect value of height to be 50");
  assert.deepEqual([], diagramObject.properties,         "We expect value of properties to be empty");
  assert.deepEqual([], diagramObject.lines,              "We expect value of lines to be empty");
  assert.deepEqual(false, diagramObject.drag,            "We expect value of drag to be false");
  assert.deepEqual(0, diagramObject.offset.x,            "We expect value of offset.x to be zero");
  assert.deepEqual(0, diagramObject.offset.y,            "We expect value of offset.y to be zero");
  assert.deepEqual(apo.ctx.measureText("DiagramObject").width+10, diagramObject.width,            "We expect value of width to be apo.ctx.measureText(this.name).width+10");
  assert.deepEqual("20px Times New Roman", apo.ctx.font, "We expect value of context font to be 20px Times New Roman");
  assert.deepEqual(diagramObject, apo.entitylist[apo.entitylist.length - 1],     "We expect value of entity list to be contain the diagram object");
});

QUnit.test("DiagramObject constructor with name", function(assert) {
  assert.expect(12);

  var name = "DOname";
  apo.reloadCanvas('sample');
  var diagramObject = new DiagramObject(name);

  assert.deepEqual(name, diagramObject.name,             "We expect value of name to be DOname");
  assert.deepEqual(0, diagramObject.x,                   "We expect value of x to be zero");
  assert.deepEqual(0, diagramObject.y,                   "We expect value of y to be zero");
  assert.deepEqual(50, diagramObject.height,             "We expect value of height to be 50");
  assert.deepEqual([], diagramObject.properties,         "We expect value of properties to be empty");
  assert.deepEqual([], diagramObject.lines,              "We expect value of lines to be empty");
  assert.deepEqual(false, diagramObject.drag,            "We expect value of drag to be false");
  assert.deepEqual(0, diagramObject.offset.x,            "We expect value of offset.x to be zero");
  assert.deepEqual(0, diagramObject.offset.y,            "We expect value of offset.y to be zero");
  assert.deepEqual(apo.ctx.measureText(name).width+10, diagramObject.width,            "We expect value of width to be apo.ctx.measureText(this.name).width+10");
  assert.deepEqual("20px Times New Roman", apo.ctx.font, "We expect value of context font to be 20px Times New Roman");
  assert.deepEqual(diagramObject, apo.entitylist[apo.entitylist.length - 1],     "We expect value of entity list to be contain the diagram object");
});

QUnit.test("DiagramObject reload lines", function(assert) {
  assert.expect(0);

  var diagramObject = new DiagramObject();
  // implement me
});

QUnit.test("DiagramObject add property", function(assert) {
  assert.expect(0);

  var diagramObject = new DiagramObject();
  // implement me
});