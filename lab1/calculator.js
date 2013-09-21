(function() {	
	var operation,
		operator1 = "",
		operator2 = "",
		operationToDo,
		resultShown = false;

	function operator() {
		if (!operator1) {
			operator1 = operation.value;
			operation.value += " " + this.textContent + " ";
			operationToDo = this.textContent;
		}		
	}	
	function result() {
		if (!resultShown && operator1 && operator2) {
			resultShown = true;
			switch (operationToDo) {
				case "+":{
					res = parseInt(operator1) + parseInt(operator2);
					break;
				}
				case "-":{
					res = parseInt(operator1) - parseInt(operator2);
					break;
				}
				case "*":{
					res = parseInt(operator1) * parseInt(operator2);
					break;
				}
				case "/":{
					res = parseInt(operator1) / parseInt(operator2);
					break;
				}												
			}
			operation.value += " = " + res;			
		}
	}	
	function clear() {
		operator1 = "";
		operator2 = "";
		operationToDo = "";
		operation.value = "";
		resultShown = false;
	}
	function numberClick() {
		if ((!operator1 || (operator1 && operationToDo)) && !resultShown) {
			operation.value += this.textContent;
			if (operator1 && operationToDo) {
				operator2 += this.textContent.toString();
			}
		}
	}

	function initCalculator() {
		var container = document.getElementById("numberButtons"),
			innerContainer = document.createElement("div");			

		for (var i=0;i<10;i++) {
			var newButton = document.createElement("button");
			newButton.textContent = i;
			newButton.addEventListener("click", numberClick, null);
			innerContainer.appendChild(newButton);
			if (i > 0 && i == 4 || i == 9) {
				container.appendChild(innerContainer);				
				innerContainer = document.createElement("div");
			}			
		}						
	}

	document.body.onload = function() {
		//bind event handlers
		operation = document.getElementById("operation");
		document.getElementById("plus").addEventListener("click", operator, null);
		document.getElementById("minus").addEventListener("click", operator, null);
		document.getElementById("times").addEventListener("click", operator, null);
		document.getElementById("divide").addEventListener("click", operator, null);
		document.getElementById("equals").addEventListener("click", result, null);
		document.getElementById("clear").addEventListener("click", clear, null);
	};	

	initCalculator();
})()