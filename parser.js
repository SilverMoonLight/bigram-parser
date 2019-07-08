function parser(sentence) {
    let regex =  /[.,]/g;
    let words = sentence.replace(regex, '').toLowerCase().split(" ");
    sentence = sentence.toLowerCase();
    let bigramFounds = [];
    let counts = [];
    for(let i = 0; i < sentence.length - 1; i++) {
        let currentBigram = words[i] + " " + words[i + 1];
        let bigramFound = sentence.indexOf(currentBigram);
        let countsFound = 0;
        while(bigramFound > -1 && !bigramFounds.includes(currentBigram)) {
            countsFound++;
            bigramFound = sentence.indexOf(currentBigram, bigramFound + 1);
        }
        if(countsFound> 0) {
            bigramFounds.push(currentBigram);
            counts.push(countsFound);
        }
    }
    let results = bigramFounds.map((v, i) => {
        return v + " " + counts[i];
    });
    return results;
}

module.exports = parser;