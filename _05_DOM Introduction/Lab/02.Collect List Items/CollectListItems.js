function extractText() {
    const items = document.getElementsByTagName('li');
    const result = [];

    for (const item of Array.from(items)) {
        result.push(item.textContent)
    }

    const textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.join('\n')
}

function extractText() {
    const items = document.querySelectorAll('ul#items li');
    const textAreaElements = document.querySelector('#result');

    for (const node of items) {
        textAreaElements.value += node.textContent + '\n';
    }
}