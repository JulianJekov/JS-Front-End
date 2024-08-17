function bitcoinMining(gold) {
    let pricePerGramGold = 67.51;
    let pricePerBitcoin = 11949.16;
    let goldEarned = 0;
    let buyedBitcoins = 0;
    let day = 0;
    let dayOfFirstBuy = 0;

    for (let i = 0; i < gold.length; i++) {
        day++;
        let goldPerDay = Number(gold[i]) * pricePerGramGold;
        if(day % 3 === 0){
            goldPerDay *= 0.7;
        }
        goldEarned += goldPerDay;

        if (goldEarned >= pricePerBitcoin) {
            if (buyedBitcoins === 0) {
                dayOfFirstBuy = day;
            }
            while (goldEarned >= pricePerBitcoin) {
                goldEarned -= pricePerBitcoin;
                buyedBitcoins++;
            }
        }
    }

    console.log(`Bought bitcoins: ${buyedBitcoins}`);
    if (buyedBitcoins != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBuy}`);
    }
    console.log(`Left money: ${goldEarned.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);