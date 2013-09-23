//http://jsfiddle.net/pJxks/76/

function nLongestLines(lines) {
    lines = lines.sort(function(a ,b) {
        return b.length - a.length;
    });
    console.log(lines.splice(0, 2));    
}

var lines = [
    "2",
    "Hello World",
    "",
    "CodeEval",
    "Quick Fox",
    "A",
    "San Francisco",
    ];
    
nLongestLines(lines);