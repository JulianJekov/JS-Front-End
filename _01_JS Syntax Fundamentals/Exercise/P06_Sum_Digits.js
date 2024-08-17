function sumDigits(number) {
    let numberAsString = String(number);
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        let currentNum = Number(numberAsString[i]);
        sum += currentNum;
    }
    console.log(sum);
}

sumDigits(97561);