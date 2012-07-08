/* Pong Js File */

var WIDTH;
var HEIGHT;
var ctx;
var intervalId = 0;

// Main render function
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ballController.update();
  paddleController.update();
  enemyPaddleController.update();
}

// Reset the game on a score
function reset(){
  ballController.init();
  paddleController.init();
  enemyPaddleController.init();
}

// Cancel the main game setInterval
function endGame(){
  return clearInterval(intervalId);
}

// Begin a game, init all params
function initGame() {
  ctx = jQuery('#canvas')[0].getContext("2d");
  WIDTH = jQuery("#canvas").width();
  HEIGHT = jQuery("#canvas").height();

  ballController.init();
  paddleController.init();
  enemyPaddleController.init();

  intervalId = setInterval(draw, 10);
}
