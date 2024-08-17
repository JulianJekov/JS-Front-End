function loadingBar(number) {

    if (number === 100) {
        console.log("100% Complete!");
    } else {
        let percentCoung = '%'.repeat(number / 10);
        let dotCount = '.'.repeat(10 - number / 10);
        console.log(`${number}% [${percentCoung}${dotCount}]`);
        console.log("Still loading...");
    }
}

loadingBar(10);