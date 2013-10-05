function isValidEmail(email) {
	var regEx = /^(?:[A-z]|[0-9])+@(?:[A-z]|[0-9])+\.[A-z]{2,5}(?:\.[A-z]{2,5})?$/gi;
	return regEx.test(email);
}

console.log(isValidEmail("aaa@bbb.com"));
console.log(isValidEmail("aaa@bbb.co.uk"));
console.log(isValidEmail("aaa@.com"));