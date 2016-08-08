$(document).ready(function() {
	fizzBuzz();
});

function fizzBuzz() {

	var num = 1;
	while (num < 101 ) {
	if (num%3 == 0 && num%5 == 0) {
	//console.log("fizz buzz");
	document.write('Fizz Buzz');
	document.write('<br/>')
	num++;
	}
	else if (num%3 == 0) {
	console.log("fizz");	
	num++;
	}
	else if (num%5 == 0) {
	console.log("buzz");
	num++
	}
	else {
	console.log(num);
	num++;
	}
	}
};


