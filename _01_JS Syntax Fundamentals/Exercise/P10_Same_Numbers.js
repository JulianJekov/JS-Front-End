function sameNumbers(number) {
    let numberAsString = String(number);
    let result = true;
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] != numberAsString[i + 1] && i != numberAsString.length - 1) {
            result = false;
        }
        sum += Number(numberAsString[i]);
    }
    console.log(`${result} \n${sum}`);
    // console.log(sum);
}

sameNumbers(12234);