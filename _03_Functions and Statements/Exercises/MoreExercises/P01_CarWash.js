function solve(comandsArr) {
    let value = 0;
    for (let i = 0; i < comandsArr.length; i++) {
        const element = comandsArr[i];
        switch (element) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.2;
                break;    
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.9;
                break;    
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}



solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);