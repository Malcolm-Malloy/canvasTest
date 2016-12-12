function linesCirclesSetup() {
	
		//Lines and Circles
		var canvas = document.getElementById('linesCirclesCanvas');
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			
			//Canvas Border (Multiple Steps)
			ctx.moveTo(0, 0);
			ctx.lineTo(300, 0);
			ctx.lineTo(300, 300);
			ctx.lineTo(0, 300);
			ctx.lineTo(0, 0);
			ctx.stroke();
			
			//Zig Zag
			ctx.moveTo(20, 20);
			ctx.lineTo(100, 100);
			ctx.lineTo(80, 200);
			ctx.lineTo(200, 80);
			ctx.lineTo(200, 200);
			ctx.lineTo(280, 280);
			ctx.stroke();
			
			//Red Circle
			ctx.fillStyle = 'rgb(255, 0, 0)';
			ctx.beginPath();
			ctx.arc(100, 100, 16, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.stroke();
			
			//Semi-circle
			ctx.beginPath();
			ctx.arc(170, 170, 16, 0, Math.PI, true);
			ctx.fill();
			
		}
		
	}