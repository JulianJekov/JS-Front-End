function solve(num1, num2, num3) {

    let sum = () => num1 + num2;
    let subtract = () => sum() - num3;

    console.log(subtract);
}

solve(23, 6, 10);