var name,
	integerVal;

name = prompt("what's your name?");
integerVal = parseInt(prompt("enter an integer number?"));

if (isNaN(integerVal)) {
	alert("value entered is not a valid integer")
}
else {
	for (var i=0; i<integerVal; i++) {
		document.writeln("Hello " + name + "<br/>");
	}
}