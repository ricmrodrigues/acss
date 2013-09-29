//http://jsfiddle.net/8qt57/3/

function getBiggestSum(numbers) {        
    //remove leading and trailing negative numbers
    while (numbers[0] < 0) {
        numbers.splice(0, 1);
    }
    while (numbers[numbers.length-1] < 0) {
        numbers.splice(numbers.length-1, 1);
    }    

    var biggest = {
            items: numbers,
            sum: numbers.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            })
        },
        checkIsBigger = function(items, sum) {
            if (biggest.sum < sum) {
                biggest = {
                    items: items,
                    sum: sum
                };
            }            
        };
    
    //combinations from beginning/end
    for (var i=1;i<numbers.length;i++) {
        var slicedA = numbers.slice(0, i),
            sumA = slicedA.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            }),
            slicedB = numbers.slice(-i),
            sumB = slicedB.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            });
            
        checkIsBigger(slicedA, sumA);
        checkIsBigger(slicedB, sumB);
    }

    return biggest;
}

console.log(getBiggestSum([-10, 2, 3, -2, 0, 5, -15]));
console.log(getBiggestSum([2, 3, -2, -1, 10]));
console.log(getBiggestSum([2,3,-2,10,-40,30]));
console.log(getBiggestSum([50,-50,-2,10,2,3]));