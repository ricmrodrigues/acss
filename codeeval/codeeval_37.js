function missingAlphabetChars(sentence) {
    sentence = sentence.toLowerCase();
    for (var missing = [], offset = 97, i = 0; i<26; i++) {
        var char = String.fromCharCode(offset + i);
        if (sentence.indexOf(char) === -1) {
            missing.push(char);
        }
    }        
    
    return missing.sort(function(a, b) {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
    }).join('');
}

console.log(missingAlphabetChars("A quick brown fox jumps over the lazy dog"))
console.log(missingAlphabetChars("A slow yellow fox crawls under the proactive dog"))