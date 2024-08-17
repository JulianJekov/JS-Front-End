function fruitPrice(fruitType, fruiGramWeight, pricePerKg) {
    let fruitKgWeight = fruiGramWeight / 1000;
    let totalPrice = pricePerKg * fruitKgWeight;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitKgWeight.toFixed(2)} kilograms ${fruitType}.`);
}
fruitPrice('apple', 1563, 2.35);