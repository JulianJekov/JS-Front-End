function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputTextValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputTextValue.value;

    let menu = document.getElementById('menu');
    menu.appendChild(option);

    inputText.value = '';
    inputTextValue.value = '';
}