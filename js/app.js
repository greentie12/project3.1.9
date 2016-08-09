
	var num = 1;
	while (num < 101 ) {
	if (num%3 == 0 && num%5 == 0) {
	//console.log("fizz buzz");
	document.write('Fizz Buzz');
	document.write('<br/>')
	num++;
	}
	else if (num%3 == 0) {
	document.write('Fizz');
	document.write('<br>');
	//console.log("fizz");	
	num++;
	}
	else if (num%5 == 0) {		
	document.write('Buzz');
	document.write('<br>');	
	//console.log("buzz");
	num++
	}
	else {
	document.write(num);
	document.write('<br>');
	//console.log(num);
	num++;
	}
	}