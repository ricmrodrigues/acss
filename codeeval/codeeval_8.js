function reverseSentences(sentences) {
	for (var i=0; i<sentences.length; i++) {
		sentences.splice(i, 1, sentences[i].split(' ').reverse().join(' '));
	}

	return sentences;
}

console.log(reverseSentences(["Hello World", "Hello CodeEval"]));