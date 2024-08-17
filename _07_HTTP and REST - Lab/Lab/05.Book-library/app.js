function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/'

    const loadAllBooksBtn = document.getElementById('loadBooks');
    const tableBody = document.querySelector('tbody');

    const titleInput = document.querySelector('input[name="title"]');
    const authorInput = document.querySelector('input[name="author"]');
    const submitBtn = document.querySelector('#form button');

    const formHeader = document.querySelector('#form h3');
    let editBookId = null;

    loadAllBooksBtn.addEventListener('click', loadAllBooks);
    submitBtn.addEventListener('click', submitBtnHandler);

    async function loadAllBooks() {
        tableBody.innerHTML = '';
        const booksResponse = await fetch(BASE_URL)
        const booksData = await booksResponse.json();
        createTable(booksData);
    }

    async function submitBtnHandler() {
        const title = titleInput.value;
        const author = authorInput.value;

        const isValidInput = title != '' && author != '';

        if(isValidInput) {
            let url = BASE_URL;

            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({title, author})
            }

            if(formHeader.textContent === 'Edit FORM') {
                httpHeaders.method = 'PUT';
                url += editBookId;
            }

            const createBookResponse = await fetch(url, httpHeaders)
            const bookData = await createBookResponse.json();
            loadAllBooks();
            if(formHeader.textContent === 'Edit FORM') {
                formHeader.textContent = 'FORM';
                submitBtn.textContent = 'Submit'
            }
            titleInput.value = '';
            authorInput.value = '';
        }
    }

    function createTable(booksData) {
        for (const bookId in booksData) {
            const title = booksData[bookId].title;
            const author = booksData[bookId].author;

            const tr = document.createElement('tr');

            const titleTd = document.createElement('td');
            titleTd.textContent = title;

            const authorTd = document.createElement('td');
            authorTd.textContent = author;

            const buttonsTd = document.createElement('td');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                titleInput.value = title;
                authorInput.value = author;
                formHeader.textContent = 'Edit FORM';
                submitBtn.textContent = 'Save';
                editBookId = bookId;
            });
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', async () => {
                const httpHeaders = {
                    method: 'DELETE'
                };
                await fetch(BASE_URL + bookId, httpHeaders);
                loadAllBooks();
            });

            buttonsTd.appendChild(editBtn);
            buttonsTd.appendChild(deleteBtn);

            tr.appendChild(titleTd);
            tr.appendChild(authorTd);
            tr.appendChild(buttonsTd);

            tableBody.appendChild(tr);
        }
    }
}

attachEvents();