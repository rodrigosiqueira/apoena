/// ---- Diagram class ---- ///
DiagramObject.prototype = new Drawable();
DiagramObject.prototype.constructor=DiagramObject;

function DiagramObject(name) {
  Drawable.call(this);

  if(typeof name != 'undefined') {
    this.name = name;
  }
  else {
    this.name="DiagramObject";
  }

  this.x = 0;
  this.y = 0;
  this.height = 30+20;
  this.width = apo.ctx.measureText(this.name).width+10;
  apo.ctx.font = "20px Times New Roman";
  this.properties = [];
  this.lines = [];
  this.drag = false;

  this.offset = {x:0, y:0}

  apo.entitylist.push(this);
  console.log("Diagram created");
};

DiagramObject.prototype.mousemove = function(event) {
  if(this.drag) {
    var rect = apo.canvas.getBoundingClientRect();
    this.x = event.clientX/apo.currentScale - (rect.left/apo.currentScale) - (this.offset.x*apo.currentScale);
    this.y = event.clientY/apo.currentScale - (rect.top/apo.currentScale) - (this.offset.y*apo.currentScale);
    this.reloadLines();
  }
};

DiagramObject.prototype.mouseclick = function(event) {
  var mouse = apo.getMousePos(event);
  mouse.x /= apo.currentScale;
  mouse.y /= apo.currentScale;
  if(apo.currentDiagram != "" && apo.currentDiagram != this.name)
    return;
  if( mouse.x > this.x &&
      mouse.y > this.y &&
      mouse.x-this.width < this.x &&
      mouse.y-this.height < this.y) {
    this.drag = !this.drag;
    this.offset.x = mouse.x - this.x;
    this.offset.y = mouse.y - this.y;
    if(this.drag) {
      apo.currentDiagram = this.name;
    }
    else {
      apo.currentDiagram = "";
      if(apo.grid.active){
        var gridSize = apo.grid.step;
        this.x -= this.x % gridSize;
        this.y -= this.y % gridSize;
      }
      this.reloadLines();
    }
  }
};

DiagramObject.prototype.setPos = function(x, y) {
  this.x = x;
  this.y = y;
};

DiagramObject.prototype.draw = function() {
  var grd=apo.ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height/2);
  grd.addColorStop(0,"rgb(255,255,255)");
  grd.addColorStop(1,"rgb(255,255,255)");

  apo.ctx.fillStyle = grd;
  apo.ctx.fillRect(this.x, this.y, this.width, this.height);
  apo.ctx.lineWidth = 2;
  apo.ctx.strokeStyle = "Black";
  apo.ctx.strokeRect(this.x, this.y, this.width, this.height);

  apo.ctx.font = "20px Times New Roman";
  apo.ctx.fillStyle = "Black";
  apo.ctx.shadowOffsetX = 1;
  apo.ctx.shadowOffsetY = 1;
  apo.ctx.shadowBlur = 2;
  apo.ctx.shadowColor = "rgba(0,0,0,0.5)";
  apo.ctx.fillText(this.name, this.x+5, this.y+20);

  //Spacing after name, 5+height(20)+5
  apo.ctx.lineWidth = 1;
  apo.ctx.beginPath();
  apo.ctx.moveTo(this.x, this.y+30);
  apo.ctx.lineTo(this.x+this.width, this.y+30);
  apo.ctx.stroke();

  //Objects
  apo.ctx.font = "15px Times New Roman";
  apo.ctx.shadowBlur = 0;
  apo.ctx.shadowOffsetX = 0;
  apo.ctx.shadowOffsetY = 0;
  apo.ctx.shadowColor = "rgba(0,0,0,1)";
  for(var i=0; i < this.properties.length; i++) {
    this.properties[i].draw(this.x+5, this.y+35+15+20*i);
  }

};

DiagramObject.prototype.reloadLines = function() {
  for(var i=0; i < this.lines.length; i++) {
      this.lines[i].recalculateLine();
  }
}

DiagramObject.prototype.addProperty = function(obj) {
  this.height += 20;
  var objWidth = obj.getWidth();
  if(objWidth > this.width) {
    this.width = objWidth;
    this.reloadLines();
  }
  this.properties.push(obj);
};

/// ---- Properties end ---- ///
var visibility = {
  public: 0,
  private: 1,
  protected: 2
};