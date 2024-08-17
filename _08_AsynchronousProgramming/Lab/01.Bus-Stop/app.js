function getInfo() {
    const inputElement = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopId = inputElement.value;

    fetch(`${BASE_URL}/${stopId}`)
        .then((res) => res.json())
        .then((busInfo) => {
            busesList.innerHTML = '';
            
            const name = busInfo.name;
            const buses = busInfo.buses;

            stopName.textContent = name;

            for (const key in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
                console.log(li);
                busesList.appendChild(li);
            }
        })
        .catch((err) => {
            stopName.textContent = 'Error'
        })
}