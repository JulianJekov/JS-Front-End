function search() {
   let listItems = document.querySelectorAll('li');
   let searching = document.getElementById('searchText').value;
   let count = 0;
   for (const town of listItems) {
      town.style.textDecoration = '';
      town.style.fontWeight = '';
      if(town.textContent.includes(searching)) {
         count++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      }
   }
   document.getElementById('result').textContent =
    `${count} matches found`;
}
