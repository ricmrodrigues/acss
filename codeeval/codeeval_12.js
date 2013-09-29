//http://jsfiddle.net/DbYue/

function firstNonRepeatedChar(strings) {	
    var results = [];
	for (var i = 0; i < strings.length; i++) {
        var noRepeat = [],
		    string = strings[i];
		for (var x = 0; x < string.length; x++) {
			var key = string[x];
			if (~noRepeat.indexOf(key)) { //if char exists is repeat, filter it out
				noRepeat = noRepeat.filter(function(item) {
					return item !== key;
				});
			} else { //else add it as non repeated
				noRepeat.push(key);
			}			
		}
        results.push(noRepeat[0]);
	}

	return results;
}

console.log(firstNonRepeatedChar(["yellow","tooth"]));