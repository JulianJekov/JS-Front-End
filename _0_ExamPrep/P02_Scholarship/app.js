window.addEventListener("load", solve);

function solve() {

    const inputDOMSelectors = {
        student: document.getElementById('student'),
        university: document.getElementById('university'),
        score: document.getElementById('score')
    }

    let currentInputStatus = {
        student: null,
        university: null,
        score: null
    }

    const previewList = document.getElementById('preview-list');
    const candidatesList = document.getElementById('candidates-list');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', nextBtnHandler)

    function nextBtnHandler() {
        const { student, university, score } = inputDOMSelectors;
        //validate inputs not empty string
        let isValidInput = student.value !== '' && university.value !== '' && score.value !== '';
        if (!isValidInput) {
            return;
        }

        nextBtn.disabled = true;
        //create elements for prewive list
        const li = createElement('li', previewList, '', ['application']);
        const article = createElement('article', li);
        const h4 = createElement('h4', article, student.value);
        const universityP = createElement('p', article, `University: ${university.value}`);
        const scoreP = createElement('p', article, `Score: ${score.value}`);
        const editBtn = createElement('button', li, 'edit', ['action-btn', 'edit']);
        editBtn.addEventListener('click', editBtnHandler);
        const applyBtn = createElement('button', li, 'apply', ['action-btn', 'apply']);
        applyBtn.addEventListener('click', applyBtnHandler)

        //save the current input
        for (const key in inputDOMSelectors) {
            currentInputStatus[key] = inputDOMSelectors[key].value;
        }
        //clear input values
        for (const input of Object.values(inputDOMSelectors)) {
            input.value = '';
        }
    }

    function editBtnHandler() {
        previewList.innerHTML = '';
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = currentInputStatus[key];
        }
        nextBtn.disabled = false;
    }

    function applyBtnHandler(event) {
        const parentLi = event.currentTarget.parentNode;
        candidatesList.appendChild(parentLi);
        const buttons = Array.from(candidatesList.querySelectorAll('button'));
        buttons.forEach((button) => button.remove());
        nextBtn.disabled = false;
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
