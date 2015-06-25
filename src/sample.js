function load() {
  apo.reloadCanvas('sample');

  d1 = new DiagramObject("Entity");
  d1.x = 300; d1.y = 200;
  d2 = new DiagramObject("MyEnemy");
  d2.x = 400; d2.y = 350;

  l = new InheritanceLine();
  l.textA = "n .. 1";
  l.textB = "1 .. n";
  l.calculateLine(d1, d2);

  p = new Variable("mATK", "int");
  d1.addProperty(p);

  p2 = new Variable("mHP", "float");
  p2.visibility = visibility.private;
  d2.addProperty(p2);

  m = new Method("methodCall", "void");
  prop = new Property("varA", "float");
  m.parameters.push(prop);
  d2.addProperty(m);

  apo.draw();
}

function parse() {
  import_class('class_data.xml')
}