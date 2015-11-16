Grid.prototype = new Drawable();
Grid.prototype.constructor=Grid;

function Grid() {
  Drawable.call(this);

  this.active = true;
  this.step = 20;

  this.draw = function(){
  	var width = apo.canvas.width;
  	var height = apo.canvas.height;
  	apo.ctx.lineWidth = 0.5;
  	apo.ctx.strokeStyle = "blue";
  	for (var i = 0; i < height; i+=this.step) {
  		apo.ctx.beginPath();
  		apo.ctx.moveTo(0,i);
  		apo.ctx.lineTo(width,i);
  		apo.ctx.stroke();
  	}
  	for (var i = 0; i < width; i+=this.step) {
  		apo.ctx.beginPath();
  		apo.ctx.moveTo(i,0);
  		apo.ctx.lineTo(i,height);
  		apo.ctx.stroke();
  	}
  }
}
