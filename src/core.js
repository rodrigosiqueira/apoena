function canvasMouseClickListener(event) {
  for(var i=apo.entitylist.length-1; i >= 0; --i) {
    apo.entitylist[i].mouseclick(event);
  }
};
function canvasMouseMoveListener(event) {
  for(var i=apo.entitylist.length-1; i >= 0; --i) {
    apo.entitylist[i].mousemove(event);
  }
};
var apo = {
  canvas: document.getElementById('samplecanvas'),
  ctx: null,
  currentDiagram: "",
  getMousePos: function(event) {
    var rect = apo.canvas.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top }
  },
  reloadCanvas: function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    if (!this.canvas.getContext) {
      console.log("Canvas not supported");
      return false;
    }
    this.ctx = this.canvas.getContext('2d');
    this.canvas.addEventListener('click', canvasMouseClickListener);
    this.canvas.addEventListener('mousemove', canvasMouseMoveListener);
    return true;
  },
  entitylist: [],
  draw: function() {
    apo.ctx.clearRect(0, 0, apo.canvas.width, apo.canvas.height);
    for(var i=0; i < apo.entitylist.length; i++){
      apo.entitylist[i].draw();
    }
    window.requestAnimationFrame(apo.draw);
  }
};