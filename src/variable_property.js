Variable.prototype = new Property();
Variable.prototype.constructor=Variable;

function Variable(name, type) {
  Property.call(this);
  if(typeof name != 'undefined')
    this.name = name;
  if(typeof type != 'undefined')
    this.type = type;
};

Variable.prototype.getWidth = function() {
  apo.ctx.font = "15px Times New Roman";
  var len = Property.prototype.getWidth.call(this);
  len += apo.ctx.measureText(this.type+"  : "+this.name).width;
  return len;
}

Variable.prototype.draw = function(x, y) {
  Property.prototype.draw.call(this, x, y);

  var len = apo.ctx.measureText(this.type+" : ");
  apo.ctx.fillText(this.type+" : ", x+10, y);
  apo.ctx.fillText(this.name, x+10+len.width, y);
};