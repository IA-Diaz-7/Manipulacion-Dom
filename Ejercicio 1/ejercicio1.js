const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const inputTimeElement = document.getElementById('inputTime');
const startTimerButton = document.getElementById('startTimer');

let count = 0;
let timerInterval;

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
});

startTimerButton.addEventListener('click', () => {
    const inputTime = parseInt(inputTimeElement.value);
    if (isNaN(inputTime) || inputTime <= 0) {
    alert('Por favor, ingrese un tiempo válido en segundos.');
    return;
}

let time = inputTime;

startTimerButton.disabled = true;
inputTimeElement.disabled = true;

timerInterval = setInterval(() => {
    time--;
    inputTimeElement.value = time;

    if (time === 0) {
        clearInterval(timerInterval);
        alert('¡Tiempo finalizado!');
        startTimerButton.disabled = false;
        inputTimeElement.disabled = false;
        inputTimeElement.value = '';
    }
}, 1000);
});