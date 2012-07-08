/*
 * Paddle Controller - Controls the players input and paddle rendering/logic
 */

var paddleController = {
	// Setup the paddle size and position and bind keyboard events
	init: function() {
		var self = this;
	  paddleModel.paddley = HEIGHT / 2;
	  paddleModel.paddleh = HEIGHT/7;
	  paddleModel.paddlew = WIDTH/70;
	  paddleModel.paddlex = WIDTH-WIDTH/15;
	  jQuery(document).keydown(self.keyDown);
		jQuery(document).keyup(self.keyUp);
	},

	// Handle keypress
	keyDown: function(evt) {
		if (evt.keyCode == 38){
			paddleModel.upDown = true;
		} else if (evt.keyCode == 40){
			paddleModel.downDown = true;
		}
	},
	// Handle keypress
	keyUp: function(evt) {
		if (evt.keyCode == 38){
			paddleModel.upDown = false;
		} else if (evt.keyCode == 40){
			paddleModel.downDown = false;
		}
	},

	// Update all paddle refs etc
	update: function(){
		var self = this;
		// Update paddle position
		if (paddleModel.downDown){
			paddleModel.paddley += 5;
		}
  	else if (paddleModel.upDown){ 
  		paddleModel.paddley -= 5;
  	}
  	// If paddle has crossed boundaries bring it back in
  	if(paddleModel.paddley+paddleModel.paddleh>=HEIGHT){
			paddleModel.paddley -= 5;
		} else if(paddleModel.paddley<=0){
			paddleModel.paddley += 5;
		}
		
  	self.draw(paddleModel.paddlex, paddleModel.paddley, paddleModel.paddlew, paddleModel.paddleh);
	},

	// Draw the paddle
	draw: function(paddlex, paddley, paddlew, paddleh){
		ctx.fillStyle = "#18CAE6";
		ctx.beginPath();
		ctx.rect(paddlex, paddley, paddlew, paddleh);
		ctx.closePath();
		ctx.fill();
	}
}