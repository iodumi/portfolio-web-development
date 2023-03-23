	function initialize_page(){
//		document.getElementById("show_timer_val").innerHTML=00+":"+00+":"+30+"	or	"+30+" s";
		start_time();
		initialize_stopwatch();
		clockInit();
//		document.getElementById("defaultOpen").click();
	}
	
	/*------------------------------*/
	//Timer below
	
	function start_time() {
	var A = new Date();
    document.getElementById("jsDate").innerHTML=A;
	var a1 = document.getElementById("alarm1datetime").value;
	var a11=new Date(a1);
	var Aparse=Date.parse(A);
	var a1parse=Date.parse(a11);
	let a1y=A.getFullYear();
	if (a1parse<=Aparse) {alert("alarm1");
	document.getElementById("alarm1datetime").value="";};
	setTimeout(start_time, 1000);
	}
	
	function start_timer() {
		var T_hh=document.getElementById("timer_hh").value;
		var T_mm=document.getElementById("timer_mm").value;
		var T_ss=document.getElementById("timer_ss").value;
		T_ss=+T_ss+(60*T_mm)+(3600*T_hh);
		x = setInterval(function() {
		if (T_ss>=0) {	T_ss=decrease(T_ss)}}, 1000);
	}
	
	function decrease (a)
	{
		console.log(a);
		var acopy=a;
		var ns=acopy%60;
		acopy=acopy-ns;
		acopy=acopy/60;
		var nm=acopy%60;
		acopy=acopy-nm;
		var nh=acopy/60;
		document.getElementById("show_timer_val").innerHTML=nh+":"+nm+":"+ns+"	or	"+a+" s";
		if (a<0) { clearInterval(x);}
		return a-1;
	}
	
	function reset_timer()
	{
		clearInterval(x);
		document.getElementById("timer_hh").value.innerHTML=0;
	}
	
	
	
	
	/*------------------------------*/
	//Stopwatch below
	
		//initialize stopwatch:
	function initialize_stopwatch(){
	stopwatch_value_var=0;
	document.getElementById("stopwatch_value").innerHTML=stopwatch_value_var;
	}
	
	function start_stopwatch()
	{
		if (stopwatch_value_var<10000) stopwatch_value_var++;
		document.getElementById("stopwatch_value").innerHTML=stopwatch_value_var;
		console.log(stopwatch_value_var);
		y=setTimeout(start_stopwatch, 1000);
		
	}
	
	function stop_stopwatch() {
		clearInterval(y);
	}
	
	function reset_stopwatch() {
		clearInterval(y);
		stopwatch_value_var=0;
		document.getElementById("stopwatch_value").innerHTML=stopwatch_value_var;
	}
	
	
	
	//--------------------------------------------------------------------------
	//canvas (copied from https://www.w3schools.com/graphics/canvas_clock.asp)
	 
	
	function clockInit(){
	canvas = document.getElementById("canvas");
	canvas.width='200';
	canvas.height=canvas.width;
//	canvas.width=canvas.style.width;
//	canvas.height=canvas.style.height;
	ctx = canvas.getContext("2d");
	radius = canvas.height / 2;
	ctx.translate(radius, radius);
	radius = radius * 0.90;
	setInterval(drawClock, 1000);}

	function drawClock() {
	  drawFace(ctx, radius);
	  drawNumbers(ctx, radius);
	  drawTime(ctx, radius);
	}

	function drawFace(ctx, radius) {
	  var grad;
	  ctx.beginPath();
	  ctx.arc(0, 0, radius, 0, 2*Math.PI);
	  ctx.fillStyle = 'white';
	  ctx.fill();
	  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
	  grad.addColorStop(0, '#333');
	  grad.addColorStop(0.5, 'white');
	  grad.addColorStop(1, '#333');
	  ctx.strokeStyle = grad;
	  ctx.lineWidth = radius*0.1;
	  ctx.stroke();
	  ctx.beginPath();
	  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
	  ctx.fillStyle = '#333';
	  ctx.fill();
	}

	function drawNumbers(ctx, radius) {
	  var ang;
	  var num;
	  ctx.font = radius*0.15 + "px arial";
	  ctx.textBaseline="middle";
	  ctx.textAlign="center";
	  for(num = 1; num < 13; num++){
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.85);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius*0.85);
		ctx.rotate(-ang);
	  }
	}

	function drawTime(ctx, radius){
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		//hour
		hour=hour%12;
		hour=(hour*Math.PI/6)+
		(minute*Math.PI/(6*60))+
		(second*Math.PI/(360*60));
		drawHand(ctx, hour, radius*0.5, radius*0.07);
		//minute
		minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
		drawHand(ctx, minute, radius*0.8, radius*0.07);
		// second
		second=(second*Math.PI/30);
		drawHand(ctx, second, radius*0.9, radius*0.02);
	}

	function drawHand(ctx, pos, length, width) {
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.lineCap = "round";
		ctx.moveTo(0,0);
		ctx.rotate(pos);
		ctx.lineTo(0, -length);
		ctx.stroke();
		ctx.rotate(-pos);
	}
	

	/*------------------------------*/
	//Helpful links below
	
	function openPage(pageName)
	{
		const element1=document.getElementById("refer1");
		const element2=document.getElementById("refer2");
		const element3=document.getElementById("refer3");
		const element4=document.getElementById("refer4");
		const element5=document.getElementById("refer5");
		const element6=document.getElementById("refer6");
		const element7=document.getElementById("refer7");
		if (pageName=="ref1")
		{
			
			element1.href="https://www.geeksforgeeks.org/top-10-javascript-project-ideas-for-beginners/";
			element1.innerHTML="<a href='https://www.geeksforgeeks.org/top-10-javascript-project-ideas-for-beginners/' target='_blank'>"+element1.href+"</a>";
			element2.innerHTML="";
			element3.innerHTML="";
			element4.innerHTML="";
			element5.innerHTML="";
			element6.innerHTML="";
			element7.innerHTML="";
		}
		if (pageName=="ref2")
		{
			element1.href="https://www.geeksforgeeks.org/";
			element1.innerHTML="<a href='https://www.geeksforgeeks.org/' target='_blank'>"+element1.href+"</a>";
			element2.href="https://www.w3schools.com/";
			element2.innerHTML="<a href='https://www.w3schools.com/' target='_blank'>"+element2.href+"</a>";
			element3.href="https://www.google.com/";
			element3.innerHTML="<a href='https://www.google.com/' target='_blank'>"+element3.href+"</a>";
			element4.href="https://flexiple.com/";
			element4.innerHTML="<a href='https://flexiple.com/' target='_blank'>"+element4.href+"</a>";
			element5.href="https://dequeuniversity.com/";
			element5.innerHTML="<a href='https://dequeuniversity.com/' target='_blank'>"+element5.href+"</a>";
			element6.href="https://webhint.io/";
			element6.innerHTML="<a href='https://webhint.io/' target='_blank'>"+element6.href+"</a>";
			element7.href="https://www.codeproject.com/";
			element7.innerHTML="<a href='https://www.codeproject.com/' target='_blank'>"+element7.href+"</a>";
		}
		
			
	}

	
