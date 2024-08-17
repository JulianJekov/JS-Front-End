function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const infoElement = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let firstStop = 'depot';
    let nextStop = '';

    function depart() {
        
        fetch(`${BASE_URL}${firstStop}`)
            .then((res) => res.json())
            .then(({name, next}) => {
                infoElement.textContent = `Next Stop ${name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                firstStop = name;
                nextStop = next;
                
            })
            .catch(() => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                infoElement.textContent = 'Error'
            })
    }

    function arrive() {
                infoElement.textContent = `Arriving at ${firstStop}`;
                departBtn.disabled = false;
                arriveBtn.disabled = true;
                firstStop = nextStop;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();