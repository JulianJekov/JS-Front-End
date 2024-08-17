function charactersInRange(firstChar, lastChar) {
    let result = '';
    let first = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt())
    let last = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt())

    for (let i = first + 1; i < last; i++) {
        let currentChar = String.fromCharCode(i);
        result += `${currentChar} `;
    }

    console.log(result.trimEnd());
}

charactersInRange('a', 'd')