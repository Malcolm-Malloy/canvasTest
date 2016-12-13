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
			
			//Petal Variables
			var pt1 = { x: 155, y: 145 }
			var pt2 = { x: 93, y: 106 }
			var cp1 = { x: 111, y: 145 }
			var cp2 = { x: 66, y: 131 }
			
			//First Petal
			ctx.fillStyle = 'rgb(155, 206, 226)';
			ctx.strokeStyle = 'rgb(0, 11, 174)';
			ctx.beginPath();
			ctx.moveTo(pt1.x, pt1.y);
			ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, pt2.x, pt2.y);
			ctx.bezierCurveTo(89, 65, 159, 118, 155, 145);
			ctx.fill();
			ctx.stroke();
			
			//Flower Center
			ctx.fillStyle = 'rgb(243, 237, 99)';
			ctx.strokeStyle = 'rgb(253, 183, 58)';
			ctx.beginPath();
			ctx.arc(155, 145, 10, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.stroke();
			
			//Petal curve visualisation
			ctx.strokeStyle = 'rgb(255, 0, 0)';
			ctx.beginPath();
			ctx.arc(pt1.x, pt1.y, 2, 0, Math.PI * 2, false);
			ctx.arc(cp1.x, cp1.y, 2, 0, Math.PI * 2, false);
			ctx.arc(cp2.x, cp2.y, 2, 0, Math.PI * 2, false);
			ctx.arc(pt2.x, pt2.y, 2, 0, Math.PI * 2, false);
			ctx.stroke();
			
		}
	}