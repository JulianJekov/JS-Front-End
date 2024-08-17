function oddOccurrences(input) {
    let map = new Map();

    let inputToArr = input.split(' ');

    for (let i = 0; i < inputToArr.length; i++) {
        let currentElement = inputToArr[i].toLowerCase();

        if (!map.has(currentElement)) {
            map.set(currentElement, 0)
        }

        map.set(currentElement, map.get(currentElement) + 1);

        
    }
    let result = [];

    map.forEach((value, key) => {
      if(value % 2 !=0) {
        result.push(key);
      }
    });

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')