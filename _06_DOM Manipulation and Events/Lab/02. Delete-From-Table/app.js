function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const rows = document.querySelectorAll('tbody tr');
    let rowsArr = Array.from(rows);

    let isDeleted = false;

    for (const row of rowsArr) {
        const currentRowText = row.children[1].textContent;
        if(input.value === currentRowText) {
            row.remove();
            isDeleted = true;
        }
    }

   const result = document.getElementById('result').textContent = isDeleted ? 'Deleted.' : 'Not found.';
}

// const inputEmail = document.querySelector('input[name="email"]').value;
// const tableRows = document.querySelectorAll('#customers tbody tr');

// const tableRowsArr = Array.from(tableRows);

// const found = tableRowsArr.find(row => row.children[1].textContent == inputEmail);
// const result = document.getElementById('result');

// if (found) {
//     found.remove();
//     result.textContent = 'Deleted.'
// } else {
//     result.textContent = 'Not found.';
// }
