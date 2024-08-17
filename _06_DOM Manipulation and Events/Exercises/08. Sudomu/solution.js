function solve() {
    let buttons = document.querySelectorAll('#exercise tfoot button');
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];
    let checkParagraph = document.querySelector('#check p');
    let table = document.querySelector('#exercise table');
    checkBtn.addEventListener('click', checkBoard);
    let board = [];
    let rows = Array.from(document.querySelectorAll('#exercise tbody tr'));

    function checkBoard() {
        getInputValues();
        let isValid = isValidSudoku(board);

        table.style.border = isValid ? '2px solid green' : '2px solid red';
        checkParagraph.textContent = isValid
            ? 'You solve it! Congratulations!'
            : 'NOP! You are not done yet...';
        checkParagraph.style.color = isValid ? 'green' : 'red';
    }

    function getInputValues() {
        for (const row of rows) {
            let rowData = [];
            let inputs = Array.from(row.querySelectorAll('input'));
            for (const input of inputs) {
                rowData.push(Number(input.value));
            }
            board.push(rowData);
        }
    }

    function isValidSudoku(board) {
        for (let row = 0; row < board.length; row++) {
            let rowObj = { 1: 0, 2: 0, 3: 0 };
            let colObj = { 1: 0, 2: 0, 3: 0 };
            for (let col = 0; col < board[row].length; col++) {
                let currRowCel = board[row][col];
                let currColCe = board[col][row];
                rowObj[currRowCel]++;
                colObj[currColCe]++;
            }
            let rowValues = Object.values(rowObj);
            let colValues = Object.values(colObj);

            if (rowValues.length > board.length || rowValues.some(x => x !== 1) ||
                colValues.length > board.length || colValues.some(x => x !== 1)) {
                return false;
            }
        }
        return true;
    }

    clearBtn.addEventListener('click', clear);

    function clear() {
        checkParagraph.textContent = '';
        table.style.border = '';
        for (const row of rows) {
            let inputs = Array.from(row.querySelectorAll('input'));
            for (const input of inputs) {
                input.value = '';
            }
        }
    }
}