function signCheck(numOne, numTwo, numThree) {
    let numArr = [numOne, numTwo, numThree];
    let countNegativeNumbers = 0;
    for (let i = 0; i < numArr.length; i++) {
        let currentNum = numArr[i];
        if(currentNum < 0) {
            countNegativeNumbers++;
        }
    }
    console.log(countNegativeNumbers % 2 != 0 ? 'Negative' : 'Positive');
}

signCheck( 5,
    12,
   -15
   );