function wordsSplitter(text) {
    let charArr = text.split("");
    let word = "";
    let wordsArr = [];
    for (let i = 0; i < charArr.length; i++) {
        
        if (charArr[i] == charArr[i].toUpperCase() && i != 0) {
            wordsArr.push(word);
            word = "";
            word += charArr[i];
        }else {
            word += charArr[i];
        }

        if(i == charArr.length -1){
            wordsArr.push(word);
        }
    }
    console.log(wordsArr.join(", "));
}

function matcher(text) {
    let textArr = text.match(/[A-Z][a-z])+/g);
    console.log(textArr.join(", "));
}

matcher('ThisIsSoAnnoyingToDo')