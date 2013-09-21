(function() {
	function initCalculator() {
		var container = document.getElementById("numberButtons"),
			innerContainer = document.createElement("div");
		for (var i=0;i<10;i++) {
			var newButton = document.createElement("button");
			if (newButton.innerText) {
				newButton.innerText = i;
			} else {
				newButton.textContent = i;
			}
			innerContainer.appendChild(newButton);
			if (i > 0 && i == 4 || i == 9) {
				container.appendChild(innerContainer);				
				innerContainer = document.createElement("div");
			}			
		}
	}

	initCalculator();
})()