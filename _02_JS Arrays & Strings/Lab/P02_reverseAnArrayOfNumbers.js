function solve(number, inputArr) {
    console.log(inputArr.splice(0, number).reverse().join(" "));
}

solve(3, [10, 20, 30, 40, 50]);