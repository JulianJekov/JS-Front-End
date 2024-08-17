function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShield = 0;
    let brokenArmors = 0;
    let brokenShieldsTimesTwo = 0;

    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 === 0) {
            brokenHelmets++;
        }

        if (i % 3 === 0) {
            brokenSwords++;
        }

        if (i % 6 === 0) {
            brokenShield++;
            brokenShieldsTimesTwo++;
        }

        if(brokenShieldsTimesTwo % 2 === 0 && brokenShieldsTimesTwo != 0) {
            brokenArmors++;
            brokenShieldsTimesTwo = 0;
        }
    }

    let totalCost = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenShield * shieldPrice) + (brokenArmors * armorPrice);
    
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

11, 7, 3, 1

solve(23,
    12.50,
    21.50,
    40,
    200
);