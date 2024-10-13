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
        case '.':
            return display.textContent += '.';
        case 'AC':
            return display.textContent = '';
        case 'delete':
            newText = display.textContent.slice(0, -1);
            return display.textContent = newText;
        case '+':
            return display.textContent += '+';
        case '-':
            return display.textContent += '-';
        case '*':
            return display.textContent += 'x';
        case '/':
            return display.textContent += '÷'
        case 'calculate':
            return display.textContent = parseFloat(operate(Math.round(Number(firstNum)), Math.round(Number(displayVal)), operator));
    }
}

function clearVars() {
    firstNum = '';
    operator = '';
    displayVal = '';
    result = '';

    processSecondNum = false;
    solutionDisplayed = false;
}

function solutionDisplayedAndThenButtonClicked() {
    let display = document.querySelector(".screen");

    clearVars();
    populateDisplay('AC');
    display.textContent = '';
}

// Variables to utilize in operating the calcuator
let firstNum = '';
let operator = '';
let result = '';

let displayVal = '';
let processSecondNum = false;
let solutionDisplayed = false;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.className) {
            case 'clear':
                populateDisplay('AC');
                clearVars();
                break;
            case 'divide':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                if (processSecondNum == false) {
                    operator = '/';
                    firstNum = displayVal;
                    displayVal = '';
                    processSecondNum = true;
                    populateDisplay('/');
                }
                break;
            case 'delete':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('delete');
                displayVal = displayVal.slice(0, -1);
                break;
            case 'seven':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('7');
                displayVal += '7';
                break;
            case 'eight':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('8');
                displayVal += '8';
                break;
            case 'nine':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('9');
                displayVal += '9';
                break;
            case 'multiply':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                if (processSecondNum == false) {
                    operator = '*';
                    firstNum = displayVal;
                    displayVal = '';
                    processSecondNum = true;
                    populateDisplay('*');
                }
                break;
            case 'four':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('4');
                displayVal += '4';
                break;
            case 'five':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('5');
                displayVal += '5';
                break;
            case 'six':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('6');
                displayVal += '6';
                break;
            case 'subtract':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                if (processSecondNum == false) {
                    operator = '-';
                    firstNum = displayVal;
                    displayVal = '';
                    processSecondNum = true;
                    populateDisplay('-');
                }
            case 'one':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('1');
                displayVal += '1';
                break;
            case 'two':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('2');
                displayVal += '2';
                break;
            case 'three':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('3');
                displayVal += '3';
                break;
            case 'add':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                if (processSecondNum == false) {
                    operator = '+';
                    firstNum = Number(displayVal);
                    displayVal = '';
                    console.log('firstNum variable is currently: ' + firstNum);
                    processSecondNum = true;
                    populateDisplay('+');
                }
                break;
            case 'zero':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('0');
                displayVal += '0';
                break;
            case 'decimal':
                if(solutionDisplayed) {
                    solutionDisplayedAndThenButtonClicked();
                }
                populateDisplay('.');
                displayVal += '.';
                console.log('you hit the decimal key');
                break;
            case 'calculate':
                populateDisplay('calculate');
                processSecondNum = false;
                solutionDisplayed = true;
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