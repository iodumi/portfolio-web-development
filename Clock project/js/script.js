var flag=0;

	function initialize_page(){
//		document.getElementById("show_timer_val").innerHTML=00+":"+00+":"+30+"	or	"+30+" s";
		start_time();
		initialize_stopwatch();
//		clockInit();
//		document.getElementById("defaultOpen").click();
			//0 - timer not running; 1- timer running. 
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
		if (T_ss>0) {
			if (flag==0) {
				flag=1;
				x = setInterval(function() {	T_ss=decrease(T_ss)}, 1000);
			}
			else {
				clearInterval(x);
				x = setInterval(function() {	T_ss=decrease(T_ss)}, 1000);
			}
		}
		else {
			clearInterval(x);
			T_ss=0;
			flag=0;
		}
/*		x = setInterval(function() {
		if (T_ss>=0) {	T_ss=decrease(T_ss)}}, 1000);*/
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
		if (a>=0) {document.getElementById("show_timer_val").innerHTML=nh+":"+nm+":"+ns+"	or	"+a+" s";}
		if (a<0) { clearInterval(x);}
		return a-1;
	}
	
	function reset_timer()
	{
		clearInterval(x);
/*		document.getElementById("timer_hh").value.innerHTML=0;
		document.getElementById("timer_mm").value.innerHTML=0;
		document.getElementById("timer_ss").value.innerHTML=30;*/
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
		const element8=document.getElementById("refer8");
		const element9=document.getElementById("refer9");
		
		
		
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
			element8.innerHTML="";
			element9.innerHTML="";
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
			element8.href="https://www.youtube.com/";
			element8.innerHTML="<a href='https://www.youtube.com/' target='_blank'>"+element8.href+"</a>";
			element9.href="https://htmlcolorcodes.com/";
			element9.innerHTML="<a href='https://htmlcolorcodes.com/' target='_blank'>"+element9.href+"</a>";
		}
		
			
	}

	
