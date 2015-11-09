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
      apo.ctx.fillText("#", x, y);
      break;
  }
};