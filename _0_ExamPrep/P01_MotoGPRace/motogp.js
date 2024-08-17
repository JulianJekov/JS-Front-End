function solve(input) {
    const n = Number(input.shift());
    const riders = {};
    for (let i = 0; i < n; i++) {
        const [rider, fuel, position] = input.shift().split('|');
        riders[rider] = { fuel: Number(fuel), position };
    }

    let comandLine = input.shift();

    while (comandLine !== 'Finish') {
        const commandData = comandLine.split(' - ');
        const command = commandData[0];
        const rider = commandData[1];
        switch (command) {
            case 'StopForFuel':
                const minimumFuel = commandData[2];
                const changedPosition = commandData[3];
                if (riders[rider].fuel < minimumFuel) {
                    riders[rider].position = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                const rider2 = commandData[2];
                const firstRiderPosition = riders[rider].position;
                const secondRiderPosition = riders[rider2].position;

                if (firstRiderPosition < secondRiderPosition) {
                    riders[rider].position = secondRiderPosition;
                    riders[rider2].position = firstRiderPosition;
                    console.log(`${rider} overtook ${rider2}!`);
                }
                break;
            case 'EngineFail':
                const lapsLeft = commandData[2];
                delete riders[rider];
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }


        comandLine = input.shift();
    }

    //const sorted =  Object.values(riders).sort((a,b) => b.position - a.position);
    //console.log(JSON.stringify(sorted));
    for (const riderName in riders) {
        console.log(riderName);
        console.log(`  Final position: ${riders[riderName].position}`);
    }

}

solve((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);