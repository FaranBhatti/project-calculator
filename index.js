/**
 * Function that sums two numbers 'a' and 'b' together
 * @param {int} a - the first number
 * @param {int} b - the second number
 * @returns - the sum of two numbers
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts 'b' amount from the initial 'a' amount
 * @param {int} a - the first number to subtract from
 * @param {int} b - the amount to subtract
 * @returns - a number which is the result of subtracting b from a
 */
function substract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers
 * @param {int} a - first number
 * @param {int} b - second number
 * @returns product of two numbers
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides 'a' number from 'b'
 * @param {int} a - number being divided
 * @param {int} b - number to divide by
 * @returns a number which is the result of a being divided by b
 */
function divide(a, b) {
    return a / b;
}

/**
 * Function that returns the result of the chosen arithmetic operation
 * @param {int} firstNum - first number
 * @param {int} secondNum - second number
 * @param {string} operator - represents the arithmetic operation to perform
 * @returns result of arithmetic operation performed
 */
function operate(firstNum, secondNum, operator) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return substract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            return console.log("Error in operate function, invalid operate variable");            
    }
}

/**
 * Populates the display with whatever button is pressed
 */
function populateDisplay(button) {
    let display = document.querySelector(".screen");

    switch(button) {
        case '1':
            return display.textContent += '1';
        case '2':
            return display.textContent += '2';
        case '3':
            return display.textContent += '3';
        case '4':
            return display.textContent += '4';
        case '5':
            return display.textContent += '5';
        case '6':
            return display.textContent += '6';
        case '7':
            return display.textContent += '7';
        case '8':
            return display.textContent += '8';
        case '9':
            return display.textContent += '9';
        case '0':
            return display.textContent += '0';
        case '00':
            return display.textContent += '00';
        case 'AC':
            return display.textContent = '';
    }
}

// Variables to utilize in operating the calcuator
let firstNum = '';
let secondNum = '';
let displayVal = '';
let operator = '';

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.className) {
            case 'clear':
                populateDisplay('AC');
                displayVal = '';
                break;
            case 'percent':
                console.log('you hit the percent key');
                break;
            case 'divide':
                console.log('you hit the divide key');
                break;
            case 'delete':
                console.log('you hit the delete key');
                break;
            case 'seven':
                populateDisplay('7');
                displayVal += '7';
                break;
            case 'eight':
                populateDisplay('8');
                displayVal += '8';
                break;
            case 'nine':
                populateDisplay('9');
                displayVal += '9';
                break;
            case 'multiply':
                console.log('you hit the multiply key');
                break;
            case 'four':
                populateDisplay('4');
                displayVal += '4';
                break;
            case 'five':
                populateDisplay('5');
                displayVal += '5';
                break;
            case 'six':
                populateDisplay('6');
                displayVal += '6';
                break;
            case 'subtract':
                console.log('you hit the subtract key');
                break;
            case 'one':
                populateDisplay('1');
                displayVal += '1';
                break;
            case 'two':
                populateDisplay('2');
                displayVal += '2';
                break;
            case 'three':
                populateDisplay('3');
                displayVal += '3';
                break;
            case 'add':
                console.log('you hit the add key');
                break;
            case 'zero':
                populateDisplay('0');
                displayVal += '0';
                break;
            case 'double-zero':
                populateDisplay('00');
                displayVal += '00';
                break;
            case 'decimal':
                console.log('you hit the decimal key');
                break;
            case 'calculate':
                console.log('you hit the calculate key');
                break;
            default:
                console.log('woops you clicked something not in the selection...' + e.target.className);
        }
    })
})




// </div>
// <div class="row6">
// <button class="zero">0</button>
// <button class="double-zero">00</button>
// <button class="decimal">.</button>
// <button class="calculate">=</button>