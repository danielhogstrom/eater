// get the canvas element
var canvas = document.getElementById('game-canvas');

// set canvas dimensions
canvas.width = 960;
canvas.height = 660;

// get the canvas context
var ctx = canvas.getContext('2d');

// create Pac-Man object
var pacman = {
  x: 500,
  y: 250,
  radius: 20,
  color: 'yellow',
  direction: 'right',
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#4885c3';
    ctx.fill();
  },
};
let paused = false;
// add event listener for keydown
document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    if (paused) {
      paused = false;
    } else {
      paused = true;
    }
  }
});

// draw Pac-Man on the canvas
pacman.draw();

// add keyboard event listener to control Pac-Man's movement
document.addEventListener('keydown', function (event) {
  if (event.keyCode == 37) {
    pacman.direction = 'left';
  } else if (event.keyCode == 38) {
    pacman.direction = 'up';
  } else if (event.keyCode == 39) {
    pacman.direction = 'right';
  } else if (event.keyCode == 40) {
    pacman.direction = 'down';
  }
});

// create obstacle objects
var obstacles = [
  { x: 50, y: 50, width: 50, height: 50, color: 'blue' },
  { x: 150, y: 150, width: 50, height: 50, color: 'blue' },
  { x: 250, y: 250, width: 50, height: 50, color: 'blue' },
];
// draw obstacles on the canvas
function drawObstacles() {
  for (var i = 0; i < obstacles.length; i++) {
    var obstacle = obstacles[i];
    ctx.fillStyle = obstacle.color;
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
  if (
    pacman.x + pacman.radius > obstacle.x &&
    pacman.x - pacman.radius < obstacle.x + obstacle.width &&
    pacman.y + pacman.radius > obstacle.y &&
    pacman.y - pacman.radius < obstacle.y + obstacle.height
  ) {
    console.log('collision');
  }
}
// move Pac-Man based on its direction
setInterval(function () {
  if (!paused) {
    if (pacman.direction == 'left') {
      if (pacman.x > 0 + pacman.radius) pacman.x -= 5;
    } else if (pacman.direction == 'up') {
      if (pacman.y > 0 + pacman.radius) pacman.y -= 5;
    } else if (pacman.direction == 'right') {
      if (pacman.x + pacman.radius < canvas.width) pacman.x += 5;
    } else if (pacman.direction == 'down') {
      if (pacman.y + pacman.radius < canvas.height) pacman.y += 5;
    }
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // redraw obstacles
    drawObstacles();

    // redraw Pac-Man
    pacman.draw();
  } else {
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // display "Game Paused" on the canvas
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Paused', canvas.width / 2, canvas.height / 2);
  }
}, 50);
