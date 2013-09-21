(function() {
	document.body.onload = function() {
		var btn = document.querySelector("input[type=submit]");
		btn.addEventListener("click", function(e) {
			e.preventDefault();
			return false;
		}, null);

		//show details in alert or somewhere else?
	};
})()