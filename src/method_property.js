Method.prototype = new Property();
Method.prototype.constructor=Method;

function Method(name, type) {
  Property.call(this);
  if(typeof name != 'undefined')
    this.name = name;
  if(typeof type != 'undefined')
    this.type = type;

  this.parameters = []
};

// Should use the following example format
// int methodCall(int : variableName, int : variable2)
Method.prototype.getWidth = function() {
  apo.ctx.font = "15px Times New Roman";
  var len = Property.prototype.getWidth.call(this);
  len += apo.ctx.measureText(this.type+" : "+this.name+"(").width;

  for(var i=0; i < this.parameters.length; i++) {
    len += apo.ctx.measureText(this.parameters[i].type +" : "+this.parameters[i].name).width;
    if(i != this.parameters.length-1){
      len += apo.ctx.measureText(", ").width;
    }
  }
  len += apo.ctx.measureText(") ").width;
  return len;
}

Method.prototype.draw = function(x, y) {
  Property.prototype.draw.call(this, x, y);

  var len = apo.ctx.measureText(this.type+" : ");
  apo.ctx.fillText(this.type+" : ", x+10, y);
  var text = this.name + "(";
  for(var i=0; i < this.parameters.length; i++) {
    text += this.parameters[i].type + " : " + this.parameters[i].name;
    if(i != this.parameters.length-1) {
      text += ", ";
    }
  }
  text += ")";
  apo.ctx.fillText(text, x+10+len.width, y);
};