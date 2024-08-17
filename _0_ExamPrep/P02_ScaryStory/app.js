window.addEventListener("load", solve);

function solve() {

    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        title: document.getElementById('story-title'),
        genre: document.getElementById('genre'),
        story: document.getElementById('story')
    }

    const currentStory = {
        firstName: null,
        lastName: null,
        age: null,
        title: null,
        genre: null,
        story: null
    }

    const otherDOMSelectors = {
        publishBtn: document.getElementById('form-btn'),
        previewList: document.getElementById('preview-list'),
        main: document.getElementById('main')
    }

    otherDOMSelectors.publishBtn.addEventListener('click', publishBtnHandler);

    function publishBtnHandler() {
        let isValidInput = Object.values(inputDOMSelectors).every(input => input.value !== '');

        if (!isValidInput) {
            return;
        }
        const { firstName, lastName, age, title, genre, story } = inputDOMSelectors;

        const li = createElement('li', otherDOMSelectors.previewList, '', ['story-info']);
        const article = createElement('article', li);
        const namesHeader = createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
        const ageP = createElement('p', article, `Age: ${age.value}`);
        const titleP = createElement('p', article, `Title: ${title.value}`);
        const genreP = createElement('p', article, `Genre: ${genre.value}`);
        const storyP = createElement('p', article, `${story.value}`);
        // story or Story ?
        const saveBtn = createElement('button', li, 'Save Story', ['save-btn']);
        saveBtn.addEventListener('click', saveBtnHandler);

        const editBtn = createElement('button', li, 'Edit Story', ['edit-btn']);
        editBtn.addEventListener('click', editBtnHandler);

        const deleteBtn = createElement('button', li, 'Delete Story', ['delete-btn']);
        deleteBtn.addEventListener('click', deleteBtnHandler);

        otherDOMSelectors.publishBtn.disabled = true;

        for (const key in inputDOMSelectors) {
            currentStory[key] = inputDOMSelectors[key].value;
        }
        console.log(currentStory);

        Object.values(inputDOMSelectors).forEach((input) => input.value = '');
    }

    function editBtnHandler() {
        otherDOMSelectors.publishBtn.disabled = false;
        for (const key in currentStory) {
            inputDOMSelectors[key].value = currentStory[key];
        }
        otherDOMSelectors.previewList.innerHTML = '';
        createElement('h3', otherDOMSelectors.previewList, 'Preview');

    }

    function saveBtnHandler() {
        otherDOMSelectors.main.innerHTML = '';
        createElement('h1', otherDOMSelectors.main, 'Your scary story is saved!');
    }

    function deleteBtnHandler() {
        otherDOMSelectors.publishBtn.disabled = false;
        const li = otherDOMSelectors.previewList.querySelector('li');
        li.remove();
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
