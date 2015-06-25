console.log('loaded samplejs');

function draw() {
  console.log('draw called');
  var canvas = document.getElementById('samplecanvas');
  if (!canvas.getContext) {
    console.log("Canvas not supported");
    return;
  }
  var ctx = canvas.getContext('2d');
  lines(ctx);
  text(ctx);
//
//  ctx.fillRect(25,25,100,100);
//  ctx.clearRect(45,45,60,60);
//  ctx.strokeRect(50,50,50,50);
//
//  ctx.fillStyle = "rgb(200,0,0";
//  ctx.fillRect(10, 10, 55, 50);
//
//  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//  ctx.fillRect(30, 30, 55, 50);
}

function text(ctx) {
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0,0,0,0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample string", 5, 30);
}

function lines(ctx) {
  ctx.lineWidth = 15;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(-5,5+40);
  ctx.lineTo(35,45+40);
  ctx.lineTo(75,5+40);
  ctx.lineTo(115,45+40);
  ctx.lineTo(155,5+40);
  ctx.stroke();
}