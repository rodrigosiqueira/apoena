function Point(x=0, y=0) {
	this.x = x;
	this.y = y;
};

function Drawable() {
	this.name = 'draw';
};

Drawable.prototype.draw = function() {
	console.log('draw function not implemented');
};

Drawable.prototype.mousemove = function(event){
};

Drawable.prototype.mouseclick = function(event){
};

/// ---- Line class ---- ///
Line.prototype = new Drawable();
Line.prototype.constructor=Line;

function Line() {
	//Drawable.call(this);
	this.points = [new Point(), new Point(), new Point()];
	this.A = null;
	this.B = null;
	apo.entitylist.push(this);
	this.textA = '';
	this.textB = '';
};

Line.prototype.recalculateLine = function(A, B) {

	if(typeof A == 'object'){
		this.A = A;
	}
	if(typeof B == 'object'){
		this.B = B;
	}

	var cax = this.A.x+this.A.width/2.0;
	var cay = this.A.y+this.A.height/2.0;
	var cbx = this.B.x+this.B.width/2.0;
	var cby = this.B.y+this.B.height/2.0;

	this.points[0].x = cax; this.points[0].y = cay;
	this.points[1].x = cbx; this.points[1].y = cay;
	this.points[2].x = cbx; this.points[2].y = cby;


	// Set lines to the boundary of the diagram
	if(this.points[0].x < this.points[1].x) {
		this.points[0].x += this.A.width/2.0;
	}else{
		this.points[0].x -= this.A.width/2.0;
	}
	if(this.points[2].y < this.points[1].y) {
		this.points[2].y += this.B.height/2.0;
	}else{
		this.points[2].y -= this.B.height/2.0;
	}
};

Line.prototype.calculateLine = function(A, B) {
	this.recalculateLine(A, B);
	A.lines.push(this);
	B.lines.push(this);
};

Line.prototype.draw = function() {
	if(this.points.length == 0) return;

	apo.ctx.beginPath();
	apo.ctx.lineWidth = 2;
	apo.ctx.strokeStyle = "Black";
	apo.ctx.moveTo(this.points[0].x, this.points[0].y);

	for(var i=1; i < this.points.length; i++) {
		apo.ctx.lineTo(this.points[i].x, this.points[i].y);
	}
	apo.ctx.stroke();

	apo.ctx.font = "12px Times New Roman";
	apo.ctx.fillStyle = "Black";
	if(this.textA) {
		var dx = 0;
		if(this.points[0].x > this.points[1].x){
			dx = apo.ctx.measureText(this.textA).width+10;
		}
		apo.ctx.fillText(this.textA, this.points[0].x+5-dx, this.points[0].y-12);
	}
	if(this.textB) {
		var dy = 0;
		if(this.points[2].y < this.points[1].y){
			dy = 30;
		}
		var lastI = this.points.length-1;
		apo.ctx.fillText(this.textB, this.points[lastI].x+5, dy+this.points[lastI].y-12);
	}
};
