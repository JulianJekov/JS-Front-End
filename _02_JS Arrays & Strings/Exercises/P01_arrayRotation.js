function solve(arr, number) {
    for (let i = 0; i < number; i++) {
        const currentNum = arr.shift();
        arr.push(currentNum);
    }

    console.log(arr.join(" "));
}

solve([51, 47, 32, 61, 21], 2);