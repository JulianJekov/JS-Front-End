function employees(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(`Name: ${input[i]} -- Personal Number: ${input[i].length}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );