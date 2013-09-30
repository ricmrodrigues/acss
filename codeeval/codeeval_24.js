function sum(numbers) {
	return numbers.reduce(function(accum, num) {
		return accum + num;
	});
}

console.log(sum([5, 12]));