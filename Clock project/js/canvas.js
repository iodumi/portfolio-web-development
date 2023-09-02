var canvas = document.querySelector('canvas');

var p = 0.6;
canvas.width = p * 400;
canvas.height = p * 400;

var c = canvas.getContext('2d');

var xcanv = p * 200;
var ycanv = p * 200;
var radius = p * 195;
var xs = p * 15;	//seconds
var ys = p * 15;	//seconds
var xm = p * 15;	//minutes
var ym = p * 15;	//minutes
var xh = p * 15;	//hours
var yh = p * 15;	//hours
var radiuss = p * 2;
var dist = p * 173;
var dists = p * 180;
var distm = p * 185;
var disth = p * 120;
var anglep = -Math.PI / 6;	// angle for dislayed points of the clock, updated at line ....
var anglen = -Math.PI / 6;  // angle for dislayed numbers of the clock, updated at line ....
var angles = 0;	//angle used to point seconds; updated each 500 ms at line ...
var anglem = 0;	//angle used to point minutes; updated each 500 ms at line ...
var angleh = 0;	//angle used to point hours; updated each 500 ms at line ...
var xc = -p * 5;
var yc = p * 5;
var A = new Date();
var se = A.getSeconds();
var mi = A.getMinutes();
var ho = A.getHours();
var i=0;

function start_time_c() {
	A = new Date();
	document.getElementById("jsDate").innerHTML=A;
	c.clearRect(0, 0, p * 400, p * 400);
	
	c.beginPath();
c.arc(xcanv, ycanv, radius, 0, Math.PI * 2, false);
c.strokeStyle = 'black';
c.stroke();
	
for (var i = 0; i < 60; i++) {
  if (i % 5 == 0) {
	xs = xcanv - (dist * Math.sin(anglen)) + xc - 2;
	ys = ycanv - (dist * Math.cos(anglen)) + yc + 4;
	c.beginPath();
	c.strokeStyle = 'black';
	c.font = "bold 24px serif";
	c.fillText(i/5+1, xs, ys);
	anglen -= Math.PI / 6;
	anglep -= Math.PI / 30;
  }
  else {
  xs = xcanv - (dist * Math.sin(anglep));
  ys = ycanv - (dist * Math.cos(anglep));
  c.beginPath();
  c.arc(xs, ys, radiuss, 0, Math.PI * 2, false);
  c.strokeStyle = '#39FF14';	//'black';
  c.stroke();
  c.fillStyle = '#39FF14';
  c.fill();
  c.fillStyle = '#000000';
  anglep -= Math.PI / 30;
  }
//  console.log(anglen, " ", anglep);
}

	  
  se = A.getSeconds();
  mi = A.getMinutes();
  ho = A.getHours()%12;
  ho = Math.floor((60 * ho + mi)/12);
  angles = -se * Math.PI / 30;
  anglem = -mi * Math.PI / 30;
  angleh = -ho * Math.PI / 30;
  xs = xcanv - (dists * Math.sin(angles));
  ys = ycanv - (dists * Math.cos(angles));
//  console.log(ho, "  ", mi, ' ', se);
  c.beginPath();
  c.moveTo(xcanv, ycanv);
  c.lineTo(xs, ys);
  c.strokeStyle = 'black';
  c.lineWidth = 2;
  c.stroke();
  c.lineWidth = 1;
  
  xm = xcanv - (distm * Math.sin(anglem));
  ym = ycanv - (distm * Math.cos(anglem));
  c.beginPath();
  c.moveTo(xcanv, ycanv);
  c.lineTo(xm, ym);
  
  c.strokeStyle = 'black';
  c.lineWidth = 8;
  c.stroke();
  c.lineWidth = 1;
  
  xh = xcanv - (disth * Math.sin(angleh));
  yh = ycanv - (disth * Math.cos(angleh));
  c.beginPath();
  c.moveTo(xcanv, ycanv);
  c.lineTo(xh, yh);
  c.strokeStyle = 'black';
  c.lineWidth = 12;
  c.stroke();
  c.lineWidth = 1;

  setTimeout(start_time_c, 500);
}

start_time_c();

//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
//https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_clock_start
//https://www.google.com/
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
//https://www.youtube.com/watch?v=EO6OkltgudE
//https://www.adobe.com/creativecloud/design/hub/guides/neon-green-color-guide.html#:~:text=The%20neon%20green%20hex%20code,%3A%20255%2C%20B%3A%2020.


