let expression = document.getElementById("expression");
let result = document.getElementById("result");
let memory = 0;

function appendToDisplay(value) {
    expression.value += value;
}

function clearDisplay() {
    expression.value = "";
    result.value = "";
}

function deleteLast() {
    expression.value = expression.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(expression.value);
    } catch (error) {
        result.value = "Error";
    }
}

function calculateFactorial() {
    let num = parseInt(expression.value);
    if (isNaN(num) || num < 0) {
        result.value = "Error";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    result.value = factorial;
}

function memoryAdd() {
    memory += parseFloat(result.value || 0);
}

function memorySubtract() {
    memory -= parseFloat(result.value || 0);
}

function memoryRecall() {
    expression.value = memory.toString();
}

function memoryClear() {
    memory = 0;
}
