async function attachEvents() {
    const firstNameInput = document.querySelector('input[name="firstName"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
    const gradeInput = document.querySelector('input[name="grade"]');
    const tableBody = document.querySelector('#results tbody')
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students/';

    const submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', submitBtnHandel);

    const res = await fetch(BASE_URL)
    const students = await res.json();
    
    createStudent();


    function submitBtnHandel() {
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let facultyNumber = facultyNumberInput.value;
        let grade = gradeInput.value;

        const isValidInputs = firstName !== '' && lastName !== ''
            && facultyNumber !== '' && grade !== '';

        if (isValidInputs) {
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
            }
            fetch(BASE_URL, httpHeaders)
                .then((res) => res.json())
                .then(() => {
                    tableBody.innerHTML = '';
                    createStudent();
                    firstNameInput.value = '';
                    lastNameInput.value = '';
                    facultyNumberInput.value = '';
                    gradeInput.value = '';
                })
        }
    }
    function createStudent() {
        for (const key in students) {
            const tr = document.createElement('tr');
            const value = students[key];
            const firstNameTd = document.createElement('td');
            firstNameTd.textContent = value.firstName;

            const lastNameTd = document.createElement('td');
            lastNameTd.textContent = value.lastName;

            const facultyTd = document.createElement('td');
            facultyTd.textContent = value.facultyNumber;

            const gradeTd = document.createElement('td');
            gradeTd.textContent = value.grade;

            tr.appendChild(firstNameTd);
            tr.appendChild(lastNameTd);
            tr.appendChild(facultyTd);
            tr.appendChild(gradeTd);

            tableBody.appendChild(tr);
        }
    }

}

attachEvents();