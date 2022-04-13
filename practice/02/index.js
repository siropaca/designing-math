function setup() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(screenWidth, screenHeight);
  ctx.lineTo(screenWidth / 3, screenHeight);
  ctx.lineTo(0, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(screenWidth * 0.5, screenHeight * 0.1);
  ctx.lineTo(screenWidth, 0);
  ctx.lineTo(screenWidth * 0.8, screenHeight * 0.6);
  ctx.lineTo(screenWidth * 0.4, screenHeight * 0.2);
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
