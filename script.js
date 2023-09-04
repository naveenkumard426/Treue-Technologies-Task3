let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').textContent = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').textContent = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').textContent = displayValue;
    }
}
