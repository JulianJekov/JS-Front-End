function numberModification(number) {
    let numberAsString = number.toString();

    function modificate(numberAsString) {
        let sum = 0;
        let average = 0;
        let result = numberAsString;
        for (let i = 0; i < numberAsString.length; i++) {
            let currentNumber = Number(numberAsString[i]);
            sum += currentNumber;
        }

        average = sum / numberAsString.length;

        if (average > 5) {
            return numberAsString;
        }

        return modificate(numberAsString += 9);
    }

    console.log(modificate(numberAsString));
}

numberModification(101);