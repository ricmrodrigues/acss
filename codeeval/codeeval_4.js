//http://jsfiddle.net/5vbWx/1/

function isPrime (n)
{
    if (n < 2) return false;

    //An integer is prime if it is not divisible
    //by any prime less than or equal to its square root
    var sqrt = Math.sqrt (n);

    for (var i = 2; i <= sqrt; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function getPrimesSum(howMany) {
	var primesSum = 0,
		primesFound = 0,
		counter = 1;
	while (primesFound < howMany) {
		if (isPrime(counter)) {
			primesFound++;
			primesSum += counter;
		}
		counter++;
	}
	return primesSum;
}

console.log(getPrimesSum(1000));