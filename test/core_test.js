QUnit.test("apo attributes", function(assert) {
  assert.expect(3);

  apo.reloadCanvas('sample');
  var canvas = document.getElementById('sample');

  assert.deepEqual(canvas, apo.canvas, "We expect value of apo.canvas to be samplecanvas");
  assert.deepEqual(canvas.getContext('2d'), apo.ctx, "We expect value of apo.ctx to be null");
  assert.deepEqual("", apo.currentDiagram, "We expect value of apo.currentDiagram to be an empty string");
  //assert.deepEqual([], apo.entitylist, "We expect value of apo.entitylist to be empty");
});