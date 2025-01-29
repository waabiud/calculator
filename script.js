const screen = document.querySelector('.calculator-screen');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateScreen(currentInput);
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function clearScreen() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateScreen(currentInput);
}

function calculate() {
    if (currentInput === '' || operator === '') return;
    secondOperand = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    updateScreen(currentInput);
    operator = '';
    firstOperand = '';
    secondOperand = '';
}

function updateScreen(value) {
    screen.value = value;
}
