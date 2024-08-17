function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let currentId = '';
    const mealsList = document.getElementById('list');

    const loadBtn = document.getElementById('load-meals');
    loadBtn.addEventListener('click', loadBtnHandler);

    const addBtn = document.getElementById('add-meal');
    addBtn.addEventListener('click', addBtnHandler);

    const editMelaBtn = document.getElementById('edit-meal');
    editMelaBtn.addEventListener('click', editMelaBtnHandler);


    const inputs = {
        food: document.getElementById('food'),
        time: document.getElementById('time'),
        calories: document.getElementById('calories')
    }

    async function loadBtnHandler() {
        mealsList.innerHTML = '';
        const response = await fetch(BASE_URL);
        const data = await response.json();

        Object.values(data).forEach((food) => {
            const divMeal = createElement('div', mealsList, '', ['meal'], food._id);
            const foodH2 = createElement('h2', divMeal, food.food);
            const timeH3 = createElement('h3', divMeal, food.time);
            const caloriesH3 = createElement('h3', divMeal, food.calories);
            const buttons = createElement('div', divMeal, '', null, 'meal-buttons');
            const changeBtn = createElement('button', buttons, 'Change', ['change-meal']);
            changeBtn.addEventListener('click', changeBtnHandler);
            const deleteBtn = createElement('button', buttons, 'Delete', ['delete-meal']);
            deleteBtn.addEventListener('click', deleteBtnHandler);

        })
    }

    function changeBtnHandler(event) {
        const parentMealDiv = event.currentTarget.parentNode.parentNode;
        const [food, time, calories] = Array.from(parentMealDiv.children);
        inputs.food.value = food.textContent;
        inputs.time.value = time.textContent;
        inputs.calories.value = calories.textContent;
        currentId = parentMealDiv.id;
        parentMealDiv.style.display = 'none';
        addBtn.disabled = true;
        editMelaBtn.disabled = false;
    }

    async function addBtnHandler() {

        const { food, time, calories } = inputs;

        // const isValidInput = Object.values(inputs).every((input) => input.value !== '');
        // if(!isValidInput) {
        //     return;
        // }

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ food: food.value, time: time.value, calories: calories.value })
        }

        await fetch(BASE_URL, httpHeaders);
        loadBtnHandler();
        clearInputs();

    }

 

    async function editMelaBtnHandler() {

        const { food, time, calories } = inputs;

        const httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({ food: food.value, time: time.value, calories: calories.value, _id: currentId })
        }

        await fetch(BASE_URL + currentId, httpHeaders);
        loadBtnHandler();
        addBtn.disabled = false;
        editMelaBtn.disabled = true;
        clearInputs();

    }

    async function deleteBtnHandler(event) {
        const parentMealDiv = event.currentTarget.parentNode.parentNode;
        const id = parentMealDiv.id;

        const httpHeaders = {
            method: 'DELETE',
        }

        await fetch(BASE_URL + id, httpHeaders);
        loadBtnHandler();
    }

    function clearInputs() {
        Object.values(inputs).forEach((input) => input.value = '');
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

solve()