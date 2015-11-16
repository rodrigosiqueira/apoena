Grid.prototype = new Drawable();
Grid.prototype.constructor=Grid;

function Grid() {
  Drawable.call(this);
  this.width = apo.canvas.width;
  this.height = apo.canvas.height;

  this.active = true;
  this.step = 20;

  this.draw = function(){
  	apo.ctx.clearRect(0, 0, this.width, this.height);
  	apo.ctx.lineWidth = 0.5;
  	apo.ctx.strokeStyle = "blue";
  	for (var i = 0; i < this.height; i+=this.step) {
  		apo.ctx.beginPath();
  		apo.ctx.moveTo(0,i);
  		apo.ctx.lineTo(this.width,i);
  		apo.ctx.stroke();
  	}
  	for (var i = 0; i < this.width; i+=this.step) {
  		apo.ctx.beginPath();
  		apo.ctx.moveTo(i,0);
  		apo.ctx.lineTo(i,this.height);
  		apo.ctx.stroke();
  	}
  }

  this.changeState = function(){
  	this.active = !this.active;
  	mouseOverCanvas = true;
  }
}
