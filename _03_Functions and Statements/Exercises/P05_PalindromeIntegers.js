function integerPalindrome(numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        console.log(isPalindrome(numbersArray[i]));
    }

    function isPalindrome(number) {
        let numberAsString = number.toString();
        let reversedNumber = numberAsString.split('').reverse().join('');

        return numberAsString === reversedNumber;
    }
}

integerPalindrome([123, 323, 421, 121])