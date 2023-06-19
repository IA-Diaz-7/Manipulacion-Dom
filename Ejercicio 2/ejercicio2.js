const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const resultElement = document.getElementById('result');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

addBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const result = num1 + num2;
    resultElement.value = result;
});

subtractBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const result = num1 - num2;
    resultElement.value = result;
});

multiplyBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const result = num1 * num2;
    resultElement.value = result;
});

divideBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    if (num2 === 0) {
    resultElement.value = 'Error: No se puede dividir por 0';
} else {
    const result = num1 / num2;
    resultElement.value = result;
    }
});