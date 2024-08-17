function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    gradient.addEventListener('mousemove', gradientMouseOver)
    gradient.addEventListener('mouseout', gradientOut)

    function gradientOut() {
       
    }
    
    function gradientMouseOver(e) {
        let x = Number(e.offsetX / e.target.clientWidth);
        let percent = Math.trunc(x * 100);
        result.textContent = percent + '%'
    }

}

// const gradient = document.getElementById('gradient');
// gradient.addEventListener('mousemove', gradientMove);
// gradient.addEventListener('mouseout', gradientOut);
// // const width = event.target.getElementById('gradient').offsetWidth;
// function gradientMove(event) {
//     const result = document.getElementById('result');
//     const x = event.offsetX / event.target.clientWidth ;
//     const percent = Math.trunc(x * 100);
//     result.textContent = percent + '%';
// }

// function gradientOut(event) {
//     result.textContent = '';
// }