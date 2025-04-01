let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(500, 0,50,50);
//ctx.strokeRect(600,600,50,50);

ctx.closePath();
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(550, 550);
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,50,50);
//ctx.strokeRect(0,0.50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,500,50,50);
//ctx.strokeRect(0,0.50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.fillRect(500,500,50,50);
//ctx.strokeRect(0,0.50,50);
ctx.closePath();

ctx.closePath();
ctx.beginPath();
ctx.moveTo(0, 250);
ctx.lineTo(11000, 550);
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.stroke();