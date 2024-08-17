function solve(number1, operator, number2) {

    let result;
    switch (operator) {

        case '+':
            result = number1 + number2;
            break;

        case '-':
            result = number1 - number2;
            break;

        case '/':
            result = number1 / number2;
            break;

        case '*':
            result = number1 * number2;
            break;
    }
    console.log(result.toFixed(2));
}
solve(25.5,
    '-',
    3);