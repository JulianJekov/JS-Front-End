function makeDictionary(input) {
    let dictionary = {};

    for (const line of input) {
        let currentObject = JSON.parse(line);
        for (const key in currentObject) {
            dictionary[key] = currentObject[key];
        }
    }

    let sortedDictionary = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    for (let key of sortedDictionary) {
        let description = dictionary[key];
        console.log(`Term: ${key} => Definition: ${description}`);
    }
    
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"AVERYHOTWATERHOWEVER"}'
]
);