// Variables to utilize in operating the calcuator
let firstNum = '';
let secondNum = '';
let operator = '';

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