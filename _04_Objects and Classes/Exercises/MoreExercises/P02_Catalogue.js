function catalogue(input) {
    const products = [];

    for (const line of input) {
        const [name, price] = line.split(' : ');
        const product = { name, price };
        products.push(product);
    }

    products.sort((a, b) => a.name.localeCompare(b.name));

    for (let i = 0; i < products.length; i++) {

        let product = products[i];
        let productFirstLetter = product.name[0];

        if (i === 0) {
            console.log(productFirstLetter);
        } else {
            let prevProductFirstLetter = products[i - 1].name[0];
            if (productFirstLetter != prevProductFirstLetter) {
                console.log(`${productFirstLetter}`);
            }
        }
        console.log(`  ${product.name}: ${product.price}`)
    }
}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]

)