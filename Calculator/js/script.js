function on_load_func() {
	var flag_operator;	//0- +; 1 - -; 2 - *; 3 - /
	flag=0;	//0 - if no number in construction ; 1 - if number in construction
	flag_xy=1;	//1 - if first number in construction ; 2 - if second number in construction
	flag_dot1=0;	//0 - if no dot is in number; 1 - if dot in number
	flag_dot2=0;
	flag_sign=1;
	count_after_dot1=10;
	count_after_dot2=10;
	y=0;
	z=0;
}

function receive_and_display(val) {
	var x;
	
	x=val;
	if (flag_xy==1) {
	if (!isNaN(x))	//if x is a number
	{
		if (flag==0) {
			y=flag_sign*(+x);
			flag=1;
		}
		else if (flag_dot1==0){	
			y=flag_sign*(10*Math.abs(y)+x);
			}
			else{
				y=flag_sign*(count_after_dot1*(Math.abs(y))+x)/count_after_dot1;
				count_after_dot1=count_after_dot1*10;
			}
	}
	else {
		flag=0;
		sig=x;
		flag_xy=2;
	}
	document.getElementById("display").innerHTML=y;
	}
	else {
	if (flag_xy==2) {
		if (!isNaN(x))	//if x is a number
		{
		if (flag==0) {
			z=flag_sign*(+x);
			flag=1;
		}
		else if (flag_dot2==0){	
			z=flag_sign*(10*Math.abs(z)+x);
			}
			else{
				z=flag_sign*(count_after_dot2*(Math.abs(z))+x)/count_after_dot2;
				count_after_dot2=count_after_dot2*10;
			}
	}
	else {
		flag=0;
	}
	}
	else {
		alert("error1");
	}
	document.getElementById("display").innerHTML=z;
	}
	console.log("y", y);
	console.log("z", z);
	
}

function receive_dot() {
	if (flag_xy==1) {	flag_dot1=1;}
	else if (flag_xy==2) {flag_dot2=1;}
	else {alert("error3");}
}

function change_sign() {
	flag_sign=flag_sign*(-1);
}

function receive_operator_plus() {
	flag_operator=0;
	flag_xy=2;
	flag_sign=1;
}

function receive_operator_minus() {
	flag_operator=1;
	flag_xy=2;
	flag_sign=1;
}

function receive_operator_multiply() {
	flag_operator=2;
	flag_xy=2;
	flag_sign=1;
}

function receive_operator_divide() {
	flag_operator=3;
	flag_xy=2;
	flag_sign=1;
}

function receive_operator_equal() {
	var mult=1;
	if (flag_dot1==1 || flag_dot2==1)
	{
		if (count_after_dot1>count_after_dot2)
		{
			mult=count_after_dot1;
		}
		else
		{
			mult=count_after_dot2;
		}
	}
	if (flag_operator==0) {
		document.getElementById("display").innerHTML=(mult*y+mult*z)/mult;
	}
	else if (flag_operator==1) {
		document.getElementById("display").innerHTML=(mult*y-mult*z)/mult;
	}
	else if (flag_operator==2) {
		document.getElementById("display").innerHTML=(mult*y*z)/mult;
	}
	else if (flag_operator==3) {
		document.getElementById("display").innerHTML=(mult*y)/(mult*z);
	}
	else {alert("error2");
	}
	on_load_func();
}