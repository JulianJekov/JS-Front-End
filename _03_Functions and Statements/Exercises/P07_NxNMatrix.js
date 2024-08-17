function NxM(number) {
    
    for (let i = 1; i <= number; i++) {
        let row = '';
       for (let j = 1; j <= number; j++) {
            row += `${number} `
       }
       console.log(row);
    }
}

function nXm(number) {
    for (let i = 0; i < number; i++) {
        let result = (number.toString() + ' ').repeat(number);
        console.log(result);
    }
    
}

nXm(3);