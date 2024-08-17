function solve() {
    const binaryOptionElement = document.createElement('option');
    const hexadecimalOptionElement = document.createElement('option');

    binaryOptionElement.value = 'binary';
    hexadecimalOptionElement.value = 'hexadecimal';
    binaryOptionElement.innerHTML = "Binary";
    hexadecimalOptionElement.innerHTML = "Hexadecimal"

    const menyTo = document.getElementById('selectMenuTo');

    menyTo.appendChild(binaryOptionElement);
    menyTo.appendChild(hexadecimalOptionElement);

    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        const numberInput = document.getElementById('input');
        const result = document.getElementById('result')
        if (menyTo.value === 'binary') {
            result.value = Number(numberInput.value).toString(2);
        } else if (menyTo.value === 'hexadecimal') {
            result.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    })
}