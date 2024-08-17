function solve() {
  let input = document.querySelector('textarea[rows="5"]');
  let buttons = document.querySelectorAll('button');
  let generateBtn = buttons[0];
  let tableBody = document.querySelector('.table tbody');
  
  let inputArr = [];


  let totalPrice = 0;
  let decorationFactor = 0;
  let furnitureList = [];

  generateBtn.addEventListener('click', () => {
    parseInput(inputArr);
    createTableRows(inputArr);
  });
  
  let output = document.querySelector('textarea[rows="4"]');
  let buyBtn = buttons[1];
  
  buyBtn.addEventListener('click', () => {
    
    let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    for (const row of tableRows) {
      const checked = row.querySelectorAll('td input')[0]
      if(checked.checked) {
        let furniture = row.querySelectorAll('td')[1];
        let price = row.querySelectorAll('td')[2];
        let factor = row.querySelectorAll('td')[3];
        furnitureList.push(furniture.innerText);
        totalPrice += Number(price.innerText);
        decorationFactor += Number(factor.innerText);
      }
    }
    let avgFactor = decorationFactor / furnitureList.length;

    output.value += `Bought furniture: ${furnitureList.join(', ')}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${avgFactor}`;
    buyBtn.disabled = true;
  });

  function createTableRows(arr) {
    for (const line of arr) {
      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      img.src = line[1];
      tdImg.appendChild(img);

      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = line[0];
      tdName.appendChild(pName);

      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = line[2];
      tdPrice.appendChild(pPrice);

      let tdFactor = document.createElement('td');
      let pFactor = document.createElement('p');
      pFactor.textContent = line[3];
      tdFactor.appendChild(pFactor);

      let tdCheckBox = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      tdCheckBox.appendChild(checkBox);
      let tr = document.createElement('tr');
      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdFactor);
      tr.appendChild(tdCheckBox);

      tableBody.appendChild(tr);
    }
  }

  function parseInput(inputArr) {
    let inputObjects = JSON.parse(input.value);
    inputObjects.forEach(obj => {
      inputArr.push(Object.values(obj));
    });
  }
}