//http://jsfiddle.net/xzPmD/

function removeFromString(str, remove) {
	return Array.prototype.filter.call(str, function(item) {
		return !!remove.indexOf(item);
	}).join('');
}

console.log(removeFromString("how are you", "abc"));
console.log(removeFromString("hello world", "def"));