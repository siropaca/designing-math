function setup() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(windowWidth, windowHeight);
  ctx.lineTo(windowWidth / 3, windowHeight);
  ctx.lineTo(0, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(windowWidth * 0.5, windowHeight * 0.1);
  ctx.lineTo(windowWidth, 0);
  ctx.lineTo(windowWidth * 0.8, windowHeight * 0.6);
  ctx.lineTo(windowWidth * 0.4, windowHeight * 0.2);
  ctx.fill();
}

function loop() {

}

function touchStart() {

}

function touchMove() {

}

function touchEnd() {

}
