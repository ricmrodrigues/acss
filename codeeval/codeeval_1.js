//http://jsfiddle.net/XzMna/13/

function processData(data) {        
    for (var i=0;i<data.length;i++) {
        var a = data[i][0],
            b = data[i][1],
            n = data[i][2];  
        fizzBuzz(a, b, n)
    }
}

function fizzBuzz(a, b, n) {
    for (var line=[],i=1;i<=n; i++) { 
        var byA = i % a === 0,
            byB = i % b === 0;
        if (byA && byB) {
            line.push("FB");
        } else if (byA) {
            line.push("F");
        } else if (byB) {
            line.push("B");
        } else {
            line.push(i);
        }
    }
    console.log(line.join(" "));
}

var text = [[3,5,10], [2,7,15]];
processData(text);