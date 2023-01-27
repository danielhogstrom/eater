// get the canvas element
var canvas = document.getElementById('game-canvas');

// set canvas dimensions
canvas.width = 960;
canvas.height = 660;

// get the canvas context
var ctx = canvas.getContext('2d');

// create Pac-Man object
var pacman = {
  x: 250,
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

// move Pac-Man based on its direction
setInterval(function () {
  if (pacman.direction == 'left') {
    pacman.x -= 5;
  } else if (pacman.direction == 'up') {
    pacman.y -= 5;
  } else if (pacman.direction == 'right') {
    pacman.x += 5;
  } else if (pacman.direction == 'down') {
    pacman.y += 5;
  }

  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // redraw Pac-Man
  pacman.draw();
}, 50);
