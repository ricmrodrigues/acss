var name,
	age,
	timesTable,
	timesTableHtml = document.getElementById("timesTable"),
	personalInfo = document.getElementById("personalInfo");

name = prompt("what's your name?");
age = prompt("what's your age?");
timesTable = parseInt(prompt("what's the times table you wish to view?"));

if (isNaN(timesTable)) {
	alert("input a valid number to display the times table for");
}
else {
	personalInfo.innerHTML = "name = " + name;
	personalInfo.innerHTML += "<br/>age = " + age;
	
	for (var i=1; i<=10; i++) {
		var tr = document.createElement("tr"),
			td = document.createElement("td");

		td.textContent = timesTable + " times " + i + " = " + (timesTable*i);

		tr.appendChild(td);
		timesTableHtml.appendChild(tr);
	}
}