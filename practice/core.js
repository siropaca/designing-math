let canvas, ctx;
let screenWidth, screenHeight;
let curYubiX, curYubiY, yubiTouched;

onload = function() {
  canvas = document.getElementById('canvas');

  if (!canvas || !canvas.getContext) {
    return false;
  }

  ctx = canvas.getContext('2d');
  screenWidth = canvas.width;
  screenHeight = canvas.height;

  curYubiX = screenWidth / 2;
  curYubiY = screenHeight / 2;

  //スマホ用
  canvas.addEventListener('touchstart', (evt) => {
    evt.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const bai = screenWidth / rect.width;
    yubiTouched = true;
    curYubiX = (evt.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai;
    curYubiY = (evt.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai;

    if (touchStart) {
      touchStart();
    }
  }, false);

  canvas.addEventListener('touchmove', (evt) => {
    evt.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const bai = screenWidth / rect.width;
    curYubiX = (evt.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai;
    curYubiY = (evt.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai;

    if (touchMove) {
      touchMove();
    }
  }, false);

  canvas.addEventListener('touchend', (evt) => {
    evt.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const bai = screenWidth / rect.width;
    yubiTouched = false;
    curYubiX = (evt.changedTouches[0].pageX - (rect.left + window.pageXOffset)) * bai;
    curYubiY = (evt.changedTouches[0].pageY - (rect.top + window.pageYOffset)) * bai;

    if (touchEnd) {
      touchEnd();
    }
  }, false);

  // PC用
  canvas.addEventListener('mousedown', (evt) => {
    const rect = canvas.getBoundingClientRect();
    yubiTouched = true;
    const bai = screenWidth / rect.width;
    curYubiX = (evt.clientX - rect.left) * bai;
    curYubiY = (evt.clientY - rect.top) * bai;

    if (touchStart) {
      touchStart();
    }
  }, false);

  canvas.addEventListener('mousemove', (evt) => {
    const rect = canvas.getBoundingClientRect();
    const bai = screenWidth / rect.width;
    curYubiX = (evt.clientX - rect.left) * bai;
    curYubiY = (evt.clientY - rect.top) * bai;

    if (touchMove) {
      touchMove();
    }
  }, false);

  canvas.addEventListener('mouseup', (evt) => {
    const rect = canvas.getBoundingClientRect();
    yubiTouched = false;
    const bai = screenWidth / rect.width;
    curYubiX = (evt.clientX - rect.left) * bai;
    curYubiY = (evt.clientY - rect.top) * bai;

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
