function solve(input) {
    let n = input.shift();
    let pieces = {

    };
    for (let i = 0; i < n; i++) {
        let pieceData = input.shift().split('|');
        let [piece, composer, key] = pieceData;
        pieces[piece] = { composer, key };
    }

    let commandData = input.shift().split('|');
    let command = commandData[0];
    while (command !== 'Stop') {
        let piece = commandData[1];
        switch (command) {
            case 'Add':
                let composer = commandData[2];
                let key = commandData[3];

                if (!pieces.hasOwnProperty(piece)) {
                    pieces[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (pieces.hasOwnProperty(piece)) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let newKey = commandData[2];
                if (pieces.hasOwnProperty(piece)) {
                    pieces[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }

        commandData = input.shift().split('|');
        command = commandData[0];
    }

    for (const piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
    }

}

solve(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])