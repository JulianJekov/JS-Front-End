function addItem() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;
    const ul = document.getElementById('items');
    ul.appendChild(li);
}

    // const input = document.getElementById('newItemText');
    // const newLi = document.createElement('li');
    // newLi.textContent = input.value;
    // const list = document.getElementById('items');
    // list.appendChild(newLi);