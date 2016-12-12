	function rectSetup() {
		  
		//Rectangles
		var canvas = document.getElementById('rectCanvas');
		
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			
			//Canvas Border
			ctx.strokeRect(0, 0, 300, 300);
			
			//Red Square Border
			ctx.strokeStyle = 'rgb(255, 0, 0)';
			ctx.strokeRect(0.5, 0.5, 100, 100);
			
			//Black Square
			ctx.fillRect(20, 20, 100, 100);
			
			//Green Square
			ctx.fillStyle = 'rgb(0, 255, 0)';
			ctx.fillRect(50, 50, 100, 100);
			
			//Transparent Square
			ctx.clearRect(80, 80, 30, 30);
			
		}
	}