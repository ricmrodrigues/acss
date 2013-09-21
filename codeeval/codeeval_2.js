//http://jsfiddle.net/pJxks/75/

function nLongestLines(lines) {
    var limit = lines[0],
        longestN = [];
    for (var i=1;i<lines.length;i++) {
        if (lines[i]) {
            tryAdd(longestN, lines[i], limit);        
        }
    }
    
    //display results
    for (var i=0;i<longestN.length;i++) {
        console.log(longestN[i]);
    }    
}

function tryAdd(longestN, n, limit) {
    //array still below limit size
    if (longestN.length === 0 || longestN.length < limit) {
        longestN.push(n);  
    } else { //calculate if new item fits
        var pos = doesItFit(longestN, n);
        if (pos) {
            longestN.splice(pos, 1, n);
            longestN.sort(function(a, b) {
                return b.length - a.length; //sort desc
            });
            //pop the position and push
        }        
    }        
}

function doesItFit(longestN, n) {
    var position;
    longestN.forEach(function(elem, i) {
        //smaller the i, bigger the string
        //so unless we have a smaller i,
        //keep the position as is
        if (elem < n && (!position || position > i)) {
            position = i;
        }
    });
    return position;
}

var lines = [
    "3",
    "Hello World",
    "",
    "CodeEval",
    "Quick Fox",
    "A",
    "San Francisco",
    ];
    
nLongestLines(lines);