function store(currentStock, orderedStock) {

    let products = {};

    productsStore(currentStock);
    productsStore(orderedStock);

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }

    function productsStore(input) {
        for (let i = 0; i < input.length; i += 2) {
            let product = input[i];
            let quantity = Number(input[i + 1]);

            if (!products.hasOwnProperty(product)) {
                products[product] = quantity;
            } else {
                products[product] += quantity;
            }
        }
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);