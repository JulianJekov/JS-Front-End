function validate() {
    const input = document.getElementById('email');
    let regex = /^[\w]+@[\w]+\.[\w]{2,}$/;
    input.addEventListener('change', () => {
        input.value.match(regex) ? input.className = '' : input.className = 'error';
    });
}

// const input = document.getElementById('email');
// const regex = /^[\w]+@[\w]+\.[\w]{2,}$/;
// input.addEventListener('change', () => input.value.match(regex) ? input.className = '' : input.className = 'error'); 