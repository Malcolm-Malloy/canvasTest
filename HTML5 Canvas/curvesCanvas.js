	function curvesSetup() {
		  
		//Curves
		var canvas = document.getElementById('curvesCanvas');
		
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			
			//Canvas Border
			ctx.strokeRect(0, 0, 300, 300);
			
			//Flower Stem
			ctx.fillStyle = 'rgb(0, 173, 104)';
			ctx.moveTo(145, 150);
			ctx.quadraticCurveTo(120, 200, 170, 280);
			ctx.lineTo(190, 280);
			ctx.quadraticCurveTo(125, 190, 155, 150);
			ctx.fill();
			
			//Petals
			var pt1 = { x: 155, y: 145 }
			var pt2 = { x: 93, y: 106 }
			var cp1 = { x: 111, y: 145 }
			var cp1 = { x: 66, y: 131 }
			
		}
	}