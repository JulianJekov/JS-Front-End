window.addEventListener("load", solve);

function solve() {

    const inputs = {
        expenseType: document.getElementById('expense'),
        amount: document.getElementById('amount'),
        date: document.getElementById('date'),
    }

    const currentInputsStatus = {
        expenseType: null,
        amount: null,
        date: null
    }

    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addBtnHandler);

    const deleteBtn = document.querySelector('.btn.delete');
    deleteBtn.addEventListener('click', () => {
        location.reload();
    })
    function addBtnHandler() {

        let isValidInput = Object.values(inputs).every(input => input.value !== '');

        if (!isValidInput) {
            
            return;
        }

        const { expenseType, amount, date } = inputs;
        const li = createElement('li', previewList, '', ['expense-item']);
        const article = createElement('article', li);
        const foodTypeP = createElement('p', article, `Type: ${expenseType.value}`);
        const amountP = createElement('p', article, `Amount: ${Number(amount.value)}$`);
        const dateP = createElement('p', article, `Date: ${date.value}`);

        const buttons = createElement('div', li, '', ['buttons']);
        const editBtn = createElement('button', buttons, 'edit', ['btn', 'edit']);
        editBtn.addEventListener('click', editBtnHandler);

        const okBtn = createElement('button', buttons, 'ok', ['btn', 'ok']);
        okBtn.addEventListener('click', okBtnHandler);
        addBtn.disabled = true;

        for (const key in inputs) {
            currentInputsStatus[key] = inputs[key].value;
        }

        Object.values(inputs).forEach((input) => input.value = '');

    }

    function okBtnHandler(event) {
        const liReference = event.currentTarget.parentNode.parentNode;
        expensesList.appendChild(liReference);
        const divBtn = liReference.querySelector('.buttons');
        divBtn.remove();
        addBtn.disabled = false;
    }

    function editBtnHandler() {
        for (const key in currentInputsStatus) {
            inputs[key].value = currentInputsStatus[key];
        }
        previewList.innerHTML = '';
        addBtn.disabled = false;
    }

    function createElement(type, parentNode, content, classes, id, atributes, innerHtml) {

        const htmlElement = document.createElement(type);

        if (content && innerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input' || type !== 'textarea') {
                htmlElement.textContent = content;
            }

            if (content && type === 'input' || type === 'textarea') {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        if (atributes) {

            for (const key in atributes) {
                // htmlElement[key] = atributes[key];
                htmlElement.setAttribute(key, atributes[key]);
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}
