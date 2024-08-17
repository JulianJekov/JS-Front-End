function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const phonebook = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    loadBtn.addEventListener('click', loadBtnHandler);
    createBtn.addEventListener('click', createBtnHandler)

    function createBtnHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        }
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadBtnHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => console.error(err));

    }

    async function loadBtnHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            const phonebookData = await phoneBookRes.json();
            const values = Object.values(phonebookData);
            phonebook.innerHTML = '';
            for (const { phone, person, _id } of values) {
                const li = document.createElement('li');

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete'
                deleteBtn.addEventListener('click', deleteBtnHandler);
                deleteBtn.id = _id;

                li.textContent = `${person}: ${phone}`;
                li.appendChild(deleteBtn);
                phonebook.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteBtnHandler(e) {
        const id = e.currentTarget.id;
        const httpHeaders = {
            method: 'Delete'
        };
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(loadBtnHandler)
            .catch((err) => {
                console.error(err);
            })
    }
}

attachEvents();