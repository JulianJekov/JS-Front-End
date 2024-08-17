
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const inputElement = document.getElementById('title');
    const loadAllBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    loadAllBtn.addEventListener('click', loadAllBtnHandler);
    addBtn.addEventListener('click', addBtnHandler);

    async function loadAllBtnHandler(event) {
        try {
            if (event) {
                event.preventDefault();
            }
            todoList.innerHTML = '';
            const response = await fetch(BASE_URL)
            const data = await response.json();

            for (const item of Object.values(data)) {

                const li = createElement('li', todoList, '', null, item._id);
                const span = createElement('span', li, `${item.name}`);
                const removeBtn = createElement('button', li, 'Remove');
                removeBtn.addEventListener('click', removeBtnHandler);
                const editBtn = createElement('button', li, 'Edit');
                editBtn.addEventListener('click', editBtnHandler);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function addBtnHandler(event) {
        try {
            event.preventDefault();
            const name = inputElement.value;
            if (name == '') {
                return;
            }
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ name })
            };
            await fetch(BASE_URL, httpHeaders);
            inputElement.value = '';
            loadAllBtnHandler();

        } catch (error) {
            console.error(error);
        }

    }

    async function removeBtnHandler(event) {
        try {
            const parentLi = event.currentTarget.parentNode;
            const id = parentLi.id;

            const httpHeaders = {
                method: 'DELETE',
            }

            await fetch(BASE_URL + id, httpHeaders);
            loadAllBtnHandler();
        } catch (error) {
            console.error(error);
        }

    }

    async function editBtnHandler(event) {

        const parentLi = event.currentTarget.parentNode;
        const [span, _removeBtn, editBtn] = Array.from(parentLi.children);
        const input = document.createElement('input');
        input.value = span.textContent;
        parentLi.prepend(input);
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        parentLi.appendChild(submitBtn);
        span.remove();
        editBtn.remove();
        submitBtn.addEventListener('click', async () => {
            try {
                const httpHeaders = {
                    method: 'PATCH',
                    body: JSON.stringify({ name: input.value })
                }
                await fetch(BASE_URL + parentLi.id, httpHeaders);
                loadAllBtnHandler();
            } catch (error) {
                console.error(error);
            }
            
        });
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

attachEvents();
