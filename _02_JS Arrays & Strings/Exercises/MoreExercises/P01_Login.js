function login(array) {
    let username = array[0];
    let count = 0;

    for (let i = 1; i < array.length; i++) {
        let currentWord = array[i];
        let reversedWord = currentWord.split("").reverse().join("");
        if(reversedWord === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            count++;
            if(count === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);