function sumTable() {
    const tableRows = document.querySelectorAll('table tr');
    let totalSum = 0;

    for (let i = 1; i < tableRows.length - 1; i++) { 
        const cells = tableRows[i].children;
        const cellPrice = Number(cells[1].textContent);
        totalSum += cellPrice;
    }

    document.getElementById('sum').textContent = totalSum;
}