function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const LOCATIONS_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const TODAY_URL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const THREE_DAYS_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const forecastsContainer = document.getElementById('forecast');

    const weatherSymbols = {
        Sunny: '☀',
        'Partly sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°',

    }
    submitBtn.addEventListener('click', submitBtnHandler);

    function submitBtnHandler(event) {
        event.preventDefault();
        const degree = weatherSymbols.Degrees;
        const inputElement = document.getElementById('location');

        fetch(LOCATIONS_URL)
            .then((res) => res.json())
            .then((data) => {
                const cityIndex = data.findIndex(el => el.name === inputElement.value);
                forecastsContainer.style.display = 'block';

                if (cityIndex === -1) {
                    throw new Error();
                }

                let code = data[cityIndex].code;

                fetch(`${TODAY_URL}${code}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const symbol = weatherSymbols[data.forecast.condition];
                        const currentCondition = document.getElementById('current');
                        const forecastsDiv = document.createElement('div');
                        forecastsDiv.className = 'forecasts';

                        const symbolSpan = document.createElement('span');
                        symbolSpan.classList = 'condition symbol';
                        symbolSpan.textContent = symbol;

                        const conditionSpan = document.createElement('span');
                        conditionSpan.className = 'condition';


                        const citySpan = document.createElement('span');
                        citySpan.className = 'forecast-data';
                        citySpan.textContent = data.name;

                        const temperatureSpan = document.createElement('span');
                        temperatureSpan.className = 'forecast-data';
                        temperatureSpan.textContent = `${data.forecast.low}${degree}/${data.forecast.high}${degree}`;

                        const wetherSpan = document.createElement('span');
                        wetherSpan.className = 'forecast-data';
                        wetherSpan.textContent = data.forecast.condition;

                        conditionSpan.appendChild(citySpan);
                        conditionSpan.appendChild(temperatureSpan);
                        conditionSpan.appendChild(wetherSpan);

                        forecastsDiv.appendChild(symbolSpan);
                        forecastsDiv.appendChild(conditionSpan);

                        currentCondition.appendChild(forecastsDiv)
                    });


                fetch(`${THREE_DAYS_URL}${code}`)
                    .then((res) => res.json())
                    .then((data) => {

                        const upcomingDiv = document.getElementById('upcoming');
                        const forecastInfoDiv = document.createElement('div');
                        forecastInfoDiv.className = 'forecast-info';

                        const forecasts = data.forecast;

                        for (const line of forecasts) {
                            const symbol = weatherSymbols[line.condition];

                            const upcomingSpan = document.createElement('span');
                            upcomingSpan.className = 'upcoming';

                            const symbolSpan = document.createElement('span');
                            symbolSpan.className = 'symbol';
                            symbolSpan.textContent = symbol;

                            const wetherSpan = document.createElement('span');
                            wetherSpan.className = 'forecast-data';
                            wetherSpan.textContent = line.condition;

                            const temperatureSpan = document.createElement('span');
                            temperatureSpan.className = 'forecast-data';
                            temperatureSpan.textContent = `${line.low}${degree}/${line.high}${degree}`;

                            upcomingSpan.appendChild(symbolSpan);
                            upcomingSpan.appendChild(temperatureSpan);
                            upcomingSpan.appendChild(wetherSpan);

                            forecastInfoDiv.appendChild(upcomingSpan);
                        }
                        upcomingDiv.appendChild(forecastInfoDiv)

                    });

            })
            .catch(() => (forecastsContainer.textContent = 'Error'))
    }
}

attachEvents();