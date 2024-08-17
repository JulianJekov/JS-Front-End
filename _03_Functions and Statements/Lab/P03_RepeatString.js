function repeatString(textToRepeat, timesToRepeat) {
    let result = '';
    for (let i = 0; i < timesToRepeat; i++) {
        result += textToRepeat;
    }
    return result;
}

function repeat(text, repeatTimes) {
    return text.repeat(repeatTimes);
}

const test = (text, times) => text.repeat(times);


console.log(test('abc ', 3));