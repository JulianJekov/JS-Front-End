function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', daysConvert);

    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', hoursConvert);

    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', minutesConvert);

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', secondsConvert);

    function daysConvert() {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function hoursConvert() {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function minutesConvert() {
        hoursInput.value = minutesInput.value / 60
        daysInput.value = hoursInput.value / 24;
        secondsInput.value = minutesInput.value * 60;
    }

    function secondsConvert() {
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60
        daysInput.value = hoursInput.value / 24;
    }

}