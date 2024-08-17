function coursePlanner() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const loadCourseBtn = document.getElementById('load-course');
    loadCourseBtn.addEventListener('click', loadCoursesHandler);
    const coursesList = document.getElementById('list');

    const inputs = {
        titleInput: document.getElementById('course-name'),
        typeInput: document.getElementById('course-type'),
        descriptionTextarea: document.getElementById('description'),
        teacherInput: document.getElementById('teacher-name')
    }

    const addCourseBtn = document.getElementById('add-course');
    addCourseBtn.addEventListener('click', addCourseHandler);

    const editCoursBtn = document.getElementById('edit-course');
    editCoursBtn.addEventListener('click', editCoursHandler);
    let currentEditCoursId = '';

    async function editCoursHandler(event) {
        event.preventDefault();
        
        try {
          const { title, type, description, teacher, currentEditCoursId } = getInputValues();

            const httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({ title, type, description, teacher, currentEditCoursId })
            }

            await fetch(BASE_URL + currentEditCoursId, httpHeaders);
            loadCoursesHandler();
            clearInputs(inputs);
            editCoursBtn.disabled = true;
            addCourseBtn.disabled = false;
        } catch (error) {
            console.error(error);
        }
    }

    async function loadCoursesHandler() {
        coursesList.innerHTML = '';
        try {
            const response = await fetch(BASE_URL);
            const coursesData = await response.json();

            for (const course of Object.values(coursesData)) {
                const [title, type, description, teacher, _id] = Object.values(course);
                const courseContainer = createElement('div', coursesList, '', ['container'], _id);
                const titleH2 = createElement('h2', courseContainer, title);
                const teacherH3 = createElement('h3', courseContainer, teacher);
                const typeH3 = createElement('h3', courseContainer, type);
                const descriptionH4 = createElement('h4', courseContainer, description);
                const editBtn = createElement('button', courseContainer, 'Edit Course', ['edit-btn']);
                editBtn.addEventListener('click', () => {
                    currentEditCoursId = courseContainer.id;
                    courseContainer.style.display = 'none';
                    for (const input in courseState) {
                        inputs[input].value = courseState[input];
                    }
                    addCourseBtn.disabled = true;
                    editCoursBtn.disabled = false;

                });

                const finishBtn = createElement('button', courseContainer, 'Finish Course', ['finish-btn']);
                finishBtn.addEventListener('click', async () => {
                    currentEditCoursId = courseContainer.id;
                    try {
                        const httpHeaders = {
                            method: 'DELETE'
                        }
                        const response = await fetch(BASE_URL + currentEditCoursId, httpHeaders);
                        loadCoursesHandler();

                    } catch (error) {
                        console.error(error)
                    }
                });

                const courseState = {
                    titleInput: titleH2.textContent,
                    typeInput: typeH3.textContent,
                    descriptionTextarea: descriptionH4.textContent,
                    teacherInput: teacherH3.textContent
                }
            }

        } catch (error) {
            console.error(error);
        }
    }

    async function addCourseHandler(event) {

        event.preventDefault();
        const { type, title, description, teacher } = getInputValues();

        let isValidType = type === 'Long' || type === 'Medium' || type === 'Short';

        if (!isValidType) {
            return;
        }

        try {
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ title, type, description, teacher })
            }
            const response = await fetch(BASE_URL, httpHeaders);
            loadCoursesHandler();
            clearInputs(inputs);

        } catch (error) {
            console.error(error);
        }
    }

    function getInputValues() {
        const title = inputs.titleInput.value;
        const type = inputs.typeInput.value;
        const description = inputs.descriptionTextarea.value;
        const teacher = inputs.teacherInput.value;
        return { type, title, description, teacher };
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

coursePlanner();

function clearInputs(inputs) {
    for (const key in inputs) {
        inputs[key].value = '';
    }
}
