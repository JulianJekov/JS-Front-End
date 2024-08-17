function divideTwoFactorials(first, second) {

    function factorial(number) {
        if (number === 0) {
            return 1;
        }

        return number * factorial(number - 1);
    }

    let result = factorial(first) / factorial(second);
    console.log(result.toFixed(2));
}

divideTwoFactorials(5, 2);