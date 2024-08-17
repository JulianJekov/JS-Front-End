function solve(input) {
    const n = Number(input.shift());
    const baristas = {};

    for (let i = 0; i < n; i++) {
        const inputData = input.shift().split(' ');
        const baristaName = inputData[0];
        const baristaShift = inputData[1];
        const baristaCoffeeTypes = inputData[2].split(',');

        baristas[baristaName] = {
            baristaShift,
            coffeeTypes: baristaCoffeeTypes,
        }
    }

    let commands = input.shift();

    while (commands !== 'Closed') {

        const commandsData = commands.split(' / ');
        const command = commandsData[0];
        const baristaName = commandsData[1];

        switch (command) {
            case 'Prepare':
                const shift = commandsData[2];
                const coffeeType = commandsData[3];
                //TODO: check if barista exist
                if (baristas[baristaName].baristaShift === shift && baristas[baristaName].coffeeTypes.find((type) => type === coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
                break;

            case 'Change Shift':
                const newShift = commandsData[2];
                baristas[baristaName].baristaShift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
                break;

            case 'Learn':
                const newCoffee = commandsData[2];
                if (baristas[baristaName].coffeeTypes.find((type) => type === newCoffee)) {
                    console.log(`${baristaName} knows how to make ${newCoffee}.`);
                } else {
                    baristas[baristaName].coffeeTypes.push(newCoffee);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffee}.`);
                }
                break;
        }

        commands = input.shift();
    }

    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista].baristaShift}, Drinks: ${baristas[barista].coffeeTypes.join(', ')}`);
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);