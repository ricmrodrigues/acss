function sumOfDigits(digits) {
    return digits.split('').reduce(function(prev, curr) {
        return parseInt(prev) + parseInt(curr);
    });
}

console.log(sumOfDigits("23"));
console.log(sumOfDigits("496"));