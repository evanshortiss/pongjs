/*
 * Ball Controller - Handles rendering and logic for the ball
 */

var ballController = {
	// Setup ball vars and init the round/game
	init: function() {
		ballModel.dy = 0;
		ballModel.dx = 0;
		ballModel.x = WIDTH/2;
		ballModel.y = HEIGHT/2;
		setTimeout(function(){
			ballModel.dx = 4;
			ballModel.dy = 0;
		}, 3800);
	},

	// Check the ball has hit walls & paddles
	checkBoundary: function() {
		// Hits a wall
		if(ballModel.x+ballModel.dx>=WIDTH) {
			reset();
		} else if (ballModel.x+ballModel.dx<0) {
			reset();
		}
		if(ballModel.y+ballModel.dy<0 || ballModel.y+ballModel.dy>HEIGHT) {
			ballModel.dy = ballModel.dy * -1;
		}

		// Hits our paddle
		if((ballModel.x>paddleModel.paddlex && ballModel.x<paddleModel.paddlex+paddleModel.paddlew) && (ballModel.y>paddleModel.paddley && ballModel.y<paddleModel.paddley+paddleModel.paddleh)) {
			// Move the ball differently based on where it hit the paddle
			ballModel.dy = 8 * ((ballModel.y - (paddleModel.paddley + paddleModel.paddleh / 2)) / paddleModel.paddleh);
			console.log("X Changed");
			ballModel.dx = ballModel.dx * -1;
		}

		// Hits enemy paddle
		if((ballModel.x>enemyPaddleController.paddlex && ballModel.x<enemyPaddleController.paddlex+enemyPaddleController.paddlew) && (ballModel.y>enemyPaddleController.paddley && ballModel.y<enemyPaddleController.paddley+enemyPaddleController.paddleh)) {
			// Move the ball differently based on where it hit the paddle
			ballModel.dy = 8 * ((ballModel.y - (enemyPaddleController.paddley + enemyPaddleController.paddleh / 2)) / enemyPaddleController.paddleh);
			console.log("X Changed");
			ballModel.dx = ballModel.dx * -1;
		}
	},

	// Update the ball object, check collisions and update position
	update: function() {
		var self = this;

		ballModel.x += ballModel.dx;
		ballModel.y += ballModel.dy;

		self.checkBoundary();
		self.drawBall(ballModel.x, ballModel.y, ballModel.radius);

	},

	// Draw the ball
	drawBall: function(x, y, r) {
		ctx.fillStyle = '#18CAE6';
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
}