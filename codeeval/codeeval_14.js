function allOptions(str) {
    str = str.split('');
    var len = str.length,
        results = [];
    
    for (var i=0; i<len; i++) {
        var fixed = str[i],
            innerArr = str.slice(i, i+1),
            current = [];
        current.push(fixed);
        
        console.log(innerArr);
        console.log("fixed = " + fixed);
        
        for (var x=0; x<str.length; x++) {
            if (x !== i) {
                current.push(str[x]);
            }
        }
        console.log("current = " + current.join(''));
        results.push(current.join(''));
    }
    
    return results.sort(function(a, b) {
        return a > b;
    });
}

console.log(allOptions("hat"));