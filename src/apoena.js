/**** TODO *****

- Make move and click events for Diagram classes
- Extend Line class to support the diagram class model

***************/

/****** Base ******/

var apo = {
  cavas: document.getElementById('samplecanvas'),
  ctx: null,
  reloadCanvas: function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    if (!this.canvas.getContext) {
      console.log("Canvas not supported");
      return false;
    }
    this.ctx = this.canvas.getContext('2d');
    return true;
  },
  entitylist: [],
  draw: function() {
    console.log("draw");
    for(var i=0; i < apo.entitylist.length; i++){
      console.log(i);
      console.log('len '+apo.entitylist.length);
      apo.entitylist[i].draw();
    }
  }
};

/******* Classes *******/

function Point() {
  this.x = 0;
  this.y = 0;
};

function Point(x, y) {
  this.x = x;
  this.y = y;
};

function Drawable() {
  this.name = 'draw';
  //console.log('Drawable constructed');
};

Drawable.prototype.draw = function() {
  console.log('draw function not implemented');
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
};

Line.prototype.recalculateLine = function(A, B) {

  if(typeof A != 'undefined')
    this.A = A;
  if(typeof B != 'undefined')
    this.B = B;

  var ax = this.A.x+this.A.width;
  var ay = this.A.y+this.A.height/2.0;
  var bx = this.B.x+this.B.width/2.0;
  var by = this.B.y;

  this.points[0].x = ax; this.points[0].y = ay;
  this.points[1].x = bx; this.points[1].y = ay;
  this.points[2].x = bx; this.points[2].y = by;
};

Line.prototype.calculateLine = function(A, B) {
  this.recalculateLine(A, B);
  A.lines.push(this);
  B.lines.push(this);
};

Line.prototype.draw = function() {
  if(this.points.length == 0) return;

  apo.ctx.beginPath();
  apo.ctx.fillStyle = "Black";
  apo.ctx.moveTo(this.points[0].x, this.points[0].y);

  for(var i=1; i < this.points.length; i++) {
    apo.ctx.lineTo(this.points[i].x, this.points[i].y);
  }
  apo.ctx.stroke();
};

/// ---- Diagram class ---- ///
DiagramObject.prototype = new Drawable();
DiagramObject.prototype.constructor=DiagramObject;

function DiagramObject(name) {
  Drawable.call(this);

  if(typeof name != 'undefined')
    this.name = name;
  else
    this.name="DiagramObject";
  this.x = 0;
  this.y = 0;
  apo.ctx.font = "20px Times New Roman";
  this.width = apo.ctx.measureText(this.name).width+10;
  this.height = 30+20;
  this.properties = [];
  this.lines = [];

  apo.entitylist.push(this);
  console.log("Diagram created");
};

DiagramObject.prototype.setPos = function(x, y) {
  this.x = x;
  this.y = y;
};

DiagramObject.prototype.draw = function() {
  apo.ctx.fillStyle = "rgb(180,150,100)";
  apo.ctx.fillRect(this.x, this.y, this.width, this.height);
  apo.ctx.fillStyle = "Black";
  apo.ctx.strokeRect(this.x, this.y, this.width, this.height);

  apo.ctx.font = "20px Times New Roman";
  apo.ctx.fillStyle = "Black";
  apo.ctx.shadowOffsetX = 1;
  apo.ctx.shadowOffsetY = 1;
  apo.ctx.shadowBlur = 2;
  apo.ctx.shadowColor = "rgba(0,0,0,0.5)";
  apo.ctx.fillText(this.name, this.x+5, this.y+20);

  //Spacing after name, 5+height(20)+5
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

DiagramObject.prototype.addProperty = function(obj) {
  this.height += 15;
  var objWidth = obj.getWidth();
  if(objWidth > this.width) {
    this.width = objWidth;
    for(var i=0; i < this.lines.length; i++) {
      this.lines[i].recalculateLine();
    }
  }
  this.properties.push(obj);
};

/// ---- Properties end ---- ///
var visibility = {
  public: 0,
  private: 1,
  protected: 2
};

function Property() {
  this.name = "Property";
  this.visibility = visibility.public;
  this.type = null;
};

function Property(name, type) {
  this.name = name;
  this.visibility = visibility.public;
  this.type = type;
};

Property.prototype.getWidth = function() {
  return 15;
}

Property.prototype.draw = function(x, y) {
  switch(this.visibility) {
    case visibility.public:
      apo.ctx.fillText("+", x, y);
      break;
    case visibility.private:
      apo.ctx.fillText("-", x, y);
      break;
    case visibility.protected:
      apo.ctx.fillText("_", x, y);
      break;
  }
};

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

/***** End Classes *****/