function solve(text, wordToSearch) {
  
    let textarr = text.split(" ");
    let foundWords = textarr.filter(function (element){
        return element === wordToSearch;
    });
     
    console.log(foundWords.length);
}
  // let words = text.split(" ");
    // let count = 0;
    // for (const word of words) {
    //     if(word === wordToSearch){
    //         count++;
    //     }
    // }
    // console.log(count);
solve('This is a word and it also is a sentence',
'is'
)