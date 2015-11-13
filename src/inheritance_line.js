
InheritanceLine.prototype = new Line();
InheritanceLine.prototype.constructor=InheritanceLine;

function InheritanceLine() {
  Line.call(this);
};

InheritanceLine.prototype.draw = function() {
  if(!this.A || !this.B) return;
  Line.prototype.draw.call(this);
  var path = new Path2D();

  var px = this.points[0].x;
  var py = this.points[0].y;
  var size = 10;

  var horizontalArrow = true
  if(px == this.points[1].x){
    horizontalArrow = false;
  }

  if(horizontalArrow) {
    if(px > this.points[1].x) {
      size = -size;
    }
    path.moveTo(px, py);
    path.lineTo(px+size, py-size);
    path.lineTo(px+size, py+size);
  } else {
    if(py < this.points[1].y){
      size = -size;
    }
    path.moveTo(px, py);
    path.lineTo(px+size, py+size);
    path.lineTo(px-size, py+size);
  }
  apo.ctx.fill(path);
};