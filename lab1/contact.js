(function() {
	document.body.onload = function() {
		var btn = document.querySelector("form");
		btn.addEventListener("submit", function(e) {
			e.preventDefault();
		}, null);

		//show details in alert or somewhere else?
	};
})()