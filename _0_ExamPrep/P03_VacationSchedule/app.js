function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const vacantionList = document.getElementById('list');
    let changedDivId = '';
    const inputs = {
        name: document.getElementById('name'),
        days: document.getElementById('num-days'),
        date: document.getElementById('from-date')
    }
    const loadBtn = document.getElementById('load-vacations');
    loadBtn.addEventListener('click', loadBtnHandler);

    async function loadBtnHandler() {
        try {
            vacantionList.innerHTML = '';
            const response = await fetch(BASE_URL);
            const data = await response.json();
            Object.values(data).forEach((element) => {
                const { name, days, date, _id } = element;
                const container = createElement('div', vacantionList, '', ['container'], _id);
                const nameHeader = createElement('h2', container, name);
                const dateHeader = createElement('h3', container, date);
                const daysHeader = createElement('h3', container, days);
                const changeBtn = createElement('button', container, 'Change', ['change-btn']);
                changeBtn.addEventListener('click', changeBtnHandler);
                const doneBtn = createElement('button', container, 'Done', ['done-btn']);
                doneBtn.addEventListener('click', async () => {
                    try {
                        const httpHeaders = {
                            method: 'DELETE'
                        }
                        await fetch(BASE_URL + _id, httpHeaders);
                        loadBtnHandler();
                    } catch (error) {
                        console.error(error);
                    }
                });
            })
        } catch (error) {
            console.error(error);
        }
    };
    const addVacantionBtn = document.getElementById('add-vacation');
    addVacantionBtn.addEventListener('click', addVacantionBtnHandler)
    const editVacantionBtn = document.getElementById('edit-vacation');
    editVacantionBtn.addEventListener('click', editVacantionBtnHandler);


    async function addVacantionBtnHandler(event) {
        event.preventDefault();
        try {
            const { name, days, date } = inputs;
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ name: name.value, days: days.value, date: date.value })
            }
            await fetch(BASE_URL, httpHeaders)
            loadBtnHandler();
            for (const key in inputs) {
                inputs[key].value = '';
            }
        } catch (error) {
            console.error(error);
        }
    };
    async function editVacantionBtnHandler(event) {
        event.preventDefault();

        try {
            const { name, days, date } = inputs;
            const httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({ name: name.value, days: days.value, date: date.value, _id: changedDivId })
            }
            const response = await fetch(BASE_URL + changedDivId, httpHeaders)
            const data = await response.json();
            console.log(data);
            loadBtnHandler()
            addVacantionBtn.disabled = false;
            editVacantionBtn.disabled = true;
            for (const key in inputs) {
                inputs[key].value = '';
            }

        } catch (error) {
            console.error(error);
        }
    };
    async function changeBtnHandler(event) {
        const parentDiv = event.currentTarget.parentNode;
        const [name, date, days] = Array.from(parentDiv.children);
        parentDiv.style.display = 'none';
        inputs.name.value = name.textContent;
        inputs.days.value = days.textContent;
        inputs.date.value = date.textContent;
        addVacantionBtn.disabled = true;
        editVacantionBtn.disabled = false;
        changedDivId = parentDiv.id;
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




solve();