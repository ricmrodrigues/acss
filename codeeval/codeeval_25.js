//http://jsfiddle.net/m299E/

function printOddNumbers() {
	for (var result=[],i=1;i<100;i++) {
		if (i % 2 !== 0) result.push(i);
	}
    return result;
}

console.log(printOddNumbers().join(', '));