function solve(namesArr) {
    namesArr.sort((a,b) => {
        return a.localeCompare(b);
    });
    let nameArrLength = namesArr.length;
    for (let i = 0; i < nameArrLength; i++) {
        console.log(`${i + 1}.${namesArr[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);