//http://jsfiddle.net/hJTdp/3/

function printMultiplication() {
    var frag = document.createDocumentFragment();

    for (var i=1; i<=12; i++) {
        for (var x=1; x<=12; x++) {
            frag.appendChild(printNumber(i*x));
        }
        frag.appendChild(document.createElement("br"));
    }
    
    document.body.appendChild(frag);
}

function printNumber(number) {
    var div = document.createElement("div");
    div.style.textAlign = "right";
    div.style.display = "inline-block";
    div.style.width = "30px";
    div.textContent = number;
    return div;
}

printMultiplication();