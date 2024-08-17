function generateReport() {

    const result = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const tRows = Array.from(document.querySelectorAll('tbody tr'));

    tRows.forEach(row => {
        const currentCheck = {};
        tData = Array.from(row.querySelectorAll('td'));
        tData.forEach((value, index) => {
            if (checks[index].checked) {
                currentCheck[checks[index].name] = value.textContent;
            }
        })
        result.push(currentCheck)
    });

    // let people = [];
    // let columnIndex = [];

    // let columns = document.querySelectorAll('thead tr th input');


    // for (let i = 0; i < columns.length; i++) {
    //     let checkedColumn = columns[i].checked;
    //     if (checkedColumn) {
    //         columnIndex.push(i);
    //     }
    // }

    // let columnTitle = document.querySelectorAll('thead tr')[0].getElementsByTagName('th');
    // let rowsCount = document.querySelectorAll('tbody tr').length;
    // debugger

    // for (let row = 0; row < rowsCount; row++) {
    //     let person = {};
    //     for (const index of columnIndex) {
    //         let key = columnTitle[index].textContent.toLocaleLowerCase().trim();
    //         let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[index].textContent;
    //         person[key] = value;
    //     }
    //     people.push(person);
    // }

    document.getElementById('output').value = JSON.stringify(people)
}