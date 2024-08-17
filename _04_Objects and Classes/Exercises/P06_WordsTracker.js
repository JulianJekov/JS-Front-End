function wordsTracker(input) {
    let neededWords = input.shift().split(' ');

    let wordsCount = {};
    
    neededWords.forEach(word => {
        wordsCount[word] = 0;

        input.forEach(element => {
            if(element === word) {
                wordsCount[word]++;
            }
        });
    });

    let sortedByCount = Object.entries(wordsCount).sort((a,b)=> b[1] - a[1])
    .forEach((w)=> console.log(`${w[0]} - ${w[1]}`));
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
);