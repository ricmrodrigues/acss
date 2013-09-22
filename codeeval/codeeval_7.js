//http://jsfiddle.net/LKeLk/

function evaluatePrefix(expression) {
	var validOperations = ["+", "*", "/"],
		items = expression.split(' '),
		operations = [],
		numbers = [];

	do {
		//join because splice returns arr
		operations.push(items.splice(0, 1).join());
	} while (~validOperations.indexOf(items[0]));
	numbers = items; //only numbers remaining

	do {
		var operation = operations.pop(),
			operator1 = parseInt(numbers.splice(0, 1)),
			operator2 = parseInt(numbers.splice(0, 1));
		//insert the result of the operation back to the beginning of the array
		//to be processed by next operation
		numbers.splice(0, 0, doOperation(operator1, operator2, operation));
	} while (numbers.length > 1);

	return numbers.join();
}

function doOperation(operator1, operator2, operation) {
	switch(operation) {
		case "+":{
			return operator1 + operator2;
			break;
		}
		case "*":{
			return operator1 * operator2;
			break;
		}
		case "/":{
			return operator1 / operator2;
			break;
		}				
	}
}

console.log(evaluatePrefix("* + 2 3 4"));