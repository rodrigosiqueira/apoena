var mouseOverCanvas = true;

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

function canvasMouseLeaveListener(event) {
  mouseOverCanvas = false;
  startAnimation();
};

function canvasMouseOverListener(event) {
  mouseOverCanvas = true;
  startAnimation();
};

var apo = {
  canvas: document.getElementById('samplecanvas'),
  ctx: null,
  currentDiagram: "",
  entitylist: [],
  grid: null,
  currentScale: 1,
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
    this.grid = new Grid();
    this.ctx = this.canvas.getContext('2d');
    this.ctx.save();
    this.canvas.addEventListener('click', canvasMouseClickListener);
    this.canvas.addEventListener('mousemove', canvasMouseMoveListener);
    this.canvas.addEventListener('mouseleave', canvasMouseLeaveListener, false);
    this.canvas.addEventListener('mouseover', canvasMouseOverListener, false);
    return true;
  },
  draw: function() {
    apo.ctx.clearRect(0, 0, apo.canvas.width, apo.canvas.height);
    if(apo.grid.active){
      console.log("desenhou");
      apo.grid.draw();
    }
    for(var i=0; i < apo.entitylist.length; i++){
      if(apo.entitylist[i].visible){
        apo.entitylist[i].draw();
      }
    }

    window.requestAnimationFrame(apo.draw);
  }
};

function startAnimation() {
  if(mouseOverCanvas) {
    window.requestAnimationFrame(apo.draw);
  }
}

function zoomIn(){
  apo.ctx.restore();
  apo.ctx.save();
  apo.currentScale += 0.1;
  apo.ctx.scale(apo.currentScale, apo.currentScale);
  apo.grid.width *= (apo.currentScale);
  apo.grid.height *= (apo.currentScale);
};

function zoomOut(){
  apo.ctx.restore();
  apo.ctx.save();
  apo.currentScale -= 0.1;
  apo.ctx.scale(apo.currentScale, apo.currentScale);
  apo.grid.width *= (1/apo.currentScale);
  apo.grid.height *= (1/apo.currentScale);
};

function resetZoom(){
  apo.ctx.restore();
  apo.ctx.save();
  apo.currentScale = 1;
  apo.ctx.scale(apo.currentScale, apo.currentScale);
};

function saveImage(){
  window.open().location = apo.canvas.toDataURL("image/png");
};