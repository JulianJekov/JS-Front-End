function calculator(firstNum, secondNum, operator) {
    let operators = {
        multiply:(x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    };

    console.log(operators[operator](firstNum, secondNum));
}

calculator(5,5,'multiply')