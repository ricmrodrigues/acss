function trailingString(text, toFind) {
	return text.split(' ').pop() === toFind ? 1 : 0;
}

console.log(trailingString("Hello World","World"));
console.log(trailingString("Hello CodeEval","CodeEval"));
console.log(trailingString("San Francisco","San Jose"));