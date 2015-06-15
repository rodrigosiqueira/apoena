function load() {
  apo.reloadCanvas('sample');

  d1 = new DiagramObject("E");
  d1.x = 10; d1.y = 10;
  d2 = new DiagramObject("MyEnemy");
  d2.x = 200; d2.y = 150;

  l = new Line();
  l.calculateLine(d1, d2);

  p = new Variable("mATK", "int");
  d1.addProperty(p);

  p2 = new Variable("mHP", "float");
  p2.visibility = visibility.private;
  d2.addProperty(p2);

  apo.draw();
}