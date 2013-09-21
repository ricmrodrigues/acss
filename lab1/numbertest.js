var userNumber,
	span;

userNumber = parseInt(prompt("Please enter a number"));
span = document.getElementsByTagName("span")[0];

if (!isNaN(userNumber)) {
	userNumber <= 0 ?
	showMessage("less than or equal to zero") : 
	showMessage("greater than zero"); 
}
else {
	showMessage("NOT A NUMBER!")
}

function showMessage(message) {
	if (span.innerText) {
		span.innerText = message;
	}	
	else {
		span.textContent = message;
	}	
}