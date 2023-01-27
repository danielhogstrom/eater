const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 40;

let dx = 2;
let dy = -2;

let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = false;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    downPressed = false;
  }
}

const ballRadius = 20;
let pacmanX = 100;
let pacmanY = 100;
function drawBall() {
  // drawing code
  ctx.beginPath();
  ctx.rect(0, 0, 960, 660);
  ctx.fillStyle = '#0167b3';
  ctx.fill();
  ctx.closePath();
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  ctx.beginPath();
  ctx.arc(pacmanX, pacmanY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#4885c3';
  ctx.fill();
  ctx.closePath();
  if (rightPressed) {
    if (pacmanX > 930) {
      return;
    }
    pacmanX += 7;
  } else if (leftPressed) {
    if (pacmanX < 30) {
      return;
    }
    pacmanX -= 7;
  }
  if (upPressed) {
    if (pacmanY < 30) {
      return;
    }
    pacmanY -= 7;
  } else if (downPressed) {
    if (pacmanY > 630) {
      return;
    }
    pacmanY += 7;
  }
}
setInterval(draw, 10);
