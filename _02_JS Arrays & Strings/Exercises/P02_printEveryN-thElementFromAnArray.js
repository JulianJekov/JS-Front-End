function solve(array, step) {
    let nthArr = [];
    for (let i = 0; i < array.length; i+=step) {
        let currentNum = array[i];
        nthArr.push(currentNum);
    }
    return nthArr;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);