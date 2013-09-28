//http://jsfiddle.net/5CHgA/2/

function allOptions(str) {
    str = str.split('');
    var len = str.length,
        results = [];
        
    if (len === 2) {
        //terminate recursion
        results.push(str.join(''));
        var reversed = str.reverse().join('');
        //if we have the same char multiple times, this is gonna happen
        if (results.indexOf(reversed) === -1) {
            results.push(reversed);
        }
    } else {
        for (var i=0;i<len; i++) {
            var arr = str.slice(0), //clone array
                item = arr.splice(i, 1),
                res = allOptions(arr.join('')); //all options except first char

            //concat first char with all options
            for (var x in res) {
                var r = item + res[x];
                //if we have the same char multiple times, this is gonna happen
                if (results.indexOf(r) === -1) {
                    results.push(r);
                }
            }
        }
    }

    return results.sort(function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}

console.log(allOptions("hat"));