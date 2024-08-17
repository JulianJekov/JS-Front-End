function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if(currentElement % 2 === 0) {
            sumEven += currentElement;
        } else {
            sumOdd += currentElement;
        }
    }
    console.log(sumEven - sumOdd);
}

solve([3,5,7,9]);