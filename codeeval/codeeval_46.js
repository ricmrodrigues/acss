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

function getPrimesLessThan(x) {
	var primes = [];

	for (var i=1; i<x; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}		
	}

	return primes.join(',');
}

console.log(getPrimesLessThan(10));
console.log(getPrimesLessThan(20));
console.log(getPrimesLessThan(100));