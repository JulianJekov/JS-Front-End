function addItem() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', () => li.remove())
    li.appendChild(deleteBtn)
    const ul = document.getElementById('items');
    ul.appendChild(li);
}
//     const input = document.getElementById('newItemText');

//     const li = document.createElement('li');
//     li.textContent = input.value;

//     const deleteBtn = document.createElement('a');
//     deleteBtn.href = '#';
//     deleteBtn.textContent = '[Delete]'
//     deleteBtn.addEventListener('click', () => li.remove());

//     li.appendChild(deleteBtn);

//     const list = document.getElementById('items');
//     list.appendChild(li);


// const input = document.getElementById('newItemText');

// const li = document.createElement('li');
// li.textContent = input.value;

// const deleteBtn = document.createElement('a');
// deleteBtn.href = '#';
// deleteBtn.textContent = '[Delete]';
// deleteBtn.addEventListener('click', () => li.remove());

// li.appendChild(deleteBtn);

// const list = document.getElementById('items');
// list.appendChild(li);

