function deDupNumbers(numberList) {
	if (numberList.length === 1) return numberList;

	for (var dedupped=[], x=numberList[0], i=1; i<numberList.length; i++) {
		if (numberList[i] !== x || !numberList[i+1]) { //means we're in the last, need to check current x
			dedupped.push(x);
			x = numberList[i];
		}
	}
    
    return dedupped;
}

console.log(deDupNumbers([1,1,1,2,2,3,3,4,4]));
console.log(deDupNumbers([2,3,4,5,5]));