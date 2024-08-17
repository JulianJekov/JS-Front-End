function solve(input) {
    const horses = input.shift().split('|');

    let line = input.shift();

    while (line !== 'Finish') {

        const lineArr = line.split(' ');
        const command = lineArr[0];

        switch (command) {
            case 'Retake':
                const overtakingHorseName = lineArr[1];
                const overtakenHorseName = lineArr[2];

                const overtakingHorseIndex = horses.indexOf(overtakingHorseName);
                const overtakenHorseIndex = horses.indexOf(overtakenHorseName);

                if (overtakingHorseIndex < overtakenHorseIndex) {
                    horses[overtakingHorseIndex] = overtakenHorseName;
                    horses[overtakenHorseIndex] = overtakingHorseName;

                    console.log(`${overtakingHorseName} retakes ${overtakenHorseName}.`);
                }
                break;

            case 'Trouble':
                const horseName = lineArr[1];
                const horseNameIndex = horses.indexOf(horseName);

                if (horseNameIndex != 0) {
                    horses[horseNameIndex] = horses[horseNameIndex - 1];
                    horses[horseNameIndex - 1] = horseName;

                    console.log(`Trouble for ${horseName} - drops one position.`);
                }

                break;
            case 'Rage':
                const rageHroseName = lineArr[1];
                const rageHorseIndex = horses.indexOf(rageHroseName);
                if (rageHorseIndex === horses.length - 2) {
                    const firstHorse = horses.pop();
                    horses.pop();
                    horses.push(firstHorse);
                    horses.push(rageHroseName);
                } else if (rageHorseIndex < horses.length - 1) {
                    horses[rageHorseIndex] = horses[rageHorseIndex + 1];
                    horses[rageHorseIndex + 1] = horses[rageHorseIndex + 2];
                    horses[rageHorseIndex + 2] = rageHroseName;
                }

                console.log(`${rageHroseName} rages 2 positions ahead.`);
                break;
            case 'Miracle':
                const miracleHorseName = horses.shift();
                horses.push(miracleHorseName);
                console.log(`What a miracle - ${miracleHorseName} becomes first.`);
                break;
        }

        line = input.shift();
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses.pop()}`);
}
