let canvas, ctx;
let windowWidth, windowHeight;
let mouseX, mouseY, mouseTouched;

onload = function() {
  canvas = document.getElementById('canvas');

  if (!canvas || !canvas.getContext) {
    return false;
  }

  ctx = canvas.getContext('2d');
  windowWidth = canvas.width;
  windowHeight = canvas.height;

  mouseX = windowWidth / 2;
  mouseY = windowHeight / 2;

  // For mobile
  canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const bai = windowWidth / rect.width;
    mouseTouched = true;
    mouseX = (event.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai;
    mouseY = (event.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai;

    if (touchStart) {
      touchStart();
    }
  }, false);

  canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const bai = windowWidth / rect.width;
    mouseX = (event.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai;
    mouseY = (event.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai;

    if (touchMove) {
      touchMove();
    }
  }, false);

  canvas.addEventListener('touchend', (event) => {
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const bai = windowWidth / rect.width;
    mouseTouched = false;
    mouseX = (event.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai;
    mouseY = (event.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai;

    if (touchEnd) {
      touchEnd();
    }
  }, false);

  // For pc
  canvas.addEventListener('mousedown', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseTouched = true;
    const bai = windowWidth / rect.width;
    mouseX = (event.clientX - rect.left) * bai;
    mouseY = (event.clientY - rect.top) * bai;

    if (touchStart) {
      touchStart();
    }
  }, false);

  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const bai = windowWidth / rect.width;
    mouseX = (event.clientX - rect.left) * bai;
    mouseY = (event.clientY - rect.top) * bai;

    if (touchMove) {
      touchMove();
    }
  }, false);

  canvas.addEventListener('mouseup', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseTouched = false;
    const bai = windowWidth / rect.width;
    mouseX = (event.clientX - rect.left) * bai;
    mouseY = (event.clientY - rect.top) * bai;

    if (touchEnd) {
      touchEnd();
    }
  }, false);

  if (setup) {
    setup();
  }

  if (loop) {
    setInterval(loop, 33);
  }
};
