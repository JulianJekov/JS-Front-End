function create(words) {
   let wordsArr = Array.from(words);
   let divContent = document.getElementById('content');
   for (const word of wordsArr) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', () => {
         p.style.display = '';
      })
      divContent.appendChild(div);
   }
}