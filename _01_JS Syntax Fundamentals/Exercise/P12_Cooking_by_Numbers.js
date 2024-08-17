function cookingByNumbers(num, opr1, opr2, opr3, opr4, opr5) {
    let array = [opr1, opr2, opr3, opr4, opr5];
    let currentNumber = num;
    for (let i = 0; i < array.length; i++) {
        let currentOpr = array[i];
        switch (currentOpr) {
            case "chop":
                currentNumber /= 2;
                break;
            case "dice":
                currentNumber = Math.sqrt(currentNumber);
                break;
            case "spice":
                currentNumber++;
                break;
            case "bake":
                currentNumber *= 3;
                break;
            case "fillet":
                currentNumber *= 0.8;
                break;       
        }

        if(Number.isInteger(currentNumber)){
        console.log(currentNumber.toFixed(0));
        }else {
            console.log(currentNumber.toFixed(1));
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');