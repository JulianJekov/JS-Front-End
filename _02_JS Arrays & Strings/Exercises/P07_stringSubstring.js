function solve(word, text) {
    let wordsArr = text.toLowerCase().split(" ");
    let isContain = false;
    for (let i = 0; i < wordsArr.length; i++) {
        let currentWord = wordsArr[i];
        if(currentWord === word) {
            isContain = true;
            break;
        }
    }

    if(isContain) {
        console.log(word);
    }else {
        console.log(`${word} not found!`);
    }
}

solve('python',
' python is the best programming language'
);